import { classifyImage } from "./ModelService";
import { getRecommendedRecepiesByName, getPopularRecepies, getWeekPlan } from "./RecipeService";
import { getPopularProducts } from "./ProductService";
import { addPoints } from "./AuthenticationService";

export {
    classifyImage, 
    getRecommendedRecepiesByName,
    getPopularRecepies,
    getPopularProducts,
    getWeekPlan,
    addPoints
}