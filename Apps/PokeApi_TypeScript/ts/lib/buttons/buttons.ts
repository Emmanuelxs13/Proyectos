export default abstract class Buttons {
  protected $searchBar = <HTMLInputElement> document.getElementById("search-bar");
  protected $selectFilter = <HTMLInputElement> document.getElementById("type-pokemon");
  protected $searchButton = document.querySelector(".Button-search");
  protected $previousButton = document.querySelector(".Button-previous");
  protected $nextButton = document.querySelector(".Button-next");
}