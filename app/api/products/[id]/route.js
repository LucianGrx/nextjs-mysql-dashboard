import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json('Produs listat');
}

export function DELETE(){
    return NextResponse.json('Produs sters');
}