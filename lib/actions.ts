"use server"

export async function sendContactEmail(formData: FormData) {
  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // In a real application, you would integrate with an email service like:
  // - Resend, SendGrid, Nodemailer, etc.
  // For now, we'll simulate the email sending

  console.log("Email would be sent to: me.prakas95@gmail.com")
  console.log("From:", name, email)
  console.log("Subject:", subject)
  console.log("Message:", message)

  return {
    success: true,
    message: `Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`,
  }
}
