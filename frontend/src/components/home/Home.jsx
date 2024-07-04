import React from "react";

function Home() {
  return (
    <div>
      <div className="h-[90vh] flex flex-col md:flex-row">
        <div className="bg-primary text-white flex flex-col justify-center items-center md:w-1/2 p-10">
          <div className="space-y-4 text-left">
            <h1 className="text-4xl md:text-6xl font-semibold">
              Welcome to Farm Connect
            </h1>
            <h3 className="text-2xl md:text-3xl">Find Farm Experts Near You</h3>
            <p className="text-lg md:text-xl">
              Connect with farm experts in your area and get solutions to your
              agricultural challenges.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/markus-winkler-HeqXGxnsnX4-unsplash.jpg"
            alt="farm"
            className="w-full h-auto md:h-full object-cover"
          />
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">
            Our Features
          </h2>
          <p className="mt-4 text-xl">
            Explore the powerful features we offer to help you connect with farm
            experts.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border border-primary rounded-lg shadow-lg shadow-secondary">
              <h3 className="text-2xl font-semibold">Expert Directory</h3>
              <p className="mt-2">
                Find experienced agricultural experts in your area.
              </p>
            </div>
            <div className="p-6 border border-primary rounded-lg shadow-lg shadow-secondary">
              <h3 className="text-2xl font-semibold">Knowledge Base</h3>
              <p className="mt-2">
                Access a wealth of resources on farming techniques, best
                practices, and innovations.
              </p>
            </div>
            <div className="p-6 border border-primary rounded-lg shadow-lg shadow-secondary">
              <h3 className="text-2xl font-semibold">Discussion Forums</h3>
              <p className="mt-2">
                Engage with the community, ask questions, and share your
                experiences.
              </p>
            </div>
            <div className="p-6 border border-primary rounded-lg shadow-lg shadow-secondary">
              <h3 className="text-2xl font-semibold">Events & Workshops</h3>
              <p className="mt-2">
                Stay updated on upcoming events, workshops, and training
                sessions.
              </p>
            </div>
            <div className="p-6 border border-primary rounded-lg shadow-lg shadow-secondary">
              <h3 className="text-2xl font-semibold">Support</h3>
              <p className="mt-2">
                Get in touch with our support team for any assistance.
              </p>
            </div>
            <div className="p-6 border border-primary rounded-lg shadow-lg shadow-secondary">
              <h3 className="text-2xl font-semibold">Community</h3>
              <p className="mt-2">
                Join a thriving community of farmers and experts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">
            How It Works
          </h2>
          <p className="mt-4 text-xl">
            Connecting farmers with experts is simple and easy.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            <div className="p-6">
              <h3 className="text-2xl font-semibold">1. Find Experts</h3>
              <p className="mt-2">
                Search our directory to find agricultural experts in your area.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold">2. Get Contact Info</h3>
              <p className="mt-2">
                Take note of the expert’s phone number provided in their
                profile.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold">3. Make the Call</h3>
              <p className="mt-2">
                Call the expert directly to discuss and solve your agricultural
                challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary">
            Testimonials
          </h2>
          <p className="mt-4 text-xl">Hear from our satisfied users.</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            <div className="p-6 border border-primary rounded-lg shadow-lg shadow-secondary">
              <p className="mt-2">
                "Farm Connect has been a game-changer for our farm. We have
                connected with experts who provided valuable advice and helped
                us improve our productivity."
              </p>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                - Anyungu C., Farmer
              </h3>
            </div>
            <div className="p-6 border border-primary rounded-lg shadow-lg shadow-secondary">
              <p className="mt-2">
                "The community on Farm Connect is amazing. We share knowledge
                and help each other solve problems. It's a great platform for
                any farmer."
              </p>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                - Japheth N., Agricultural Expert
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
