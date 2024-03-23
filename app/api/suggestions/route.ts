export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term");

    
}