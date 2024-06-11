import Category from "@/databases/mongoDB/models/categoryModel";
import ConnectMongoDB from "@/databases/mongoDB/mongodb";
import { NextRequest } from "next/server";
ConnectMongoDB();

export const GET = async (request: NextRequest) => {
  try {
    const categories = await Category.find();
    return Response.json(categories);
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  try {
    const category = await Category.create(body);
    return Response.json(category);
  } catch (error) {
    console.log(error);
  }
};

export const PUT = async (request: NextRequest) => {
  const body = await request.json();
  try {
    const category = await Category.findByIdAndUpdate(body._id, body, {
      new: true,
    });
    return Response.json(category);
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (request: NextRequest) => {
  const body = await request.json();
  try {
    const category = await Category.findByIdAndDelete(body._id);
    return Response.json(category);
  } catch (error) {
    console.log(error);
  }
};
