export const ABOUT_QUERY = `*[_type == "about"]{ 
    _id, 
    name, 
    header,
    description,
    contact,
    socialMediaLinks
}`;

export const SERVICES_QUERY = `*[_type == "services"]{ 
    _id, 
    header,
    services
}`;

export const EXPERIENCE_QUERY = `*[_type == "experience"]{ 
    _id, 
    header,
    experience,
}`;

export const BACKGROUND_IMAGES_QUERY = `*[_type == "backgroundImages"]{ 
    _id, 
    images
}`;

export const HEADER_QUERY = `*[_type == "header"]{ 
    _id, 
    name,
    about,
}`;

export const FOOTER_QUERY = `*[_type == "footer"]{ 
    _id, 
    title,
    copyright,
    socialMediaLinks
}`;
