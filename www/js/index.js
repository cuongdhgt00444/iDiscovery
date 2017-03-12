
function addActivity() {
    validateForm();
}

function validateForm() {
    var activityName = $("#txtActivityName").val();
    var date = $("#txtDate").val();
    var reporter = $("#txtReporter").val();

    if (!(activityName && date && reporter)) {
        $("#requiredFieldPopupDialog").popup("open");
    } else {
        showAddActivityConfirmation();
    }
}

function showAddActivityConfirmation() {
    $("#lblActivityName").text($("#txtActivityName").val());
    $("#lblLocation").text($("#txtLocation").val());
    $("#lblDate").text($("#txtDate").val());
    $("#lblTime").text($("#txtTime").val());
    $("#lblReporter").text($("#txtReporter").val());

    $("#addConfirmPopupDialog").popup("open");
}