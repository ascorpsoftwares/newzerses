import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Flower, Moon, Sun, Heart, Quote, ArrowRight } from "lucide-react";

const PastLifeRegressionSite = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <div className="font-sans bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Chanda
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Services</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Contact</a>
          </div>
          <a href="#contact" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors font-medium">
            Book Session
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Journey Within
              </span>
            </h1>
            <div className="flex items-center justify-center space-x-8 my-8 text-2xl md:text-3xl">
              <span className="flex items-center text-indigo-600">
                <Sparkles className="mr-2" size={28} />
                Awaken the Soul
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center text-purple-600">
                <Heart className="mr-2" size={28} />
                Heal Deeply
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Discover the wisdom of your soul through past life regression therapy. 
            Release karmic patterns, heal ancestral wounds, and reconnect with your true essence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#services" className="bg-white/80 backdrop-blur-sm text-indigo-700 px-8 py-4 rounded-full font-semibold hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              Explore Services
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              Book Your Session
            </a>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-12 left-12 text-indigo-300 opacity-60"
        >
          <Flower size={48} />
        </motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-24 right-16 text-purple-300 opacity-60"
        >
          <Moon size={64} />
        </motion.div>
        
        <motion.div 
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-20 right-12 text-pink-300 opacity-60"
        >
          <Sun size={40} />
        </motion.div>
      </section>

      {/* What is Past Life Regression */}
      <section id="about" className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What is <span className="text-indigo-600">Past Life Regression?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://placehold.co/500x400/818cf8/ffffff?text=Meditation+Journey" 
                  alt="Spiritual Journey" 
                  className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Past Life Regression is a gentle form of hypnotherapy that takes you back through time to previous lives or incarnations by accessing memories and experiences that are normally hidden in your subconscious mind.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                These experiences can help you understand recurring patterns, unexplained fears, or deep-rooted emotions that are affecting your current life. By bringing these hidden memories to light, you can release karmic patterns, heal ancestral wounds, and gain profound insights into your soul's journey.
              </p>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-400">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Sparkles className="text-indigo-600 mr-2" size={20} />
                  The Benefits Include:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Release of deep-seated fears and phobias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Understanding of recurring life patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Healing of ancestral and karmic wounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Clarity about life purpose and soul mission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Emotional and spiritual liberation</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Chanda */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Chanda</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              A certified past life regression therapist and healer with years of experience in guiding individuals through transformative journeys of self-discovery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full blur-xl scale-110"></div>
                <img 
                  src="https://placehold.co/400x500/f3f4f6/818cf8?text=Chanda" 
                  alt="Chanda - Past Life Regression Therapist" 
                  className="relative z-10 w-80 h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Heart size={32} className="text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-indigo-50">
                Chanda's journey into spiritual healing began over a decade ago when she experienced a profound personal transformation through past life regression therapy. This life-changing experience inspired her to dedicate her life to helping others discover their own soul's wisdom.
              </p>
              
              <p className="text-lg leading-relaxed text-indigo-50">
                With a calming presence and intuitive approach, Chanda creates a safe and sacred space for deep healing to occur. Her sessions are not just therapeutic but transformative, guiding you to reconnect with your authentic self and remember your soul's purpose.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Sparkles className="text-yellow-300 mr-2" size={20} />
                  What to Expect:
                </h3>
                <ul className="space-y-3 text-indigo-50">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>A thorough consultation to understand your intentions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>Gentle induction into a relaxed, meditative state</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>Guided journey through your subconscious mind</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>Integration of insights and healing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>Post-session guidance for continued growth</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Healing <span className="text-indigo-600">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each session is a sacred journey tailored to your unique soul's needs, guiding you toward profound healing and self-discovery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Past Life Regression",
                description: "Journey through time to uncover memories from previous incarnations, gaining insights into recurring patterns and releasing karmic imprints.",
                icon: "🌌"
              },
              {
                title: "Inner Child Healing",
                description: "Reconnect with your inner child to heal emotional wounds, restore innocence, and integrate fragmented aspects of your psyche.",
                icon: "🧒"
              },
              {
                title: "Spiritual Mentorship",
                description: "Personalized guidance on your spiritual path, helping you align with your soul purpose and navigate life's challenges with wisdom.",
                icon: "🧘"
              },
              {
                title: "Dream Interpretation",
                description: "Decode the symbolic language of your dreams to access subconscious wisdom and receive guidance from your higher self.",
                icon: "💭"
              },
              {
                title: "Guided Meditation",
                description: "Experience deep relaxation and expanded consciousness through customized meditation journeys designed for your specific needs.",
                icon: "🕉️"
              },
              {
                title: "Breathwork",
                description: "Use conscious breathing techniques to release emotional blockages, increase vitality, and access altered states of consciousness.",
                icon: "🌬️"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Client <span className="text-indigo-600">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from those who have embarked on their healing journey with Chanda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "My session with Chanda was life-changing. I uncovered a deep fear that I had no idea was connected to a past life. Her guidance helped me heal and move forward with clarity.",
                author: "Radhika, Mumbai",
                image: "https://placehold.co/80x80/f3f4f6/818cf8?text=R"
              },
              {
                quote: "Chanda has a soulful energy that instantly makes you feel safe and seen. Her sessions are a blessing. I've gained insights about my life purpose that I never could have accessed on my own.",
                author: "Arjun, Delhi",
                image: "https://placehold.co/80x80/f3f4f6/818cf8?text=A"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote className="absolute top-6 right-6 text-indigo-100 opacity-50" size={64} />
                <div className="flex items-start space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-700 italic leading-relaxed mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold text-indigo-600">{testimonial.author}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Begin Your Healing Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to explore the depths of your soul? Schedule your session today and take the first step toward profound healing and self-discovery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Sparkles className="text-indigo-400 mr-3" size={24} />
                  Session Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-indigo-600 p-2 rounded-lg mr-4">
                      <Flower size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Duration</h4>
                      <p className="text-gray-300">90 minutes (initial session)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-600 p-2 rounded-lg mr-4">
                      <Moon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Format</h4>
                      <p className="text-gray-300">Online via secure video call</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-600 p-2 rounded-lg mr-4">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Investment</h4>
                      <p className="text-gray-300">₹8,000 per session</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-indigo-400 mr-3" size={20} />
                    <span>chanda.healing@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-indigo-400 mr-3" size={20} />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-indigo-400 mr-3" size={20} />
                    <span>Available Online Worldwide</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Book Your Session</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">What would you like to explore?</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Select an option</option>
                    <option>Past Life Regression</option>
                    <option>Inner Child Healing</option>
                    <option>Spiritual Mentorship</option>
                    <option>Dream Interpretation</option>
                    <option>Guided Meditation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Please share your intentions and what you'd like to explore in your session..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Book My Session
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Chanda
            </div>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Journey within. Awaken the soul. Heal deeply. Each session is a sacred step on your path to wholeness and self-discovery.
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Chanda Past Life Regression. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PastLifeRegressionSite;