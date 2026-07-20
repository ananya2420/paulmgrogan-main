// app/(mainLayout)/components/ContactForm.jsx
export default function ContactForm() {
  return (
    <div className="bg-indigo-900 p-12 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12">
        {/* Form Column */}
        <div className="space-y-4">
          <div className="flex gap-4">
            {/* Added bg-white here */}
            <input type="text" placeholder="Name (required)" className="w-full p-3 rounded text-black bg-white" />
            <input type="email" placeholder="Email (required)" className="w-full p-3 rounded text-black bg-white" />
          </div>
          {/* Added bg-white here */}
          <textarea placeholder="Message" className="w-full p-3 h-40 rounded text-black bg-white"></textarea>
          <button className="w-full bg-red-600 py-3 rounded font-bold">Send</button>
        </div>
        
        {/* Contact Info Column */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="mb-6">Questions, comments or requests? Feel free to reach out, we would love to hear from you.</p>
          <address className="not-italic space-y-2">
            <p>510 Turner Camp Inverness, FL 34450</p>
            <p>Paul M Grogan: <br/> PaulMGrogan@yahoo.com <br/> +1 352-212-8844</p>
            <p>Steve Schurdell: <br/> Managing Partner- WGHR, WXOF, WXCV, WXCZ/ZC <br/> Cell- 727-439-1984 <br/> Office- (727)-697-1063/(352)-746-9596</p>
          </address>
        </div>
      </div>
    </div>
  );
}