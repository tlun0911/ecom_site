export async function GET(){
    const response = await fetch(
        "https://66a435c844aa637045839087.mockapi.io/api/products",
        {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
        }
    );
    const data = await response.json();
    return Response.json({data});
}