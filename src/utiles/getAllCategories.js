export const getAllCategories = async () => {
    const res = await fetch("Https://The-News-Portal-Server.Vercel.App/categories");
    return res.json()
}