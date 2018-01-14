import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 @Output() recipeWasSelected = new EventEmitter<Recipe>()

@Input()  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simple recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('A Recipe 2', 'This is simple recipe 2', 'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg'),
    new Recipe('A Recipe 3', 'This is 3 sample', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1')


  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
