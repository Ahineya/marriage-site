(function() {

    Parse.initialize("9GvldMKQZgDBAa8TGznm5lXbhDIYZebgYwph0UkZ", "Wnyf7RFo43b95YXBrccq7TdP0UPUGpbygOeTLwFb");

    var Feedbacks = Parse.Object.extend("feedbacks");
    var feedbacks = new Feedbacks();

    var button = document.querySelector('.js-send');

    button.addEventListener('click', function() {
        var input = document.querySelector('#username');
        var textarea = document.querySelector('#feedback');

        var username = input.value;
        var feedback = textarea.value;

        feedbacks.save(
            {
                username: username,
                feedback: feedback
            }
        ).then(function(object) {
                alert("Your feedback have been sent! Thank you! :)");
                input.value = '';
                textarea.value = '';
            });

    });

})();