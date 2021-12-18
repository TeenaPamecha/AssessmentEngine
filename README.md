# AssessmentEngineApplication
Create an assessment engine (series of questions which are scored) using Angular 6+ in form of an web application where the content will be present in an external JSON file (which will be loaded in the application using http service only). The solution should follow Angular coding best practices. Implementation of all the features mentioned below is mandatory.

Features: 
a.	The type of question can be either single choice (radio button) or multiple choice (checkbox). 
b.	Each question will be tagged to one of the 4 pre-defined categories.
c.	The information related to no of questions to be displayed from the question bank, type of question, no. of options in each question, and the correct answers for specific question will be available in the external data file. 
d.	The questions should be presented randomly (from a bank of questions) one at a time. 
e.	The user needs to select the correct option(s) related to each question and click on the Submit button to register their response with the system. User can choose to skip a question.
f.	To move to the next question, user need to click on the Next button. 
g.	The Previous button in the screen will allow user to go back and re-visits the answers already given.
h.	When the screen loads the Submit and Next buttons will be in a disabled state. When the user chooses an answer, the submit button will become active. Once the user registers answer for a question, the Next button will become active. The Skip and Previous buttons will be active all the time and allow user to skip and move to next question or go back to the previous questions already answered respectively.
i.	The application should have at least two components (questions and results). Once the user finishes going through all the questions, 
s/he will have the option to Submit the assessment. In case s/he has skipped any question, a warning message will appear reminding her the same.
 S/he can decide to cancel Submit and re-visit the questions s/he has skipped. If the user hasn’t skipped any question or decides to go ahead
 with the Submit (in case any skipped question is present), s/he will be routed to a Result page which will display the performance of the 
 user by listing the no of questions answered correctly or incorrectly and no of questions skipped.
 
j.	The system should also track the option-choices made by the user against each question. A pie chart should plot answered against skipped questions. 
On click on the Answered part the graph will drill down to display the category-wise number. On click on individual categories, further drill down 
should display respective performance details (correct vs incorrect response). 

Note: 
1.	For point j, only third-party libraries which are free, can be used.
2.	The UI layout is not important for this assignment. The proper implementation of functionality and coding standard is of higher priority.
