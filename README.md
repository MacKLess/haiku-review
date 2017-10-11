# Haiku Review

#### _Epicodus Two Day Project JavaScript Week 1, 10/11/17_

#### _**L. Devin MacKrell**_

## Description

_An app that determines whether an inputted poem is a haiku. If it meets the haiku requirements, it will be returned in haiku format._

## Setup/Installation Requirements

* Clone this repository at [github.com/MackLess/haiku-review](https://github.com/MacKLess/haiku-review.git)
<!-- This section needs to be updated
* Ensure you have Postgres installed and running ([instructions here](https://www.learnhowtoprogram.com/ruby/ruby-database-basics/installing-postgres-7fb0cff7-a0f5-4b61-a0db-8a928b9f67ef))
* Create a database ```shoes_for_you_development``` by running the command ```createdb -T template0 shoes_for_you_development```
* Run the command ```psql shoes_for_you_development < my_database.sql``` in the project root directory
* Run the command ```ruby app.rb``` in the project root directory
* Open ```localhost:4567``` in your web browser -->

## Specifications

* _The app will count the number of syllables._
* _All vowels in the input will be counted._
* _If an "e" ends a word, it will not be counted._
* _When a vowel follows another vowel in a word, it will not be counted._
* _The number of vowels = the number of syllables._
* _If the syllables do not equal 17, return "this is not a haiku."_
* _If there are 17 syllables in the input, the input will be returned in the following format: 5, 7, 5._
* _Syllables 1-5 will be returned in the first line._
* _Syllables 6-12 will be returned in the second line._
* _Syllables 13-17 will be returned in the third line._

## Bugs

_There are no known bugs._

## Support and contact details

_Please contact [ldmackrell@gmail.com](mailto:ldmackrell@gmail.com) with questions, comments, or issues, or if you would like to contribute to the code._

## Technologies Used

* JavaScript
* jQuery
* Jasmine
* Karma

### License

Copyright (c) 2017 **L. Devin MacKrell**

*Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*
