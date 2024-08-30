import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  country = "";
  countries = [
    {
      name: 'India',
      description: 'India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by land area, the second-most populous country, and the most populous democracy in the world.'
    },
    {
      name: 'USA',
      description: 'The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major self-governing territories, and various possessions.'
    },
    {
      name: 'China',
      description: 'China, officially the People\'s Republic of China (PRC), is a country in East Asia. It is the world\'s most populous country, with a population of over 1.4 billion.'
    },
    {
      name: 'Pakistan',
      description: 'Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the world\'s fifth-most populous country, with a population exceeding 225 million people.'
    },
    {
      name: 'Japan',
      description: 'Japan, known as Nihon or Nippon in Japanese, is an island country in East Asia. It is located in the Pacific Ocean, and it consists of four main islands and numerous smaller islands.'
    },
    {
      name: 'Russia',
      description: 'Russia, officially the Russian Federation, is the largest country in the world by land area, covering more than one-eighth of the Earth\'s inhabited land area. It spans eleven time zones and has a wide range of environments and landforms.'
    },
    {
      name: 'Indonesia',
      description: 'Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania, between the Indian and Pacific oceans. It consists of more than seventeen thousand islands, including Sumatra, Java, Borneo (Kalimantan), Sulawesi, and Papua.'
    },
    {
      name: 'UK',
      description: 'The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign country located off the northwestern coast of mainland Europe.'
    },
    {
      name: 'Nepal',
      description: 'Nepal, officially the Federal Democratic Republic of Nepal, is a landlocked country in South Asia. It is located mainly in the Himalayas, but also includes parts of the Indo-Gangetic Plain.'
    },
    {
      name: 'Bhutan',
      description: 'Bhutan, officially known as the Kingdom of Bhutan, is a landlocked country in South Asia. It is located in the Eastern Himalayas and bordered by China to the north and India to the south.'
    },
    {
      name: 'South Africa',
      description: 'South Africa, officially the Republic of South Africa (RSA), is a country located at the southern tip of Africa. It has a multiethnic society encompassing a wide variety of cultures, languages, and religions.'
    },
    {
      name: 'Australia',
      description: 'Australia, officially known as the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.'
    },
    {
      name: 'England',
      description: 'England is a country that is part of the United Kingdom. It shares land borders with Wales to its west and Scotland to its north.'
    },
    {
      name: 'London',
      description: 'London is the capital and largest city of England and the United Kingdom. It is one of the world\'s most important global cities and has been termed the world\'s most powerful, most desirable, most influential, most visited, most expensive, sustainable, innovative, and most investment-friendly.'
    }
  ];
  
  action2(event:any):void{
    this.country = event.target.value;
  }

}
