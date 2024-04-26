import { NextRequest, NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

const STREAM_CHAT_API_KEY ='amr2mnwb24fy';
const STREAM_CHAT_SECRET_KEY = 'g87rn85eetqwx8tdegdh7bund9r7ahm4nbqudxjc7mgndwumxqxk77ynysg5b3pf';

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ message: "user id is required" });
    }

    // Creating an instance of StreamChat
    const streamChat = new StreamChat(
      STREAM_CHAT_API_KEY,
      STREAM_CHAT_SECRET_KEY
    );

    // Creating a token for the user
    const token = streamChat.createToken(userId);

    return NextResponse.json({
      message: "Token generated successfully",
      token: token,
      username: userId,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      body: "An error occurred while processing the request." + error,
    });
  }
}
