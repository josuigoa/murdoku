export interface NamedPerson {
  name: string
  gender: 'm' | 'f'
}

// 20 male + 20 female per starting letter (variety across generated levels).
const MALE: Record<string, string[]> = {
  A: ['Aiert', 'Andoni', 'Ander', 'Antton', 'Aritz', 'Ametz', 'Arkaitz', 'Aitzol', 'Andde', 'Aner', 'Anartz', 'Adei', 'Arai', 'Aiur', 'Aimar', 'Adur', 'Agoitz', 'Amets'],
  B: ['Beñat', 'Bittor', 'Beñardo', 'Bernat', 'Battita', 'Barttolo', 'Bixente', 'Bertolo', 'Bikendi', 'Bingen'],
//   C: ['Cyrus', 'Carl', 'Curtis', 'Christian', 'Conor', 'Cedric', 'Cem', 'Claudio', 'Cornelius', 'Connor', 'Caspar', 'Can', 'Carlo', 'Colin', 'Constantin', 'Chris', 'Carsten', 'Cassius', 'Cliff', 'Cetin'],
  D: ['Domiku', 'Durruma', 'Dominik', 'Dabid', 'Dario', 'Denis', 'Damian', 'Dino', 'Dilan'],
  E: ['Egoitz', 'Eneko', 'Eki', 'Ekhi', 'Ekai', 'Ekain', 'Ekaitz', 'Eleder', 'Ellande', 'Enaitz', 'Enekoitz', 'Erdain', 'Erlantz', 'Etxahun'],
  F: ['Fausto', 'Fred', 'Floyd', 'Finn', 'Felix', 'Frank', 'Florindo', 'Fernando', 'Florian', 'Fortun'],
  G: ['Galder', 'Gaizka', 'Gari', 'Garikoitz', 'Gartxot', 'Gartzea', 'Gaston', 'Gotzon', 'Gexan'],
  H: ['Haritz', 'Harri', 'Hedoi', 'Hodei', 'Hegoi', 'Hektor', 'Haimar', 'Hasier', 'Haitz'],
  I: ['Ibai', 'Igor', 'Iban', 'Ibon', 'Inge', 'Ignazio', 'Igotz', 'Iker', 'Iñigo', 'Iñaki', 'Inar', 'Inhar', 'Iraitz', 'Izei', 'Ioritz'],
  J: ['Jakes', 'Jon', 'Josu', 'Joseba', 'Julen', 'Jokin', 'Joritz', 'Jurgi', 'Jaso', 'Jatsu'],
  K: ['Kaiet', 'Kai', 'Karmel', 'Kemen', 'Kepa', 'Kimetz', 'Koldo', 'Kirmen'],
  L: ['Laurentzi', 'Lier', 'Lizar', 'Lander', 'Lukas', 'Luken', 'Luka', 'Linus'],
  M: ['Mikel', 'Markel', 'Mattin', 'Martin', 'Mikelats', 'Mitxel', 'Mairu'],
}

const FEMALE: Record<string, string[]> = {
  A: ['Arhane', 'Aiane', 'Ariane', 'Ane', 'Aloña', 'Aiora', 'Arantza', 'Anne', 'Andone', 'Andere', 'Arene', 'Amaia', 'Ainhoa', 'Ainhize', 'Aintzane'],
  B: ['Bakarne', 'Bakartxo', 'Batirtze', 'Barbara', 'Bea', 'Batiste', 'Begoña', 'Beñate', 'Bikuña', 'Bittori'],
//   C: ['Carol', 'Cleo', 'Clara', 'Chiara', 'Carla', 'Celine', 'Catrin', 'Cora', 'Cynthia', 'Constanze', 'Cecilia', 'Charlotte', 'Cilia', 'Carmen', 'Cira', 'Coco', 'Caren', 'Carina', 'Camille', 'Cathy'],
  D: ['Dominika', 'Dorleta', 'Diana', 'Deñe', 'Dunixe', 'Dalia', 'Donixi', 'Dominika', 'Dorotea'],
  E: ['Eider', 'Ederne', 'Eider', 'Eila', 'Edurne', 'Elsa', 'Erika', 'Ekia', 'Ekiñe', 'Elaia', 'Elene', 'Elixabete', 'Estitxu', 'Eluska', 'Eneritz', 'Eresti', 'Eukene', 'Eunate'],
  F: ['Felixa', 'Frantxiska', 'Frantxia', 'Frida', 'Fatima', 'Frantziska'],
  G: ['Goretti', 'Gabone', 'Garbiñe', 'Gartze', 'Gartzene', 'Gentzane', 'Gizane', 'Goiatz', 'Goizeder', 'Goizane', 'Gotzone'],
  H: ['Haizea', 'Haizene', 'Haizeder', 'Helena', 'Hegoa', 'Hilde', 'Hodei'],
  I: ['Izar', 'Ines', 'Ibabe', 'Izaro', 'Idoia', 'Iraia', 'Ignazia', 'Igone', 'Izar', 'Ihintza', 'Intza', 'Ioar', 'Irune', 'Ihurre', 'Ilargi', 'Ilazki', 'Irantzu', 'Irati', 'Iratxe', 'Iruna', 'Itsaso', 'Itxaro', 'Ixone'],
  J: ['Jone', 'Jaione', 'Joana', 'Jare', 'Jasone', 'Joane', 'Josune', 'Joar', 'June', 'Josebe', 'Josune', 'Jule', 'Julene'],
  K: ['Kattalin', 'Karmele', 'Katixa', 'Klara', 'Koldobike', 'Koro', 'Keyla', 'Kiara'],
  L: ['Lide', 'Libe', 'Laida', 'Leire', 'Laia', 'Lina', 'Laiene', 'Lierni', 'Larraitz', 'Larrauri', 'Lea', 'Lexuri', 'Lohizune', 'Lore', 'Lorea', 'Lur'],
  M: ['Maddalen', 'Maddi', 'Miren', 'Maialen', 'Maider', 'Maier', 'Maitane', 'Maite', 'Maiteder', 'Malen', 'Maren', 'Matxalen', 'Mendia', 'Mikele'],
}

// Victims always start with V (≥20).
const VICTIMS: NamedPerson[] = [
  m('Viktor'), m('Viraj'), m('Vincent'), m('Valentin'), m('Vito'), m('Vasiliy'),
  m('Vlad'), m('Veit'), m('Volker'), m('Victor'), m('Vivek'), m('Vidal'),
  f('Vicky'), f('Vera'), f('Vanessa'), f('Valentina'), f('Viola'), f('Vivian'),
  f('Verena'), f('Valerie'), f('Veronika'), f('Victoria'), f('Vita'), f('Vesna'),
]

function m(name: string): NamedPerson {
  return { name, gender: 'm' }
}
function f(name: string): NamedPerson {
  return { name, gender: 'f' }
}

/** A distinct named person for each suspect index (0 = A, 1 = B, …). */
export function suspectPerson(index: number, gender: 'm' | 'f', used: Set<string>): NamedPerson {
  if (index >= 2) index += 1;
  const letter = String.fromCharCode(65 + index)
  const bank = (gender === 'm' ? MALE : FEMALE)[letter] ?? [letter + index]
  const shuffledInd = [...Array(bank.length).keys()].sort(() => Math.random() - 0.5)

  for (const si of shuffledInd) {
    const name = bank[si]
    if (!used.has(name)) {
      used.add(name)
      return { name, gender }
    }
  }
  return { name: letter + index, gender }
}

export function victimPerson(rng: { int(max: number): number }): NamedPerson {
  return VICTIMS[rng.int(VICTIMS.length)]
}
