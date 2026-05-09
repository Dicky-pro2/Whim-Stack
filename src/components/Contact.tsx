import { Mail, MapPin, Send, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">LET'S TALK</h2>
          <p className="text-gray-600 dark:text-gray-400">Got a project? Let's build something memorable.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-up space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <Mail className="text-orange" />
              <span>hello@whimstack.com</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <MessageCircle className="text-orange" />
              <span>+234 (0) 123 456 7890</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
              <MapPin className="text-orange" />
              <span>Lagos, Nigeria — Remote worldwide</span>
            </div>
          </div>
          <form className="fade-up space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your name" className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-orange transition" />
            <input type="email" placeholder="Email address" className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-orange transition" />
            <textarea rows={4} placeholder="Tell us about your project" className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-orange transition"></textarea>
            <button className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-xl font-medium transition-all hover:scale-105 w-full sm:w-auto">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}