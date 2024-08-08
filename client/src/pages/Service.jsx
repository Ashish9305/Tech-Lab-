export const Service = () => {
    const services = [
        {
          title: 'Web Development',
          description: `
            Our expert team offers comprehensive web development services to build scalable, responsive, and user-friendly websites tailored to your business needs.
      
            Services include:
            \u2022 Custom Website Development
            \u2022 Responsive Design
            \u2022 E-commerce Development
            
            \u2022 Single Page Applications 
            \u2022 (React, Angular, Vue.js)
            \u2022 Progressive Web Apps
            \u2022 API Development and Integration
            \u2022 Ongoing Maintenance and Support
      
           
          `,
          icon: '🌐',
        },
        {
          title: 'SEO Optimization',
          description: `
            Enhance your online presence with our SEO optimization services to drive traffic and improve search engine rankings.
      
            Services include:
            \u2022 Keyword Research
            \u2022 On-Page SEO
            \u2022 Off-Page SEO
            \u2022 Technical SEO
            \u2022 Local SEO
      
            Benefits:
            \u2022 Increased Visibility
            \u2022 Higher Rankings
            \u2022 More Organic Traffic
            \u2022 Improved User Experience
          `,
          icon: '🔍',
        },
        {
          title: 'Content Creation',
          description: `
            Engage your audience with high-quality content tailored to your brand and marketing goals.
      
            Services include:
            \u2022 Blog Posts
            \u2022 Articles
            \u2022 Social Media Content
            \u2022 Website Copy
            \u2022 Video Scripts
      
            Benefits:
            \u2022 Enhanced Engagement
            \u2022 Brand Authority
            \u2022 Better SEO
            \u2022 Audience Growth
          `,
          icon: '✍️',
        },
        {
          title: 'Social Media Management',
          description: `
            Grow your brand's presence on social media with our comprehensive management services.
      
            Services include:
            \u2022 Profile Setup
            \u2022 Content Scheduling
            \u2022 Community Management
            \u2022 Analytics and Reporting
            \u2022 Paid Advertising
      
            Benefits:
            \u2022 Increased Engagement
            \u2022 Brand Awareness
            \u2022 Targeted Reach
            \u2022 Customer Interaction
          `,
          icon: '📱',
        },
        {
          title: 'E-commerce Solutions',
          description: `
            Boost your online sales with our tailored e-commerce solutions designed for your business needs.
      
            Services include:
            \u2022 Online Store Setup
            \u2022 Payment Gateway Integration
            \u2022 Inventory Management
            \u2022 Order Processing
            \u2022 Performance Optimization
      
            Benefits:
            \u2022 Increased Sales
            \u2022 Seamless Shopping Experience
            \u2022 Secure Transactions
            \u2022 Efficient Operations
          `,
          icon: '🛒',
        },
        {
          title: 'Technical Support',
          description: `
            Ensure your website runs smoothly with our reliable technical support services.
      
            Services include:
            \u2022 Troubleshooting
            \u2022 Performance Monitoring
            \u2022 Security Updates
            \u2022 Backup and Recovery
            \u2022 User Assistance
      
            Benefits:
            \u2022 Reduced Downtime
            \u2022 Enhanced Security
            \u2022 Quick Issue Resolution
            \u2022 Peace of Mind
          `,
          icon: '💻',
        },
      ];
      
    return (
        <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    );

};  