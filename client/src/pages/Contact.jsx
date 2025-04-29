import React from 'react'

function Contact() {
  return (
    <div className="p-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
    <form className="grid gap-4 max-w-md mx-auto">
      <input type="text" placeholder="Your Name" className="p-2 border rounded" />
      <input type="email" placeholder="Your Email" className="p-2 border rounded" />
      <textarea rows="4" placeholder="Your Message" className="p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Send Message
      </button>
    </form>
  </div>
  )
}

export default Contact
