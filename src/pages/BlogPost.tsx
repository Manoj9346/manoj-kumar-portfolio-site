
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = {
    "food-delivery-app": {
      title: "How I Built My Food Delivery App",
      date: "2024-06-15",
      author: "Manoj Kumar Talari",
      content: `
        Building a food delivery application was one of the most exciting projects I've worked on during my journey as a full-stack developer. In this post, I'll walk you through the entire development process, from conception to deployment.

        ## The Challenge

        Creating a comprehensive food delivery platform that handles everything from browsing restaurants to processing payments is no small feat. I wanted to build something that wasn't just functional, but also provided an excellent user experience.

        ## Technology Stack

        For this project, I chose a combination of technologies that I was comfortable with and that would allow for rapid development:

        - **Frontend**: HTML5, CSS3, and JavaScript for a responsive and interactive user interface
        - **Backend**: Python for server-side logic and API development
        - **Database**: MySQL for storing user data, restaurant information, and order details
        - **Payment Integration**: UPI payment gateway for seamless transactions

        ## Key Features Implemented

        ### 1. User Authentication System
        I started with building a robust user authentication system that allows customers to register, login, and manage their profiles securely.

        ### 2. Restaurant and Menu Management
        Created an intuitive system for restaurants to manage their menus, prices, and availability. Users can browse through different restaurants and their offerings easily.

        ### 3. Shopping Cart Functionality
        Implemented a dynamic shopping cart that allows users to add items, modify quantities, and calculate totals in real-time.

        ### 4. Table Reservation System
        Added a unique feature that allows customers to reserve tables at their favorite restaurants, making the app more than just a delivery service.

        ### 5. UPI Payment Integration
        Integrated UPI payment gateway to ensure secure and convenient payment processing for all orders.

        ### 6. Donation Feature
        Implemented a social responsibility feature that allows customers to donate to charity during checkout.

        ## Challenges Faced and Solutions

        ### Database Design
        Designing a normalized database schema that could handle complex relationships between users, restaurants, orders, and payments was challenging. I spent considerable time planning the database structure before implementation.

        ### Payment Security
        Ensuring payment security was crucial. I implemented proper validation and encryption to protect user financial information.

        ### Responsive Design
        Making the application work seamlessly across different devices required careful CSS planning and testing.

        ## What I Learned

        This project taught me valuable lessons about:
        - Full-stack development workflow
        - Database design and optimization
        - Payment gateway integration
        - User experience design
        - Project planning and execution

        ## Future Enhancements

        I'm planning to add features like:
        - Real-time order tracking
        - Push notifications
        - Advanced search and filtering
        - Restaurant ratings and reviews
        - Mobile app version

        ## Conclusion

        Building FOOD FLEX was an incredible learning experience that helped me understand the complexities of modern web applications. It's currently deployed and accessible at [food-flex.vercel.app](https://food-flex.vercel.app/).

        The project showcases my ability to work with multiple technologies and create a cohesive, user-friendly application. I'm proud of what I've built and excited to continue improving it.
      `
    },
    "fullstack-learning": {
      title: "Learning Full-Stack Development in 2024",
      date: "2024-06-10",
      author: "Manoj Kumar Talari",
      content: `
        As a final-year BTech student in Computer Science, my journey into full-stack development has been both challenging and rewarding. In this post, I'll share my experience, the resources I used, and the insights I gained along the way.

        ## Why Full-Stack Development?

        In today's tech landscape, being able to work on both frontend and backend makes you incredibly versatile. As someone starting their career, I wanted to understand how web applications work end-to-end.

        ## My Learning Path

        ### Phase 1: Frontend Foundations (Months 1-3)
        I started with the basics:
        - **HTML5**: Semantic markup and accessibility
        - **CSS3**: Flexbox, Grid, animations, and responsive design
        - **JavaScript**: ES6+, DOM manipulation, and async programming

        ### Phase 2: Backend Fundamentals (Months 4-6)
        Moving to server-side development:
        - **Python**: My primary backend language
        - **Database Design**: MySQL for relational data
        - **API Development**: RESTful services and data handling

        ### Phase 3: Integration and Projects (Months 7-9)
        Bringing it all together:
        - Building complete applications
        - Deployment and hosting
        - Version control with Git

        ## Key Technologies I Mastered

        ### Frontend Technologies
        - **HTML5**: Modern semantic markup
        - **CSS3**: Advanced styling and animations  
        - **JavaScript**: Modern ES6+ features and best practices

        ### Backend Technologies
        - **Python**: Server-side logic and API development
        - **MySQL**: Database design and optimization
        - **API Integration**: Third-party services and payment gateways

        ### Development Tools
        - **VS Code**: My primary IDE with useful extensions
        - **Git & GitHub**: Version control and collaboration
        - **Eclipse**: For Java development projects

        ## Projects That Shaped My Learning

        ### 1. Food Delivery Platform (FOOD FLEX)
        This project taught me about:
        - Complex database relationships
        - Payment gateway integration
        - User authentication and security
        - Responsive design principles

        ### 2. Learning Management System (Learners Academy)
        Through this project, I learned:
        - Educational platform architecture
        - User role management
        - Content management systems
        - Interactive user interfaces

        ## Challenges I Overcame

        ### 1. The Overwhelm Factor
        Initially, the sheer number of technologies was overwhelming. I learned to focus on one thing at a time and build projects to reinforce learning.

        ### 2. Debugging Complex Issues
        Full-stack applications have many moving parts. I developed systematic debugging approaches and learned to use browser dev tools effectively.

        ### 3. Keeping Up with Updates
        Technology evolves rapidly. I learned to focus on fundamentals while staying aware of new developments.

        ## Resources That Helped Me

        ### Online Learning
        - **YouTube tutorials** for visual learning
        - **Documentation** for in-depth understanding
        - **Coding communities** for problem-solving

        ### Practical Experience
        - **Personal projects** for hands-on practice
        - **Internships** for real-world experience
        - **Open source contributions** for collaboration skills

        ## Tips for Aspiring Full-Stack Developers

        ### 1. Start with Projects
        Don't just learn theory. Build projects from day one, even if they're simple.

        ### 2. Master the Fundamentals
        Strong foundations in HTML, CSS, and JavaScript are crucial before moving to frameworks.

        ### 3. Learn by Teaching
        Explaining concepts to others helps solidify your own understanding.

        ### 4. Join Communities
        Connect with other developers. The programming community is incredibly helpful.

        ### 5. Be Patient with Yourself
        Learning full-stack development takes time. Celebrate small wins and keep building.

        ## What's Next?

        As I continue my journey, I'm focusing on:
        - Advanced JavaScript concepts
        - Modern frameworks and libraries
        - Cloud technologies and deployment
        - Software architecture patterns

        ## The Reality of Learning Full-Stack

        Full-stack development isn't about knowing everything perfectly. It's about understanding how different parts of web applications work together and being able to learn and adapt quickly.

        ## Conclusion

        Learning full-stack development in 2024 has been an incredible journey. The combination of traditional web technologies with modern development practices creates endless opportunities.

        For fellow students and aspiring developers: start building, keep learning, and don't be afraid to make mistakes. Every bug you fix and every feature you build makes you a better developer.

        The tech industry needs passionate developers who can think holistically about web applications. With dedication and the right resources, anyone can master full-stack development.
      `
    },
    "building-projects": {
      title: "Building Projects to Get Hired Faster",
      date: "2024-06-05",
      author: "Manoj Kumar Talari",
      content: `
        As a fresher in the tech industry, I've learned that having impressive projects in your portfolio can be the difference between getting hired and getting ignored. Here's my guide on building projects that catch recruiters' attention.

        ## Why Projects Matter More Than Ever

        In today's competitive job market, especially for freshers, projects are your proof of concept. They demonstrate:
        - Your ability to build complete applications
        - Problem-solving skills
        - Understanding of real-world challenges
        - Technical competency beyond academic knowledge

        ## The Project Selection Strategy

        ### 1. Solve Real Problems
        Don't build another to-do app. Instead, focus on projects that solve actual problems:
        - **Food Delivery Platform**: Addresses real market needs
        - **Learning Management System**: Solves educational challenges
        - **E-commerce Solutions**: Tackles business problems

        ### 2. Show Technical Depth
        Your projects should demonstrate various technical skills:
        - Frontend and backend integration
        - Database design and management
        - API development and consumption
        - Payment gateway integration
        - User authentication and security

        ## My Project Portfolio Strategy

        ### Project 1: FOOD FLEX - Food Delivery Platform
        **Why I Built It**: To showcase full-stack capabilities and real-world application development.

        **Key Features That Impress Recruiters**:
        - Complete user authentication system
        - Payment gateway integration (UPI)
        - Table reservation functionality
        - Admin panel for restaurant management
        - Responsive design across devices

        **Technologies Used**: HTML, CSS, JavaScript, Python, MySQL

        **What Recruiters Love About It**:
        - Demonstrates understanding of e-commerce workflows
        - Shows ability to integrate third-party services
        - Proves capability to handle complex user interactions

        ### Project 2: Learners Academy - Educational Platform
        **Why I Built It**: To show versatility and understanding of different domains.

        **Key Features**:
        - Interactive learning modules
        - Student progress tracking
        - Clean, educational-focused UI/UX
        - Content management system

        **What Makes It Stand Out**:
        - Different domain from my first project
        - Focus on user experience and educational psychology
        - Demonstrates ability to understand user needs

        ## Technical Choices That Matter

        ### Database Design
        I chose **MySQL** because:
        - Industry standard for web applications
        - Demonstrates understanding of relational databases
        - Shows ability to design normalized schemas

        ### Backend Technology
        **Python** was my choice because:
        - Readable and maintainable code
        - Excellent for rapid development
        - Strong ecosystem for web development

        ### Frontend Approach
        **Vanilla HTML, CSS, JavaScript** because:
        - Shows strong fundamentals
        - Demonstrates ability to build without frameworks
        - Proves understanding of core web technologies

        ## Making Your Projects Interview-Ready

        ### 1. Documentation is Key
        **README.md Files**: Include:
        - Project overview and purpose
        - Technologies used and why
        - Installation and setup instructions
        - Screenshots of key features
        - Live demo links

        ### 2. Code Quality Matters
        - Write clean, commented code
        - Follow consistent naming conventions
        - Organize files logically
        - Remove debugging code and comments

        ### 3. Deploy Your Projects
        **Live Demos**: I deployed my projects on:
        - **Vercel**: For easy deployment and great performance
        - **GitHub Pages**: For static projects
        - **Heroku**: For full-stack applications

        ## What Recruiters Actually Look For

        ### 1. Problem-Solving Approach
        Can you identify a problem and build a solution? My projects show I can think beyond just coding.

        ### 2. Technical Implementation
        - Clean, organized code structure
        - Proper error handling
        - Security considerations
        - Performance optimization

        ### 3. Real-World Relevance
        Projects that mirror actual business applications are much more impressive than academic exercises.

        ### 4. Attention to Detail
        - Responsive design
        - User-friendly interfaces
        - Proper validation and feedback
        - Professional presentation

        ## Common Mistakes to Avoid

        ### 1. Building Too Many Similar Projects
        Don't create five different CRUD applications. Show variety in your problem-solving.

        ### 2. Neglecting the Frontend
        Backend skills are important, but recruiters often judge your work by what they can see.

        ### 3. Over-Engineering
        Don't use complex technologies just to impress. Sometimes simple solutions are better.

        ### 4. Poor Documentation
        A great project with poor documentation is like a diamond in the rough - valuable but hard to appreciate.

        ## The Interview Advantage

        Having strong projects gives you:
        - **Concrete Examples**: Real answers to "Tell me about a project you've worked on"
        - **Technical Discussions**: Ability to dive deep into implementation details
        - **Problem-Solving Stories**: Examples of challenges faced and overcome
        - **Passion Demonstration**: Evidence of genuine interest in development

        ## My Results

        This project-focused approach has helped me:
        - Stand out in internship applications
        - Have meaningful technical conversations during interviews
        - Demonstrate practical skills beyond academic knowledge
        - Build confidence in discussing my work

        ## Advice for Fellow Freshers

        ### 1. Start Building Today
        Don't wait until you feel "ready." Start with simple projects and improve them over time.

        ### 2. Focus on Completion
        It's better to have two polished projects than five half-finished ones.

        ### 3. Get Feedback
        Share your projects with peers, mentors, and online communities for constructive criticism.

        ### 4. Keep Learning
        Each project should teach you something new. If it doesn't, you're not challenging yourself enough.

        ### 5. Tell Your Story
        Be prepared to explain not just what you built, but why you built it and how you overcame challenges.

        ## The Long-Term View

        Building projects isn't just about getting your first job. It's about:
        - Developing a problem-solving mindset
        - Learning to ship complete products
        - Understanding the full development lifecycle
        - Building a foundation for continuous learning

        ## Conclusion

        In my experience, projects are the fastest way to bridge the gap between academic knowledge and industry expectations. They're your opportunity to show, not just tell, what you can do.

        Remember: recruiters see hundreds of resumes with similar skills listed. Your projects are what make you memorable and demonstrate your ability to turn those skills into actual solutions.

        Start building today. Your future self (and your career prospects) will thank you.

        **Call to Action**: Pick a problem you're passionate about solving, choose your technologies, and start building. The best time to start was yesterday, the second-best time is now.
      `
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Card className="p-8">
          <CardContent>
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-4">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/')}>Go Back Home</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <Button 
          onClick={() => navigate('/')}
          variant="ghost" 
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Button>

        <article className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center border-b">
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {post.title}
              </CardTitle>
              <div className="flex items-center justify-center space-x-6 text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim() === '') return null;
                  
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-primary mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-primary mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="ml-6 mb-2">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }
                  
                  return (
                    <p key={index} className="mb-4 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </article>

        <div className="max-w-4xl mx-auto mt-8 text-center">
          <Card className="p-6">
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">Thanks for reading!</h3>
              <p className="text-muted-foreground mb-4">
                If you enjoyed this post or have any questions, feel free to reach out.
              </p>
              <Button onClick={() => navigate('/#contact')} className="bg-primary hover:bg-primary/90">
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
