

//Normal logic for triggering modals doesn't work. Possibly an async function?
    //See: https://stackoverflow.com/questions/15473886/twitter-bootstrap-href-in-modal-not-working
    $("a.modalBtn").on("click", function () {
        let id = $(this).attr("data-target"); 
        $(id).modal();
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
        let nb = "#nb" +id;
        let note = $(nb).val();
        $.ajax({
            url: "/post/" +id,
            type: "POST",
            data: {
                body: note
            }
        }).then(() => {
            location.reload();
        })
    });