

//Normal logic for triggering modals doesn't work. Possibly an async function?
    //See: https://stackoverflow.com/questions/15473886/twitter-bootstrap-href-in-modal-not-working
    $("a.modalBtn").on("click", function () {
        let id = $(this).attr("data-target"); 
        $(id).modal();
    })

    $("a.deletePost").on("click", function () {
        let id = $(this).attr("data-id");
        console.log(id);
        $.ajax({
            url: "/delete/" +id,
            type: "DELETE",
        }).then(() => {
            location.reload();
        })
    });