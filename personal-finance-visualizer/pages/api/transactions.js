import connectMongoDB from "@/lib/mongodb";
import Transaction from "@/models/Transaction";

export async function GET() {
  await connectMongoDB();
  const transactions = await Transaction.find().sort({ createdAt: -1 });
  return Response.json(transactions);
}

export async function POST(req) {
  await connectMongoDB();
  const { description, amount } = await req.json();
  const newTransaction = new Transaction({ description, amount });
  await newTransaction.save();
  return Response.json(newTransaction);
}
