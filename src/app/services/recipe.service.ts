import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

 private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simple recipe', 
    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
  [
    new Ingredient('Meat', 1),
    new Ingredient('Frence fires', 10)
  ]),
    new Recipe('A Recipe 2', 'This is simple recipe 2', 'https://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg',
  [
    new Ingredient('Goat', 3),
    new Ingredient('Potatoes fires', 40)
  ]),
    new Recipe('A Recipe 3', 'This is 3 sample', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1',
  [
    new Ingredient('Chicken', 4),
    new Ingredient('Yam fires', 50)
  ])
  ];
  constructor(private shoppingListService: ShoppingListService) { }
  
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[]){
   this.shoppingListService.addIngredients(ingredients);
  }
}
