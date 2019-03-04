

//Normal logic for triggering modals doesn't work. Possibly an async function?
    //See: https://stackoverflow.com/questions/15473886/twitter-bootstrap-href-in-modal-not-working
    $("a.modalBtn").on("click", function () {
        let id = $(this).attr("data-target"); 
        $(id).modal();
        //we need to remove the "#"
        let aId = id.replace("#", "");

        //clear previously typed note values
        let nId = "#nb" +aId
        $(nId).empty();
        //now populate existing note info (if any)
        $.ajax({
            url: "/post/" +aId,
            type: "GET"
        })
        .then((data) => {
            //console.log(data);
        if (data.note) {
            // Place the body of the note in the body textarea
            $(nId).val(data.note.body);
            $(nId).attr({noteId: data.note._id})
        }
        })
    })

    $("a.deletePost").on("click", function () {
        let id = $(this).attr("data-id");
        $.ajax({
            url: "/post/" +id,
            type: "DELETE",
        }).then(() => {
            location.reload();
        })
    });

    $(".saveNote").on("click", function () {
        let id = $(this).attr("data-id");
        let nId = "#nb" +id;
        let note = $(nId).val();
        $.ajax({
            url: "/post/" +id,
            type: "POST",
            data: {
                aId: id,
                body: note
            }
        }).then(() => {
            location.reload();
        })
    });

    $(".deleteNote").on("click", function () {
        let id = $(this).attr("data-id");
        let nId = "#nb" +id;
        let note = $(nId).attr("noteId");
        $.ajax({
            url: "/note/" +note,
            type: "DELETE",
        }).then(() => {
            location.reload();
        })
    });