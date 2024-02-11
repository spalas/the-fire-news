export const getAllnews = async () => {
    const res = await fetch("Https://The-News-Portal-Server.Vercel.App/all-news", {
        next: {
            revalidate:30,
        }
    });
    return res.json()
}