export interface BenefitsData {
  title: string,
  description: string,
  benefits: string[]
}

export const firstBenefitsBlock: BenefitsData = {
  title: 'We know learning inside and out',
  description: 'Our instructional design team will work hard to align your business goals with your learning objectives to ensure the training supports your business strategies.',
  benefits: [
    'Each project requires a unique approach, and we are ready for the challenge',
    'Our expertise in the training and development industry will make your project a success',
    'Your goals and deadlines are our priority'
  ]
}

export const secondBenefitsBlock: BenefitsData = {
  title: 'Our clients love the work we do',
  description: 'We pride ourselves on developing training strategies with the learners in mind, ensuring your time and resources are well utilized.',
  benefits: [
    'We start each project with a careful analysiys of your learning needs',
    'We constantly look for ways to save your time and money while exceeding your expectations',
    'We don\'t stop working until you are satisfied with the products we deliver'
  ]
}