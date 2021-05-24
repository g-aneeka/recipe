import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  /* recipeSelected = new Subject<Recipe>(); */
  /* recipeSelected = new EventEmitter<Recipe>(); */

  recipiesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe (
      'Chocolate Truffle',
      'Chocolate Dessert',
      'https://live.staticflickr.com/7802/32267450657_05fb2e0133_b.jpg',
      [
        new Ingredient('Chocolate', 8),
        new Ingredient('Butter', 1),
        new Ingredient('Heavy Cream', 1),
        new Ingredient('Vanilla Extract', 1),
      ]),
    new Recipe (
      'Butterscotch Pastry',
      'Pastry',
      'https://cakeat.in/wp-content/uploads/2020/01/enchanting-butterscotch-pastries-A-past0213butt.jpg',
      [
        new Ingredient('All purpose flour', 2.5),
        new Ingredient('Butter', 1),
        new Ingredient('Butterscotch instant pudding mix', 1),
        new Ingredient('Baking powder', 3.5),
        new Ingredient('Eggs', 4),
        new Ingredient('Sugar', 1.5),
        new Ingredient('Milk', 1.25),
        new Ingredient('Vanilla Extract', 1),
        new Ingredient('Salt', 0.5)
      ]),
    new Recipe (
      'Macarons',
      'Biscuit',
      'https://p0.pikrepo.com/preview/832/407/pile-of-strawberry-and-macaroons-thumbnail.jpg',
      [
        new Ingredient('Almond flour', 1),
        new Ingredient('Butter', 1),
        new Ingredient('Vanilla Extract', 1),
        new Ingredient('Egg White', 3),
        new Ingredient('Sugar', 1.75),
        new Ingredient('Food color', 1.25),
        new Ingredient('Salt', 0.5),
        new Ingredient('Heavy Cream', 0.5)
      ]),
    new Recipe (
      'Chocolate Cupcakes',
      'Cupcakes',
      'https://cdn.wallpapersafari.com/71/13/KTVO2P.jpg',
      [
        new Ingredient('All purpose flour', 2),
        new Ingredient('Butter', 1),
        new Ingredient('Cocoa powder', 1),
        new Ingredient('Baking powder', 0.5),
        new Ingredient('Baking soda', 0.5),
        new Ingredient('Eggs', 2),
        new Ingredient('Sugar', 2),
        new Ingredient('Milk', 1),
        new Ingredient('Vanilla Extract', 1),
        new Ingredient('Hot water', 1),
        new Ingredient('Salt', 0.5)
      ]),
    new Recipe (
      'Fudgy Cake Pops',
      'Pastry',
      'https://www.skiftselv.dk/filemanager/billeder/blog/Popcake.jpg',
      [
        new Ingredient('Cocoa powder', 1),
        new Ingredient('Butter', 0.5),
        new Ingredient('Milk', 1),
        new Ingredient('Sugar', 3),
        new Ingredient('Vanilla Extract', 1),
        new Ingredient('Sprinkles', 1),

      ])

  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipiesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipiesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipiesChanged.next(this.recipes.slice());
  }

}
