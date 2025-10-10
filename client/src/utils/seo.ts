// SEO Utility for managing meta tags
export const updatePageSEO = (title: string, description: string, keywords: string[]) => {
  // Update page title
  document.title = `${title} | GREAT Visa Network`;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);
  }

  // Update meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', keywords.join(', '));
  } else {
    const meta = document.createElement('meta');
    meta.name = 'keywords';
    meta.content = keywords.join(', ');
    document.head.appendChild(meta);
  }
};

