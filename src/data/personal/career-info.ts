export interface CareerHighlight {
  value: string;
  description: string;
}

export interface Award {
  category: string;
  organization?: string;
  achievements: string[];
}

export interface Partnership {
  category: string;
  companies: string[];
}

export interface CareerInfo {
  highlights: CareerHighlight[];
  awards: Award[];
  partnerships: Partnership[];
}

export const careerInfo: CareerInfo = {
  highlights: [
    {
      value: "Industry Leader",
      description: "Recognized leader in [your field] with proven track record of innovation and success"
    },
    {
      value: "$XM Revenue",
      description: "Generated significant revenue through innovative solutions and strategic initiatives"
    },
    {
      value: "X% Growth",
      description: "Achieved substantial growth in [key metric] through strategic implementation"
    },
    {
      value: "Award Winner",
      description: "Recipient of multiple industry awards for excellence in [your field]"
    }
  ],
  awards: [
    {
      category: "Industry Award 1",
      organization: "Awarding Organization",
      achievements: [
        "Achievement 1 - Project Name",
        "Achievement 2 - Project Name"
      ]
    },
    {
      category: "Industry Award 2",
      organization: "Awarding Organization",
      achievements: [
        "Achievement 1 - Project Name"
      ]
    },
    {
      category: "Industry Award 3",
      organization: "Awarding Organization",
      achievements: [
        "Achievement 1 - Project Name"
      ]
    }
  ],
  partnerships: [
    {
      category: "Category 1",
      companies: [
        "Company 1",
        "Company 2",
        "Company 3",
        "Company 4"
      ]
    },
    {
      category: "Category 2",
      companies: [
        "Company 1",
        "Company 2",
        "Company 3",
        "Company 4"
      ]
    },
    {
      category: "Category 3",
      companies: [
        "Company 1",
        "Company 2",
        "Company 3",
        "Company 4"
      ]
    }
  ]
}; 