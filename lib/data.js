const Airtable = require('airtable');

const base = new Airtable({ apiKey: 'patr5LyzFGyLcGFV1.1e042019e262b9394b9129375034b7eb20a6e59984d52e59d121ac0c0fd21f25' }).base('appGQR3YLk3KQzD6a');

export async function getEvents() {
  const records = await base('Table 1').select().all();

  const events = records.map(record => ({
    id: record.id,
    slug: '',
    title: record.fields['Title'],
    desc: record.fields['Description'],
    leader: record.fields['Leader'],
    cal: record.fields['Calendar Link'],
    start: record.fields['Start Time'],
    end: record.fields['End Time'], 
    youtube:null,
    ama: false,
    amaForm: false,
    amaId: '',
    amaAvatar:'',
    avatar:'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/81/shrug_1f937.png'
  }));
  console.log(events);
  return events;
}