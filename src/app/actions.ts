'use server';

export async function submitContactForm(formData: FormData) {
  const data = {
    // Netlify forms needs the name of the form to be part of the payload
    'form-name': formData.get('form-name'),
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  try {
    // We are POSTing to the same server, which will be picked up by Netlify's build process.
    // The endpoint can be relative, and Netlify will handle it.
    const response = await fetch(process.env.URL || 'http://localhost:9002', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as any).toString(),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorText = await response.text();
      console.error('Form submission failed:', errorText);
      return { success: false, error: `Form submission failed.` };
    }
  } catch (e: any) {
    console.error('Form submission exception:', e.message);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
