const $checkboxes = $("input:checkbox");
let count = 0;

$checkboxes.on("change", function () {
  if ($(this).prop("checked")) {
    count++;
  } else {
    count--;
  }

  if (count === 3) {
    $checkboxes.prop("disabled", true);
  } else {
    $checkboxes.prop("disabled", false);
  }
});
