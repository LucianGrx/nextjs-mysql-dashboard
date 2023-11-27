import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json('Produse listate');
}

export function POST() {
    return NextResponse.json('Produs adaugat');
}