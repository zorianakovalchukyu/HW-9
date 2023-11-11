/**
Знайдіть теги `<div>`, які стоять безпосередньо після `<h3>` 
і перемістіть ці `<div>`-елемент так, щоб кожен з них став
безпосередньо над відповідним елементом `<h3>`.
 */
$(document).ready(function () {
  // ваш код
  $("h3+div").each(function () {
    $(this).insertBefore($(this).prev("h3"));
  });
});
