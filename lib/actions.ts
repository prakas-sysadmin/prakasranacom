export async function sendContactEmail(
  prevState: { success: boolean; message: string } | null,
  formData: FormData
) {
  const email = formData.get("email")?.toString()
  const name = formData.get("name")?.toString()
  const subject = formData.get("subject")?.toString()
  const message = formData.get("message")?.toString()

  if (!email || !message || !subject || !name) {
    return { success: false, message: "All fields are required." }
  }

  // Your actual email logic goes here (e.g., using Resend, SendGrid, etc.)
  return {
    success: true,
    message: "Your message has been sent!",
  }
}

