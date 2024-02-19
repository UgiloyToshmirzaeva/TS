const OfficeInfo = {
    'officeID': 45,
    'isOpened': false,
    'contacts': {
        'phone': '+1234567890',
        'email': 'office@example.com',
        'address': {
            'city': 'Moscow'
        }
    }
}

let info: {
    officeID: number;
    isOpened: boolean;
    contacts: {
        phone: string; 
        email: string; 
        address: {
            city: string}
        }
    } = OfficeInfo;


/////////////////////////////////////////////////////////

const enum QuestionStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}
async function getFaqs(req: {
    topicID: number;
    status: QuestionStatus
}): Promise<{
    question: string;
    answer: string;
    tags: string[]; //массив стрингов
    likes: number;
    status: QuestionStatus;
}[]>{
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
