export async function load ({params, fetch}){
   try{
    const response = await fetch('/recipes.json');

    if(!response.ok){
        throw new Error('Failed to fetch recipes.json: ${response.status');
    }

    const recipes = await response.json();

    const recipe = recipes.find(r => r.id.toLowerCase().trim() === params.slug.toLowerCase().trim());

    if(!recipe){
        return {status: 404, error: new Error("Recipe not found")};
    }
    return {recipe};

   }
    catch (error){
        console.error("Error loading recipes:", error.message);
        return {status: 500, error: new Error("Failed to load recipe")};
    }

}