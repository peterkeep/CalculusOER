var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "acknowledements",
  "level": "1",
  "url": "acknowledements.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements    "
},
{
  "id": "Preface-NoteOnAI",
  "level": "1",
  "url": "Preface-NoteOnAI.html",
  "type": "Preface",
  "number": "",
  "title": "Disclosure about the Use of AI",
  "body": " Disclosure about the Use of AI  This book has been lovingly written by a human.  Me.  Peter Keep.  I have used a lot of different tools, both for inspiration and for actually creating resources for this book. None of those tools has involved any form of generative AI.  I could list all of the ways that I think using generative AI in education is, at minimum, problematic. More pointedly, I believe that it is unethical. More broadly, I believe that the use of generative AI for any use-case that I have encountered to be unethical.  In my classes, I try to help students realize the joy and value of working at something and creating something and struggling with something and knowing something. Giving worth to something, even an imperfect thing. Celebrating our accomplishments, even when (especially when?) there is room to grow in those accomplishments. And so I have taken that advice in the creation of this book. I have created a book that is definitely not perfect. I have struggled to write it. There are parts of it that could be (need to be) improved.  But I was the one that created it. I struggled with it. I know it.  I hope that this book can also be a useful tool for others to use, and I have left the copyright to be about as open as possible. Others can take this, use it, can change it, add to it, subtract from it, etc.  In leaving this copyright open for others to change this book, I cannot guarantee that every version of this book is free from the mindless and joyless output from some Large Language Model. But I want to leave this note up in hopes that anyone who does inject some output from some generative AI product into this book will take it down. If this note, or some statement similar to it, is not present in the version of the book you are accessing, please be cautious. Find a different calculus textbook to read!  Find something written by a human. Find the words of some other mathematician who tries, maybe imperfectly, to share the ideas of calculus.  Teaching and learning is about humans communicating with each other, and only humans can do that.  "
},
{
  "id": "preface-ForInstructors",
  "level": "1",
  "url": "preface-ForInstructors.html",
  "type": "Preface",
  "number": "",
  "title": "Notes for Instructors",
  "body": " Notes for Instructors    "
},
{
  "id": "preface-ForStudents",
  "level": "1",
  "url": "preface-ForStudents.html",
  "type": "Preface",
  "number": "",
  "title": "Notes for Students",
  "body": " Notes for Students    "
},
{
  "id": "sec-IntroLimits",
  "level": "1",
  "url": "sec-IntroLimits.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to Limits",
  "body": " Introduction to Limits   Almost 2,500 years ago, the Greek philosopher Zeno of Elea gifted the world with a set of philosophical paradoxes that provide the foundation for how we will begin our study of calculus. Perhaps the most famous of Zeno's paradoxes is the paradox of Achilles and the Tortoise.    Achilles and the Tortoise  In the paradox of Achilles and the Tortoise, the Greek hero Achilles is in a race with a tortoise. Obviously the tortoise is much slower than Achilles, and so the tortoise gets a 100m head start. The race begins, and while the tortoise moves as quickly as it can, Achilles has the obvious advantage. They both are running at a constant speed, with Achilles running faster. Achilles runs 100m, catching up to the tortoise's starting point.  In the meantime, the tortoise has moved 2 meters. Achilles has almost caught up and passed the tortoise at this point! In a very short time, Achilles is able to run the 2 meters to catch up to where the tortoise was. Unfortunately, in that short amount of time, the tortoise has kept on moving, and is farther along by now.  Every time Achilles catches up to where the tortoise was, the tortoise has moved farther along, and Achilles has to keep catching up.  Can Achilles, the paragon of athleticism, ever catch the tortoise?    A Modern Retelling  A college student is excited about having enrolled in their first calculus class. On the first day of class, they head to class. When they enter the hallway with their classroom at the end, they take a breath and excitedly head to class.  In order to get to class, though, they have to travel halfway down the hallway. Almost there.  Now, to go the rest of the way, the student will half to get to the point that is halfway between them and the door. Getting closer.  They're getting excited. Finally, their first calculus class! But to get to the class, they have to reach the point halfway between them and the door.  Their smile starts fading. They repeat the process, and go halfway from their position to the door. They're closer, but not there yet.  If they keep having to reach the new halfway point, and that halfway point is never actually at the door, then will they ever get there?  Halfway to the door, then halfway again, closer and closer without ever getting there.  Will the student ever get there, or are they doomed to keep getting closer and closer without ever reaching the door?   "
},
{
  "id": "sec-DefinitionOfLimits",
  "level": "1",
  "url": "sec-DefinitionOfLimits.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Definition of the Limit",
  "body": " The Definition of the Limit   Defining a Limit   Close or Not?   We're going to try to think how we might define \"close\"-ness as a property, but, more importantly, we're going to try to realize the struggle of creating definitions in a mathematical context. We want our definition to be meaningful, precise, and useful, and those are hard goals to reach! Coming to some agreement on this is a particularly tricky task.    For each of the following pairs of things, decide on which pairs you would classify as \"close\" to each other.   You, right now, and the nearest city with a population of 1 million or higher    Your two nostrils    You and the door of the room you are in    You and the person nearest you    The floor of the room you are in and the ceiling of the room you are in       For your classification of \"close,\" what does \"close\" mean? Finish the sentence: A pair of objects are close to each other if...    Let's think about how close two things would have to be in order to satisfy everyone's definition of \"close.\" Pick two objects that you think everyone would agree are \"close,\" if by \"everyone\" we meant:   All of the people in the building you are in right now.    All of the people in the city that you are in right now.    All of the people in the country that you are in right now.    Everyone, everywhere, all at once.       Let's put ourselves into the context of functions and numbers. Consider the linear function . Our goal is to find some -values that, when we put them into our function, give us -value outputs that are \"close\" to the number 2. You get to define what close means.  First, evaluate and . Are these -values \"close\" to 2, in your definition of \"close?\"    Pick five more, different, numbers that are \"close\" to 2 in your definition of \"close.\" For each one, find the -values that give you those -values.    How far away from can you go and still have -value outputs that are \"close\" to 2?    To wrap this up, think about your points that you have: you have a list of -coordinates that are clustered around where, when you evaluate at those -values, you get -values that are \"close\" to 2. Great!  Do you think others will agree? Or do you think that other people might look at your list of -values and decide that some of them aren't close to 2?  Do you think you would agree with other peoples' lists? Or you do think that you might look at other peoples' lists of -values and decide that some of them aren't close to 2?     Limit of a Function   For the function defined at all -xalues around (except maybe at itself), we say that the limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but not equal to, . We write this as: or sometimes we write when .    When we say \"around \", we really just mean on either side of it. We can clarify if we want.   Left-Sided Limit   For the function defined at all -xalues around and less than , we say that the left-sided limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but less than, . We write this as: or sometimes we write when .     Right-Sided Limit   For the function defined at all -xalues around and greater than , we say that the right-sided limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but greater than, . We write this as: or sometimes we write when .     Mismatched Limits   For a function , if both , then we say that does not exist. That is, there is no single real number that is arbitrarily close to for -values that are sufficiently close to, but not equal to, .      Approximating Limits Using Our New Definition   Approximating Limits   For each of the following graphs of functions, approximate the limit in question. When you do so, approximate the values of the relevant one-sided limits as well.    Approximate using the graph of the function below.     A decreasing linear function with a single point removed from the line. At the x-value x=1, there is a hole on the line at y=1, and a point is located at (1,0).      Approximate using the graph of the function below.     A piecewise defined function, where the graph is split up into two sections around x=2. For x-values less than (and equal) to 2, the function is decreasing and curves downward towards a filled in point at (2,1). Then the graph drops to an open point at (2,0), where the graph is linear and increasing afterwards from that hole.      Approximate the following three limits using the graph of the function below.                      A piecewise-defined fucntion with three distinct pieces. For x-values less than -1, the graph is increasing and curves towards an open hole at (-1,0). Then, at x=-1, we have a point at (-1,1). The graph is constant at y=1 until a hole at (0,1). After this hole, it decreases from (0,1) towards and through (3,0) linearly.      Why do we say these are \"approximations\" or \"estimations\" of the limits we're interested in?    Are there any limit statements that you made that you are 100% confident in? Which ones?    Which limit statements are you least confident in? What about them makes them ones you aren't confident in?    What extra details would you like to see to increase the confidence in your estimations? Are there changes we could make to the way these functions are represented that would make these approximations better or easier to make?     Approximating Limits Numerically   For each of the following tables of function values, approximate the limit in question. When you do so, approximate the values of the relevant one-sided limits as well.    Approximate using the table of values of below.        0.5  0.9  0.99  1  1.01  1.1  1.5     8.672  9.2  9.0001  -7  8.9998  9.5  7.59       Approximate using the table of values of below.        -3.5  -3.1  -3.01  -3  -2.99  -2.9  -2.5     -4.41  -3.89  -4.003  -4  7.035  2.06  -4.65       Approximate using the table of values of below.        3.1  3.14  3.141     3.142  3.15  3.2     6  6  6  undefined  5.915  6.75  8.12       Are you 100% confident about the existence (or lack of existence) of any of these limits?    What extra details would you like to see to increase the confidence in your estimations? Are there changes we could make to the way these functions are represented that would make these approximations better or easier to make?     "
},
{
  "id": "act-CloseOrNot",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#act-CloseOrNot",
  "type": "Activity",
  "number": "1.2.1",
  "title": "Close or Not?",
  "body": " Close or Not?   We're going to try to think how we might define \"close\"-ness as a property, but, more importantly, we're going to try to realize the struggle of creating definitions in a mathematical context. We want our definition to be meaningful, precise, and useful, and those are hard goals to reach! Coming to some agreement on this is a particularly tricky task.    For each of the following pairs of things, decide on which pairs you would classify as \"close\" to each other.   You, right now, and the nearest city with a population of 1 million or higher    Your two nostrils    You and the door of the room you are in    You and the person nearest you    The floor of the room you are in and the ceiling of the room you are in       For your classification of \"close,\" what does \"close\" mean? Finish the sentence: A pair of objects are close to each other if...    Let's think about how close two things would have to be in order to satisfy everyone's definition of \"close.\" Pick two objects that you think everyone would agree are \"close,\" if by \"everyone\" we meant:   All of the people in the building you are in right now.    All of the people in the city that you are in right now.    All of the people in the country that you are in right now.    Everyone, everywhere, all at once.       Let's put ourselves into the context of functions and numbers. Consider the linear function . Our goal is to find some -values that, when we put them into our function, give us -value outputs that are \"close\" to the number 2. You get to define what close means.  First, evaluate and . Are these -values \"close\" to 2, in your definition of \"close?\"    Pick five more, different, numbers that are \"close\" to 2 in your definition of \"close.\" For each one, find the -values that give you those -values.    How far away from can you go and still have -value outputs that are \"close\" to 2?    To wrap this up, think about your points that you have: you have a list of -coordinates that are clustered around where, when you evaluate at those -values, you get -values that are \"close\" to 2. Great!  Do you think others will agree? Or do you think that other people might look at your list of -values and decide that some of them aren't close to 2?  Do you think you would agree with other peoples' lists? Or you do think that you might look at other peoples' lists of -values and decide that some of them aren't close to 2?   "
},
{
  "id": "def-Limit",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#def-Limit",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Limit of a Function.",
  "body": " Limit of a Function   For the function defined at all -xalues around (except maybe at itself), we say that the limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but not equal to, . We write this as: or sometimes we write when .   "
},
{
  "id": "def-LeftSidedLimit",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#def-LeftSidedLimit",
  "type": "Definition",
  "number": "1.2.2",
  "title": "Left-Sided Limit.",
  "body": " Left-Sided Limit   For the function defined at all -xalues around and less than , we say that the left-sided limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but less than, . We write this as: or sometimes we write when .   "
},
{
  "id": "def-RightSidedLimit",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#def-RightSidedLimit",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Right-Sided Limit.",
  "body": " Right-Sided Limit   For the function defined at all -xalues around and greater than , we say that the right-sided limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but greater than, . We write this as: or sometimes we write when .   "
},
{
  "id": "thm-LimitExistence",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#thm-LimitExistence",
  "type": "Theorem",
  "number": "1.2.4",
  "title": "Mismatched Limits.",
  "body": " Mismatched Limits   For a function , if both , then we say that does not exist. That is, there is no single real number that is arbitrarily close to for -values that are sufficiently close to, but not equal to, .   "
},
{
  "id": "act-ApproximatingLimitsGraphically",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#act-ApproximatingLimitsGraphically",
  "type": "Activity",
  "number": "1.2.2",
  "title": "Approximating Limits.",
  "body": " Approximating Limits   For each of the following graphs of functions, approximate the limit in question. When you do so, approximate the values of the relevant one-sided limits as well.    Approximate using the graph of the function below.     A decreasing linear function with a single point removed from the line. At the x-value x=1, there is a hole on the line at y=1, and a point is located at (1,0).      Approximate using the graph of the function below.     A piecewise defined function, where the graph is split up into two sections around x=2. For x-values less than (and equal) to 2, the function is decreasing and curves downward towards a filled in point at (2,1). Then the graph drops to an open point at (2,0), where the graph is linear and increasing afterwards from that hole.      Approximate the following three limits using the graph of the function below.                      A piecewise-defined fucntion with three distinct pieces. For x-values less than -1, the graph is increasing and curves towards an open hole at (-1,0). Then, at x=-1, we have a point at (-1,1). The graph is constant at y=1 until a hole at (0,1). After this hole, it decreases from (0,1) towards and through (3,0) linearly.      Why do we say these are \"approximations\" or \"estimations\" of the limits we're interested in?    Are there any limit statements that you made that you are 100% confident in? Which ones?    Which limit statements are you least confident in? What about them makes them ones you aren't confident in?    What extra details would you like to see to increase the confidence in your estimations? Are there changes we could make to the way these functions are represented that would make these approximations better or easier to make?   "
},
{
  "id": "act-ApproximateLimitsNumerically",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#act-ApproximateLimitsNumerically",
  "type": "Activity",
  "number": "1.2.3",
  "title": "Approximating Limits Numerically.",
  "body": " Approximating Limits Numerically   For each of the following tables of function values, approximate the limit in question. When you do so, approximate the values of the relevant one-sided limits as well.    Approximate using the table of values of below.        0.5  0.9  0.99  1  1.01  1.1  1.5     8.672  9.2  9.0001  -7  8.9998  9.5  7.59       Approximate using the table of values of below.        -3.5  -3.1  -3.01  -3  -2.99  -2.9  -2.5     -4.41  -3.89  -4.003  -4  7.035  2.06  -4.65       Approximate using the table of values of below.        3.1  3.14  3.141     3.142  3.15  3.2     6  6  6  undefined  5.915  6.75  8.12       Are you 100% confident about the existence (or lack of existence) of any of these limits?    What extra details would you like to see to increase the confidence in your estimations? Are there changes we could make to the way these functions are represented that would make these approximations better or easier to make?   "
},
{
  "id": "sec-EvaluatingLimits",
  "level": "1",
  "url": "sec-EvaluatingLimits.html",
  "type": "Section",
  "number": "1.3",
  "title": "Evaluating Limits",
  "body": " Evaluating Limits   Adding Precision to Our Estimations   From Estimating to Evaluating Limits (Part 1)   Let's consider the following graphs of functions and .    The function decreases linearly towards (1,1), but has a hole there. After the holw the function increases away from this point. There is a point above the curve at (1,3).   Graph of the function .     The graph increases until (1,3) and then decreases down to the filled in point at (2,2). There is a jump down towards an open point at (2,1). The function continues decreasing from here until (3,0), where it starts increasing again.   Graph of the function .       Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                     Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                     Find the values of and .    For the limits and function values above, which of these are you most confident in? What about the limit, function value, or graph of the function makes you confident about your answer?  Similarly, which of these are you the least confident in? What about the limit, function value, or graph of the function makes you not have confidence in your answer?     From Estimating to Evaluating Limits (Part 2)   Let's consider the following graphs of functions and , now with the added labels of the equations defining each part of these functions.    The function decreases linearly towards (1,1), but has a hole there. After the holw the function increases away from this point. There is a point above the curve at (1,3). The graph also has the function labeled on it: y=2-x when x is less than 1, and y = x^2\/4 - x\/2 + 5\/4 when x is greater than 1.   Graph of the function .     The graph increases until (1,3) and then decreases down to the filled in point at (2,2). There is a jump down towards an open point at (2,1). The function continues decreasing from here until (3,0), where it starts increasing again. The graph also has the function labeled on it: y=3-(x-1)^2 when x is less than or equal to 2, and y=(x-3)^2 when x is greater than 2.   Graph of the function .       Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                     Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                     Does the addition of the function rules change the level of confidence you have in these answers? What limits are you more confident in with this added information?    Consider these functions without their graphs:  Find the limits and . Compare these values of and : are they related at all?      Limit Properties   Combinations of Limits   If and are two functions defined at -values around, but maybe not at, and and both exist, then we can evaluate limits of combinations of these functions.     Sums: The limit of the sum of and is the sum of the limits of and :      Differences: The limit of a difference of and is the difference of the limits of and :      Coefficients: If is some real number coefficient, then:      Products: The limit of a product of and is the product of the limits of and :      Quotients: The limit of a quotient of and is the quotient of the limits of and (provided that you do not divide by 0):        Limits of Two Basic Functions   Let be some real number.    Limit of a Constant Function: If is some real number constant, then:      Limit of the Identity Function:          Limits of Polynomial Functions   We're going to use a combination of properties from and to think a bit more deeply about polynomial functions. Let's consider a polynomial function:     We're going to evaluate the limit . First, use the properties from to re-write this limit as 4 different limits added or subtracted together.        Now, for each of these limits, re-write them as products of things until you have only limits of constants and identity functions, as in . Evaluate your limits.        Based on the definition of a limit ( ), we normally say that is not dependent on the value of . Why do we say this?    Compare the values of and . Why do these values feel connected?    Come up with a new polynomial function: some combination of coefficients with 's raised to natural number exponents. Call your new polynomial function . Evaluate and compare the value to . Explain why these values are the same.    Explain why, for any polynomial function , the limit is the same value as .     Limits of Polynomials   If is a polynomial function and is some real number, then:      "
},
{
  "id": "act-EstimatingToEvaluating-1",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#act-EstimatingToEvaluating-1",
  "type": "Activity",
  "number": "1.3.1",
  "title": "From Estimating to Evaluating Limits (Part 1).",
  "body": " From Estimating to Evaluating Limits (Part 1)   Let's consider the following graphs of functions and .    The function decreases linearly towards (1,1), but has a hole there. After the holw the function increases away from this point. There is a point above the curve at (1,3).   Graph of the function .     The graph increases until (1,3) and then decreases down to the filled in point at (2,2). There is a jump down towards an open point at (2,1). The function continues decreasing from here until (3,0), where it starts increasing again.   Graph of the function .       Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                     Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                     Find the values of and .    For the limits and function values above, which of these are you most confident in? What about the limit, function value, or graph of the function makes you confident about your answer?  Similarly, which of these are you the least confident in? What about the limit, function value, or graph of the function makes you not have confidence in your answer?   "
},
{
  "id": "act-EstimatingToEvaluating-2",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#act-EstimatingToEvaluating-2",
  "type": "Activity",
  "number": "1.3.2",
  "title": "From Estimating to Evaluating Limits (Part 2).",
  "body": " From Estimating to Evaluating Limits (Part 2)   Let's consider the following graphs of functions and , now with the added labels of the equations defining each part of these functions.    The function decreases linearly towards (1,1), but has a hole there. After the holw the function increases away from this point. There is a point above the curve at (1,3). The graph also has the function labeled on it: y=2-x when x is less than 1, and y = x^2\/4 - x\/2 + 5\/4 when x is greater than 1.   Graph of the function .     The graph increases until (1,3) and then decreases down to the filled in point at (2,2). There is a jump down towards an open point at (2,1). The function continues decreasing from here until (3,0), where it starts increasing again. The graph also has the function labeled on it: y=3-(x-1)^2 when x is less than or equal to 2, and y=(x-3)^2 when x is greater than 2.   Graph of the function .       Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                     Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                     Does the addition of the function rules change the level of confidence you have in these answers? What limits are you more confident in with this added information?    Consider these functions without their graphs:  Find the limits and . Compare these values of and : are they related at all?   "
},
{
  "id": "thm-CombinationsOfLimits",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#thm-CombinationsOfLimits",
  "type": "Theorem",
  "number": "1.3.5",
  "title": "Combinations of Limits.",
  "body": " Combinations of Limits   If and are two functions defined at -values around, but maybe not at, and and both exist, then we can evaluate limits of combinations of these functions.     Sums: The limit of the sum of and is the sum of the limits of and :      Differences: The limit of a difference of and is the difference of the limits of and :      Coefficients: If is some real number coefficient, then:      Products: The limit of a product of and is the product of the limits of and :      Quotients: The limit of a quotient of and is the quotient of the limits of and (provided that you do not divide by 0):      "
},
{
  "id": "thm-LimitsOfTwoFunctions",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#thm-LimitsOfTwoFunctions",
  "type": "Theorem",
  "number": "1.3.6",
  "title": "Limits of Two Basic Functions.",
  "body": " Limits of Two Basic Functions   Let be some real number.    Limit of a Constant Function: If is some real number constant, then:      Limit of the Identity Function:        "
},
{
  "id": "act-LimitsOfPolynomials",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#act-LimitsOfPolynomials",
  "type": "Activity",
  "number": "1.3.3",
  "title": "Limits of Polynomial Functions.",
  "body": " Limits of Polynomial Functions   We're going to use a combination of properties from and to think a bit more deeply about polynomial functions. Let's consider a polynomial function:     We're going to evaluate the limit . First, use the properties from to re-write this limit as 4 different limits added or subtracted together.        Now, for each of these limits, re-write them as products of things until you have only limits of constants and identity functions, as in . Evaluate your limits.        Based on the definition of a limit ( ), we normally say that is not dependent on the value of . Why do we say this?    Compare the values of and . Why do these values feel connected?    Come up with a new polynomial function: some combination of coefficients with 's raised to natural number exponents. Call your new polynomial function . Evaluate and compare the value to . Explain why these values are the same.    Explain why, for any polynomial function , the limit is the same value as .   "
},
{
  "id": "thm-LimitsOfPolynomials",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#thm-LimitsOfPolynomials",
  "type": "Theorem",
  "number": "1.3.7",
  "title": "Limits of Polynomials.",
  "body": " Limits of Polynomials   If is a polynomial function and is some real number, then:    "
},
{
  "id": "sec-IndeterminateForms",
  "level": "1",
  "url": "sec-IndeterminateForms.html",
  "type": "Section",
  "number": "1.4",
  "title": "First Indeterminate Forms",
  "body": " First Indeterminate Forms    Limits of (Slightly) Different Functions   Using the graph of below, approximate .   A graph of a decreasing function down to an open hole at (1,1). There is a point above the curve at (1,3). The graph continues from (1,1) and increases up to (3,3) where it begins decreasing.        Using the graph of the slightly different function below, approximate .   A graph of a decreasing function down to an open hole at (1,1). There is a point below the curve at (1,-1). The graph continues from (1,1) and increases up to (3,3) where it begins decreasing. It is the same graph as the function f(x) above other than the point at (1,3) being at (1,-1).        Compare the values of and and discuss the impact that this difference had on the values of the limits.    For the function defined below, evaluate the limit .     For the slightly different function defined below, evaluate the limit .     Do the changes in the way that the function was defined impact the evaluation of the limit at all? Why not?     Limits of (Slightly) Different Functions   If and are two functions defined at -values around (but maybe not at itself) with for the -values around but with then , if the limits exist.      A First Introduction to Indeterminate Forms   Indeterminate Form   We say that a limit has an indeterminate form if the general structure of the limit could take on any different value, or not exist, depending on the specific circumstances.  For instance, if and , then we say that the limit has an indeterminate form. We typically denote this using the informal symbol , as in: .      Were going to evaluate .   First, check that we get the indeterminate form when .    Now we want to find a new function that is equivalent to for all -values other than . Try factoring the numerator, . What do you notice?    \"Cancel\" out any factors that show up in the numerator and denominator. Make a special note about what that factor is.    This function is equivalent to except at . The difference is that this function has an actual function output at , while doesn't. Evaluate the limit as for your new function.       Now we'll evaluate a new limit: .   First, check that we get the indeterminate form when .    Now we want a new function that is equivalent to for all -values other than . Try multiplying the numerator and the denominator by . We'll call this the \"conjugate\" of the numerator.    In your multiplication, confirm that .    Try to factor the new numerator and denominator. Do you notice anything? Can you \"cancel\" anything? Make another note of what factor(s) you cancel.    This function is equivalent to except at . The difference is that this function has an actual function output at , while doesn't. Evaluate the limit as for your new function.       Our last limit in this activity is going to be .   Again, check to see that we get the indeterminate form when .    Again, we want a new function that is equivalent to for all -values other than . Try completing the subtraction in the numerator, , using \"common denominators.\"    Try to factor the new numerator and denominator(s). Do you notice anything? Can you \"cancel\" anything? Make another note of what factor(s) you cancel.    For the final time, we've found a function that is equivalent to except at . The difference is that this function has an actual function output at , while doesn't. Evaluate the limit as for your new function.       In each of the previous limits, we ended up finding a factor that was shared in the numerator and denominator to cancel. Think back to each example and the factor you found. Why is it clear that these must have been the factors we found to cancel?    Let's say we have some new function where . You know, based on these examples, that you're going to apply some algebra trick to re-write your function, factor, and cancel. Can you predict what you will end up looking for to cancel in the numerator and denominator? Why?      What if There Is No Algebra Trick?  We've seen some nice examples above where we were able to use some algebra to manipulate functions in such was as to force some shared factor in the numerator and denominator into revealing itself. From there, we were able to apply and swap out our problematic function with a new one, knowing that the limit would be the same.  But what if we can't do that? What if the specific structure of the function seems resistent somehow to our attempts at wielding algebra?  This happens a lot, and we'll investigate some more of those types of limits in . For now, though, let's look at a very famous limit and reason our way through the indeterminate form.    Let's consider a new limit: . This one is strange!    Notice that this function, , is resistent to our algebra tricks:   There's nothing to \"factor\" here, since our trigonometric function is not a polynomial.    We can't use a trick like the \"conjugate\" to multiply and re-write, since there's no square roots and also only one term in the numerator.    There aren't any fractions that we can combine by addition or subtraction.       Be frustrated at this new limit for resisting our algebra tricks.    Now let's think about the meaning of and even in general. In this text, we will often use Greek letters, like , to represent angles. In general, these angles will be measured in radians (unless otherwise specified). So what does the sine function do or tell us ? What is a radian?   On the unit circle, if we plot some point at an angle of , then the coordinates of that point can be represented with trig functions! Which ones?   The length of the curve defining a unit circle is . This also corresponds to the angle we would use to represent moving all the way around the circle. What must the length of the portion of the circle be up to some point at an angle ?    Let's visualize our limit, then, by comparing the length of the arc and the height of the point as .     Explain to yourself, until you are absolutely certain, why the two lengths must be the same in the limit as . What does this mean about ?     "
},
{
  "id": "act-SlightlyDifferentFunctions",
  "level": "2",
  "url": "sec-IndeterminateForms.html#act-SlightlyDifferentFunctions",
  "type": "Activity",
  "number": "1.4.1",
  "title": "Limits of (Slightly) Different Functions.",
  "body": " Limits of (Slightly) Different Functions   Using the graph of below, approximate .   A graph of a decreasing function down to an open hole at (1,1). There is a point above the curve at (1,3). The graph continues from (1,1) and increases up to (3,3) where it begins decreasing.        Using the graph of the slightly different function below, approximate .   A graph of a decreasing function down to an open hole at (1,1). There is a point below the curve at (1,-1). The graph continues from (1,1) and increases up to (3,3) where it begins decreasing. It is the same graph as the function f(x) above other than the point at (1,3) being at (1,-1).        Compare the values of and and discuss the impact that this difference had on the values of the limits.    For the function defined below, evaluate the limit .     For the slightly different function defined below, evaluate the limit .     Do the changes in the way that the function was defined impact the evaluation of the limit at all? Why not?   "
},
{
  "id": "thm-SlightlyDifferentFunctions",
  "level": "2",
  "url": "sec-IndeterminateForms.html#thm-SlightlyDifferentFunctions",
  "type": "Theorem",
  "number": "1.4.3",
  "title": "Limits of (Slightly) Different Functions.",
  "body": " Limits of (Slightly) Different Functions   If and are two functions defined at -values around (but maybe not at itself) with for the -values around but with then , if the limits exist.   "
},
{
  "id": "def-IndeterminateForm",
  "level": "2",
  "url": "sec-IndeterminateForms.html#def-IndeterminateForm",
  "type": "Definition",
  "number": "1.4.4",
  "title": "Indeterminate Form.",
  "body": " Indeterminate Form   We say that a limit has an indeterminate form if the general structure of the limit could take on any different value, or not exist, depending on the specific circumstances.  For instance, if and , then we say that the limit has an indeterminate form. We typically denote this using the informal symbol , as in: .   "
},
{
  "id": "act-IndeterminateForms",
  "level": "2",
  "url": "sec-IndeterminateForms.html#act-IndeterminateForms",
  "type": "Activity",
  "number": "1.4.2",
  "title": "",
  "body": "  Were going to evaluate .   First, check that we get the indeterminate form when .    Now we want to find a new function that is equivalent to for all -values other than . Try factoring the numerator, . What do you notice?    \"Cancel\" out any factors that show up in the numerator and denominator. Make a special note about what that factor is.    This function is equivalent to except at . The difference is that this function has an actual function output at , while doesn't. Evaluate the limit as for your new function.       Now we'll evaluate a new limit: .   First, check that we get the indeterminate form when .    Now we want a new function that is equivalent to for all -values other than . Try multiplying the numerator and the denominator by . We'll call this the \"conjugate\" of the numerator.    In your multiplication, confirm that .    Try to factor the new numerator and denominator. Do you notice anything? Can you \"cancel\" anything? Make another note of what factor(s) you cancel.    This function is equivalent to except at . The difference is that this function has an actual function output at , while doesn't. Evaluate the limit as for your new function.       Our last limit in this activity is going to be .   Again, check to see that we get the indeterminate form when .    Again, we want a new function that is equivalent to for all -values other than . Try completing the subtraction in the numerator, , using \"common denominators.\"    Try to factor the new numerator and denominator(s). Do you notice anything? Can you \"cancel\" anything? Make another note of what factor(s) you cancel.    For the final time, we've found a function that is equivalent to except at . The difference is that this function has an actual function output at , while doesn't. Evaluate the limit as for your new function.       In each of the previous limits, we ended up finding a factor that was shared in the numerator and denominator to cancel. Think back to each example and the factor you found. Why is it clear that these must have been the factors we found to cancel?    Let's say we have some new function where . You know, based on these examples, that you're going to apply some algebra trick to re-write your function, factor, and cancel. Can you predict what you will end up looking for to cancel in the numerator and denominator? Why?   "
},
{
  "id": "act-SinXOverX",
  "level": "2",
  "url": "sec-IndeterminateForms.html#act-SinXOverX",
  "type": "Activity",
  "number": "1.4.3",
  "title": "",
  "body": "  Let's consider a new limit: . This one is strange!    Notice that this function, , is resistent to our algebra tricks:   There's nothing to \"factor\" here, since our trigonometric function is not a polynomial.    We can't use a trick like the \"conjugate\" to multiply and re-write, since there's no square roots and also only one term in the numerator.    There aren't any fractions that we can combine by addition or subtraction.       Be frustrated at this new limit for resisting our algebra tricks.    Now let's think about the meaning of and even in general. In this text, we will often use Greek letters, like , to represent angles. In general, these angles will be measured in radians (unless otherwise specified). So what does the sine function do or tell us ? What is a radian?   On the unit circle, if we plot some point at an angle of , then the coordinates of that point can be represented with trig functions! Which ones?   The length of the curve defining a unit circle is . This also corresponds to the angle we would use to represent moving all the way around the circle. What must the length of the portion of the circle be up to some point at an angle ?    Let's visualize our limit, then, by comparing the length of the arc and the height of the point as .     Explain to yourself, until you are absolutely certain, why the two lengths must be the same in the limit as . What does this mean about ?   "
},
{
  "id": "sec-LimitsInvolvingInfinity",
  "level": "1",
  "url": "sec-LimitsInvolvingInfinity.html",
  "type": "Section",
  "number": "1.5",
  "title": "Limits Involving Infinity",
  "body": " Limits Involving Infinity   Two types of limits involving infinity. In both cases, we'll mostly just consider what happens when we divide by small things and what happens when we divide by big things. We can summarize this here, though:   Fractions with small denominators are big, and fractions with big denominators are small.     Infinite Limits   What Happens When We Divide by 0?   First, let's make sure we're clear on one thing: there is no real number than is represented as some other number divided by 0.  When we talk about \"dividing by 0\" here (and in ), we're talking about the behavior of some function in a limit. We want to consider what it might look like to have a function that involves division where the denominator gets arbitrarily close to 0 (or, the limit of the denominator is 0).    Remember when, once upon a time, you learned that dividing one a number by a fraction is the same as multiplying the first number by the reciprocal of the fraction? Why is this true?    What is the relationship between a number and its reciprocal? How does the size of a number impact the size of the reciprocal? Why?    Consider . What is the value of this division problem when:    ?     ?     ?     ?     ?       Let's again consider . What is the value of this division problem when:    ?     ?     ?     ?     ?       Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very small and positive.    Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very small and negative.     Infinite Limit   We say that a function has an infinite limit at if is arbitrarily large (positive or negative) when is sufficiently close to, but not equal to, .  We would then say, depending on the sign of the values of , that: . If the sign of both one-sided limits are the same, we can say that (depending on the sign), but it is helpful to note that, by the definition of the , this limit does not exist, since is not arbitrarily close to a single real number.     Dividing by 0 in a Limit   If with and , then has an at . We will often denote this behavior as: where is meant to be some shorthand representation of a non-zero limit in the numerator (often, but not necessarily, some real number).     Evaluating Infinite Limits  Once we know that , we know a bunch of information right away!   This limit doesn't exist.    The function has a vertical asymptote at , causing these unbounded -values near .    The one sided limits must be either or .    We only need to focus on the sign of the one sided limits! And signs of products and quotients are easy to follow.     So a pretty typical process is to factor as much as we can, and check the sign of each factor (in a numerator or denominator) as and . From there, we can find the sign of in both of those cases, which will tell us the one-sided limit.     For each function, find the relevant one-sided limits at the input-value mentioned. If you can use a two-sided limit statement to discuss the behavior of the function around this input-value, then do so.     and      and      and       End Behavior Limits   What Happens When We Divide by Infinity?   Again, we need to start by making something clear: if we were really going to try divide some real number by infinity, then we would need to re-build our definition of what it means to divide. In the context we're in right now, we only have division defined as an operation for real (and maybe complex) numbers. Since infinity is neither, then we will not literally divide by infinity.  When we talk about \"dividing by infinity\" here, we're again talking about the behavior of some function in a limit. We want to consider what it might look like to have a function that involves division where the denominator gets arbitrarily large (positive or negative) (or, the limit of the denominator is infinite).    Let's again consider . What is the value of this division problem when:    ?     ?     ?     ?     ?       Let's again consider . What is the value of this division problem when:    ?     ?     ?     ?     ?       Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very large and positive.    Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very large and negative.    Why is there no difference in the behavior of as compared to when the sign of the function outputs are opposite ( when and when )?     Limit at Infinity   If is defined for all large and positive -values and gets arbitrarily close to the single real number when gets sufficiently large, then we say: .  Similarly, if is defined for all large and negative -values and gets arbitrarily close to the single real number when gets sufficiently negative, then we say: .  In the case that has a limit at infinity that exists, then we say has a horizontal asymptote at .  Lastly, if is defined for all large and positive (or negative) -values and gets arbitrarily large and positive (or negative) when gets sufficiently large (or negative), then we could say: .    Because the primary focus for limits at infinity is the end behavior of a function, we will often refer to these limits as end behavior limits .   End Behavior of Reciprocal Power Functions   If is a positive real number, then: .     Polynomial End Behavior Limits   For some polynomial function: with a positive integer (the degree) and all of the coefficients real numbers (with ), then   That is, the leading term (the term with the highest exponent) defines the end behavior for the whole polynomial function.    Consider the polynomial function: where is some integer and is a real number for . For simplicity, we will consider only the limit as , but we could easily repeat this exact proof for the case where .  Before we consider this limit, we can factor out , the variable with the highest exponent: Now consider the limit of this product: We can see that in the second limit, we have a single constant term, , followed by reciprocal power functions. Then, due to , we know that the second limit will by , since the reciprocal power functions will all approach 0. And so as we claimed.      For each function, find the limits as and .                      Matching the Limits   We're going to look at four graphs of functions, as well as a list of limit statements. Match the limit statements with the graphs that match that behavior. Note that is is possible for a limit to be relevant on more than one graph.    Now consider these four function definitions. Using your knowledge of limits, as well as the matching you've already done, match the definitions of these four functions with the graphs that go with them, and then also the limits that are relevant. (These limits will already be matched with the graphs, so you don't need to do further work here).     "
},
{
  "id": "act-DivideBy0",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#act-DivideBy0",
  "type": "Activity",
  "number": "1.5.1",
  "title": "What Happens When We Divide by 0?",
  "body": " What Happens When We Divide by 0?   First, let's make sure we're clear on one thing: there is no real number than is represented as some other number divided by 0.  When we talk about \"dividing by 0\" here (and in ), we're talking about the behavior of some function in a limit. We want to consider what it might look like to have a function that involves division where the denominator gets arbitrarily close to 0 (or, the limit of the denominator is 0).    Remember when, once upon a time, you learned that dividing one a number by a fraction is the same as multiplying the first number by the reciprocal of the fraction? Why is this true?    What is the relationship between a number and its reciprocal? How does the size of a number impact the size of the reciprocal? Why?    Consider . What is the value of this division problem when:    ?     ?     ?     ?     ?       Let's again consider . What is the value of this division problem when:    ?     ?     ?     ?     ?       Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very small and positive.    Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very small and negative.   "
},
{
  "id": "def-InfiniteLimit",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#def-InfiniteLimit",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Infinite Limit.",
  "body": " Infinite Limit   We say that a function has an infinite limit at if is arbitrarily large (positive or negative) when is sufficiently close to, but not equal to, .  We would then say, depending on the sign of the values of , that: . If the sign of both one-sided limits are the same, we can say that (depending on the sign), but it is helpful to note that, by the definition of the , this limit does not exist, since is not arbitrarily close to a single real number.   "
},
{
  "id": "thm-DivBy0-InfiniteLimit",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#thm-DivBy0-InfiniteLimit",
  "type": "Theorem",
  "number": "1.5.2",
  "title": "Dividing by 0 in a Limit.",
  "body": " Dividing by 0 in a Limit   If with and , then has an at . We will often denote this behavior as: where is meant to be some shorthand representation of a non-zero limit in the numerator (often, but not necessarily, some real number).   "
},
{
  "id": "subsec-InfiniteLimits-6",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#subsec-InfiniteLimits-6",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": "  For each function, find the relevant one-sided limits at the input-value mentioned. If you can use a two-sided limit statement to discuss the behavior of the function around this input-value, then do so.     and      and      and    "
},
{
  "id": "act-DivideByInfinity",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#act-DivideByInfinity",
  "type": "Activity",
  "number": "1.5.2",
  "title": "What Happens When We Divide by Infinity?",
  "body": " What Happens When We Divide by Infinity?   Again, we need to start by making something clear: if we were really going to try divide some real number by infinity, then we would need to re-build our definition of what it means to divide. In the context we're in right now, we only have division defined as an operation for real (and maybe complex) numbers. Since infinity is neither, then we will not literally divide by infinity.  When we talk about \"dividing by infinity\" here, we're again talking about the behavior of some function in a limit. We want to consider what it might look like to have a function that involves division where the denominator gets arbitrarily large (positive or negative) (or, the limit of the denominator is infinite).    Let's again consider . What is the value of this division problem when:    ?     ?     ?     ?     ?       Let's again consider . What is the value of this division problem when:    ?     ?     ?     ?     ?       Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very large and positive.    Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very large and negative.    Why is there no difference in the behavior of as compared to when the sign of the function outputs are opposite ( when and when )?   "
},
{
  "id": "def-LimitAtInfinity",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#def-LimitAtInfinity",
  "type": "Definition",
  "number": "1.5.4",
  "title": "Limit at Infinity.",
  "body": " Limit at Infinity   If is defined for all large and positive -values and gets arbitrarily close to the single real number when gets sufficiently large, then we say: .  Similarly, if is defined for all large and negative -values and gets arbitrarily close to the single real number when gets sufficiently negative, then we say: .  In the case that has a limit at infinity that exists, then we say has a horizontal asymptote at .  Lastly, if is defined for all large and positive (or negative) -values and gets arbitrarily large and positive (or negative) when gets sufficiently large (or negative), then we could say: .   "
},
{
  "id": "subsec-EndBehaviorLimits-4",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#subsec-EndBehaviorLimits-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "end behavior limits "
},
{
  "id": "thm-EndBehaviorReciprocalPower",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#thm-EndBehaviorReciprocalPower",
  "type": "Theorem",
  "number": "1.5.5",
  "title": "End Behavior of Reciprocal Power Functions.",
  "body": " End Behavior of Reciprocal Power Functions   If is a positive real number, then: .   "
},
{
  "id": "thm-PolynomialEndBehavior",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#thm-PolynomialEndBehavior",
  "type": "Theorem",
  "number": "1.5.6",
  "title": "Polynomial End Behavior Limits.",
  "body": " Polynomial End Behavior Limits   For some polynomial function: with a positive integer (the degree) and all of the coefficients real numbers (with ), then   That is, the leading term (the term with the highest exponent) defines the end behavior for the whole polynomial function.    Consider the polynomial function: where is some integer and is a real number for . For simplicity, we will consider only the limit as , but we could easily repeat this exact proof for the case where .  Before we consider this limit, we can factor out , the variable with the highest exponent: Now consider the limit of this product: We can see that in the second limit, we have a single constant term, , followed by reciprocal power functions. Then, due to , we know that the second limit will by , since the reciprocal power functions will all approach 0. And so as we claimed.   "
},
{
  "id": "subsec-EndBehaviorLimits-7",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#subsec-EndBehaviorLimits-7",
  "type": "Example",
  "number": "1.5.7",
  "title": "",
  "body": "  For each function, find the limits as and .                  "
},
{
  "id": "act-MatchingLimits",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#act-MatchingLimits",
  "type": "Activity",
  "number": "1.5.3",
  "title": "Matching the Limits.",
  "body": " Matching the Limits   We're going to look at four graphs of functions, as well as a list of limit statements. Match the limit statements with the graphs that match that behavior. Note that is is possible for a limit to be relevant on more than one graph.    Now consider these four function definitions. Using your knowledge of limits, as well as the matching you've already done, match the definitions of these four functions with the graphs that go with them, and then also the limits that are relevant. (These limits will already be matched with the graphs, so you don't need to do further work here).   "
},
{
  "id": "sec-SqueezeTheorem",
  "level": "1",
  "url": "sec-SqueezeTheorem.html",
  "type": "Section",
  "number": "1.6",
  "title": "The Squeeze Theorem",
  "body": " The Squeeze Theorem   A Weird End Behavior Limit   In this activity, we're going to find the following limit: . This limit is a bit weird, in that we really haven't looked at trigonometric functions that much. We're going to start by looking at a different limit in the hopes that we can eventually build towards this one.    Consider, instead, the following limit: . Find the limit and connect the process or intuition behind it to at least one of the results from this text.   Start with to think about the numerator and denominator separately.   Can you use in the denominator?   Is relevant?    Let's put this limit aside and briefly talk about the sine function. What are some things to remember about this function? What should we know? How does it behave?    What kinds of values doe we expect to take on for different values of ?     What happens when we square the sine function? What kinds of values can that take on?     Think back to our original goal: we wanted to know the end behavior of . Right now we have two bits of information:   We know .    We know some information about the behavior of . Specifically, we have some bounds on its values.   Can we combine this information?  In your inequality above, multiply onto all three pieces of the inequality. Make sure you're convinced about the direction or order of the inequality and whether or not it changes with this multiplication.     For your functions and , evaluate and .    What do you think this means about the limit we're interested in, ?     The Squeeze Theorem   For some functions , , and which are all defined and ordered for -values near (but not necessarily at itself), and for some real number , if we know that then we also know that .     Sketch This Function Around This Point   Sketch or visualize the functions and , especially around .    Now we want to add in a sketch of some function , all the while satisfying the requirements of the Squeeze Theorem.     Use the Squeeze Theorem to evaluate and explain for your function .    Is this limit dependent on the specific version of that you sketched? Would this limit be different for someone else's choice of given the same parameters?    What information must be true (if anything) about and ?  Do we know that these limits exist? If they do, do we have information about their values?    "
},
{
  "id": "act-WeirdEndBehavior",
  "level": "2",
  "url": "sec-SqueezeTheorem.html#act-WeirdEndBehavior",
  "type": "Activity",
  "number": "1.6.1",
  "title": "A Weird End Behavior Limit.",
  "body": " A Weird End Behavior Limit   In this activity, we're going to find the following limit: . This limit is a bit weird, in that we really haven't looked at trigonometric functions that much. We're going to start by looking at a different limit in the hopes that we can eventually build towards this one.    Consider, instead, the following limit: . Find the limit and connect the process or intuition behind it to at least one of the results from this text.   Start with to think about the numerator and denominator separately.   Can you use in the denominator?   Is relevant?    Let's put this limit aside and briefly talk about the sine function. What are some things to remember about this function? What should we know? How does it behave?    What kinds of values doe we expect to take on for different values of ?     What happens when we square the sine function? What kinds of values can that take on?     Think back to our original goal: we wanted to know the end behavior of . Right now we have two bits of information:   We know .    We know some information about the behavior of . Specifically, we have some bounds on its values.   Can we combine this information?  In your inequality above, multiply onto all three pieces of the inequality. Make sure you're convinced about the direction or order of the inequality and whether or not it changes with this multiplication.     For your functions and , evaluate and .    What do you think this means about the limit we're interested in, ?   "
},
{
  "id": "thm-SqueezeTheorem",
  "level": "2",
  "url": "sec-SqueezeTheorem.html#thm-SqueezeTheorem",
  "type": "Theorem",
  "number": "1.6.1",
  "title": "The Squeeze Theorem.",
  "body": " The Squeeze Theorem   For some functions , , and which are all defined and ordered for -values near (but not necessarily at itself), and for some real number , if we know that then we also know that .   "
},
{
  "id": "act-SketchSqueeze",
  "level": "2",
  "url": "sec-SqueezeTheorem.html#act-SketchSqueeze",
  "type": "Activity",
  "number": "1.6.2",
  "title": "Sketch This Function Around This Point.",
  "body": " Sketch This Function Around This Point   Sketch or visualize the functions and , especially around .    Now we want to add in a sketch of some function , all the while satisfying the requirements of the Squeeze Theorem.     Use the Squeeze Theorem to evaluate and explain for your function .    Is this limit dependent on the specific version of that you sketched? Would this limit be different for someone else's choice of given the same parameters?    What information must be true (if anything) about and ?  Do we know that these limits exist? If they do, do we have information about their values?   "
},
{
  "id": "sec-Continuity",
  "level": "1",
  "url": "sec-Continuity.html",
  "type": "Section",
  "number": "1.7",
  "title": "Continuity and the Intermediate Value Theorem",
  "body": " Continuity and the Intermediate Value Theorem   Continuity as Connectedness      Continuity as Classification   Continuous at a Point   The function is continuous at an -value in the domain of if if .  If is not continuous at , but one of the one-sided limits is equal to the function output, then we can define directional continuity at that point:   We say is continuous on the left at when .    We say is continuous on the right at when .        Continuous on an Interval   We say that is continuous on the interval  if is continuous at every -value with .  If is continuous on the right at and\/or continuous on the left at , then we will say that is continuous on the interval , , or , whichever is relevant.      Discontinuities   Where is a Function not Continuous?  Most of the functions that we consider in this text will be continuous everywhere that it makes sense: on their domain. That is, if there is a point defined at some -value, it is likely that the function's limit matches the -value of the point. More specifically, though:   A function is discontinuous at any location that results in an infinite limit. These are locations where is undefined and the limit is infinite (and so doesn't exist).    A function is, in general, discontinuous wherever it is undefined. This seems silly to say! We probably could have left this unsaid.    A function that is defined as a piecewise function could be discontinuous at locations where the pieces meet: maybe the limit doesn't exist, or maybe the function value is not defined, or maybe the limit exists and the function value is defined but they do not match.        Intermediate Value Theorem   Intermediate Value Theorem   If is a function that is continuous on with and is any real number between and (either or ), then there exists some between and ( ) such that .     This theorem was stated as early as the 5th century BCE by Bryson of Heraclea. Back then, a really interesting problem was related to \"squaring the circle.\" That is, given a circle with some measurable radius, can we construct a square with equal area? This is obviously true, in that we can just use a square with the side length . What we typically mean by \"construct,\" though, is to create this square using only a compass and straightedge (a ruler without length markings) and only a finite number of steps. This was finally proven to be impossible in 1882, approximately 2300 years later.  Bryson of Heraclea knew that the square itself existed (even if he couldn't construct it) because he was able to find a circle with area less than the square (by inscribing a circle inside of the square) and a circle with area greater than the square (where the square is inscribed in the circle). Since he posited that he could increase the size of the circle in a continuous manner (without using those words), he claimed that a square with area equal to that of the circle must exist, since the area of the circle passes through all values from the smaller area to the larger area.    "
},
{
  "id": "def-ContinuousAtPoint",
  "level": "2",
  "url": "sec-Continuity.html#def-ContinuousAtPoint",
  "type": "Definition",
  "number": "1.7.1",
  "title": "Continuous at a Point.",
  "body": " Continuous at a Point   The function is continuous at an -value in the domain of if if .  If is not continuous at , but one of the one-sided limits is equal to the function output, then we can define directional continuity at that point:   We say is continuous on the left at when .    We say is continuous on the right at when .      "
},
{
  "id": "def-ContinuousOnInterval",
  "level": "2",
  "url": "sec-Continuity.html#def-ContinuousOnInterval",
  "type": "Definition",
  "number": "1.7.2",
  "title": "Continuous on an Interval.",
  "body": " Continuous on an Interval   We say that is continuous on the interval  if is continuous at every -value with .  If is continuous on the right at and\/or continuous on the left at , then we will say that is continuous on the interval , , or , whichever is relevant.   "
},
{
  "id": "thm-IVT",
  "level": "2",
  "url": "sec-Continuity.html#thm-IVT",
  "type": "Theorem",
  "number": "1.7.3",
  "title": "Intermediate Value Theorem.",
  "body": " Intermediate Value Theorem   If is a function that is continuous on with and is any real number between and (either or ), then there exists some between and ( ) such that .   "
},
{
  "id": "sec-IntroDerivatives",
  "level": "1",
  "url": "sec-IntroDerivatives.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Derivatives",
  "body": " Introduction to Derivatives   We'll start this off by thinking about slopes. Before we begin, you should be able to answer the following questions:   What is a slope? How could you describe it?    How do you calculate the slope of a line between two points?    If we have a function and we pick two points on the curve of the function, what does the slope of a straight line connecting the two points tell us? What kind of behavior about does this slope describe?       Defining the Derivative   Thinking about Slopes   We're going to calculate and make some conjectures about slopes of lines between points, where the points are on the graph of a function. Let's define the following function: .    We're going to calculate a lot of slopes! Calculate the slope of the line connecting each pair of points on the curve of :    and      and      and      and        Let's calculate another group of slopes. Find the slope of the lines connecting these pairs of points:    and      and      and      and        Just to make it clear what we've done, lay out your slopes in this table:    Between and...  Slope                                              Now imagine a line that is tangent to the graph of at . We are thinking of a line that touches the graph at , but runs along side of the curve there instead of through it.  Make a conjecture about the slope of this line, using what we've seen above.    Can you represent the slope you're thinking of above with a limit? What limit are we approximating in the slope calculations above? Set up the limit and evaluate it, confirming your conjecture.     Finding a Tangent Line   Let's think about a new function, . We're going to think about this function around the point at .    Ok, we are going to think about this function at this point, so let's find the coordinates of the point first. What's the -value on our curve at ?    Use a limit similar to the one you constructed in to find the slope of the line tangent to the graph of at .    Now that you have a slope of this line, and the coordinates of a point that the line passes through, can you find the equation of the line?     Derivative at a Point   For a function , we say that the derivative of at is: provided that the limit exists.  If exists, then we say is differentiable at .    We can investigate this definition visually. Consider the function plotted below, where we will look at the point . In the definition of the limit, we'll let , and so consider: . Can you estimate the limit of the slope of the tangent line as ?   Does it look like the limit of the slope between and exists as ? What do you think it is?    Calculating a Bunch of Slopes at Once   Calculating a Bunch of Slopes   Let's do this all again, but this time we'll calculate the slope at a bunch of different points on the same function.  Let's use .    Start calculating the following derivatives, using the definition of the :                          Stop calculating the above derivatives when you get tired\/bored of it. How many did you get through?    Notice how repetitive this is: on one hand, we have to set up a completely different limit each time (since we're looking at a different point on the function each time). On the other hand, you might have noticed that the work is all the same: you factor and cancel over and over. These limits are all ones that we covered in , and so it's no surprise that we keep using the same algebra manipulations over and over again to evaluate these limits.  Do you notice any patterns, any connections between the -value you used for each point and the slope you calculated at that point? You might need to go back and do some more.    Try to evaluate this limit in general: . Remember, you know how this goes! You're going to do the same sorts of algebra that you did earlier!  What is the formula, the pattern, the way of finding the slope on the function at any -value, ?    Confirm this by using your new formula to re-calculate the following derivatives:                          We're going to try to think about the derivative as something that can be calculated in general, as well as something that can be calculated at a point. We'll define a new way of calculating it, still a limit of slopes, that will be a bit more general.     The Derivative Function   For a function , the derivative of , denoted , is: for -values in the domain of where this limit exists.    This definition feels pretty different, but we can hopefully notice that this is really just calculating a slope. Notice, in the following plot, that there is a significant difference. In the visualization of the , the first point was fixed into place and the second point was the one that we moved and changed. It was the one with the variable -value.  Notice in the following visualization that the first point is the one that is moveable while the second point is defined based on the first one (and the horizontal difference between the points, ). This means that we don't need to define one specific point, and can find the slope of the line tangent to at some changing -value.    "
},
{
  "id": "act-Slopes",
  "level": "2",
  "url": "sec-IntroDerivatives.html#act-Slopes",
  "type": "Activity",
  "number": "2.1.1",
  "title": "Thinking about Slopes.",
  "body": " Thinking about Slopes   We're going to calculate and make some conjectures about slopes of lines between points, where the points are on the graph of a function. Let's define the following function: .    We're going to calculate a lot of slopes! Calculate the slope of the line connecting each pair of points on the curve of :    and      and      and      and        Let's calculate another group of slopes. Find the slope of the lines connecting these pairs of points:    and      and      and      and        Just to make it clear what we've done, lay out your slopes in this table:    Between and...  Slope                                              Now imagine a line that is tangent to the graph of at . We are thinking of a line that touches the graph at , but runs along side of the curve there instead of through it.  Make a conjecture about the slope of this line, using what we've seen above.    Can you represent the slope you're thinking of above with a limit? What limit are we approximating in the slope calculations above? Set up the limit and evaluate it, confirming your conjecture.   "
},
{
  "id": "act-TangentLine",
  "level": "2",
  "url": "sec-IntroDerivatives.html#act-TangentLine",
  "type": "Activity",
  "number": "2.1.2",
  "title": "Finding a Tangent Line.",
  "body": " Finding a Tangent Line   Let's think about a new function, . We're going to think about this function around the point at .    Ok, we are going to think about this function at this point, so let's find the coordinates of the point first. What's the -value on our curve at ?    Use a limit similar to the one you constructed in to find the slope of the line tangent to the graph of at .    Now that you have a slope of this line, and the coordinates of a point that the line passes through, can you find the equation of the line?   "
},
{
  "id": "def-DerivativeAtPoint",
  "level": "2",
  "url": "sec-IntroDerivatives.html#def-DerivativeAtPoint",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Derivative at a Point.",
  "body": " Derivative at a Point   For a function , we say that the derivative of at is: provided that the limit exists.  If exists, then we say is differentiable at .   "
},
{
  "id": "act-ManySlopes",
  "level": "2",
  "url": "sec-IntroDerivatives.html#act-ManySlopes",
  "type": "Activity",
  "number": "2.1.3",
  "title": "Calculating a Bunch of Slopes.",
  "body": " Calculating a Bunch of Slopes   Let's do this all again, but this time we'll calculate the slope at a bunch of different points on the same function.  Let's use .    Start calculating the following derivatives, using the definition of the :                          Stop calculating the above derivatives when you get tired\/bored of it. How many did you get through?    Notice how repetitive this is: on one hand, we have to set up a completely different limit each time (since we're looking at a different point on the function each time). On the other hand, you might have noticed that the work is all the same: you factor and cancel over and over. These limits are all ones that we covered in , and so it's no surprise that we keep using the same algebra manipulations over and over again to evaluate these limits.  Do you notice any patterns, any connections between the -value you used for each point and the slope you calculated at that point? You might need to go back and do some more.    Try to evaluate this limit in general: . Remember, you know how this goes! You're going to do the same sorts of algebra that you did earlier!  What is the formula, the pattern, the way of finding the slope on the function at any -value, ?    Confirm this by using your new formula to re-calculate the following derivatives:                          We're going to try to think about the derivative as something that can be calculated in general, as well as something that can be calculated at a point. We'll define a new way of calculating it, still a limit of slopes, that will be a bit more general.   "
},
{
  "id": "def-DerivativeFunction",
  "level": "2",
  "url": "sec-IntroDerivatives.html#def-DerivativeFunction",
  "type": "Definition",
  "number": "2.1.2",
  "title": "The Derivative Function.",
  "body": " The Derivative Function   For a function , the derivative of , denoted , is: for -values in the domain of where this limit exists.   "
},
{
  "id": "sec-InterpretingDerivatives",
  "level": "1",
  "url": "sec-InterpretingDerivatives.html",
  "type": "Section",
  "number": "2.2",
  "title": "Interpreting Derivatives",
  "body": " Interpreting Derivatives   What is a derivative?  This can feel like a silly question, since we're calculating it and getting used to finding them. But what is it?  In this section, we just want to remind ourselves of what this object is, how we should hold it in our minds as we move through the course, and then practice being flexible with this interpretation.    The Derivative is a Slope   Interpreting the Derivative as a Slope   In and , we built the idea of a derivative by calculating slopes and using them. Let's continue this by considering the function .    Use to find . What does this value represent?    We want to plot the line that would be tangent to the graph of at .  Remember that we can write the equation of a line in two ways:   The equation of a line with slope that passes through the point is: .    The equation of a line with slope that passes the point (this is another way of saying that the -intercept of the line is ) is: .     Find the equation of the line tangent to at . Add it to the graph of below to check your equation.     This tangent line is very similar to the actual curve of the function near . Another way of saying this is that while the slope of is not always the value you found for , it is close to that for -values near .  Use this idea of slope to predict where the -value of our function will be at .   We know that slope is and we're using the fact that for small values of .  Here, we have , so can you use the slope to approximate the corresponding and figure out the new -value?    Compare this value with . How close was it?      The Derivative is a Rate of Change   Interpreting the Derivative as a Rate of Change   This is going to somewhat feel redundant, since maybe we know that a slope is really just a rate of change. But hopefully we'll be able to explore this a bit more and see how we can use a derivative to tell us information about some specific context.  Let's say that we want to model the speed of a car as it races along a strip of the road. By the time we start measuring it (we'll call this time 0), the position the car (along the straight strip of road) is: , where is time measured in seconds and is the position measured in feet. Let's say that this function is only relevant on the domain . That is, we only model the position of the car for a 15-second window as it speeds past us.    How far does the car travel in the 15 seconds that we model it? What was the car's average velocity on those 15 seconds?    Calculate , the derivative of , using . What information does this tell us about our vehicle?   What is the rate at which the position (in feet) of the vehicle changes per unit time (in seconds)? What do we call this, and what are the units?    Calculate . Why is this smaller than the average velocity you found? What does that mean about the velocity of the car?    If we call , then calculate . Note that this is a derivative of a derivative.    Find . Why does this make sense when we think about the difference between the average velocity on the time interval and the value of that we calculated?    What does it mean when we notice that is constant? Explain this by interpreting it in terms of both the velocity of the vehicle as well as the position.      The Derivative is a Limit  Look back at the definition of . The end of it is interesting: \"provided that the limit exists.\" We need to keep in mind that this is a limit, and so a derivative exists or fails to exist whenever that limit exists or fails to exist.  What are some ways that a limit fails to exist?   A limit doesn't exist if the left-side limit and the right-side limit do not match: .    A limit doesn't exist if it is an .   What do each of these situations look like when we're considering the limit of slopes?   When Does a Derivative Not Exist?     A derivative doesn't exist at points where the slopes on either side of the point don't match.    A derivative doesn't exist at points with vertical tangent lines.    A derivative doesn't exist at points where the function is not continuous.        The Derivative is a Function   Interpreting the Derivative as a Function   In , we calculated the derivative function for . Using the definition of , we can see that . Let's explore that a bit more.    Sketch the graphs of and . Describe the shapes of these graphs.    Find the coordinates of the point at on both the graph of and . Plot the point on each graph.    Think back to our previous interpretations of the derivative: how do we interpret the -value output you found for the function?    Find the coordinates of another point at some other -value on both the graph of and . Plot the point on each graph, and explain what the output of tells us at this point.    Use your graph of to find the -intercept of . Locate the point on with this same -value. How do we know, visually, that this point is the -intercept of ?    Use your graph of to find where is positive. Pick two -values where . What do you expect this to look like on the graph of ? Find the matching points (at the same -values) on the graph of to confirm.    Use your graph of to find where is negative. Pick two -values where . What do you expect this to look like on the graph of ? Find the matching points (at the same -values) on the graph of to confirm.    Let's wrap this up with one final pair of points. Let's think about the point on the graph of and the point on the graph of . First, explain what the value of (the output of at ) means about the point on . Finally, why can we not use the value (the output of at ) means about the point on ?      Notation for Derivatives  So far we've been using the \"prime\" notation to represent derivatives: the derivative of is . We will continue to use this notation, but we'll introduce a bunch of other ways of writing notation to represent the derivative. Each new notation will emphasize some aspect of the derivative that will serve to be useful, even though they all represent essentially the same thing.     Function  Derivative  Derivative at  Emphasis        The derivative is a function. The function takes in -value inputs and returns the slope of at that -value.         We can find slopes on any curve, not just functions. This is sometimes also used as a way to simplify the notation, especially when we want to manipulate equations involving .         The derivative is a slope. It is as , and we use and (called differentials ) to represent and as the limits as . This notation is also useful to tell us what the rate of change is: what is changing (in this case ) and what is it changing based on (in this case ).         The derivative is an action that we do to some function. We can call it an operator , although we won't formally define that term in this text. We'll look at this idea more in . We can specify what we are expecting the input variable to be, based on the differential in the denominator.      "
},
{
  "id": "act-InterpretDerivativeSlope",
  "level": "2",
  "url": "sec-InterpretingDerivatives.html#act-InterpretDerivativeSlope",
  "type": "Activity",
  "number": "2.2.1",
  "title": "Interpreting the Derivative as a Slope.",
  "body": " Interpreting the Derivative as a Slope   In and , we built the idea of a derivative by calculating slopes and using them. Let's continue this by considering the function .    Use to find . What does this value represent?    We want to plot the line that would be tangent to the graph of at .  Remember that we can write the equation of a line in two ways:   The equation of a line with slope that passes through the point is: .    The equation of a line with slope that passes the point (this is another way of saying that the -intercept of the line is ) is: .     Find the equation of the line tangent to at . Add it to the graph of below to check your equation.     This tangent line is very similar to the actual curve of the function near . Another way of saying this is that while the slope of is not always the value you found for , it is close to that for -values near .  Use this idea of slope to predict where the -value of our function will be at .   We know that slope is and we're using the fact that for small values of .  Here, we have , so can you use the slope to approximate the corresponding and figure out the new -value?    Compare this value with . How close was it?   "
},
{
  "id": "act-InterpretDerivativeChange",
  "level": "2",
  "url": "sec-InterpretingDerivatives.html#act-InterpretDerivativeChange",
  "type": "Activity",
  "number": "2.2.2",
  "title": "Interpreting the Derivative as a Rate of Change.",
  "body": " Interpreting the Derivative as a Rate of Change   This is going to somewhat feel redundant, since maybe we know that a slope is really just a rate of change. But hopefully we'll be able to explore this a bit more and see how we can use a derivative to tell us information about some specific context.  Let's say that we want to model the speed of a car as it races along a strip of the road. By the time we start measuring it (we'll call this time 0), the position the car (along the straight strip of road) is: , where is time measured in seconds and is the position measured in feet. Let's say that this function is only relevant on the domain . That is, we only model the position of the car for a 15-second window as it speeds past us.    How far does the car travel in the 15 seconds that we model it? What was the car's average velocity on those 15 seconds?    Calculate , the derivative of , using . What information does this tell us about our vehicle?   What is the rate at which the position (in feet) of the vehicle changes per unit time (in seconds)? What do we call this, and what are the units?    Calculate . Why is this smaller than the average velocity you found? What does that mean about the velocity of the car?    If we call , then calculate . Note that this is a derivative of a derivative.    Find . Why does this make sense when we think about the difference between the average velocity on the time interval and the value of that we calculated?    What does it mean when we notice that is constant? Explain this by interpreting it in terms of both the velocity of the vehicle as well as the position.   "
},
{
  "id": "act-InterpretDerivativeFunction",
  "level": "2",
  "url": "sec-InterpretingDerivatives.html#act-InterpretDerivativeFunction",
  "type": "Activity",
  "number": "2.2.3",
  "title": "Interpreting the Derivative as a Function.",
  "body": " Interpreting the Derivative as a Function   In , we calculated the derivative function for . Using the definition of , we can see that . Let's explore that a bit more.    Sketch the graphs of and . Describe the shapes of these graphs.    Find the coordinates of the point at on both the graph of and . Plot the point on each graph.    Think back to our previous interpretations of the derivative: how do we interpret the -value output you found for the function?    Find the coordinates of another point at some other -value on both the graph of and . Plot the point on each graph, and explain what the output of tells us at this point.    Use your graph of to find the -intercept of . Locate the point on with this same -value. How do we know, visually, that this point is the -intercept of ?    Use your graph of to find where is positive. Pick two -values where . What do you expect this to look like on the graph of ? Find the matching points (at the same -values) on the graph of to confirm.    Use your graph of to find where is negative. Pick two -values where . What do you expect this to look like on the graph of ? Find the matching points (at the same -values) on the graph of to confirm.    Let's wrap this up with one final pair of points. Let's think about the point on the graph of and the point on the graph of . First, explain what the value of (the output of at ) means about the point on . Finally, why can we not use the value (the output of at ) means about the point on ?   "
},
{
  "id": "subsec-DerivativeNotation-3-8-4-1",
  "level": "2",
  "url": "sec-InterpretingDerivatives.html#subsec-DerivativeNotation-3-8-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differentials "
},
{
  "id": "subsec-DerivativeNotation-3-9-4-1",
  "level": "2",
  "url": "sec-InterpretingDerivatives.html#subsec-DerivativeNotation-3-9-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "operator "
},
{
  "id": "sec-DerivativeRules",
  "level": "1",
  "url": "sec-DerivativeRules.html",
  "type": "Section",
  "number": "2.3",
  "title": "Some Early Derivative Rules",
  "body": " Some Early Derivative Rules   We are going to break this topic into two parts:   We will try to find some common patterns or connections between derivatives and specific functions. For instance, when we use to build a derivative, are there patterns in the work of evaluating that limit that will allow us to get through the limit work quickly? Can we group some functions together based on how we might deal with the limit?    We will try to think about derivatives a bit more generally and show how we can build some basic properties to help us think about differentiating variations of the functions that we recognize.       Derivatives of Common Functions   Derivatives of Power Functions   We're going to do a bit of pattern recognition here, which means that we will need to differentiate several different power functions. For our reference, a power function (in general) is a function in the form where and are real numbers, and .  Let's begin our focus on the power functions , , and . We're going to use a lot, so feel free to review it before we begin.    Find . As a brief follow up, compare this to the derivative that you found in . Why are they the same? What does the difference, the , in the function do to the graph of it (compared to the graph of ) and why does this not impact the derivative?   Remember that the graph of has the same shape as the graph of , but has been shifted down by 4 units. Why does this vertical shift not change the value of the derivative at any -value?    Find .   Remember that     Find .   Remember that     Notice that in these derivative calculations, the main work is in multiplying . Look back at the work done in all three of these derivative calculations and find some unifying steps to describe how you evaluate the limit\/calculate the derivative after this tedious multiplication was finished. What steps did you do? Is it always the same thing?  Another way of stating this is: if I told you that I knew what was, could you give me some details on how the derivative limit would be finished?    Finish the following derivative calculation:     Make a conjecture about the derivative of a power function in general, .    Something to notice here is that the calculation in this limit is really dependent on knowing what is. When is an integer with , this really just translates to multiplication. If we can figure out how to multiply in general, then this limit calculation will be pretty easy to do. We noticed that:   The first term of that multiplication will combine with the subtraction of in the numerator and subtract to 0.    The rest of the terms in the multiplication have at least one copy of , and so we can factor out and \"cancel\" it with the in the denominator.    Once this has done, we've escaped the portion of the limit that was giving us the indeterminate form, and so we can evaluate the limit as . The result is just that whatever terms still have at least one remaining copy of in it \"go to\" 0, and we're left with just the terms that do not have any copies of in them.       Triangle binomial theorem for coefficients.   Power Rule for Derivatives        We have shown that this is true for , but this is also true for any value of (including , non-integers, and non-positives). We will prove this more formally later (in ), and until then we will be free to use this result.    Let's confirm this Power Rule for two examples that we are familiar with.    Find the derivative using the limit definition of the derivative function. Note that and .    Find the derivative using the limit definition of the derivative function. Note that and .    In this activity, we also found one other result.   Derivative of a Constant Function   If where is some real number constant, then . Another way of saying this is: .     Derivatives of Trigonometric Functions   Let's try to think through the derivatives of and . In this activity, we'll look at graphs and try to collect some information about the derivative functions. We'll be practicing out interpretations, so if you need to brush up on before we start, that's fine!    The following plot includes both the graph of , and the line tangent to . Watch as the point where we build the tangent line moves along the graph, between and .   Collect as much information about the derivative, , as you can. What do you know about it? What are some facts about the slopes of the tangent lines in this animation?   What kinds of values do the slopes take? Are there some values that these slopes will never be? Can you find any special points on this graph where you can actually tell what the slope is?    We're going to get more specific here: let's find the coordinates of points that are on both the graph of and it's derivative . Remember, to get the values for , we're really looking at the slope of the tangent line at that point.     Let's repeat this process using the function instead.  The following plot includes both the graph of , and the line tangent to . Watch as the point where we build the tangent line moves along the graph, between and .   Collect as much information about the derivative, , as you can. What do you know about it? What are some facts about the slopes of the tangent lines in this animation?   What kinds of values do the slopes take? Are there some values that these slopes will never be? Can you find any special points on this graph where you can actually tell what the slope is?    We're going to get more specific here: let's find the coordinates of points that are on both the graph of and it's derivative . Remember, to get the values for , we're really looking at the slope of the tangent line at that point.      Derivatives of the Sine and Cosine Functions           In order to show why and , we will work with the limit definitions of both. Consider both: Our goal is to re-write the numerators in both of these limits as something more usable. So far, we have been evaluating these types of limits ( ) using some algebraic manipulations. Instead of using algebra, we will use geometry.  Consider the unit circle below. We have plotted the angle and are reminded that the point on the circle that corresponds with the terminal side of the angle has coordinates . We can label the sides of the triangle pictured below.  Now we consider a second point on the circle, this one formed by the terminal side of the angle . This point has coordinates . Note, below, that we want to find expressions for and . We can find these geometrically.  Note, then, that the two triangles look to be similar triangles. In fact, we will find that in the limit as , the length matches the arc length perfectly, and thus lays at a right angle to the terminal side of the angle . Since as we have , we can find the other side lengths as well: and . So then .  Consider, then, the limits involved in the derivative calculations that we built earlier.   So we have shown that and as we claimed.     Derivative of the Exponential Function   We're going to consider a maybe-unfamiliar function, . We'll explore this function in a similar way to use thinking about the derivatives of sine and cosine in : we'll look at a tangent line at different points, and think about the slope.    The plot below includes both the graph of and the line tangent to . Watch as the point moves along the curve.   Collect as much information about the derivative, , as you can. What do you know about it? What are some facts about the slopes of the tangent lines in this animation?   Are there any -values where the slope is negative? Are there any where the slope is equal to 0? What happens to the slopes as increases?    There is a slightly hidden fact about slopes and tangent lines in this animation. In the following animation, we'll add (and label) one more point. Let's look at this again, this time noting the point at which this tangent line crosses the -axis. This will make it easier to think about slopes!   What information does this reveal about the slopes?   Especially it might be helpful to think about the slopes and their relationship to the -value of the point we are building the tangent line at.    Make a conjecture about the slope of the line tangent to the exponential function at any -value. What do you believe the formula\/equation for is then?     Derivative of the Exponential Function          Some Properties of Derivatives in General   Combinations of Derivatives   If and are differentiable functions, then the following statements about their derivatives are true.    Sums: The derivative of the sum of and is the sum of the derivatives of and :      Differences: The derivative of the difference of and is the difference of the derivatives of and :      Coefficients: If is some real number coefficient, then:        We can think about each of these properties through the lense of how combining these functions impacts the slopes. For instance, if we wanted to visualize the property about coefficients (that ), we can visualize this coefficient as a scaling factor.    Putting These Together   Find the following derivatives:              "
},
{
  "id": "act-DerivativesOfPowerFunctions",
  "level": "2",
  "url": "sec-DerivativeRules.html#act-DerivativesOfPowerFunctions",
  "type": "Activity",
  "number": "2.3.1",
  "title": "Derivatives of Power Functions.",
  "body": " Derivatives of Power Functions   We're going to do a bit of pattern recognition here, which means that we will need to differentiate several different power functions. For our reference, a power function (in general) is a function in the form where and are real numbers, and .  Let's begin our focus on the power functions , , and . We're going to use a lot, so feel free to review it before we begin.    Find . As a brief follow up, compare this to the derivative that you found in . Why are they the same? What does the difference, the , in the function do to the graph of it (compared to the graph of ) and why does this not impact the derivative?   Remember that the graph of has the same shape as the graph of , but has been shifted down by 4 units. Why does this vertical shift not change the value of the derivative at any -value?    Find .   Remember that     Find .   Remember that     Notice that in these derivative calculations, the main work is in multiplying . Look back at the work done in all three of these derivative calculations and find some unifying steps to describe how you evaluate the limit\/calculate the derivative after this tedious multiplication was finished. What steps did you do? Is it always the same thing?  Another way of stating this is: if I told you that I knew what was, could you give me some details on how the derivative limit would be finished?    Finish the following derivative calculation:     Make a conjecture about the derivative of a power function in general, .    Something to notice here is that the calculation in this limit is really dependent on knowing what is. When is an integer with , this really just translates to multiplication. If we can figure out how to multiply in general, then this limit calculation will be pretty easy to do. We noticed that:   The first term of that multiplication will combine with the subtraction of in the numerator and subtract to 0.    The rest of the terms in the multiplication have at least one copy of , and so we can factor out and \"cancel\" it with the in the denominator.    Once this has done, we've escaped the portion of the limit that was giving us the indeterminate form, and so we can evaluate the limit as . The result is just that whatever terms still have at least one remaining copy of in it \"go to\" 0, and we're left with just the terms that do not have any copies of in them.      "
},
{
  "id": "thm-PowerRuleDerivatives",
  "level": "2",
  "url": "sec-DerivativeRules.html#thm-PowerRuleDerivatives",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "Power Rule for Derivatives.",
  "body": " Power Rule for Derivatives       "
},
{
  "id": "subsec-DerivativesOfCommonFunctions-6",
  "level": "2",
  "url": "sec-DerivativeRules.html#subsec-DerivativesOfCommonFunctions-6",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  Let's confirm this Power Rule for two examples that we are familiar with.    Find the derivative using the limit definition of the derivative function. Note that and .    Find the derivative using the limit definition of the derivative function. Note that and .   "
},
{
  "id": "thm-DerivativeConstant",
  "level": "2",
  "url": "sec-DerivativeRules.html#thm-DerivativeConstant",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "Derivative of a Constant Function.",
  "body": " Derivative of a Constant Function   If where is some real number constant, then . Another way of saying this is: .   "
},
{
  "id": "act-TrigDerivatives",
  "level": "2",
  "url": "sec-DerivativeRules.html#act-TrigDerivatives",
  "type": "Activity",
  "number": "2.3.2",
  "title": "Derivatives of Trigonometric Functions.",
  "body": " Derivatives of Trigonometric Functions   Let's try to think through the derivatives of and . In this activity, we'll look at graphs and try to collect some information about the derivative functions. We'll be practicing out interpretations, so if you need to brush up on before we start, that's fine!    The following plot includes both the graph of , and the line tangent to . Watch as the point where we build the tangent line moves along the graph, between and .   Collect as much information about the derivative, , as you can. What do you know about it? What are some facts about the slopes of the tangent lines in this animation?   What kinds of values do the slopes take? Are there some values that these slopes will never be? Can you find any special points on this graph where you can actually tell what the slope is?    We're going to get more specific here: let's find the coordinates of points that are on both the graph of and it's derivative . Remember, to get the values for , we're really looking at the slope of the tangent line at that point.     Let's repeat this process using the function instead.  The following plot includes both the graph of , and the line tangent to . Watch as the point where we build the tangent line moves along the graph, between and .   Collect as much information about the derivative, , as you can. What do you know about it? What are some facts about the slopes of the tangent lines in this animation?   What kinds of values do the slopes take? Are there some values that these slopes will never be? Can you find any special points on this graph where you can actually tell what the slope is?    We're going to get more specific here: let's find the coordinates of points that are on both the graph of and it's derivative . Remember, to get the values for , we're really looking at the slope of the tangent line at that point.    "
},
{
  "id": "thm-TrigDerivatives",
  "level": "2",
  "url": "sec-DerivativeRules.html#thm-TrigDerivatives",
  "type": "Theorem",
  "number": "2.3.4",
  "title": "Derivatives of the Sine and Cosine Functions.",
  "body": " Derivatives of the Sine and Cosine Functions           In order to show why and , we will work with the limit definitions of both. Consider both: Our goal is to re-write the numerators in both of these limits as something more usable. So far, we have been evaluating these types of limits ( ) using some algebraic manipulations. Instead of using algebra, we will use geometry.  Consider the unit circle below. We have plotted the angle and are reminded that the point on the circle that corresponds with the terminal side of the angle has coordinates . We can label the sides of the triangle pictured below.  Now we consider a second point on the circle, this one formed by the terminal side of the angle . This point has coordinates . Note, below, that we want to find expressions for and . We can find these geometrically.  Note, then, that the two triangles look to be similar triangles. In fact, we will find that in the limit as , the length matches the arc length perfectly, and thus lays at a right angle to the terminal side of the angle . Since as we have , we can find the other side lengths as well: and . So then .  Consider, then, the limits involved in the derivative calculations that we built earlier.   So we have shown that and as we claimed.   "
},
{
  "id": "act-ExponentialDerivatives",
  "level": "2",
  "url": "sec-DerivativeRules.html#act-ExponentialDerivatives",
  "type": "Activity",
  "number": "2.3.3",
  "title": "Derivative of the Exponential Function.",
  "body": " Derivative of the Exponential Function   We're going to consider a maybe-unfamiliar function, . We'll explore this function in a similar way to use thinking about the derivatives of sine and cosine in : we'll look at a tangent line at different points, and think about the slope.    The plot below includes both the graph of and the line tangent to . Watch as the point moves along the curve.   Collect as much information about the derivative, , as you can. What do you know about it? What are some facts about the slopes of the tangent lines in this animation?   Are there any -values where the slope is negative? Are there any where the slope is equal to 0? What happens to the slopes as increases?    There is a slightly hidden fact about slopes and tangent lines in this animation. In the following animation, we'll add (and label) one more point. Let's look at this again, this time noting the point at which this tangent line crosses the -axis. This will make it easier to think about slopes!   What information does this reveal about the slopes?   Especially it might be helpful to think about the slopes and their relationship to the -value of the point we are building the tangent line at.    Make a conjecture about the slope of the line tangent to the exponential function at any -value. What do you believe the formula\/equation for is then?   "
},
{
  "id": "thm-ExponentialDerivative",
  "level": "2",
  "url": "sec-DerivativeRules.html#thm-ExponentialDerivative",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "Derivative of the Exponential Function.",
  "body": " Derivative of the Exponential Function       "
},
{
  "id": "thm-CombinationsOfDerivatives",
  "level": "2",
  "url": "sec-DerivativeRules.html#thm-CombinationsOfDerivatives",
  "type": "Theorem",
  "number": "2.3.6",
  "title": "Combinations of Derivatives.",
  "body": " Combinations of Derivatives   If and are differentiable functions, then the following statements about their derivatives are true.    Sums: The derivative of the sum of and is the sum of the derivatives of and :      Differences: The derivative of the difference of and is the difference of the derivatives of and :      Coefficients: If is some real number coefficient, then:       "
},
{
  "id": "subsec-DerivativeProperties-5",
  "level": "2",
  "url": "sec-DerivativeRules.html#subsec-DerivativeProperties-5",
  "type": "Example",
  "number": "2.3.7",
  "title": "Putting These Together.",
  "body": " Putting These Together   Find the following derivatives:            "
},
{
  "id": "sec-ProductQuotientRule",
  "level": "1",
  "url": "sec-ProductQuotientRule.html",
  "type": "Section",
  "number": "2.4",
  "title": "The Product and Quotient Rules",
  "body": " The Product and Quotient Rules   We saw in that when we want to find the derivative of a sum or difference of functions, we can just find the derivatives of each function separately, and then combine the derivatives back together (by adding or subtracting). This, hopefully, is pretty intuitive: of course a slope of a sum of things is just the slopes of each thing added together!  In this section, we want to think about derivatives of product and quotients of functions. What happens when we differentiate a function that is really just two functions multiplied together?   Thinking About Derivatives of Products   Let's start with two quick facts: .    What is ? What about ?    Based on what you just explained, what is a reasonable assumption about what might be?   Does it seem reasonable that we could just multiply the derivatives together, and say that was the same thing as ?    Let's just think about for a moment. What is  ? Can you write this as a product? Call one of your functions and the other . You should have that for whatever you used.    Use your example to explain why, in general, .    Let's show another way that we know this. Think about . We know two things: . What, though, is ?    Use all of this to reassure yourself that even though the derivative of a sum of functions is the sum of the derivatives of the functions, we will need to develop a better understanding of how the derivatives of products of functions work.    A thing that I like to think about is this: if , then every function's derivative would be 0.  In the example with the function, we noticed that we could write the function as . This is true of every function!  If , then we could say that for any function with a derivative : . This, obviously, can't be true! We know of tons of functions that have non-zero slopes... most of them do!  So, we hopefully have some motivation for building a rule to that helps us think about derivatives of products of functions.    The Product Rule   Building a Product Rule   Let's investigate how we might differentiate the product of two functions: . We'll use an area model for multiplication here: we can consider a rectangle where the side lengths are functions and that change for different values of . Maybe is representative of some type of time component, and the side lengths change size based on time, but it could be anything.  If we want to think about , then we're really considering the change in area of the rectangle.    Find the area of the two rectangles. The second rectangle is just one where the input variable for the side length has changed by some amount, leading to a different side length.      A rectangle with the width labeled f(x) and the height labeled g(x).    A larger rectangle with the width labeled f(x+ delta x) and the height labeled g(x + delta x). The original, smaller, rectangle is marked with a dotted line inside of the new larger rectangle.       Write out a way of calculating the difference in these areas.    Let's try to calculate this difference in a second way: by finding the actual area of the region that is new in the second rectangle.     A small rectangle inside a larger rectangle. The difference is broken up into three shaded in regions. A bar on the top, a bar on the right, and a corner piece.    In order to do this, we've broken the region up into three pieces. Calculate the areas of the three pieces. Use this to fill in the following equation: .    We do not want to calculate the total change in area: a derivative is a rate of change , so in order to think about the derivative we need to divide by the change in input, .  We'll also want to think about this derivative as an instantaneous rate of change, meaning we will consider a limit as . Fill in the following: We can split this fraction up into three fractions:     In any limit with or in it, notice that we can factor part out of the limit, since these functions do not rely on , the part that changes in the limit. Factor these out.  In the third limit, factor out either or .     Use to re-write these limits. Show that when , we get: .    We can investigate this visual a bit more dynamically: see the differences in area as . What parts are left, when ? What areas aren't visible?    Product Rule   If and are functions that are differentiable at and , then: . For convenience, this is often written as: .      Use the to find the following derivatives.        Use and . Now find and , and use: .                What about Dividing?  So we can differentiate a product of functions, and the obvious next question should be about division: if we needed to build a reasonable way of differentiating a product, shouldn't we also need to build a new way of thinking about derivatives of quotients?  A nice thing that we can do is think about division as really just multiplication. For instance, if we want to differentiate , then we can just think about this quotient as really a product: . Now we can just apply product rule!   This works great! We can always think about quotients as just products of reciprocals! But the problem is that we can't always differentiate these reciprocals (for now). We were able to differentiate by re-writing this as just a power function (with a negative exponent).  What about this flipped example: ? In order for us to do the same thing, we need to re-write this as but we don't know how to differentiate (yet).  So let's try to build a general way of differentiating quotients.   Constructing a Quotient Rule   We're going to start with a function that is a quotient of two other functions: . Our goal is that we want to find , but we're going to shuffle this function around first. We won't calculate this derivative directly!    Start with . Multiply on both sides to write a definition for .     Find .    Wait: we don't care about . Right? We care about finding !  Use what you found for and solve for .     This is a strange formula: we have a formula for written in terms of ! But we said earlier that .  In your formula for , replace with .     This formula is fine, but a little clunky. We'll try to re-write it in some nice ways, but it is a bit more complex than the .   Quotient Rule   If and are differentiable at and then: .  For convenience, this is often written as: .      Use the to find the following derivatives.       Once you have this derivative, confirm that it is the same as , the way that we found it using the Product Rule.                Derivatives of (the Rest of the) Trigonometric Functions  You might remember that of the six main trigonometric functions, we can write four of them in terms of the other two: here are the different trigonometric functions written in terms of sine and cosine functions:     Find the derivatives of the remaining trigonometric functions.        Write and use the Quotient Rule.        Write and use the Quotient Rule.        Write and use the Quotient Rule.        Write and use the Quotient Rule.     "
},
{
  "id": "act-MotivatingProductRule",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#act-MotivatingProductRule",
  "type": "Activity",
  "number": "2.4.1",
  "title": "Thinking About Derivatives of Products.",
  "body": " Thinking About Derivatives of Products   Let's start with two quick facts: .    What is ? What about ?    Based on what you just explained, what is a reasonable assumption about what might be?   Does it seem reasonable that we could just multiply the derivatives together, and say that was the same thing as ?    Let's just think about for a moment. What is  ? Can you write this as a product? Call one of your functions and the other . You should have that for whatever you used.    Use your example to explain why, in general, .    Let's show another way that we know this. Think about . We know two things: . What, though, is ?    Use all of this to reassure yourself that even though the derivative of a sum of functions is the sum of the derivatives of the functions, we will need to develop a better understanding of how the derivatives of products of functions work.   "
},
{
  "id": "act-ProductRule",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#act-ProductRule",
  "type": "Activity",
  "number": "2.4.2",
  "title": "Building a Product Rule.",
  "body": " Building a Product Rule   Let's investigate how we might differentiate the product of two functions: . We'll use an area model for multiplication here: we can consider a rectangle where the side lengths are functions and that change for different values of . Maybe is representative of some type of time component, and the side lengths change size based on time, but it could be anything.  If we want to think about , then we're really considering the change in area of the rectangle.    Find the area of the two rectangles. The second rectangle is just one where the input variable for the side length has changed by some amount, leading to a different side length.      A rectangle with the width labeled f(x) and the height labeled g(x).    A larger rectangle with the width labeled f(x+ delta x) and the height labeled g(x + delta x). The original, smaller, rectangle is marked with a dotted line inside of the new larger rectangle.       Write out a way of calculating the difference in these areas.    Let's try to calculate this difference in a second way: by finding the actual area of the region that is new in the second rectangle.     A small rectangle inside a larger rectangle. The difference is broken up into three shaded in regions. A bar on the top, a bar on the right, and a corner piece.    In order to do this, we've broken the region up into three pieces. Calculate the areas of the three pieces. Use this to fill in the following equation: .    We do not want to calculate the total change in area: a derivative is a rate of change , so in order to think about the derivative we need to divide by the change in input, .  We'll also want to think about this derivative as an instantaneous rate of change, meaning we will consider a limit as . Fill in the following: We can split this fraction up into three fractions:     In any limit with or in it, notice that we can factor part out of the limit, since these functions do not rely on , the part that changes in the limit. Factor these out.  In the third limit, factor out either or .     Use to re-write these limits. Show that when , we get: .   "
},
{
  "id": "thm-ProductRule",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#thm-ProductRule",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "Product Rule.",
  "body": " Product Rule   If and are functions that are differentiable at and , then: . For convenience, this is often written as: .   "
},
{
  "id": "subsec-ProductRule-6",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#subsec-ProductRule-6",
  "type": "Example",
  "number": "2.4.4",
  "title": "",
  "body": "  Use the to find the following derivatives.        Use and . Now find and , and use: .             "
},
{
  "id": "act-QuotientRule",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#act-QuotientRule",
  "type": "Activity",
  "number": "2.4.3",
  "title": "Constructing a Quotient Rule.",
  "body": " Constructing a Quotient Rule   We're going to start with a function that is a quotient of two other functions: . Our goal is that we want to find , but we're going to shuffle this function around first. We won't calculate this derivative directly!    Start with . Multiply on both sides to write a definition for .     Find .    Wait: we don't care about . Right? We care about finding !  Use what you found for and solve for .     This is a strange formula: we have a formula for written in terms of ! But we said earlier that .  In your formula for , replace with .    "
},
{
  "id": "thm-QuotientRule",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#thm-QuotientRule",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "Quotient Rule.",
  "body": " Quotient Rule   If and are differentiable at and then: .  For convenience, this is often written as: .   "
},
{
  "id": "subsec-QuotientRule-10",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#subsec-QuotientRule-10",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": "  Use the to find the following derivatives.       Once you have this derivative, confirm that it is the same as , the way that we found it using the Product Rule.             "
},
{
  "id": "subsec-MoreTrigDerivatives-3",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#subsec-MoreTrigDerivatives-3",
  "type": "Example",
  "number": "2.4.7",
  "title": "",
  "body": "  Find the derivatives of the remaining trigonometric functions.        Write and use the Quotient Rule.        Write and use the Quotient Rule.        Write and use the Quotient Rule.        Write and use the Quotient Rule.   "
},
{
  "id": "sec-ChainRule",
  "level": "1",
  "url": "sec-ChainRule.html",
  "type": "Section",
  "number": "2.5",
  "title": "The Chain Rule",
  "body": " The Chain Rule   We've been building up some intuition and rules to help us think about differentiating different functions and combinations of functions. We can find derivatives of scaled functions, sums of functions, differences of functions, products of functions, and also quotients of functions.  In this section, we'll look at our last operation between functions: composition.    Composition and Decomposition  An important part of finding derivatives of products and quotients is identifying the component functions that are being multiplied\/divided (often labeled or just and or just ). From there, we find the derivatives of each of the component functions, and then use the formula from the or to put the pieces together.  Thinking about derivatives of composed functions will be the same: we'll need to identify what functions are being composed inside of other functions, and use those pieces in some formulaic way to represent the derivative. On that note, let's remind ourselves and practice working with composition (and decomposition) of functions.   Composition (and Decomposition) Pictionary   This activity will involve a second group, or at least a partner. We'll go through the first part of this activity, and then connect with a second group\/person to finish the second part.    Build two functions, calling them and . Pick whatever kinds of functions you'd like, but this activity will work best if these functions are in a kind of sweet-spot between \"simple\" and \"complicated,\" but don't overthink this.    Compose inside of to create , which we can also write as .    Write your composed function on a separate sheet of paper. Do not leave any indication of what your chosen and are. Just write your composed function by itself.  Now, pass this composed to your partner\/a second group.    You should have received a new function from some other person\/group. It is different than yours, but also labeled (with different choices of and ).  Identify a possibility for , the outside function in this composition, as well as a possibility for , the inside function in this composition. You can check your answer by composing these!    Write a different pair of possibilities for and that will still give you the same composed function, .    Check with your partner\/the second group: did you identify the pair of functions that they originally used?  Did whoever you passed your composed function to correctly identify your functions?    A big thing to notice here is that when we pick the pieces of functions that we think were composed inside of each other, there's not a single obvious answer. This is pretty different compared to, say, using the . In these quotients, we have a natural division (literally) between the pieces. Here, it's much more subjective for us when we decide to label an \"inside\" function and an \"outside\" function.  We will build up our intuition to find a good balance for how we pick these.    The Chain Rule, Intuitively  Before we build the Chain Rule for differentiating composed functions, we should talk about some notation. Earlier (in ) we talked about the derivative notation, . One of the things we mentioned is that while we know that the derivative is an instantaneous rate of change, this notation is helpful to tell us what is changing with regard to what .  In , we are calculating how much the -variable changes when increases. If we talked about , then we are discussing how much changes for an increase in , whatever these variables represent.   Gears and Chains   Let's think about some gears. We've got three gears, all different sizes. But the gears are linked together, and a small motor works to spin one of the gears. Since the gears are linked, when one gear spins, they all do. But since they are different sizes, they complete a different number of revolutions: the smaller ones spin more times than the larger ones, since they have a smaller circumference.     Three circles, each with a point on it spinning around. The first circle is the largest: it is labeled \"Gear A.\" The second circle is the smallest: it is labeled \"Gear B.\" The last circle is a medium size: it is labeled \"Gear C.\"    For our purpose, let's say that Gear A is being driven by the motor.    Let's try to quantify how much \"faster\" Gear B is spinning compared to Gear A. How many revolutions does Gear B complete in the time it takes Gear A to complete one revolution?    Now quantify the speed of Gear C compared to its neighbor, Gear B. How many revolutions does Gear C complete in the time it takes Gear B to complete one revolution?    Use the above relative \"speeds\" to compare Gear C and Gear A: how many revolutions does Gear C complete in the time it takes Gear A to complete one revolution?  More importantly, how do we find this?    Now let's translate this into some derivative notation: we've really been finding rates at which one thing changes (the speed of the gear spinning) relative to another's.  Call the speed of Gear B compared to Gear A: . Now call the speed of Gear C compared to Gear B: . Come up with a formula to find .    So what we need to do now is to somehow translate this intuitive idea of multiplying rates of change to build a strategy for thinking about derivatives of composed functions.  We can think of these linked gears as functions: Gear C changes based on what is happening with Gear B, which changes based on Gear A. We can translate Gear A to be an input variable, like . Then Gear B is a function based on that: we can call it . Then Gear C is a function that takes in the position of Gear B (the function ), and so we can think of it as .  To build the derivative rule for composite functions, we need to find how the \"outside\" function changes as the \"inside\" function changes ( in this case) and multiply that by how the \"inside\" function changes as the input variable changes ( here).   The Chain Rule   For the composite function , if we define and , then, as long as both and are differentiable at and respectively: . Alternatively, this can be written as: .      Doing is Different than Knowing  It is lovely to know that the Chain Rule is really just linking the two rates of change together to connect a function with an input variable through a middle processing function. That's great!  But doing the Chain Rule is different than just knowing it, so let's walk through a first example. Let's find the following derivative: We'll call the \"inside\" function , so we can really write the whole function (normally we're calling this ) as . What we can notice, here, is that is just a function of some variable , and we want to find , the rate at which changes with regard to its input variable. This might feel a bit strange, since isn't just an input variable: it means something, since we have that . This is fine! The extra that we multiply will take care of linking this derivative to the input variable . After we finished differentiating , you'll notice that we used the fact that to write our combination of derivatives (the derivative of the \"outside\" function and the derivative of the \"inside\" function) in terms of the same input variable again.  The last line, rewriting as , is just for aesthetics.  Now you're ready to try some more examples! In each, focus on identifying a natural selection for the \"inside\" function, .    Use the Chain Rule to differentiate the following:        Notice that is composed under the square root. Use .        Try letting , since it's composed inside the exponent of the exponential function.        You could think about this as and try to use a very annoying product rule, but it might be easier to think about this as .      Generalizing the Derivative of the Exponential  Earlier, we looked at the specific derivative for ( ), but we haven't talked about derivatives of other exponential functions. What about things like or ? We can use a nice fact about exponentials and logarithms . We'll think more about log functions later (starting in ), but we can think a bit about them now.  A big fact to recall is that a logarithm is a way of finding an exponent with a specific property. If we want to find the exponent that we would need to put on the number to give us as an answer, we could use . This is just because logs are defined in this circular way: they are, by definition, the exponent you would need to output whatever number is inside the log.  This means that if we want to think about the number , but written in a different way, we can think of .  Ok, but why would we ever use this? This seems like a ridiculous way to write a number as basic as 2!  Consider the following: But we also might notice that we can re-write this using an exponent rule! We know that in general: . Let's re-write this exponential function: Remember, is just a number: it's specifically the number you have to put in the exponent on to get 2. So this is just a coefficient on . We can differentiate and use the Chain Rule! Now we can remember that is really which is just .  So we get . We can notice that we can re-create this with any (reasonable) value for the base of this exponential function.   Derivative of the Generalized Exponential Function   If and , then: .     "
},
{
  "id": "act-CompositionDecomposition",
  "level": "2",
  "url": "sec-ChainRule.html#act-CompositionDecomposition",
  "type": "Activity",
  "number": "2.5.1",
  "title": "Composition (and Decomposition) Pictionary.",
  "body": " Composition (and Decomposition) Pictionary   This activity will involve a second group, or at least a partner. We'll go through the first part of this activity, and then connect with a second group\/person to finish the second part.    Build two functions, calling them and . Pick whatever kinds of functions you'd like, but this activity will work best if these functions are in a kind of sweet-spot between \"simple\" and \"complicated,\" but don't overthink this.    Compose inside of to create , which we can also write as .    Write your composed function on a separate sheet of paper. Do not leave any indication of what your chosen and are. Just write your composed function by itself.  Now, pass this composed to your partner\/a second group.    You should have received a new function from some other person\/group. It is different than yours, but also labeled (with different choices of and ).  Identify a possibility for , the outside function in this composition, as well as a possibility for , the inside function in this composition. You can check your answer by composing these!    Write a different pair of possibilities for and that will still give you the same composed function, .    Check with your partner\/the second group: did you identify the pair of functions that they originally used?  Did whoever you passed your composed function to correctly identify your functions?   "
},
{
  "id": "act-Gears",
  "level": "2",
  "url": "sec-ChainRule.html#act-Gears",
  "type": "Activity",
  "number": "2.5.2",
  "title": "Gears and Chains.",
  "body": " Gears and Chains   Let's think about some gears. We've got three gears, all different sizes. But the gears are linked together, and a small motor works to spin one of the gears. Since the gears are linked, when one gear spins, they all do. But since they are different sizes, they complete a different number of revolutions: the smaller ones spin more times than the larger ones, since they have a smaller circumference.     Three circles, each with a point on it spinning around. The first circle is the largest: it is labeled \"Gear A.\" The second circle is the smallest: it is labeled \"Gear B.\" The last circle is a medium size: it is labeled \"Gear C.\"    For our purpose, let's say that Gear A is being driven by the motor.    Let's try to quantify how much \"faster\" Gear B is spinning compared to Gear A. How many revolutions does Gear B complete in the time it takes Gear A to complete one revolution?    Now quantify the speed of Gear C compared to its neighbor, Gear B. How many revolutions does Gear C complete in the time it takes Gear B to complete one revolution?    Use the above relative \"speeds\" to compare Gear C and Gear A: how many revolutions does Gear C complete in the time it takes Gear A to complete one revolution?  More importantly, how do we find this?    Now let's translate this into some derivative notation: we've really been finding rates at which one thing changes (the speed of the gear spinning) relative to another's.  Call the speed of Gear B compared to Gear A: . Now call the speed of Gear C compared to Gear B: . Come up with a formula to find .   "
},
{
  "id": "thm-ChainRule",
  "level": "2",
  "url": "sec-ChainRule.html#thm-ChainRule",
  "type": "Theorem",
  "number": "2.5.2",
  "title": "The Chain Rule.",
  "body": " The Chain Rule   For the composite function , if we define and , then, as long as both and are differentiable at and respectively: . Alternatively, this can be written as: .   "
},
{
  "id": "subsec-DoingChainRule-6",
  "level": "2",
  "url": "sec-ChainRule.html#subsec-DoingChainRule-6",
  "type": "Example",
  "number": "2.5.3",
  "title": "",
  "body": "  Use the Chain Rule to differentiate the following:        Notice that is composed under the square root. Use .        Try letting , since it's composed inside the exponent of the exponential function.        You could think about this as and try to use a very annoying product rule, but it might be easier to think about this as .   "
},
{
  "id": "thm-GeneralizedExponentialDerivaitve",
  "level": "2",
  "url": "sec-ChainRule.html#thm-GeneralizedExponentialDerivaitve",
  "type": "Theorem",
  "number": "2.5.4",
  "title": "Derivative of the Generalized Exponential Function.",
  "body": " Derivative of the Generalized Exponential Function   If and , then: .   "
},
{
  "id": "sec-ImplicitDifferentiation",
  "level": "1",
  "url": "sec-ImplicitDifferentiation.html",
  "type": "Section",
  "number": "3.1",
  "title": "Implicit Differentiation",
  "body": " Implicit Differentiation   Let's quickly recap what we've done with this new calculus object, the derivative:   We defined the derivative at a point ( ) to find the slope of a line touching a graph of a function at a single point. We call this the \"slope of the tangent line\" at a point.    Once we calculated this slope, we quickly found a way to think about the derivative as a function ( ) that connects -values with the slope of the line tangent to at that -value.    We thought about how we could interpret the derivative as more than just a slope ( ). We can think about this as an instantaneous rate of change, and use it to add detail to how we think about mathematical models of different things.    We spent some time building up shortcuts, noticing patterns, and generalizing ways of finding these derivative functions for specific functions ( ) as well as combinations of those functions ( and ).   Our goal, now, is to generalize this a bit. What happens when we push past the restriction of only dealing with functions ? Can we think of some reasonable non-functions that might produce curves? Might we think about tangent lines and slopes in these contexts?    Explicit vs. Implicit Definitions    Explicitly and Implicitly Defined Curves   A function or curve that is defined explicitly is one where the relationship between the variables is stated in with an equation like . Here, is the input variable and we can find each corresponding value of the -variable by applying some operations to . As an example, we might consider the following function: .  A function or curve that is defined implicitly us one where the relationship between the variables is stated with an equation connecting the variables, but not necessarily one which is \"solved\" for a single variable. Here, the relationship between variables is not stated with the typical \"input\" and \"output\" variables. As an example, we might consider the same function as above, but defined as: .  Often, an implicitly defined curve is one where we cannot solve for a single variable by isolating it.   A classic and important implicitly defined curve is the unit circle: . We can try to isolate for and write this as an explicitly defined curve, and end up with: . Unfortunately, this only displays the upper half of the circle, since the square root will only output positive values. In this case, we can get around this by defining the circle with two functions.   As we move forward, let's work with this circle using the implicitly defined version ( ). How might we find a slope of a line tangent to this circle at some point?    Using a Derivative as an Operator  Let's recall back to . We talked about how we can use the notation as a kind of action: the notation says \"find the derivative of with respect to .\" When we say \"with respect to ,\" we mean that we are treating as an input variable, and trying to find out how changes based on changes to that input. The notation says, \"find the rate at which changes as increases.\"  Because this notation is a call to action, we can use it when we're dealing with an equation. We can call back to our early algebra days, where we learn that whatever we do to one side of an equation needs to be done to the other side as well, in order to maintain the equality.  We can apply this to our derivative actions: we can differentiate both sides of an equation!   Thinking about the Chain Rule   Explain to someone how (and why) we use the to find the following derivative: .    Let's say that . Explain how we find the following derivative: . How is this different, or not different, than the previous derivative?    Let's say that we have some other function, . Explain how we find the following derivative: . How is this different, or not different, than the previous derivatives?    What is the difference between the following derivatives:    When do we need to use the Chain Rule? When do we need to use some linking derivative to connect the function we're looking at with the variable we care about?              Because we'll be applying our derivative notation to pieces of some equation, we'll need to be very aware of where we need to apply the Chain Rule.  Now we can look at some examples of implicitly defined curves and think about questions about the derivative. Let's start with our circle.   Slopes on a Circle   Visualize the unit circle. Feel free to draw one, or find the picture above. We're going to think about slopes on this circle.    Point out the locations on the unit circle where you would expect to see tangent lines that are perfectly horizontal. What do you think the value of the derivative, , would be at these points?    Point out the locations on the unit circle where you would expect to see tangent lines that are perfectly vertical. What do you think the value of the derivative, , would be at these points?    Find the point(s) where . What do you think the value of the derivative, , would be at these points?   There are two points to consider here: and .    For the unit circle defined by the equation , apply the derivative to both sides of this equation to get the following: Carefully consider each of these derivatives (each of the terms). Which of these will you need to apply the Chain Rule for?    Differentiate. Solve for or , whichever notation you decide to use.   Make sure to use the Chain Rule when necessary!    or     Go back to the first few questions, and try to answer them again:   Find the locations of any horizontal tangent lines (where ).    Find the locations of any vertical tangent lines (where doesn't exist, or where you would divide by 0).    Find the values of for the points on the circle where .         Let's repeat some of this process, but using a new curve. Consider the curve defined by the equation: . This curve is a special curve with some interesting mathematical properties, and is actually a part of a family of curves called elliptic curves . For now, let's just consider it as a fun curve to look at, and use implicit differentiation to think about it.     The elliptic curve, y^2=x^3-x+1. If has a flared horseshoe type shape. The curve has a symmetry across the x-axis, and the upper section starts somewhere near (-1.3,0). It starts moving vertically upwards, and then curves towards (-1,1). From there, it descends lightly towards somewhere near (0.6, 0.6), where it flares upwards. The portion under the x-axis is a reflection of this.      Mark the locations on the curve where it looks like the curve will have horizontal tangent lines. How many did you find?    Mark the locations on the curve where it looks like the curve will have vertical tangent lines. How many did you find?    Find the point(s) where . What do you think the value of the derivative, , would be at these points?    For the elliptic curve defined by the equation , apply the derivative to both sides of this equation: Carefully consider each of these derivatives (each of the terms). Which of these will you need to apply the Chain Rule for?    Differentiate. Solve for or , whichever notation you decide to use.   Make sure to use the Chain Rule when necessary!    or     Go back to the first few questions, and try to answer them again:   Find the locations of any horizontal tangent lines (where ).    Find the locations of any vertical tangent lines (where doesn't exist, or where you would divide by 0).    Find the values of for the points on the curve where .       This example was pretty similar to the first activity: in both of these, we use the Chain Rule to differentiate . Let's look at another example.     Let's consider a new curve: .    A curve with 4 independent loops visible. The main, middle, loop, looks like a deformed circle. It passes through the origin, and has some straight sides and almost pointed corners, although they are still round. On the x-axis, there are two very flat round loops: one around (8,0) and another around (-5,0). A third one lays on the y-axis around (-5,0).       We are going to find or . Let's dive into differentiation: Think carefully about these derivatives. For each of the three, how will you approach it? What kinds of nuances or rules or strategies will you need to think about? Why?   Are any of these derivatives involving a variable other than , the input variable (based on our notation, since we are thinking about how changes with regard to  ).  Are any of these derivatives involving any other combination of functions? Are there products and\/or quotients that we need to think about?    Implement your ideas or strategies from above to differentiate each term.   We need to apply the Chain Rule to and then we need to apply the Product Rule . Notice that when we find the derivative of for the Product Rule, we need to use the Chain Rule!        Now we need to solve for or , whichever you are using. While this equation can look complicated, we can notice something about the \"location\" of or in our equation.  Why do we always know that or will be multiplied on a term whenever it shows up?    Now that we are confident that we will always know that we are multiplying this derivative, we can employ a consistent strategy:   Rearrange our equation so that every term with a or is on one side, and everything without is on the other.    Now we are guaranteed that or is a common factor: factor it out.    Now we can solve for or by dividing!   Solve for or in your equation!    Build the equation of a line that lays tangent to the curve at the origin. Does the value of at look reasonable to you?      Some Summary and Strategy  Let's wrap this up with some general strategy and summary of what we've seen.  The first thing we can notice is that we have talked through how to employ two of the three big derivative rules: we used Chain Rule throughout these examples, and in we needed to use the Product Rule in order to differentiate . We have a glaring omission from our examples so far, though. Where is the Quotient Rule?  In these implicitly defined curves, we can manipulate the equations to never have to think about division! Consider the curve: . Graph this curve in a graphing utility like desmos. Does it look any different than the curve in ?  The only difference, really, is that the curve with the division is not defined at . As long as we keep those domain issues in mind, we can multiply everything by to get our familiar equation: . And there we go, we never have to think about the Quotient Rule in these kinds of contexts!  So we really only need a strategy for using the Chain Rule and the Product Rule.   Strategy for Implicit Differentiation     We use the Chain Rule whenever we differentiate something like . We differentiate whatever the function is, and multiply by the derivative of : .  This generalizes more: any time the variable in our derivative notation does not match the variable in the function\/term, we need to use the Chain Rule:     We use the Product Rule whenever we differentiate a term with some combination of and variables. More generally, we can use the Product Rule any time we have a combination of at least two variables. We have to treat these as different kinds of functions getting multiplied!         From here on out, we will use the ideas of implicit differentiation to accomplish two things:   We have a bit more flexibility with how we think of derivatives! We do not need to be restricted to only thinking about functions in order to think about rates of change or slopes at a point. We can think about any curve, any relationship between variables, and think about the relationship between them based on how one changes with regard to the other.    Implicit differentiation will be a very useful tool. Even when we have functions that can be written explicitly, they might be hard to deal with -- overly complex or maybe involving functions that we aren't used to. It is absolutely possible, and a really useful strategy, to re-write the relationship between variables implicitly! We can maybe create a version of these equations that we can differentiate!   We're going to use this second idea first: in the next section we'll be thinking about inverse functions. We do not have any idea of how to think about derivatives of logarithmic functions, like .  We can re-write this: . This second representation is something we can differentiate!  Similarly, if we wanted to think about the derivative of , we might instead think about re-writing this: . There are some weird issues to think about with the domains and ranges of these functions, but this is how we'll approach these derivatives next.   "
},
{
  "id": "subsec-ExplicitImplicit-2",
  "level": "2",
  "url": "sec-ImplicitDifferentiation.html#subsec-ExplicitImplicit-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "explicitly implicitly "
},
{
  "id": "act-ImplicitChainRule",
  "level": "2",
  "url": "sec-ImplicitDifferentiation.html#act-ImplicitChainRule",
  "type": "Activity",
  "number": "3.1.1",
  "title": "Thinking about the Chain Rule.",
  "body": " Thinking about the Chain Rule   Explain to someone how (and why) we use the to find the following derivative: .    Let's say that . Explain how we find the following derivative: . How is this different, or not different, than the previous derivative?    Let's say that we have some other function, . Explain how we find the following derivative: . How is this different, or not different, than the previous derivatives?    What is the difference between the following derivatives:    When do we need to use the Chain Rule? When do we need to use some linking derivative to connect the function we're looking at with the variable we care about?             "
},
{
  "id": "act-Circle",
  "level": "2",
  "url": "sec-ImplicitDifferentiation.html#act-Circle",
  "type": "Activity",
  "number": "3.1.2",
  "title": "Slopes on a Circle.",
  "body": " Slopes on a Circle   Visualize the unit circle. Feel free to draw one, or find the picture above. We're going to think about slopes on this circle.    Point out the locations on the unit circle where you would expect to see tangent lines that are perfectly horizontal. What do you think the value of the derivative, , would be at these points?    Point out the locations on the unit circle where you would expect to see tangent lines that are perfectly vertical. What do you think the value of the derivative, , would be at these points?    Find the point(s) where . What do you think the value of the derivative, , would be at these points?   There are two points to consider here: and .    For the unit circle defined by the equation , apply the derivative to both sides of this equation to get the following: Carefully consider each of these derivatives (each of the terms). Which of these will you need to apply the Chain Rule for?    Differentiate. Solve for or , whichever notation you decide to use.   Make sure to use the Chain Rule when necessary!    or     Go back to the first few questions, and try to answer them again:   Find the locations of any horizontal tangent lines (where ).    Find the locations of any vertical tangent lines (where doesn't exist, or where you would divide by 0).    Find the values of for the points on the circle where .      "
},
{
  "id": "subsec-DerivativeOperator-9",
  "level": "2",
  "url": "sec-ImplicitDifferentiation.html#subsec-DerivativeOperator-9",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": "  Let's repeat some of this process, but using a new curve. Consider the curve defined by the equation: . This curve is a special curve with some interesting mathematical properties, and is actually a part of a family of curves called elliptic curves . For now, let's just consider it as a fun curve to look at, and use implicit differentiation to think about it.     The elliptic curve, y^2=x^3-x+1. If has a flared horseshoe type shape. The curve has a symmetry across the x-axis, and the upper section starts somewhere near (-1.3,0). It starts moving vertically upwards, and then curves towards (-1,1). From there, it descends lightly towards somewhere near (0.6, 0.6), where it flares upwards. The portion under the x-axis is a reflection of this.      Mark the locations on the curve where it looks like the curve will have horizontal tangent lines. How many did you find?    Mark the locations on the curve where it looks like the curve will have vertical tangent lines. How many did you find?    Find the point(s) where . What do you think the value of the derivative, , would be at these points?    For the elliptic curve defined by the equation , apply the derivative to both sides of this equation: Carefully consider each of these derivatives (each of the terms). Which of these will you need to apply the Chain Rule for?    Differentiate. Solve for or , whichever notation you decide to use.   Make sure to use the Chain Rule when necessary!    or     Go back to the first few questions, and try to answer them again:   Find the locations of any horizontal tangent lines (where ).    Find the locations of any vertical tangent lines (where doesn't exist, or where you would divide by 0).    Find the values of for the points on the curve where .      "
},
{
  "id": "act-ImplicitSine",
  "level": "2",
  "url": "sec-ImplicitDifferentiation.html#act-ImplicitSine",
  "type": "Activity",
  "number": "3.1.3",
  "title": ".",
  "body": "   Let's consider a new curve: .    A curve with 4 independent loops visible. The main, middle, loop, looks like a deformed circle. It passes through the origin, and has some straight sides and almost pointed corners, although they are still round. On the x-axis, there are two very flat round loops: one around (8,0) and another around (-5,0). A third one lays on the y-axis around (-5,0).       We are going to find or . Let's dive into differentiation: Think carefully about these derivatives. For each of the three, how will you approach it? What kinds of nuances or rules or strategies will you need to think about? Why?   Are any of these derivatives involving a variable other than , the input variable (based on our notation, since we are thinking about how changes with regard to  ).  Are any of these derivatives involving any other combination of functions? Are there products and\/or quotients that we need to think about?    Implement your ideas or strategies from above to differentiate each term.   We need to apply the Chain Rule to and then we need to apply the Product Rule . Notice that when we find the derivative of for the Product Rule, we need to use the Chain Rule!        Now we need to solve for or , whichever you are using. While this equation can look complicated, we can notice something about the \"location\" of or in our equation.  Why do we always know that or will be multiplied on a term whenever it shows up?    Now that we are confident that we will always know that we are multiplying this derivative, we can employ a consistent strategy:   Rearrange our equation so that every term with a or is on one side, and everything without is on the other.    Now we are guaranteed that or is a common factor: factor it out.    Now we can solve for or by dividing!   Solve for or in your equation!    Build the equation of a line that lays tangent to the curve at the origin. Does the value of at look reasonable to you?   "
},
{
  "id": "sec-DerivativesInverse",
  "level": "1",
  "url": "sec-DerivativesInverse.html",
  "type": "Section",
  "number": "3.2",
  "title": "Derivatives of Inverse Functions",
  "body": " Derivatives of Inverse Functions   We should start here by saying: we're going to be thinking about inverse functions, and so maybe it will be helpful to recap some facts about inverse functions.   If is some function, then we can use the inverse function to represent this relationship between variables: .Some examples:    . That is, the logarithm function \"solves\" for the exponent (sometimes this is easier to just say that the logarithm is the exponent).     . That is, this inverse sine function (or sometimes ) finds the angle at which sine of that angle is . With these trigonometric functions, we need to make some restrictions: because there are an infinite number of angles that will produce the same output of the sine function (reflecting the angle across the -axis will do it, as will adding any multiple of ), we restrict the angles that the inverse sine function can output to being in .       Based on this re-representation above, we can always compose a function and its inverse to get the identity function, . In general, if has an inverse function , then . Similarly, we can compose in the opposite order: . This can be a bit trickier to think about for the inverse trigonometric functions, since this only works on intervals of where that inverse is defined. So we end up with strange things like: . This is because the inverse sine function finds only angles in the interval , and the angles and are coterminal (and so have the same output from the sine function).   With these small facts in mind, we can think about derivatives of inverse functions.    Wielding Implicit Differentiation  We're going to do a very cool thing: in order to find derivatives of inverse functions, we can invert the relationship between and , and then use to find .   Building the Derivative of the Logarithm   We're going to accomplish two things here:   By the end of this activity, we'll have a nice way of thinking about , and we will now be able to differentiate functions involving logarithms!    Throughout this activity, we're going to develop a way of approaching derivatives of inverse functions more generally. Then we can apply this framework to other functions!   Let's think about this logarithmic function!    We have stated (a couple of times now) how we define the log function: . This arrow goes both directions: the log function is the inverse of the exponential, but the exponential is the inverse of the log function!  Can you re-write the relationship using its inverse (the exponential)?    For your inverted from above (it should be ), apply a derivative operator to both sides, and use implicit differentiation to find or .   Where do we have to use Chain Rule?    A weird thing that we can notice is that when we use implicit differentiation, it is common to end up with our derivative written in terms of both and variables. This makes sense for our earlier examples: we needed specific coordinates of the point on the circle, for instance, to find the slope there.  But if , we want or to be a function of : . Your derivative is written with only values.  Since , replace any instance of with the log function. What do you have left?    Remember that . Substitute this into your equation for . Can you write this in a pretty simplistic way?   Remember that , since these functions are inverses of each other!    Before we go much further, we should be a bit careful. What is the domain of this derivative?  What are the values of where makes sense to think about?     Derivative of the Logarithmic Function    for .  Further, since (for and ), we can say that: for .      Derivatives of the Inverse Trigonometric Functions  Let's try a similar thing with inverse trigonometric functions. We'll start with the inverse sine function, .   Finding the Derivative of the Inverse Sine Function   We're going to do the same trick, except that there will be a couple of small differences due to thinking specifically about trigonometric functions.  Let's think about the function . We know that this is equivalent to (for -values in ).    Move the point around the portion of the unit circle in the graph below. Convince yourself that:         when      when       What is in this figure? Does the sign change depending on the value of ?    Use implicit differentiation and the equation to find or     If you still have your derivative written in terms of , make sure to write in terms of !    Let's think about the domain of this derivative: what -values make sense to think about?  Think about this both in terms of what -values reasonably fit into your formula of as well as the domain of the inverse sine function in general.    Notice that in the denominator of , you have a square root. Based on that information (and the visual above), what do you expect to be true about the sign of the derivative of the inverse sine function?  Confirm this by playing with the graph of below.     Investigate the behavior of at the end-points of the function: at and . What do the slopes look like they're doing, graphically?  How does this work when you look at the function you built above? What happens when you try to find or ?    Let's repeat the process to find the derivatives of and .   Building the Derivatives for Inverse Tangent and Secant   Consider the triangle representing the case when .     Right triangle with hypotenuse sqrt(x^2+1) and the other side lengths 1 and x. The angle between 1 and sqrt(x^2+1) is labeled y.    For , find using implicit differentiation. Find an appropriate expression for based on the triangle above, but we will refer back to the version with the in it later.    Consider the triangle representing the case when .     Right triangle with hypotenuse x and the other side lengths 1 and sqrt(x^2-1). The angle between 1 and x is labeled y.    For , find using implicit differentiation. Find an appropriate expression for and based on the triangle above, but we will refer back to the version with the functions of in it later.    Here's a graph of just the unit circle for angles . We are choosing to focus on this region, since these are the angles that the inverse tangent and inverse secant functions will return to us. We want to investigate the signs of and .     Go back to our derivative expressions for both the inverse tangent and inverse secant functions. What do we know about the signs of these derivatives?   Notice that in , we know that the derivative must be positive. Even when , we are squaring it.  In , we know that the derivative must also always be positive. Whenever , we have , and so the product must be positive.    Confirm your idea about the sign of the derivatives by investigating the graphs of each function.     How do we need to write these derivatives, when we write them in terms of to account for the sign of the derivative?   Use an absolute value in the formula for !    It is important to think carefully about how things might change when we start thinking about other trigonometric functions. For instance, what happens when we think about instead? We could repeat the process from with instead (and we'll do that for ), but for now let's think about the graph of .   Connecting These Inverse Functions   We're going to look at a graph of , but we're specifically going to try to compare it to the graph of . We'll use some graphical transformations to make these functions match up, and then later we'll think about derivatives.    Ok, consider the graph of and a transformed version of the inverse sine function. Apply some graphical transformations to make these match!     It might be fun to think about another reason that this connection between and exists.  Consider this triangle:    A right triangle with side lengths labeled x and sqrt(1-x^2) with the hypotenuse labeled 1.   We're going to think about these inverse trigonometric functions as angles: let and . We can re-write these as: . Can you fill in your triangle using this information?  Why does ? Convince yourself that this is what we did with the graphical transformations above, as well.    Use this equation above, re-writing as some expression involving the inverse sine function, and then find .        We could repeat this task to try to connect the graph of with as well as the graph of with , but we can hopefully see what will happen. In each case, we have the same kind of connection that we saw in the triangle, since these are cofunctions of each other!  We can summarize by believing that:      Derivatives of the Inverse Trigonometric Functions         "
},
{
  "id": "act-lnxDerivative",
  "level": "2",
  "url": "sec-DerivativesInverse.html#act-lnxDerivative",
  "type": "Activity",
  "number": "3.2.1",
  "title": "Building the Derivative of the Logarithm.",
  "body": " Building the Derivative of the Logarithm   We're going to accomplish two things here:   By the end of this activity, we'll have a nice way of thinking about , and we will now be able to differentiate functions involving logarithms!    Throughout this activity, we're going to develop a way of approaching derivatives of inverse functions more generally. Then we can apply this framework to other functions!   Let's think about this logarithmic function!    We have stated (a couple of times now) how we define the log function: . This arrow goes both directions: the log function is the inverse of the exponential, but the exponential is the inverse of the log function!  Can you re-write the relationship using its inverse (the exponential)?    For your inverted from above (it should be ), apply a derivative operator to both sides, and use implicit differentiation to find or .   Where do we have to use Chain Rule?    A weird thing that we can notice is that when we use implicit differentiation, it is common to end up with our derivative written in terms of both and variables. This makes sense for our earlier examples: we needed specific coordinates of the point on the circle, for instance, to find the slope there.  But if , we want or to be a function of : . Your derivative is written with only values.  Since , replace any instance of with the log function. What do you have left?    Remember that . Substitute this into your equation for . Can you write this in a pretty simplistic way?   Remember that , since these functions are inverses of each other!    Before we go much further, we should be a bit careful. What is the domain of this derivative?  What are the values of where makes sense to think about?   "
},
{
  "id": "thm-DerivativeLog",
  "level": "2",
  "url": "sec-DerivativesInverse.html#thm-DerivativeLog",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Derivative of the Logarithmic Function.",
  "body": " Derivative of the Logarithmic Function    for .  Further, since (for and ), we can say that: for .   "
},
{
  "id": "act-InverseSineDerivative",
  "level": "2",
  "url": "sec-DerivativesInverse.html#act-InverseSineDerivative",
  "type": "Activity",
  "number": "3.2.2",
  "title": "Finding the Derivative of the Inverse Sine Function.",
  "body": " Finding the Derivative of the Inverse Sine Function   We're going to do the same trick, except that there will be a couple of small differences due to thinking specifically about trigonometric functions.  Let's think about the function . We know that this is equivalent to (for -values in ).    Move the point around the portion of the unit circle in the graph below. Convince yourself that:         when      when       What is in this figure? Does the sign change depending on the value of ?    Use implicit differentiation and the equation to find or     If you still have your derivative written in terms of , make sure to write in terms of !    Let's think about the domain of this derivative: what -values make sense to think about?  Think about this both in terms of what -values reasonably fit into your formula of as well as the domain of the inverse sine function in general.    Notice that in the denominator of , you have a square root. Based on that information (and the visual above), what do you expect to be true about the sign of the derivative of the inverse sine function?  Confirm this by playing with the graph of below.     Investigate the behavior of at the end-points of the function: at and . What do the slopes look like they're doing, graphically?  How does this work when you look at the function you built above? What happens when you try to find or ?   "
},
{
  "id": "act-InverseTangentSecant",
  "level": "2",
  "url": "sec-DerivativesInverse.html#act-InverseTangentSecant",
  "type": "Activity",
  "number": "3.2.3",
  "title": "Building the Derivatives for Inverse Tangent and Secant.",
  "body": " Building the Derivatives for Inverse Tangent and Secant   Consider the triangle representing the case when .     Right triangle with hypotenuse sqrt(x^2+1) and the other side lengths 1 and x. The angle between 1 and sqrt(x^2+1) is labeled y.    For , find using implicit differentiation. Find an appropriate expression for based on the triangle above, but we will refer back to the version with the in it later.    Consider the triangle representing the case when .     Right triangle with hypotenuse x and the other side lengths 1 and sqrt(x^2-1). The angle between 1 and x is labeled y.    For , find using implicit differentiation. Find an appropriate expression for and based on the triangle above, but we will refer back to the version with the functions of in it later.    Here's a graph of just the unit circle for angles . We are choosing to focus on this region, since these are the angles that the inverse tangent and inverse secant functions will return to us. We want to investigate the signs of and .     Go back to our derivative expressions for both the inverse tangent and inverse secant functions. What do we know about the signs of these derivatives?   Notice that in , we know that the derivative must be positive. Even when , we are squaring it.  In , we know that the derivative must also always be positive. Whenever , we have , and so the product must be positive.    Confirm your idea about the sign of the derivatives by investigating the graphs of each function.     How do we need to write these derivatives, when we write them in terms of to account for the sign of the derivative?   Use an absolute value in the formula for !   "
},
{
  "id": "act-InverseCosineGraph",
  "level": "2",
  "url": "sec-DerivativesInverse.html#act-InverseCosineGraph",
  "type": "Activity",
  "number": "3.2.4",
  "title": "Connecting These Inverse Functions.",
  "body": " Connecting These Inverse Functions   We're going to look at a graph of , but we're specifically going to try to compare it to the graph of . We'll use some graphical transformations to make these functions match up, and then later we'll think about derivatives.    Ok, consider the graph of and a transformed version of the inverse sine function. Apply some graphical transformations to make these match!     It might be fun to think about another reason that this connection between and exists.  Consider this triangle:    A right triangle with side lengths labeled x and sqrt(1-x^2) with the hypotenuse labeled 1.   We're going to think about these inverse trigonometric functions as angles: let and . We can re-write these as: . Can you fill in your triangle using this information?  Why does ? Convince yourself that this is what we did with the graphical transformations above, as well.    Use this equation above, re-writing as some expression involving the inverse sine function, and then find .        We could repeat this task to try to connect the graph of with as well as the graph of with , but we can hopefully see what will happen. In each case, we have the same kind of connection that we saw in the triangle, since these are cofunctions of each other!  We can summarize by believing that:    "
},
{
  "id": "thm-InverseTrigDerivatives",
  "level": "2",
  "url": "sec-DerivativesInverse.html#thm-InverseTrigDerivatives",
  "type": "Theorem",
  "number": "3.2.5",
  "title": "Derivatives of the Inverse Trigonometric Functions.",
  "body": " Derivatives of the Inverse Trigonometric Functions       "
},
{
  "id": "sec-LogarithmicDifferentiation",
  "level": "1",
  "url": "sec-LogarithmicDifferentiation.html",
  "type": "Section",
  "number": "3.3",
  "title": "Logarithmic Differentiation",
  "body": " Logarithmic Differentiation   We're going to start with a quick fact about logs and their derivatives. The derivative rule for is still relatively new for us, so it is ok to still be getting comfortable with it, but we should notice this nice fact.   Derivative of the Log of a Function    Note that there's nothing really special going on here: this is just an application of the to the .    Throughout this section, the goal is to convince any open-minded readers of one thing:   Logs are friends.   Let us be informal and technically not quite correct but hopefully clear in this. Logs really are friendly mathematical objects. They were created to be friendly objects! In a time when doing arithmetic with large numbers was difficult due to a lack of computing technology, logs were introduced to make arithmetic easier.  The general idea is that, if there is some kind of hierarchy of operations, then logs transform operations between things into different operations that are lower on the hierarchy of operations. So logs turn things like products (repeated addition) and quotients (repeated subtraction) into addition and subtraction. Logs turn exponents (repeated multiplication) into coefficients.  Using math notation, we can write the following log properties.   Properties of Logarithms   We will make use of the following properties of logarithms.                 Because of the domain of the log function, we need for these properties to make sense. We will use them relatively loosely, with functions that take on negative and positive values, and not worry too much about the domain issues when we don't need to.      Logs Are Friends!  Ok, so how will we use these new-found friends? We're going to think about some functions (and combinations of functions) that are new to us and that aren't so clear for us to use things like the Product, Quotient, or Chain Rule. We'll try to use logs to re-write our functions into some easier to approach implicitly defined relationships in order for us to differentiate.  But first, let's build an explanation for the .   Returning to the Power Rule   Back in we built an explanation for why that relied on thinking about exponents as repeated multiplication: it relied on being some positive integer. We said, at the time, that the Power Rule generalizes and works for any integer, but did so without explanation.  Let's consider where is just some real number without any other restrictions.    Apply a logarithm to both sides of this equation: Now use one of the to re-write this equation.    Use implicit differentiation to find or .   Remember that when you solve for or , you might have some -variables in your derivative. Replace them with .    Explain to yourself why this is equivalent to the Power Rule that we built so long ago: .    Let's get weird. What if we have a not-quite-power function? Where the thing in the exponent isn't simply a number, but another variable?  Let's use the same technique to think about and its derivative. First, though, confirm that this is not a power function (and so we cannot use the Power Rule to find the derivative) and is also not an exponential function (and so the derivative isn't itself or itself scaled by a log).    Now apply a log to both sides: . Re-write this using the same log property as before, and then use implicit differentiation to find or .   Don't forget that in order to find , we need to use the Product Rule.    Explain to yourself why logs are friends, especially when trying to differentiate functions in the form of .    This idea that we've just implemented (applying a logarithm to make some function more friendly and then using implicit differentiation to differentiate) is often called logarithmic differentiation . It works so well because logs are friends .    Wow, So Friendly!  This is incredible! We can now differentiate a whole new class of functions! Functions raised to functions, what could we think of next!  How about products and quotients of functions? I know, I know, we have ...what about big products and quotients? Annoying ones. Complicated ones.   Logarithmic Differentiation with Products and Quotients   Let's say we've got some function that has products and quotients in it. Like, a lot. Consider the function: .    Work out a general strategy for how you would find directly. Where would you have to use Quotient Rule? What are the pieces? Where would you have to use Product Rule? What are the pieces? Where would you have to use Chain Rule? What are the pieces?  To be clear: do not actually differentiate this. Just look at it in horror and try to outline a plan that some other fool would use.  Click on the \"Solution\" below to see what the fool did.    What now? Can we \"simplify\" this somehow? Maybe, but I am not doing any more of this!    Let's instead use logarithmic differentiation. First, apply the log to both sides to get: . Since this function is just a bunch of products of things with exponents all put into some big quotient, we can use our log properties to re-write this!    We should have: . Confirm this.    Now differentiate both sides! You'll have to use some Chain Rule (but not a lot)! Refer back to for help here.    Solve for or .    While this is not a nice looking expression for the derivative, spend some time confirming that this was a nicer process then differentiating directly. This is because logs are friends.      So how do we wrap this up? I hope we can see that logs are a useful and powerful tool: we can use logarithmic differentiation to transform our functions to become \"easier to work with\" versions of themselves: we put everything on a log-scale and allow our properties of logarithms to make the operations become a bit more accessible.  This is a commonly used trick in many applications of calculus. Specifically, this is used often enough in statistics that there is a whole paradigm of estimation (called Maximum Likelihood Estimation) that uses a log-transformed version of a likelihood function and then applies some basic calculus ideas (that we'll cover in ) to perform some powerful estimations.  While I hope that we end up leaving this section knowing that logs are friends , we can probably add a second (and related result) that we're using over and over.   Using the Chain Rule is probably easier than any other option.   We apply logs in order to re-write these functions in a friendly way because we would rather use the Chain Rule than any combination of other derivative strategies.   "
},
{
  "id": "fact-ChainRuleLog",
  "level": "2",
  "url": "sec-LogarithmicDifferentiation.html#fact-ChainRuleLog",
  "type": "Fact",
  "number": "3.3.1",
  "title": "Derivative of the Log of a Function.",
  "body": " Derivative of the Log of a Function    Note that there's nothing really special going on here: this is just an application of the to the .   "
},
{
  "id": "fact-LogProperties",
  "level": "2",
  "url": "sec-LogarithmicDifferentiation.html#fact-LogProperties",
  "type": "Fact",
  "number": "3.3.2",
  "title": "Properties of Logarithms.",
  "body": " Properties of Logarithms   We will make use of the following properties of logarithms.                 Because of the domain of the log function, we need for these properties to make sense. We will use them relatively loosely, with functions that take on negative and positive values, and not worry too much about the domain issues when we don't need to.   "
},
{
  "id": "act-GeneralizedPowerRule",
  "level": "2",
  "url": "sec-LogarithmicDifferentiation.html#act-GeneralizedPowerRule",
  "type": "Activity",
  "number": "3.3.1",
  "title": "Returning to the Power Rule.",
  "body": " Returning to the Power Rule   Back in we built an explanation for why that relied on thinking about exponents as repeated multiplication: it relied on being some positive integer. We said, at the time, that the Power Rule generalizes and works for any integer, but did so without explanation.  Let's consider where is just some real number without any other restrictions.    Apply a logarithm to both sides of this equation: Now use one of the to re-write this equation.    Use implicit differentiation to find or .   Remember that when you solve for or , you might have some -variables in your derivative. Replace them with .    Explain to yourself why this is equivalent to the Power Rule that we built so long ago: .    Let's get weird. What if we have a not-quite-power function? Where the thing in the exponent isn't simply a number, but another variable?  Let's use the same technique to think about and its derivative. First, though, confirm that this is not a power function (and so we cannot use the Power Rule to find the derivative) and is also not an exponential function (and so the derivative isn't itself or itself scaled by a log).    Now apply a log to both sides: . Re-write this using the same log property as before, and then use implicit differentiation to find or .   Don't forget that in order to find , we need to use the Product Rule.    Explain to yourself why logs are friends, especially when trying to differentiate functions in the form of .   "
},
{
  "id": "subsec-LogsAreFriends-5",
  "level": "2",
  "url": "sec-LogarithmicDifferentiation.html#subsec-LogsAreFriends-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logarithmic differentiation "
},
{
  "id": "act-LogsProductsQuotients",
  "level": "2",
  "url": "sec-LogarithmicDifferentiation.html#act-LogsProductsQuotients",
  "type": "Activity",
  "number": "3.3.2",
  "title": "Logarithmic Differentiation with Products and Quotients.",
  "body": " Logarithmic Differentiation with Products and Quotients   Let's say we've got some function that has products and quotients in it. Like, a lot. Consider the function: .    Work out a general strategy for how you would find directly. Where would you have to use Quotient Rule? What are the pieces? Where would you have to use Product Rule? What are the pieces? Where would you have to use Chain Rule? What are the pieces?  To be clear: do not actually differentiate this. Just look at it in horror and try to outline a plan that some other fool would use.  Click on the \"Solution\" below to see what the fool did.    What now? Can we \"simplify\" this somehow? Maybe, but I am not doing any more of this!    Let's instead use logarithmic differentiation. First, apply the log to both sides to get: . Since this function is just a bunch of products of things with exponents all put into some big quotient, we can use our log properties to re-write this!    We should have: . Confirm this.    Now differentiate both sides! You'll have to use some Chain Rule (but not a lot)! Refer back to for help here.    Solve for or .    While this is not a nice looking expression for the derivative, spend some time confirming that this was a nicer process then differentiating directly. This is because logs are friends.   "
},
{
  "id": "sec-MeanValueTheorem",
  "level": "1",
  "url": "sec-MeanValueTheorem.html",
  "type": "Section",
  "number": "4.1",
  "title": "Mean Value Theorem",
  "body": " Mean Value Theorem   Let's begin here with some weird questions. The questions aren't weird because of what they're asking. Instead, they're weird because of the logic of how we interpret them compared to how we want to interpret them.   Why is the derivative of a constant function 0?    Why do and have the same derivative?    If a function is only increasing on the interval , what do we know about the derivative at any of these -values in ?   These questions are ones we can think through and answer.  Here are some answers for these first three questions:   A constant function has all of the same -values for any -value in the domain: of course the slope everywhere is 0! There isn't any change in the -values!    We can differentiate these functions term by term: we know that the term has a derivative of , and then for each function's constant, the derivative has to be 0. So it doesn't matter what each constant was, the derivatives wouldn't rely on that value!    If a function is increasing on an interval, then it means that for any pair of -values, , we get -values in the same order: . If we find the limit of slopes as , we'll always get a positive slope, so the derivative has to be positive.       What's tricky is that these don't always say what we want to say. For instance, I might sometimes want to say the following:   If you know a function's derivative is 0, then you know the function is constant. Another way of saying this is that the only functions whose derivative is 0 are constant functions.    Similarly, we might want to say that if you know two functions that have the same derivative, then the only difference between the functions is a constant. There aren't any other ways for functions to be different with the same derivative.    We might want to say that if you know the derivative is positive on an interval, that means that the function has to be increasing.   Do you see the (slight) difference?  What we'll secretly see is that all of these statements are actually correct but require a result for us to say them. The Mean Value Theorem will be the result that we use to build important and helpful results throughout the rest of this course.    Slopes  We have two different kinds of slopes that we think of right now: a slope between two points, and a slope at a single point.  We can translate this into a rate of change! We think of two rates of change: an average rate of change on some interval and the instantaneous rate of change at some point.  We will try to connect these two different slopes\/rates of change for \"well-behaved\" functions. Let's take a look at an example. In the graph below, we have a curve where we are considering some closed interval, as well as a point within that interval. Both slopes are visualized and calculated: the slope between the ending points of the interval is the average slope, while the slope of the line tangent to the curve at a point is the instantaneous slope. Move the point\/interval around and get a feel for how these two different slopes relate (or don't relate!) to each other.   If you move the interval\/point around enough, you'll see that sometimes these two slopes are really similar and sometimes they're very different. But what if the point in the middle of the interval wasn't so \"set\" at being stuck in the exact middle of the interval? What if we stuck the interval in place, and then had the freedom to move the point anywhere in the interval?   Do you think we will always be able to do this? What kinds of functions will have these points where the slope at the point matches the average slope on the interval?    The Mean Value Theorem   Mean Value Theorem   For a function that is continuous on the closed interval and differentiable on the open interval , then there is some value with where: .    This theorem is really just guaranteeing the existence of at least one of the points we found above: a point where the slope of the line tangent to the curve is the same as the slope between the endpoints of the interval. We can (and, very briefly, we will) use this theorem to find the point that is guaranteed to exist, but we will, more generally, use this theorem as a tool for connection.  We will try to use it as a way of connecting derivatives to the behavior of a function. The Mean Value Theorem gives us this equation where on one side we have a derivative, and on the other side we have function outputs. This is really similar to the definition of the , except that in this case we have no limit: we just get to use the behavior of the function on an interval around the point.  Secretly, the Mean Value Theorem is the driving force behind most of the results we will look at from here on out, at least when the requirements include continuity and differentiability on an interval. You can almost guarantee that if a theorem or result has these two requirements, then the Mean Value Theorem is likely at work.  Let's look at one example, at least, before we move on.    Let's say that a person is planning on biking to their college campus, 8 miles away. At 2:39pm they send a text to their friend with a selfie of them on their bike about to start their trip, captioned \"Beautiful day for a ride!\" At 3:27pm, they post a picture on their social media of them in front of the bike rack on campus.    What was the average velocity of the student between 2:39pm and 3:27pm?   The total trip took 48 minutes (or 0.8 hours), and the student traveled a total distance of 8 miles.  The student's average velocity is miles per hour.    The Mean Value Theorem connects average slopes with slopes of tangent lines. What does that mean, in general, in this context?   In this case, the average rate of change of the function on the interval is the average velocity of the biker. So then the instantaneous rate of change must correspond with an instantaneous velocity, of their velocity at some specific point in time.    Make a claim about the instantaneous velocity of the student on their bike at some point in time.   We know that at some point between 2:39pm and 3:27pm, the cyclist had to be traveling at exactly 10 miles per hour.      For a function on the interval , find the point that the Mean Value Theorem guarantees the existence of, and explain what it is.   Let's calculate the average slope on the interval: So we know that there is some -value between 1 and 4 where .  The derivative is , so we can solve for : So the point guaranteed to exist by the Mean Value Theorem is located at , where the slope of the tangent line is .    These examples are fine, but the real power of the Mean Value Theorem comes in how we can use it to general more interesting results. Let's check those out!    More Results due to the Mean Value Theorem  First, let's remind ourselves of what it means for a function to be increasing or decreasing on an interval.   Increasing and Decreasing on an Interval   A function is increasing on the interval if, for every pair of -values and (with ), .  If , then we say that is decreasing on the interval .    Note that we classify a function as increasing or decreasing based on comparing two function outputs. This is a perfect time to use the Mean Value Theorem, since it can connect these pairs of function outputs with a derivative!   Sign of the Derivative and Direction of a Function   If is a function that is differentiable on the interval and for all in the interval , then must be increasing on .  Similarly, if for all in the interval , then must be decreasing on .    Before we begin, let's just agree to think about only the case where on the interval . The other case (where ) ends up being the exact same argument, with some changes in signs and directions of inequalities. So we'll say for all -values in the interval .  Ok, let's begin!  Let's pick two arbitrary -values from the interval . Call them and , and we'll make sure that we name them in a way where . Now, must be continuous on and differentiable on . We also know that for every in the interval ( ).  The Mean Value Theorem says that there is some in with . Equivalently, this means that . Notice that (since the derivative is positive everywhere in the interval) and (by the wat we named these -values). This means that , and so as well.  Ok so notice what just happened: we arbitrarily chose -values and and noticed that for any of these pairs where , we found that . This is exactly what it means for to be increasing on the interval (based on ).    We'll use this result pretty extensively in the next couple of topics. It is helpful for us to use this to connect the signs of a derivative with our intuition about what that must mean for the direction of a function.   If a Function's Derivative is 0, it's Constant   If is a function defined on with for all -values in the interval , then is a constant function.    We can almost exactly replicate the proof from here!  Let's pick two arbitrary -values from the interval . Call them and , and we'll again make sure that we name them in a way where . Now, must be continuous on and differentiable on . This time, we know that for every in the interval ( ).  The Mean Value Theorem says that there is some in with . Equivalently, this means that . Notice that (since the derivative is zero everywhere in the interval). This means that , and so as well.  This means that every -value from the function is the same as every other one, since we picked these points arbitrarily. So must be a constant function!     Equal Derivatives Correspond with Related Functions   For two functions and , both differentiable on , if for all -values on , then we know that for some real number constant . That is, the only differences in and are due to a difference in the constant term.    This one is pretty easy to prove: we're going to use a fun little trick where we connect this theorem to .  Let's think about these two functions and with , and let's think about a function . Now we can notice that which has to be 0.  Oh wow, is a function with on the interval . It must be a constant function (based on )! Let's call it , where is some real number constant.  This means that , and we can see that the only difference between these two functions is a constant.    We'll use this result a bit later on, but it's a great example of how we can use the Mean Value Theorem to connect information about the derivative to information about how a function might work.    Let me interject my own opinion here: I think the Mean Value Theorem is extremely important. But I also don't think that it is that important for you to use .  I think you should know the general idea of connecting the slopes of the line tangent to the curve and the average slope on an interval. I think you should remember the picture we looked at. I think you should be content to see some results later on in the course and smile fondly about how the Mean Value Theorem is under the surface, churning away and getting us cool results to think about. I think we should be happy that the Mean Value Theorem is here and we can recognize it as, maybe, the most important result in this textbook.  But we don't need to pretend that we need to actually use it directly...we aren't going to need to compute a lot or anything like that. We'll just know it.   "
},
{
  "id": "thm-MVT",
  "level": "2",
  "url": "sec-MeanValueTheorem.html#thm-MVT",
  "type": "Theorem",
  "number": "4.1.1",
  "title": "Mean Value Theorem.",
  "body": " Mean Value Theorem   For a function that is continuous on the closed interval and differentiable on the open interval , then there is some value with where: .   "
},
{
  "id": "subsec-MVT-7",
  "level": "2",
  "url": "sec-MeanValueTheorem.html#subsec-MVT-7",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  Let's say that a person is planning on biking to their college campus, 8 miles away. At 2:39pm they send a text to their friend with a selfie of them on their bike about to start their trip, captioned \"Beautiful day for a ride!\" At 3:27pm, they post a picture on their social media of them in front of the bike rack on campus.    What was the average velocity of the student between 2:39pm and 3:27pm?   The total trip took 48 minutes (or 0.8 hours), and the student traveled a total distance of 8 miles.  The student's average velocity is miles per hour.    The Mean Value Theorem connects average slopes with slopes of tangent lines. What does that mean, in general, in this context?   In this case, the average rate of change of the function on the interval is the average velocity of the biker. So then the instantaneous rate of change must correspond with an instantaneous velocity, of their velocity at some specific point in time.    Make a claim about the instantaneous velocity of the student on their bike at some point in time.   We know that at some point between 2:39pm and 3:27pm, the cyclist had to be traveling at exactly 10 miles per hour.   "
},
{
  "id": "subsec-MVT-8",
  "level": "2",
  "url": "sec-MeanValueTheorem.html#subsec-MVT-8",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  For a function on the interval , find the point that the Mean Value Theorem guarantees the existence of, and explain what it is.   Let's calculate the average slope on the interval: So we know that there is some -value between 1 and 4 where .  The derivative is , so we can solve for : So the point guaranteed to exist by the Mean Value Theorem is located at , where the slope of the tangent line is .   "
},
{
  "id": "def-IncreasingDecreasing",
  "level": "2",
  "url": "sec-MeanValueTheorem.html#def-IncreasingDecreasing",
  "type": "Definition",
  "number": "4.1.4",
  "title": "Increasing and Decreasing on an Interval.",
  "body": " Increasing and Decreasing on an Interval   A function is increasing on the interval if, for every pair of -values and (with ), .  If , then we say that is decreasing on the interval .   "
},
{
  "id": "thm-IncreasingDecreasing",
  "level": "2",
  "url": "sec-MeanValueTheorem.html#thm-IncreasingDecreasing",
  "type": "Theorem",
  "number": "4.1.5",
  "title": "Sign of the Derivative and Direction of a Function.",
  "body": " Sign of the Derivative and Direction of a Function   If is a function that is differentiable on the interval and for all in the interval , then must be increasing on .  Similarly, if for all in the interval , then must be decreasing on .    Before we begin, let's just agree to think about only the case where on the interval . The other case (where ) ends up being the exact same argument, with some changes in signs and directions of inequalities. So we'll say for all -values in the interval .  Ok, let's begin!  Let's pick two arbitrary -values from the interval . Call them and , and we'll make sure that we name them in a way where . Now, must be continuous on and differentiable on . We also know that for every in the interval ( ).  The Mean Value Theorem says that there is some in with . Equivalently, this means that . Notice that (since the derivative is positive everywhere in the interval) and (by the wat we named these -values). This means that , and so as well.  Ok so notice what just happened: we arbitrarily chose -values and and noticed that for any of these pairs where , we found that . This is exactly what it means for to be increasing on the interval (based on ).   "
},
{
  "id": "thm-ZeroDerivative",
  "level": "2",
  "url": "sec-MeanValueTheorem.html#thm-ZeroDerivative",
  "type": "Theorem",
  "number": "4.1.6",
  "title": "If a Function’s Derivative is 0, it’s Constant.",
  "body": " If a Function's Derivative is 0, it's Constant   If is a function defined on with for all -values in the interval , then is a constant function.    We can almost exactly replicate the proof from here!  Let's pick two arbitrary -values from the interval . Call them and , and we'll again make sure that we name them in a way where . Now, must be continuous on and differentiable on . This time, we know that for every in the interval ( ).  The Mean Value Theorem says that there is some in with . Equivalently, this means that . Notice that (since the derivative is zero everywhere in the interval). This means that , and so as well.  This means that every -value from the function is the same as every other one, since we picked these points arbitrarily. So must be a constant function!   "
},
{
  "id": "thm-OffByConstant",
  "level": "2",
  "url": "sec-MeanValueTheorem.html#thm-OffByConstant",
  "type": "Theorem",
  "number": "4.1.7",
  "title": "Equal Derivatives Correspond with Related Functions.",
  "body": " Equal Derivatives Correspond with Related Functions   For two functions and , both differentiable on , if for all -values on , then we know that for some real number constant . That is, the only differences in and are due to a difference in the constant term.    This one is pretty easy to prove: we're going to use a fun little trick where we connect this theorem to .  Let's think about these two functions and with , and let's think about a function . Now we can notice that which has to be 0.  Oh wow, is a function with on the interval . It must be a constant function (based on )! Let's call it , where is some real number constant.  This means that , and we can see that the only difference between these two functions is a constant.   "
},
{
  "id": "sec-IncreasingDecreasing",
  "level": "1",
  "url": "sec-IncreasingDecreasing.html",
  "type": "Section",
  "number": "4.2",
  "title": "Increasing and Decreasing Functions",
  "body": " Increasing and Decreasing Functions    How Should We Think About Direction?   Our goal in this activity is to motivate some new terminology and results that will help us talk about the \"direction\" of a function and some interesting points on a function (related to the direction of a function). For us to do this, we'll look at some different examples of functions and try to think about some unifying ideas.       A rational function that increases gently up to a point in the third quadrant, then decreases towards a vertical asymptote at x=0. In the first quadrant, the function decreases down to some point, and then gently increases.    A polynomial function that decreases down to a point, then increases, then decreases, then increases.      A kind of oscillating function that looks like it bounces off of the horizontal axis, creating sharp corners. It gently changes direction near the peak. The graph decreases, hits the axis and increases, then gently decreases towards the horizontal axis. It bounces one more time, and increases then decreases.    A bell curve, with horizontal asymptote at y=0. It increases up to a point on the top where it changes to decreasing towards the horizontal axis.      These examples do not cover all of the possibilities of how a function can act, but will hopefully provide us enough fertile ground to think about some different situations.    In each graph, find and identify:   The intervals where the function is increasing.    The intervals where the function is decreasing.    The points (or locations) around and between these intervals, the points where the function changes direction or the direction terminates.       Make a conjecture about the behavior of a function at any point where the function changes direction.   What do you think has to be true about the derivative at these points?    Look at the highest and lowest points on each function. You can even include the points that are highest and lowest just compared to the points around it. Make a conjecture about the behavior of the function at these points.   What do you think has to be true about the derivative at these points?    We want to turn this little bit of thinking and exploring into some useful definitions for us. To craft these definitions, we need to start with thinking about what we care about and why we might care about it.    Critical Points, Local Maximums, and Local Minimums  Let's start by saying what we're really looking for is the highest and lowest points on a function. These points are interesting, have useful applications, and are difficult to find in general without calculus. We hopefully noticed, though, that these points always end up showing up at the same kinds of locations! They're points where the direction of a function changes (or terminates).  We also noticed that there are some common characteristics of those points. They're points where the derivative was either 0 or didn't exist. So we'll start by defining these points, and then we'll define the idea of \"highest\" and \"lowest\" points. Then we'll put together a result that we hopefully noticed here: that the highest and lowest points show up at these points where the derivative is 0 or doesn't exist.   Critical Point of a Function   We say that a point on the graph of is a critical point of the function if or doesn't exist.  If is a critical point of , then we sometimes will call a critical number and a critical value .    So these are the points we will look for to find the \"highest\" and \"lowest\" points.  Now we need to define this idea so that we can build the result that tells us how to find these highest and lowest points.   Local Maximum\/Minimum   A point is a local maximum of if there is some open interval of real numbers around (that is, ) and for all -values in the intersection of and the domain of .  Similarly, a point is a local minimum of if there is some open interval of real numbers around (that is, ) and for all -values in the intersection of and the domain of .  These are really just slightly technical ways of saying that is either the highest or lowest -value produced by the function for the -values near .     If you look around online, or in other textbooks, you'll find different definitions of these same kinds of pints. Some of those definitions have silly stipulations, like saying that an ending point of a function cannot be a local maximum\/local minimum.  This seems to come from some sense that the derivative must be defined on each \"side\" of a local max\/min. In this book, we'll not worry about this restriction, and instead just look at the highest and lowest points relative to the other points near it.   Now we want to build the connection between these points. In , we pointed out that the highest and lowest points on a function all had the common theme of showing up at places where the derivative was 0 or didn't exist.   Every Local Maximum\/Minimum Occurs at a Critical Point   Every local maximum or local minimum of occurs at a critical point of .  Another way of saying this is that if is a local maximum or local minimum of , then it must also be a critical point of .    WAIT! STOP! Before you move on, let's make sure we understand what this theorem is saying. Or maybe what this theorem is not saying.  Notice that we are not saying that every critical point is a local maximum or local minimum! This is a classic \"every square is a rectangle but not every rectangle is a square\" situation.  Every local maximum\/minimum occurs at a critical point, but not every critical point is a local maximum\/minimum.    Direction of a Function (and Where it Changes)  Let's build up a way of classifying critical points as local maximums, local minimums, or neither.   Comparing Critical Points   Let's think about four different functions:                      Our goal is to find the critical points on the interval and then to try to figure out if these critical points are local maximums or local minimums or just points that the function increases or decreases through.    To start, we're going to be finding critical points. Without looking at a picture of the graph of the function, find the derivative.  Are there any -values (in the domain of the function) where the derivative doesn't exist? We are normally looking for things like division by 0 here, but we could be finding more than that. Check out to remind yourself if needed.  Are there any -values (in the domain of the function) where the derivative is 0?    Now that we have the critical points for the function, let's think about where the derivative might be positive and negative. These will correspond to the direction of a function, based on .  Write out the intervals of -values around and between your list of critical points. For each interval, what is the sign of the derivative? What do these signs mean about the direction of your function?    Without looking at the graph of your function:   What changes about how your function increases up to or decreases down to a critical point based on whether the derivative was 0 or the derivative didn't exist?    Does your function change direction at a critical point? What will that look like, whether it does or does not change direction?       Give a basic sketch of your graph. It might be helpful to find the -values for any critical points you've got. Then you can sketch your function increasing\/decreasing in the intervals between these points.  In your sketch, include enough detail to tell whether the derivative is 0 or doesn't exist at each critical point.    Compare your sketch to the actual graph of the function (you can find all of the graphs in the hint).         A graph of f(x). It is a parabola that increases up to a horizontal tangent line a the point (3\/2, 25\/4), and then decreases away from it.    A graph of g(x). It increases to a vertical tangent line at (-1,0), and then continues increases from there.      A graph of h(x). It decreases down to a vertical tangent line at (4,0), and then increases away from it, forming a cusp or sharp corner.    A graph of j(x). It decreases down to a horizontal tangent line at (0,1), and then decreases away from it.         This is great, we have a nice strategy for thinking about critical points!  Something we can notice: in finding these critical points (as well as thinking about the domain of the function), we found all of the locations where the derivative is both not positive and not negative. This is a weird way of saying that all of the intervals in between the critical points we found and any breaks in the domain of the function (like if there were vertical asymptotes or holes or something) are places where the derivative is positive or negative.  Even more exciting: if the derivative function we found is continuous, then the says that it will only change signs at these critical points (or places like vertical asymptotes or holes). So this means that we can always construct a little chart or something, think about the -values around and at critical points or other breaks in the domain, and then look at what the derivative does as we move through those intervals and -values.  This will serve as a nice way of thinking about what's going on with our functions!   First Derivative Test   If is a critical point of and we can evaluate the derivative on either side of this point, then we can use the signs of the first derivative to classify the critical point:   If the sign of changes from positive to negative as passes through , then is a local maximum.    If the sign of changes from negative to positive as passes through , then is a local minimum.    If the sign of does not change as passes through , then the function increases or decreases (depending on whether or ) through .   We will often lay these results out in a chart or table, like the following:                             local max                               local min                                 increasing through                               decreasing through            Using the Graph of the First Derivative   First Derivative Test Graphically   Let's focus on looking at a picture of a derivative, , and trying to collect information about the function . This is what we've done already, except that we've done it by thinking about the representation of as a function rule written out with algebraic symbols. Here we'll focus on connecting all of that to the picture of the graphs.  For all of the following questions, refer to the plot below. You can add information with the hints whenever you need to. Don't reveal the picture of until you're really ready to check what you know.     Based on the graph of , estimate the interval(s) of -values where is increasing.    Based on the graph of , estimate the interval(s) of -values where is decreasing.    Find the -values of the critical points of . Once you've estimated these, classify them as local maximums, local minimums, or neither. Explain your reasoning.    What do you think the graph of looks like? Do your best to sketch it or explain it before revealing it!    Why could we estimate the -values of the critical numbers of , but not find the actual coordinates? How come we can't find the -value based on looking at the graph of ?    Reading the graphs of functions is, in general, an important skill. But it's an especially important idea to be able to read and understand the graph of a function like a derivative and then interpret what we are seeing into some other context.  So for us to really excel here, we'll want to focus on the fact that a first derivative tells about the slope or direction of a function. Whatever -values we find on the graph of a needs to be interpreted as a slope or rate of change of . Then we can string these slopes or rates of changes together to try to think about the behavior of by knowing how the -values are changing as we move along the curve of !    Strange Domains  We'll look at two more examples, both of them using functions whose domain is not  .    Consider the function . Find the domain of , the critical points of , and then the intervals where is increasing\/decreasing. Then, classify any critical points local maximums\/minimums if necessary.       The function has one critical point at . Why isn't there a critical point at ? What is happening there instead?                                      The domain of is due to the vertical asymptote at . The only critical point is at . The table below shows where is increasing and decreasing, as well as any local maximums or minimums.                                  decreasing  local min  increasing  asymptote  decreasing       Consider the function . Find the domain of , the critical points of , and then the intervals where is increasing\/decreasing. Then, classify any critical points local maximums\/minimums if necessary.       Notice that, by our definition of critical points, both and are critical points.                                   The domain of is . There are two critical points: one at and another at . The table below shows where is increasing and decreasing, as well as any local maximums or minimums.                 DNE               local max  decreasing  local min  increasing       So we have two things to notice:   When we have some gap or missing spot in the domain of a function, that can still divide up the intervals where our function is increasing or decreasing! We should notice, though, that since this isn't actually a point on the curve of our function, it won't be a critical point and so we have to interpret it differently: we can't use the !    An ending point of an interval is a location where the derivative cannot exist! We could define a one-sided derivative (similar to how we defined one-sided continuity in ), but for now we'll just say that the derivative doesn't exist, and call those ending points critical points. That means that depending on the direction that a function goes away (or leading up to) that ending point, we can classify it as a local maximum or minimum.   Lastly, just a couple of notes: in these little tables or charts (sometimes called sign charts , since they are showing the signs of the derivative), we'll use some shorthand notation. In , we used \"DNE\" to mean that a derivative \"does not exist\" at a point. Similarly, we used to represent the vertical asymptote at that -value (so that we didn't accidentally think it was a local maximum or minimum based on the signs of the derivative around it).  Moving forward, we'll use this same kind of analysis to think about how the derivative might be changing on these intervals. This rate of change of the slopes, the second derivative , will be a useful tool for gathering more information about how a function might be acting.   "
},
{
  "id": "act-FunctionDirection",
  "level": "2",
  "url": "sec-IncreasingDecreasing.html#act-FunctionDirection",
  "type": "Activity",
  "number": "4.2.1",
  "title": "How Should We Think About Direction?",
  "body": " How Should We Think About Direction?   Our goal in this activity is to motivate some new terminology and results that will help us talk about the \"direction\" of a function and some interesting points on a function (related to the direction of a function). For us to do this, we'll look at some different examples of functions and try to think about some unifying ideas.       A rational function that increases gently up to a point in the third quadrant, then decreases towards a vertical asymptote at x=0. In the first quadrant, the function decreases down to some point, and then gently increases.    A polynomial function that decreases down to a point, then increases, then decreases, then increases.      A kind of oscillating function that looks like it bounces off of the horizontal axis, creating sharp corners. It gently changes direction near the peak. The graph decreases, hits the axis and increases, then gently decreases towards the horizontal axis. It bounces one more time, and increases then decreases.    A bell curve, with horizontal asymptote at y=0. It increases up to a point on the top where it changes to decreasing towards the horizontal axis.      These examples do not cover all of the possibilities of how a function can act, but will hopefully provide us enough fertile ground to think about some different situations.    In each graph, find and identify:   The intervals where the function is increasing.    The intervals where the function is decreasing.    The points (or locations) around and between these intervals, the points where the function changes direction or the direction terminates.       Make a conjecture about the behavior of a function at any point where the function changes direction.   What do you think has to be true about the derivative at these points?    Look at the highest and lowest points on each function. You can even include the points that are highest and lowest just compared to the points around it. Make a conjecture about the behavior of the function at these points.   What do you think has to be true about the derivative at these points?   "
},
{
  "id": "def-CriticalPoint",
  "level": "2",
  "url": "sec-IncreasingDecreasing.html#def-CriticalPoint",
  "type": "Definition",
  "number": "4.2.2",
  "title": "Critical Point of a Function.",
  "body": " Critical Point of a Function   We say that a point on the graph of is a critical point of the function if or doesn't exist.  If is a critical point of , then we sometimes will call a critical number and a critical value .   "
},
{
  "id": "def-LocalMaxMin",
  "level": "2",
  "url": "sec-IncreasingDecreasing.html#def-LocalMaxMin",
  "type": "Definition",
  "number": "4.2.3",
  "title": "Local Maximum\/Minimum.",
  "body": " Local Maximum\/Minimum   A point is a local maximum of if there is some open interval of real numbers around (that is, ) and for all -values in the intersection of and the domain of .  Similarly, a point is a local minimum of if there is some open interval of real numbers around (that is, ) and for all -values in the intersection of and the domain of .  These are really just slightly technical ways of saying that is either the highest or lowest -value produced by the function for the -values near .   "
},
{
  "id": "thm-LocalMaxMinAtCriticalPoints",
  "level": "2",
  "url": "sec-IncreasingDecreasing.html#thm-LocalMaxMinAtCriticalPoints",
  "type": "Theorem",
  "number": "4.2.4",
  "title": "Every Local Maximum\/Minimum Occurs at a Critical Point.",
  "body": " Every Local Maximum\/Minimum Occurs at a Critical Point   Every local maximum or local minimum of occurs at a critical point of .  Another way of saying this is that if is a local maximum or local minimum of , then it must also be a critical point of .   "
},
{
  "id": "act-ComparingCriticalPoints",
  "level": "2",
  "url": "sec-IncreasingDecreasing.html#act-ComparingCriticalPoints",
  "type": "Activity",
  "number": "4.2.2",
  "title": "Comparing Critical Points.",
  "body": " Comparing Critical Points   Let's think about four different functions:                      Our goal is to find the critical points on the interval and then to try to figure out if these critical points are local maximums or local minimums or just points that the function increases or decreases through.    To start, we're going to be finding critical points. Without looking at a picture of the graph of the function, find the derivative.  Are there any -values (in the domain of the function) where the derivative doesn't exist? We are normally looking for things like division by 0 here, but we could be finding more than that. Check out to remind yourself if needed.  Are there any -values (in the domain of the function) where the derivative is 0?    Now that we have the critical points for the function, let's think about where the derivative might be positive and negative. These will correspond to the direction of a function, based on .  Write out the intervals of -values around and between your list of critical points. For each interval, what is the sign of the derivative? What do these signs mean about the direction of your function?    Without looking at the graph of your function:   What changes about how your function increases up to or decreases down to a critical point based on whether the derivative was 0 or the derivative didn't exist?    Does your function change direction at a critical point? What will that look like, whether it does or does not change direction?       Give a basic sketch of your graph. It might be helpful to find the -values for any critical points you've got. Then you can sketch your function increasing\/decreasing in the intervals between these points.  In your sketch, include enough detail to tell whether the derivative is 0 or doesn't exist at each critical point.    Compare your sketch to the actual graph of the function (you can find all of the graphs in the hint).         A graph of f(x). It is a parabola that increases up to a horizontal tangent line a the point (3\/2, 25\/4), and then decreases away from it.    A graph of g(x). It increases to a vertical tangent line at (-1,0), and then continues increases from there.      A graph of h(x). It decreases down to a vertical tangent line at (4,0), and then increases away from it, forming a cusp or sharp corner.    A graph of j(x). It decreases down to a horizontal tangent line at (0,1), and then decreases away from it.        "
},
{
  "id": "thm-FirstDerivativeTest",
  "level": "2",
  "url": "sec-IncreasingDecreasing.html#thm-FirstDerivativeTest",
  "type": "Theorem",
  "number": "4.2.6",
  "title": "First Derivative Test.",
  "body": " First Derivative Test   If is a critical point of and we can evaluate the derivative on either side of this point, then we can use the signs of the first derivative to classify the critical point:   If the sign of changes from positive to negative as passes through , then is a local maximum.    If the sign of changes from negative to positive as passes through , then is a local minimum.    If the sign of does not change as passes through , then the function increases or decreases (depending on whether or ) through .   We will often lay these results out in a chart or table, like the following:                             local max                               local min                                 increasing through                               decreasing through         "
},
{
  "id": "act-FDTGraphically",
  "level": "2",
  "url": "sec-IncreasingDecreasing.html#act-FDTGraphically",
  "type": "Activity",
  "number": "4.2.3",
  "title": "First Derivative Test Graphically.",
  "body": " First Derivative Test Graphically   Let's focus on looking at a picture of a derivative, , and trying to collect information about the function . This is what we've done already, except that we've done it by thinking about the representation of as a function rule written out with algebraic symbols. Here we'll focus on connecting all of that to the picture of the graphs.  For all of the following questions, refer to the plot below. You can add information with the hints whenever you need to. Don't reveal the picture of until you're really ready to check what you know.     Based on the graph of , estimate the interval(s) of -values where is increasing.    Based on the graph of , estimate the interval(s) of -values where is decreasing.    Find the -values of the critical points of . Once you've estimated these, classify them as local maximums, local minimums, or neither. Explain your reasoning.    What do you think the graph of looks like? Do your best to sketch it or explain it before revealing it!    Why could we estimate the -values of the critical numbers of , but not find the actual coordinates? How come we can't find the -value based on looking at the graph of ?   "
},
{
  "id": "ex-StrangeDomains",
  "level": "2",
  "url": "sec-IncreasingDecreasing.html#ex-StrangeDomains",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": "  Consider the function . Find the domain of , the critical points of , and then the intervals where is increasing\/decreasing. Then, classify any critical points local maximums\/minimums if necessary.       The function has one critical point at . Why isn't there a critical point at ? What is happening there instead?                                      The domain of is due to the vertical asymptote at . The only critical point is at . The table below shows where is increasing and decreasing, as well as any local maximums or minimums.                                  decreasing  local min  increasing  asymptote  decreasing       Consider the function . Find the domain of , the critical points of , and then the intervals where is increasing\/decreasing. Then, classify any critical points local maximums\/minimums if necessary.       Notice that, by our definition of critical points, both and are critical points.                                   The domain of is . There are two critical points: one at and another at . The table below shows where is increasing and decreasing, as well as any local maximums or minimums.                 DNE               local max  decreasing  local min  increasing      "
},
{
  "id": "subsec-StrangeDomains-4",
  "level": "2",
  "url": "sec-IncreasingDecreasing.html#subsec-StrangeDomains-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sign charts "
},
{
  "id": "subsec-StrangeDomains-5",
  "level": "2",
  "url": "sec-IncreasingDecreasing.html#subsec-StrangeDomains-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second derivative "
},
{
  "id": "sec-Concavity",
  "level": "1",
  "url": "sec-Concavity.html",
  "type": "Section",
  "number": "4.3",
  "title": "Concavity",
  "body": " Concavity    Compare These Curves   Consider the two curves pictured below. Compare and contrast them. What characteristics of these functions are the same? What characteristics of these functions are different?     Explain the similarities you found by only talking about the slopes of each function (the values of and ).    Explain the differences you found by only talking about the slopes of each function (the values of and ).    Make a conjecture about the rate of change of both and . We'll call these things second derivative functions, and .      Defining the Curvature of a Curve   Concavity and Inflection Points   We say that a function if concave up on an interval if is increasing on the interval. If is decreasing on the interval, then we say that is concave down .  We say that a point is an inflection point if it is a point at which changes concavity (from concave up to concave down or vice versa).    Note that when we think about a function being concave up or down on some interval, we can think about this in different ways. Curvature can sometimes be hard to recognize visually, but one of the things we can see from the visual above is the interaction between the tangent line and the curve:   If the function is concave up on some interval, then the tangent line sits below the function at every point on that interval. The function curves upward away from the tangent line. Sometimes people will say that the curvature is concave \"up, like a cup.\"    If the function is concave down on some interval, then the tangent line sits above the function at every point on that interval. The function curves downward away from the tangent line. Sometimes people will say that the curvature is concave \"down, like a frown.\"   So we have some visual ways of thinking about these different types of curvature. Annoyingly, though, it is still relatively difficult to pinpoint the exact (or even close) location of an inflection point. We might be able to pretty easily point at the locations of local maximums and local minimums on a graph of a function, but it can be hard to see the exact point at which a graph of a function changes from concave up to down or vice versa. We'll focus on finding them algebraically first, but then we'll think a bit more about the graphs of functions later.   Finding a Function's Concavity   We're going to consider a pretty complicated function to work with, and employ a strategy similar to what we did with the first derivative:   Our goal is to find the sign of on different intervals and where that sign changes .    To do' this, we'll find the places that or where doesn't exist. These are the critical points of .    From there, we can build a little sign chart, where we split up the -values based on the domain of and the critical numbers of . Then we can attach each interval of -values with a sign of the second derivative, , on that interval.    We'll interpret these signs. For any intervals where , we know that must be increasing and so is concave up. Similarly, for any intervals where , we know that must be decreasing and so is concave down.   Let's consider the function .    Find the first derivative, , and use some algebra to confirm that it is really: . While we have this first derivative, we could find the critical points of and then classify those critical points using the .  For our goal of finding the intervals where is concave up and concave down, and then finding the inflection points of , let's move on.    Find the second derivative, , and confirm that this is really: .    Our goal is to find the -values where or where doesn't exist.  Note that in order to find where , we are really looking at the -values that make the numerator : . Then, to find where doesn't exist, we are finding the -values that make the denominator : . Solve these equations.   Here are two strategies for solving :   Write some sort of substitution where  Now solve this for using the quadratic formula. Note that in the end, the two values you get will be possibilities for . Make sure you get your answer to be in terms of !    A similar technique (really the same thing) is to \"complete the square\" and write your equation this way: . Now solve for in a natural way.  Something to note here is that , so (and notably not ).      You should get that the critical points of are at and .    You have two critical points of (let's just call them and ). These are possible inflection points of , but we need to check to see if the concavity changes at these points.  Fill in the following sign chart and interpret.                                                                               concave down  inflection point  concave up  inflection point  concave down       Let's confirm what we've just calculated graphically. Below, we have three graphs:                 Move the point on any graph and make sure the statements about signs, directions, and concavity match what you found! You should notice that signs of the first and second derivative change at the local maximums\/minimums and the inflection points that we found.     Let's circle back to the definition of and think about these from the perspective of .  We can notice that, by the definition, any inflection point is a point at which changes concavity, and so is a point where changes direction. That means we are looking at local maximums or local minimums of (as long as they're not at the end points of some domain)! Similarly, these are points at which changes sign, and so we are thinking about the -intercepts of these second derivatives (or other kinds of locations where the second derivative could change signs).    Let's look at a few more examples, but this time they can be ones with derivatives that are a bit easier to work with.    Consider the function . Find the intervals where is concave up, the intervals where it is concave down, and then find the locations of any inflection points.    Consider the function . Find the intervals where is concave up, the intervals where it is concave down, and then find the locations of any inflection points.    At this point, we have three different functions that we are juggling: a function (or whatever name we give it), the first derivative , and the second derivative . We'll want to keep in mind the role of each of these.    tells us the height, the -value, of the function at some point.     tells us the direction, the slope, of the function at some point.     tells us the curvature, the concavity, of the function at some point.   We can try to summarize this in a small table:                                    Notice that we could extend this table and think about any triplet of functions\/derivatives in a row: we just need to think about what is positive\/negative, what is increasing\/decreasing, and what is concave up\/down. If we wanted, we could try to define some adjective to describe what is happening to a function when is concave up\/down, but let's not. It's hard enough to visualize concavity, and it will be difficult to visualize rates of change of the concavity.    Interpreting the Concavity at Critical Points     Second Derivative Test for Local Maximums or Local Minimums   If is a critical point of with , then we can use the value of the second derivative at to classify the critical point:   If , then is concave up at and around , and so the function has a local minimum at .    If , then is concave down at and around , and so the function has a local maximum at .    If , then the Second Derivative Test is inconclusive.         Find any critical points of the following functions. For each, use the Second Derivative Test to classify the critical point. If the Second Derivative Test fails (we get that the second derivative evaluated at the critical point is 0, and so is inconclusive), then classify the critical point in some other way.     where the domain of is .     where the domain of is .    Let's leave this here, with a few questions for you to think about:   When, for you, do you think it would be reasonable to use the Second Derivative Test instead of the First Derivative Test? What goes into making this decision?    When, for you, do you think it would be reasonable to use the First Derivative Test instead of the Second Derivative Test? What does into making this decision?      "
},
{
  "id": "act-CompareCurves",
  "level": "2",
  "url": "sec-Concavity.html#act-CompareCurves",
  "type": "Activity",
  "number": "4.3.1",
  "title": "Compare These Curves.",
  "body": " Compare These Curves   Consider the two curves pictured below. Compare and contrast them. What characteristics of these functions are the same? What characteristics of these functions are different?     Explain the similarities you found by only talking about the slopes of each function (the values of and ).    Explain the differences you found by only talking about the slopes of each function (the values of and ).    Make a conjecture about the rate of change of both and . We'll call these things second derivative functions, and .   "
},
{
  "id": "def-Concavity",
  "level": "2",
  "url": "sec-Concavity.html#def-Concavity",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Concavity and Inflection Points.",
  "body": " Concavity and Inflection Points   We say that a function if concave up on an interval if is increasing on the interval. If is decreasing on the interval, then we say that is concave down .  We say that a point is an inflection point if it is a point at which changes concavity (from concave up to concave down or vice versa).   "
},
{
  "id": "axt-FindingConcavity",
  "level": "2",
  "url": "sec-Concavity.html#axt-FindingConcavity",
  "type": "Activity",
  "number": "4.3.2",
  "title": "Finding a Function’s Concavity.",
  "body": " Finding a Function's Concavity   We're going to consider a pretty complicated function to work with, and employ a strategy similar to what we did with the first derivative:   Our goal is to find the sign of on different intervals and where that sign changes .    To do' this, we'll find the places that or where doesn't exist. These are the critical points of .    From there, we can build a little sign chart, where we split up the -values based on the domain of and the critical numbers of . Then we can attach each interval of -values with a sign of the second derivative, , on that interval.    We'll interpret these signs. For any intervals where , we know that must be increasing and so is concave up. Similarly, for any intervals where , we know that must be decreasing and so is concave down.   Let's consider the function .    Find the first derivative, , and use some algebra to confirm that it is really: . While we have this first derivative, we could find the critical points of and then classify those critical points using the .  For our goal of finding the intervals where is concave up and concave down, and then finding the inflection points of , let's move on.    Find the second derivative, , and confirm that this is really: .    Our goal is to find the -values where or where doesn't exist.  Note that in order to find where , we are really looking at the -values that make the numerator : . Then, to find where doesn't exist, we are finding the -values that make the denominator : . Solve these equations.   Here are two strategies for solving :   Write some sort of substitution where  Now solve this for using the quadratic formula. Note that in the end, the two values you get will be possibilities for . Make sure you get your answer to be in terms of !    A similar technique (really the same thing) is to \"complete the square\" and write your equation this way: . Now solve for in a natural way.  Something to note here is that , so (and notably not ).      You should get that the critical points of are at and .    You have two critical points of (let's just call them and ). These are possible inflection points of , but we need to check to see if the concavity changes at these points.  Fill in the following sign chart and interpret.                                                                               concave down  inflection point  concave up  inflection point  concave down       Let's confirm what we've just calculated graphically. Below, we have three graphs:                 Move the point on any graph and make sure the statements about signs, directions, and concavity match what you found! You should notice that signs of the first and second derivative change at the local maximums\/minimums and the inflection points that we found.    "
},
{
  "id": "subsec-DefiningCurvature-7",
  "level": "2",
  "url": "sec-Concavity.html#subsec-DefiningCurvature-7",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "  Let's look at a few more examples, but this time they can be ones with derivatives that are a bit easier to work with.    Consider the function . Find the intervals where is concave up, the intervals where it is concave down, and then find the locations of any inflection points.    Consider the function . Find the intervals where is concave up, the intervals where it is concave down, and then find the locations of any inflection points.   "
},
{
  "id": "thm-SecondDerivativeTest",
  "level": "2",
  "url": "sec-Concavity.html#thm-SecondDerivativeTest",
  "type": "Theorem",
  "number": "4.3.3",
  "title": "Second Derivative Test for Local Maximums or Local Minimums.",
  "body": " Second Derivative Test for Local Maximums or Local Minimums   If is a critical point of with , then we can use the value of the second derivative at to classify the critical point:   If , then is concave up at and around , and so the function has a local minimum at .    If , then is concave down at and around , and so the function has a local maximum at .    If , then the Second Derivative Test is inconclusive.      "
},
{
  "id": "subsec-ConcavityAtCriticalPoints-4",
  "level": "2",
  "url": "sec-Concavity.html#subsec-ConcavityAtCriticalPoints-4",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Find any critical points of the following functions. For each, use the Second Derivative Test to classify the critical point. If the Second Derivative Test fails (we get that the second derivative evaluated at the critical point is 0, and so is inconclusive), then classify the critical point in some other way.     where the domain of is .     where the domain of is .   "
},
{
  "id": "sec-GlobalMaxMins",
  "level": "1",
  "url": "sec-GlobalMaxMins.html",
  "type": "Section",
  "number": "4.4",
  "title": "Global Maximums and Minimums",
  "body": " Global Maximums and Minimums   We need to start with a definition, and we can start with contrasting what we want the difference between a local maximum\/minimum and a global maximum\/minimum. Sometimes these are also called absolute maximum\/minimums.  What do you want the difference to be?  If we focus on the terms or the names we're giving, then the difference should be based on the distinction between the words \"local\" and \"global.\" In one, we're considering some confined and relatively arbitrary geographic area, just the things around or in the neighborhood. In the other, our context grows until we're considering the whole picture, the whole space that we're interested in!   Global Maximum and Global Minimum   A function has a global maximum value of if for all -values in the domain of .  A function has a global minimum value of if for all -values in the domain of .    Note that the difference between this definition and is the types of -values we're comparing to: in this new definition, we just use all of the -values in the domain. In the definition for a local max\/min, we had to construct some interval to intersect with the domain in order to just consider the \"local\" picture.   When Would We Not Have Maximums or Minimnums?   In this section, we're going to define these global maximums and then, most importantly, try to predict when these global maximums or global minimums might actually exist for a function.  To start, maybe we should come up with some examples of functions that do not have them!    Come up with some situations where a function does not have some combination of global maximum\/minimums. Sketch some graphs!    Come up with some examples of graphs of functions that are bounded (do not ever have -values that tend towards infinity in a limit) that do not have some combination of global maximum\/minimums.    For the examples of graphs that you have built or collected, features of the functions that allow for the examples you picked? If you could impose some requirements that would \"fix\" the examples you found (so that they had both a global maximum and a global minimum), what requirements could you use?      When Do We Guarantee Both a Global Maximum and a Global Minimum?   Extreme Value Theorem   If is a continuous function on a closed interval then must have both a global maximum and a global minimum on the interval.    The Extreme Value Theorem guarantees the existence of both the global maximums and minimums, but we actually get more than just this out of the Extreme Value Theorem. Once we know that both of the global maximums and minimums exist, we can find them pretty easily.  The global maximum of a function, if it exists for the function on the domain\/interval, is just the local maximum with the largest -value. Similarly, the global minimum, if it exists, is the local minimum with the lowest -value.  So once we know they both exist for a function on an interval, we can simply collect the critical points of the function (including the ending points of the domain) and compare the -value function outputs!    Check to see if each function (on the stated domain) satisfies the conditions of the Extreme Value Theorem, and then find any global maximums\/minimums of the function on the interval.     on      on      on       What about Domains of Functions that Aren't Closed?  Without the conditions that imply the Extreme Value Theorem, things become trickier. For instance, if the function is not continuous, then the function might have some unbounded behavior at a vertical asymptote. In this case, we might need to look at the one-sided limits around that asymptote, in order to see if our function tends towards positive or negative infinity on either side of the asymptote. This could tell us that the function doesn't have a global maximum, a global minimum, or that it doesn't have either.  Similarly, if the function is not defined on a closed interval, then we need to investigate what happens to the function's behavior as the function moves towards the \"ends\" of the interval (which could be a real number but something like positive or negative infinity). These end behavior limits could exist, in which case we need to compare these heights of horizontal asymptotes or open ends of an interval to the heights of any critical numbers.  But we might also find that the function tends towards infinity or negative infinity in the end behavior.  And there are other things to consider about discontinuity of a function (other than vertical asymptotes)!  All in all, it should be evident that if we remove one or both of the conditions on our function that guarantees the existence of a global maximum and a global minimum, it becomes much harder to find them, since we have so many different options to consider.  To simplify things, we will look at one case where things align in our favor: a continuous function that only has a single local maximum\/minimum on an interval.    If is a continuous function on some interval, and has only a single critical point (call it ) where the direction changes, then if that point is a local maximum of , then is the global maximum. Similarly, if is a local minimum, then is the global minimum of .    This is a great result to give us a path forward without having to check all of the edge cases and possibilities mentioned above. There are many functions that might have only a single critical point, or if it does have more than one critical point, only a single one of them acting as a local maximum\/minimum.  Note here that we do need to classify the critical point as a local maximum or minimum! We'll use the or the for this classification.    For each function, find any global maximums\/minimums that may exist.     and note that the domain of this function is      and note that the domain of this function is .     "
},
{
  "id": "def-GlobalMaxMin",
  "level": "2",
  "url": "sec-GlobalMaxMins.html#def-GlobalMaxMin",
  "type": "Definition",
  "number": "4.4.1",
  "title": "Global Maximum and Global Minimum.",
  "body": " Global Maximum and Global Minimum   A function has a global maximum value of if for all -values in the domain of .  A function has a global minimum value of if for all -values in the domain of .   "
},
{
  "id": "act-NoMaxMin",
  "level": "2",
  "url": "sec-GlobalMaxMins.html#act-NoMaxMin",
  "type": "Activity",
  "number": "4.4.1",
  "title": "When Would We Not Have Maximums or Minimnums?",
  "body": " When Would We Not Have Maximums or Minimnums?   In this section, we're going to define these global maximums and then, most importantly, try to predict when these global maximums or global minimums might actually exist for a function.  To start, maybe we should come up with some examples of functions that do not have them!    Come up with some situations where a function does not have some combination of global maximum\/minimums. Sketch some graphs!    Come up with some examples of graphs of functions that are bounded (do not ever have -values that tend towards infinity in a limit) that do not have some combination of global maximum\/minimums.    For the examples of graphs that you have built or collected, features of the functions that allow for the examples you picked? If you could impose some requirements that would \"fix\" the examples you found (so that they had both a global maximum and a global minimum), what requirements could you use?   "
},
{
  "id": "thm-ExtremeValueTheorem",
  "level": "2",
  "url": "sec-GlobalMaxMins.html#thm-ExtremeValueTheorem",
  "type": "Theorem",
  "number": "4.4.2",
  "title": "Extreme Value Theorem.",
  "body": " Extreme Value Theorem   If is a continuous function on a closed interval then must have both a global maximum and a global minimum on the interval.   "
},
{
  "id": "subsec-BothMaxMins-6",
  "level": "2",
  "url": "sec-GlobalMaxMins.html#subsec-BothMaxMins-6",
  "type": "Example",
  "number": "4.4.3",
  "title": "",
  "body": "  Check to see if each function (on the stated domain) satisfies the conditions of the Extreme Value Theorem, and then find any global maximums\/minimums of the function on the interval.     on      on      on    "
},
{
  "id": "thm-GlobalMaxMinOpenInterval",
  "level": "2",
  "url": "sec-GlobalMaxMins.html#thm-GlobalMaxMinOpenInterval",
  "type": "Theorem",
  "number": "4.4.4",
  "title": "",
  "body": "  If is a continuous function on some interval, and has only a single critical point (call it ) where the direction changes, then if that point is a local maximum of , then is the global maximum. Similarly, if is a local minimum, then is the global minimum of .   "
},
{
  "id": "subsec-WhatAboutOpenIntervals-11",
  "level": "2",
  "url": "sec-GlobalMaxMins.html#subsec-WhatAboutOpenIntervals-11",
  "type": "Example",
  "number": "4.4.5",
  "title": "",
  "body": "  For each function, find any global maximums\/minimums that may exist.     and note that the domain of this function is      and note that the domain of this function is .   "
},
{
  "id": "sec-Optimization",
  "level": "1",
  "url": "sec-Optimization.html",
  "type": "Section",
  "number": "4.5",
  "title": "Optimization",
  "body": " Optimization  Text of section.  "
},
{
  "id": "sec-LinearApproximation",
  "level": "1",
  "url": "sec-LinearApproximation.html",
  "type": "Section",
  "number": "4.6",
  "title": "Linear Approximations",
  "body": " Linear Approximations   We're going to return to a pretty central idea here, one that we've been using and developing and really exploring. But let's think about the very basic version of what we've been looking at over this whole chapter (and more):   The derivative of a function tells us the slope of the line tangent to the function at a point.   But what we'll do is explore how this tangent line and the graph of our function interact and relate to each other. Let's start with just playing with a graph and seeing if we can discover some things to say about the relationship between a tangent line and the function it is lying tangent to!   The effect that we are seeing when we zoom in on a function is sometimes described as our function being locally linear . What do you think this means? Why is this a good description of what we're looking at, and how these differentiable functions are constructed?  Would this effect be noticeable for every function, even ones that are not differentiable at some points?  Convince yourself that a function will not look locally linear at a point where the function is not differentiable. You might want to remind yourself what it looks like, graphically, when a derivative doesn't exist:     Linearly Approximating a Function  The visual above should provide us with a nice framework to think about how we might approximate a function linearly, but we can recap some basic ideas:   When we say \"linear approximation,\" we're really just referring to the tangent line at some point.    Our functions only look \"locally linear\" when we zoom in around some single point. Another way of saying this is that our tangent line only matches the behavior of our function really close to the point where we built the tangent line.    We have a kind of vague or ambiguous idea of accuracy in approximation. While a tangent line follows the behavior of the function \"around\" that point where it was built, the actual rate at which it deviates from our function is different. If we move the point in the visual above, we'll see that at some locations, our function is pretty linear and doesn't move away from the tangent line very quickly. In other locations, the function turns quickly away from the tangent line!      Linear Approximation of a Function   If is differentiable at , then we say that a linear approximation of centered at is: . We know, then, that for -values \"close\" to the center, .  Note that the center is just the point at which we are building this linear approximation: the point at which we build the tangent line.    Let's see this in action!   Approximating an Exponential Function   Let's consider the function . We're going to build the linear approximation, , but we also want to focus on understanding what the \"center\" is, and how we think about accuracy of our estimations.    We first need to find a \"good\" center for our linear approximation. We have two real requirements here:   We need the center to be some -value that will be \"close\" to the inputs we're most interested in. We know that for -values \"near\" the center, so we should keep this in mind. We don't have a specific input that we're interested in (we are not specifically focused on estimating for instance), so we don't need to worry about this for now.    We are going to need to evaluate the function and its derivative at the center: we use to find the slope and to find a -value for a point on the line. We'd like to choose a center that will make evaluating these functions reasonable, if we can!   We are going to choose a center of 0: why?    Build a linear approximation of centered at .   Build a line with a slope of that goes through the point .    Use your linear approximation to estimate the value of .   Since for -values near 0, we can say that . So you can evaluate your linear approximation function at .    Let's visualize this approximation a bit:   Are you confident in your approximation of ? Would you be more or less confident in an approximation of ? Why?    Is your estimate of too big or too small? How can you tell, without even calculating the actual value of ?  How can you tell that every estimate that you get out of any linear approximation of (no matter what the center is) is going to be too small?   It might be helpful to think about how the function moves away from the tangent line: how do the slopes of change? Can you link this to ideas of concavity?    In this activity, we did not have to think much about an appropriate choice of center. We tried to justify our choice, but that's different than having to make a choice. Let's approach this a bit differently in our next examples.   Approximating some Values   Pick one of the following values to approximate:                      Throughout the rest of this activity, use your value to build a linear approximation of some relevant function and estimate the value you chose.    To build a linear approximation of some function at some center, we need two things:   A function.    A center.   What function will you be using for ? Why that one?   Your value should look like the output of some function after you plug in some -value. What function?    What center are you choosing? Why that one?   Remember that we want some input for your function that is both close to the input you'd like to estimate your function at and also a reasonable one to know the value of your function and its derivative.    Build your linear approximation at your center! You should end up with an actual linear function. It might be helpful to plot this linear function and your actual function to confirm that you have actually built a tangent line.    Use your linear approximation function to estimate your value! Report the estimate, and comment on the accuracy of your estimate. Without calculating the actual value, can you tell if this is close or not? Do you have an overestimate or underestimate?   Think about issues relating to the distance from the center, the concavity of the function, and even the rate at which the slopes change away as we move away from the center.    So far, we have been pretty limited in what we can actually do with these linear approximations. A function is only locally linear when we look at a very small interval of -values. Once we move away from the center far enough (and it's often not that far), then our function curves away from the tangent line and our linear approximation is not at all accurate.   If you want to see how we can make these linear approximations more accurate, then we can try to think about using a quadratic or cubic function instead: something with some curves built into it that can try to follow the function's behavior a bit! We'll cover that in .     Approximating Zeros of a Function  Let's look one really cool application of linear approximations before we finish things up in this section.  In approximately 60 AD, Heron of Alexandria presented a method for approximating square roots (probably...historians know very little about exactly when Heron was born and died, but they think he saw an eclipse that matched one from 62 AD, so it's a good guess). This algorithm was presented along with different formulas for volumes and surface areas of a mixture of objects.   You might know of Heron from Heron's formula for the area of a triangle!   Over 1000 years later, in the late 1660's, Isaac Newton was one of a long list of mathematicians to re-create this formula in a more general way, where we can use it to approximate roots of polynomials. This method was later extended by several different mathematicians, and is now known as the Newton-Raphson method , or sometimes more simply Newton's method .   Walking in the Footsteps of Ancient Mathematicians   Let's travel all the way back to the first (or maybe second) century AD and recreate Heron's method to approximate the value of . We'll develop this using modern calculus, and simple linear approximation.  We're going to re-frame the problem, and instead we're going to try to use a linear approximation of to approximate the -value where . We know enough about quadratic functions to know that there are two values: and .    We're going to build a linear approximation of , and we need a reasonable center. Honestly, any integer will work, since we can evaluate and really easily, but we want to find one that is close to . Let's center our approximation at .  Find , and then construct the linear approximation: .   Since , we have and . So then we end up with the following for our linear approximation: .    Now we know that for -values near our center, . What if we estimate the -value where by solving instead? Since , the -value where should make pretty close to 0 at least.  Solve .        Ok, this might be kind of close to the value of , right? Let's visualize this.  Hm...so this isn't that good of an approximation yet. We can check this by looking at the actual value of our function at and seeing if it's close to 0. This...isn't that close to 0.  So let's try this again. This time, though, let's center our new linear approximation at .        Now set this new linear approximation equal to 0 and solve to estimate the solution to .        We can keep repeating this process, and that's exactly what the mathematicians we talked about discovered.  Say we've build a linear approximation at some -value (we'll call it ). . Set this equal to 0 and solve.        Let's visualize these calculations.   Something kind of strange happens in the last two steps. Why does the value of our estimation not change? What happens to our estimate?     Newton's Method for Approximating Zeros of Functions   If is some initial estimation of a solution to , then we we can iteratively generate more estimations using the following formula: provided that exists and is non-zero.    A good question to ask is about when this process stops. If we want to estimate some -intercept of a function, like in , then how many steps is enough? There are a couple of ways we can approach this:   We can just state at the beginning how many iterations we're going to do. This is what happened in , since this activity was written to only make you calculate a specific number of these estimations. We could have started by saying that we'll calculate this 3 times, or maybe 100 times.    We can test to see what is, and then stop when it is within some pre-determined distance from 0. We also did this when we noticed that was not very close to 0 (after our first estimation), and so we should calculate this again. We could start by saying that we'll continue until we see a -value that is within 0.0001 of 0, or some other small distance.    We can test to see how close our approximations are to each other, and stop when they're close enough. We saw this happen in the visualization: the last two estimates were the same! They actually weren't, but since the applet only displayed 4 decimal places, the numbers appeared the same after rounding. Maybe we set some criteria there, or we look at the distance between and (two successive estimates) and stop when they are within some distance from each other.   In reality, we often choose a combination of these. Maybe we set distance threshold for stopping, but use a maximum of 10 iterations as a backup plan. This happens often when we code this algorithm and have a computer run it. It is possible for this code to never give us two successive estimates that are close enough to stop, and so the code would run forever unless we cut it off at 100 iterations or some other value.  A wonderful thing about this small process is that, while it is ancient (dating back to Heron in the first or second century), it is still used today. This is a powerful estimation method that can be used in a variety of areas including statistics and data science.   "
},
{
  "id": "sec-LinearApproximation-2-5",
  "level": "2",
  "url": "sec-LinearApproximation.html#sec-LinearApproximation-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "locally linear "
},
{
  "id": "def-LinearApproximation",
  "level": "2",
  "url": "sec-LinearApproximation.html#def-LinearApproximation",
  "type": "Definition",
  "number": "4.6.1",
  "title": "Linear Approximation of a Function.",
  "body": " Linear Approximation of a Function   If is differentiable at , then we say that a linear approximation of centered at is: . We know, then, that for -values \"close\" to the center, .  Note that the center is just the point at which we are building this linear approximation: the point at which we build the tangent line.   "
},
{
  "id": "act-LinearApproximation-Exponential",
  "level": "2",
  "url": "sec-LinearApproximation.html#act-LinearApproximation-Exponential",
  "type": "Activity",
  "number": "4.6.1",
  "title": "Approximating an Exponential Function.",
  "body": " Approximating an Exponential Function   Let's consider the function . We're going to build the linear approximation, , but we also want to focus on understanding what the \"center\" is, and how we think about accuracy of our estimations.    We first need to find a \"good\" center for our linear approximation. We have two real requirements here:   We need the center to be some -value that will be \"close\" to the inputs we're most interested in. We know that for -values \"near\" the center, so we should keep this in mind. We don't have a specific input that we're interested in (we are not specifically focused on estimating for instance), so we don't need to worry about this for now.    We are going to need to evaluate the function and its derivative at the center: we use to find the slope and to find a -value for a point on the line. We'd like to choose a center that will make evaluating these functions reasonable, if we can!   We are going to choose a center of 0: why?    Build a linear approximation of centered at .   Build a line with a slope of that goes through the point .    Use your linear approximation to estimate the value of .   Since for -values near 0, we can say that . So you can evaluate your linear approximation function at .    Let's visualize this approximation a bit:   Are you confident in your approximation of ? Would you be more or less confident in an approximation of ? Why?    Is your estimate of too big or too small? How can you tell, without even calculating the actual value of ?  How can you tell that every estimate that you get out of any linear approximation of (no matter what the center is) is going to be too small?   It might be helpful to think about how the function moves away from the tangent line: how do the slopes of change? Can you link this to ideas of concavity?   "
},
{
  "id": "act-LinearApproximations",
  "level": "2",
  "url": "sec-LinearApproximation.html#act-LinearApproximations",
  "type": "Activity",
  "number": "4.6.2",
  "title": "Approximating some Values.",
  "body": " Approximating some Values   Pick one of the following values to approximate:                      Throughout the rest of this activity, use your value to build a linear approximation of some relevant function and estimate the value you chose.    To build a linear approximation of some function at some center, we need two things:   A function.    A center.   What function will you be using for ? Why that one?   Your value should look like the output of some function after you plug in some -value. What function?    What center are you choosing? Why that one?   Remember that we want some input for your function that is both close to the input you'd like to estimate your function at and also a reasonable one to know the value of your function and its derivative.    Build your linear approximation at your center! You should end up with an actual linear function. It might be helpful to plot this linear function and your actual function to confirm that you have actually built a tangent line.    Use your linear approximation function to estimate your value! Report the estimate, and comment on the accuracy of your estimate. Without calculating the actual value, can you tell if this is close or not? Do you have an overestimate or underestimate?   Think about issues relating to the distance from the center, the concavity of the function, and even the rate at which the slopes change away as we move away from the center.   "
},
{
  "id": "subsec-ApproximatingZeros-5",
  "level": "2",
  "url": "sec-LinearApproximation.html#subsec-ApproximatingZeros-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton-Raphson method Newton's method "
},
{
  "id": "act-NewtonsMethod",
  "level": "2",
  "url": "sec-LinearApproximation.html#act-NewtonsMethod",
  "type": "Activity",
  "number": "4.6.3",
  "title": "Walking in the Footsteps of Ancient Mathematicians.",
  "body": " Walking in the Footsteps of Ancient Mathematicians   Let's travel all the way back to the first (or maybe second) century AD and recreate Heron's method to approximate the value of . We'll develop this using modern calculus, and simple linear approximation.  We're going to re-frame the problem, and instead we're going to try to use a linear approximation of to approximate the -value where . We know enough about quadratic functions to know that there are two values: and .    We're going to build a linear approximation of , and we need a reasonable center. Honestly, any integer will work, since we can evaluate and really easily, but we want to find one that is close to . Let's center our approximation at .  Find , and then construct the linear approximation: .   Since , we have and . So then we end up with the following for our linear approximation: .    Now we know that for -values near our center, . What if we estimate the -value where by solving instead? Since , the -value where should make pretty close to 0 at least.  Solve .        Ok, this might be kind of close to the value of , right? Let's visualize this.  Hm...so this isn't that good of an approximation yet. We can check this by looking at the actual value of our function at and seeing if it's close to 0. This...isn't that close to 0.  So let's try this again. This time, though, let's center our new linear approximation at .        Now set this new linear approximation equal to 0 and solve to estimate the solution to .        We can keep repeating this process, and that's exactly what the mathematicians we talked about discovered.  Say we've build a linear approximation at some -value (we'll call it ). . Set this equal to 0 and solve.        Let's visualize these calculations.   Something kind of strange happens in the last two steps. Why does the value of our estimation not change? What happens to our estimate?   "
},
{
  "id": "def-NewtonsMethod",
  "level": "2",
  "url": "sec-LinearApproximation.html#def-NewtonsMethod",
  "type": "Definition",
  "number": "4.6.2",
  "title": "Newton’s Method for Approximating Zeros of Functions.",
  "body": " Newton's Method for Approximating Zeros of Functions   If is some initial estimation of a solution to , then we we can iteratively generate more estimations using the following formula: provided that exists and is non-zero.   "
},
{
  "id": "sec-LHopitalsRule",
  "level": "1",
  "url": "sec-LHopitalsRule.html",
  "type": "Section",
  "number": "4.7",
  "title": "L’Hôpital’s Rule",
  "body": " L'Hôpital's Rule   We're going to re-visit limits, but with a slightly new problem-solving tool. Specifically, we'll be thinking about Indeterminate Forms. We noticed, back in , that we could evaluate limits for indeterminate forms by swapping out the function with another function that was mostly equivalent, only differing at the -value we were approaching in the limit ( ).  We ended that section by thinking about a limit where this was difficult, in .  We're now going to build a more systematic (and helpful) way of thinking about these limits using the ideas of Linear Approximation!    Indeterminate Forms  We have given a preliminary definition of Indeterminate Forms already ( ), but let's remember how these work.  We said that is an indeterminate form, since a limit whose numerator and denominator approach 0 can end up taking on different values or even not exist. For instance, we can notice that the definition of the is a limit with this indeterminate form. As long as is continuous (a necessity of it being differentiable) at , then: But we have seen so many different values that this limit can end up being! We have spent most of the past two chapters in this text playing with derivatives and evaluating them: all of those values come from this limit! We have also seen that, even for continuous functions, this limit may not exist. A function can be non-differentiable at .  We can show the same thing for a second indeterminate form: , which we will simplify by just using the symbol . For us to see that limits with this form can take on different values (or not exist), we just need to think about end behavior limits for rational functions ( ).  Let's think about the following limit: . As long as , then this limit looks like it's in the form of . Sure, the denominator is really approaching , but we really just mean that there is an infinite numerator and an infinite denominator, regardless of sign.  We also know that the actual limit depends on the degrees and ! Try to spend a couple of minutes confirming the next few claims:   If , then this limit is .    If , then this limit is .    If , then this limit doesn't exist.   All of this to show us that we have some forms of limits where we can't immediately tell what the actual value of the limit is (or if it even exists). L'Hôpital's Rule will be a way for us to navigate these limits a little easier than before, in some cases.    L'Hôpital's Rule   Building L'Hôpital's Rule   We're going to take a closer look at the indeterminate form, , and use our new ideas of linear approximation to think about how these types of things work.  We're going to be working with the following limit: where and are differentiable at (since we're going to want to build linear approximations of them).    Write out the linear approximations for both and , both centered at . We'll call them and .   We're just using the formula for , but with for one of them and in the other.    Describe how well or how poorly these linear approximations estimate the values from our functions and ? What happens to these approximations as we get close to the center ? What happens in the limit as ?   You can revisit the local linearity visualization from to see what happens, in general, with a linear approximation of a function as we zoom in on the center.    Let's re-write our limit. We can replace with our formula for its linear approximation, and replace with its linear approximation, :     Up until now, we have not thought about indeterminate forms at all. Let's start now.  If this limit is a indeterminate form, then that means that and .  Since our functions are, by definition, differentiable at , then they also have to be continuous at . What does this mean about the values of and ?   Take a look back at our definition of function being . How does the function value relate to the limit? What does that mean in our case?    Use this new information about the values of and to revisit the limit. We re-wrote by replacing each function with its linear approximation. What happens with the algebra when we know this information about and ?   We re-wrote and also know that in this case (due to the indeterminate form) that and .    So we have a really nice result here! In the indeterminate form, we can replace the ratio of the -values from our functions with the ratio of slopes (coming from the first derivatives) of our functions.  In general, we'll put a step in between, where we find and first before trying to evaluate these derivatives at .     L'Hôpital's Rule   If and are functions and is some real number with and both being differentiable at and and , then . Similarly, this holds if and .  If and are both differentiable as and either:    and      and    then .  This is also true as .     Some First Limits   Evaluate the following limits. You should first confirm that they are, actually, indeterminate forms!                             There are more indeterminate forms than these two! In each of the following cases, we mean that a limit with this form can take on different values (or not exist). Other indeterminate forms that we can consider include:                           The issue with these, though, is that L'Hôpital's Rule only applies to quotients! We needed that quotient for the algebra to work out when we canceled things out to end up with the ratio of slopes.  So our strategies for these other indeterminate forms will all require us to manipulate the product, difference, or expeonential in order to force some division to show up somehow.    Forcing Division   Let's look at each new indeterminate form classified into groups based on the operation between the functions.    Products!  We can re-write as a quotient by dividing by a reciprocal. So either or . Our choice ends up being based on what is most helpful.    Evaluate the limit: Note that since and , this is a indeterminate form.    Re-write this limit as: . Note that this is not an indeterminate form, and we can use L'Hôpital's Rule.     So .      Differences!  We can re-write as a product by factoring something out of the difference. Then, if the product is a indeterminate form, we can divide by a reciprocal to turn it into a quotient.  Choosing what to factor out is sometimes very difficult. But we should note that this is the strategy we used to evaluate .    Evaluate the following limit: Note that since and , this is an indeterminate form.    Try to factor out . You won't be able to actual factor it nicely, but you'll end up with a fraction term that is an indeterminate form!     Let's focus on the limit , since it is in an indeterminate form. So then we can go back to our original limit:       Exponentials!  We can think about how we approached these types of functions raised to functions when we learned about .  We were able to use logarithms to re-write these types of exponentials as products. So we can say that: When we think about limits, the continuity of the exponential function allows us to just focus on the limit of the exponent, , which is likely an indeterminate form that we've seen!    Evaluate the following limit: Note that this is the indeterminate form.    We can re-write as which is the same as . Now we can evaluate the limit , and make sure to return the value into the exponent.    We know from that . So then: So .      "
},
{
  "id": "act-LHopitalsRule",
  "level": "2",
  "url": "sec-LHopitalsRule.html#act-LHopitalsRule",
  "type": "Activity",
  "number": "4.7.1",
  "title": "Building L’Hôpital’s Rule.",
  "body": " Building L'Hôpital's Rule   We're going to take a closer look at the indeterminate form, , and use our new ideas of linear approximation to think about how these types of things work.  We're going to be working with the following limit: where and are differentiable at (since we're going to want to build linear approximations of them).    Write out the linear approximations for both and , both centered at . We'll call them and .   We're just using the formula for , but with for one of them and in the other.    Describe how well or how poorly these linear approximations estimate the values from our functions and ? What happens to these approximations as we get close to the center ? What happens in the limit as ?   You can revisit the local linearity visualization from to see what happens, in general, with a linear approximation of a function as we zoom in on the center.    Let's re-write our limit. We can replace with our formula for its linear approximation, and replace with its linear approximation, :     Up until now, we have not thought about indeterminate forms at all. Let's start now.  If this limit is a indeterminate form, then that means that and .  Since our functions are, by definition, differentiable at , then they also have to be continuous at . What does this mean about the values of and ?   Take a look back at our definition of function being . How does the function value relate to the limit? What does that mean in our case?    Use this new information about the values of and to revisit the limit. We re-wrote by replacing each function with its linear approximation. What happens with the algebra when we know this information about and ?   We re-wrote and also know that in this case (due to the indeterminate form) that and .    So we have a really nice result here! In the indeterminate form, we can replace the ratio of the -values from our functions with the ratio of slopes (coming from the first derivatives) of our functions.  In general, we'll put a step in between, where we find and first before trying to evaluate these derivatives at .   "
},
{
  "id": "thm-LHopitalsRule",
  "level": "2",
  "url": "sec-LHopitalsRule.html#thm-LHopitalsRule",
  "type": "Theorem",
  "number": "4.7.1",
  "title": "L’Hôpital’s Rule.",
  "body": " L'Hôpital's Rule   If and are functions and is some real number with and both being differentiable at and and , then . Similarly, this holds if and .  If and are both differentiable as and either:    and      and    then .  This is also true as .   "
},
{
  "id": "ex-FirstLHopitalsRule",
  "level": "2",
  "url": "sec-LHopitalsRule.html#ex-FirstLHopitalsRule",
  "type": "Example",
  "number": "4.7.2",
  "title": "Some First Limits.",
  "body": " Some First Limits   Evaluate the following limits. You should first confirm that they are, actually, indeterminate forms!                            "
},
{
  "id": "ex-xlnx",
  "level": "2",
  "url": "sec-LHopitalsRule.html#ex-xlnx",
  "type": "Example",
  "number": "4.7.3",
  "title": "",
  "body": "  Evaluate the limit: Note that since and , this is a indeterminate form.    Re-write this limit as: . Note that this is not an indeterminate form, and we can use L'Hôpital's Rule.     So .   "
},
{
  "id": "subsubsec-Differences-4",
  "level": "2",
  "url": "sec-LHopitalsRule.html#subsubsec-Differences-4",
  "type": "Example",
  "number": "4.7.4",
  "title": "",
  "body": "  Evaluate the following limit: Note that since and , this is an indeterminate form.    Try to factor out . You won't be able to actual factor it nicely, but you'll end up with a fraction term that is an indeterminate form!     Let's focus on the limit , since it is in an indeterminate form. So then we can go back to our original limit:    "
},
{
  "id": "subsubsec-Exponentials-4",
  "level": "2",
  "url": "sec-LHopitalsRule.html#subsubsec-Exponentials-4",
  "type": "Example",
  "number": "4.7.5",
  "title": "",
  "body": "  Evaluate the following limit: Note that this is the indeterminate form.    We can re-write as which is the same as . Now we can evaluate the limit , and make sure to return the value into the exponent.    We know from that . So then: So .   "
},
{
  "id": "sec-IndefiniteIntegrals",
  "level": "1",
  "url": "sec-IndefiniteIntegrals.html",
  "type": "Section",
  "number": "5.1",
  "title": "Antiderivatives and Indefinite Integrals",
  "body": " Antiderivatives and Indefinite Integrals   We've been spending a lot of time thinking about derivatives! We've done this in a couple of different ways:   We have thought carefully about what derivatives are, what they measure, and how to interpret them.    We have built up a whole list of tools that we can use to actually find or calculate these derivatives. We know how to differentiate most functions (and combinations of functions) that we can think of!    We've been able to apply these derivatives to some specific contexts to solve problems or analyze functions and mathematical models.   Let's think about derivatives in a slightly different way!   Find a Function Where...   For each of the following derivatives, find a function whose first (or second) derivative matches the listed derivative.                             Go back through each of the above derivatives, and find a different option for that still works. Make sure that it is something completely unique, and not just an equivalent function that is written differently.  Why are able to find multiple answers in these questions, but not when we are given a function and need to find a derivative?    We've done two things here: thought about how we might \"undo\" differnentiation, and discovered a nice property about constants.  Note that we've already discovered this rule! We proved it, back when we were playing with the . We built a related theorem that showed that two functions can have the same derivative, and if they do then they are off by, at most, a constant: .  Let's visualize this phenomena!     Antiderivatives  We want to try to define and name these \"backwards derivatives.\" Instead of calling them the \"negative first\" derivative, we will name them as antiderivatives .   Antiderivative   For a function , we say that is an antiderivative of on an interval if on the interval.  We call the family of antiderivatives of , where represents any real number constant.      For each of the following functions, find the family of antiderivatives.        Do we know a function whose derivative is ?            We won't be undoing the Power Rule with either of these! We might try to think about functions whose derivatives are and .      We use absolute values in the logarithm because we want to find a functions whose derivative is on the whole interval that is defined. The log function is only defined for positive inputs, but we would like to be able put any non-zero input into our function (since that's the domain of ).        It might help to write the function as .          Initial Value Problems   A File Sorting Speed Test   A computer program is trying to sort a group of computer files based on their size. The program isn't very efficient, and the time that it takes to sort the files increases when it tries to sort more files.  The time that it takes, measured in seconds, based on the total, cumulative size of the files , measured in gigabytes, is modeled by a function . We don't know the function, but we do know that the time increases at an instantaneous rate of seconds when the total size, increases slightly.    We can build a function for . What is it?        Find all of the possibilities for the function modeling the time, , that it takes the computer program to sort files with a total size of .   We are looking for the family of antiderivatives of .    What does your constant represent, here? You can interpret it graphically, interpret it by thinking about derivatives, but you should also interpret it in terms of the time that it takes this program to sort these files by size.    Let's say that we feed some number of files totaling up to 1.4GB in size into this program. It takes 0.24 seconds to sort the files by size.  Find the function, , that models the how quickly this program sorts these files.    We call this type of problem an \"initial value problem.\" Here, we ended up solving for a family of antiderivatives, but then using some more information about that antiderivative (in this case, information about file size and time) to find the specific antiderivative function that was relevant.   Solving Initial Value Problems  For some function , if we want to find an antiderivative function and we know some \"initial value,\" , then we can find the exact antiderivative by:   Finding the family of antiderivatives: .    Using the initial value to solve for the constant , by evaluating at and solving the resulting equation.        For , find where .    For , find where and .      Indefinite Integrals  To finish this out, we'll just build some notation that represents these families of antiderivatives. We can use words to describe them, but it will be helpful to introduce some quick way of writing this using notation.   Indefinite Integral   An indefinite integral represents a family of antiderivatives: where    is a symbol directing us to find a family of antiderivatives (or integrate)     is called the integrand     is a differential, and represents both the \"end\" of the integral as well as an indicator of what the input variable of the integrand should be (or what variable we antidifferentiate \"with regard to\").     is an antiderivative of (where ).     is called the \"constant of integration\" and represents any real number         Find families of antiderivatives according to each of the following indefinite integrals.             While we do not know how to antidifferentiate products of functions yet, we can just multiply the integrand function! Antidifferentiate this.        Similar to the previous problem, we do not know how to antidifferentiate quotients, but we can re-write this function before we antidifferentiate! Antidifferentiate this!    All we have left to do now is to just formalize the antiderivative rules we've been intuitively building and using.   Power Rule for Antiderivatives    for      Antiderivatives Related to the Exponential and Log Functions         Antiderivatives of Trigonometric Functions         Combinations of Indefinite Integrals       Sums:       Differences:       Coefficients:         These should all be very familiar, since they are really just restatements of the results from .  We should also be comfortable recognizing derivatives of functions that we know, in order to find more functions that we can antidifferentiate.    If we are following the path set out by us already when we learned about derivatives, then at some point we will need to think about how to interpret these antiderivatives. What does tell us about ?  What does tell us about ? We're probably so used to thinking about what tells us about that it might be hard to reverse the interpretation. And that's ok!  Instead of worrying about this, we can just present us with the answer, and then spend some time uncovering it more.  Over the next few sections, we'll discover that antiderivatives of are deeply connected to areas carved out by the graph of .   "
},
{
  "id": "act-FindFunction",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#act-FindFunction",
  "type": "Activity",
  "number": "5.1.1",
  "title": "Find a Function Where....",
  "body": " Find a Function Where...   For each of the following derivatives, find a function whose first (or second) derivative matches the listed derivative.                             Go back through each of the above derivatives, and find a different option for that still works. Make sure that it is something completely unique, and not just an equivalent function that is written differently.  Why are able to find multiple answers in these questions, but not when we are given a function and need to find a derivative?   "
},
{
  "id": "subsec-Antiderivatives-2",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#subsec-Antiderivatives-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "antiderivatives "
},
{
  "id": "def-Antiderivative",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#def-Antiderivative",
  "type": "Definition",
  "number": "5.1.1",
  "title": "Antiderivative.",
  "body": " Antiderivative   For a function , we say that is an antiderivative of on an interval if on the interval.  We call the family of antiderivatives of , where represents any real number constant.   "
},
{
  "id": "subsec-Antiderivatives-4",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#subsec-Antiderivatives-4",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "  For each of the following functions, find the family of antiderivatives.        Do we know a function whose derivative is ?            We won't be undoing the Power Rule with either of these! We might try to think about functions whose derivatives are and .      We use absolute values in the logarithm because we want to find a functions whose derivative is on the whole interval that is defined. The log function is only defined for positive inputs, but we would like to be able put any non-zero input into our function (since that's the domain of ).        It might help to write the function as .       "
},
{
  "id": "act-InitialValueProblem",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#act-InitialValueProblem",
  "type": "Activity",
  "number": "5.1.2",
  "title": "A File Sorting Speed Test.",
  "body": " A File Sorting Speed Test   A computer program is trying to sort a group of computer files based on their size. The program isn't very efficient, and the time that it takes to sort the files increases when it tries to sort more files.  The time that it takes, measured in seconds, based on the total, cumulative size of the files , measured in gigabytes, is modeled by a function . We don't know the function, but we do know that the time increases at an instantaneous rate of seconds when the total size, increases slightly.    We can build a function for . What is it?        Find all of the possibilities for the function modeling the time, , that it takes the computer program to sort files with a total size of .   We are looking for the family of antiderivatives of .    What does your constant represent, here? You can interpret it graphically, interpret it by thinking about derivatives, but you should also interpret it in terms of the time that it takes this program to sort these files by size.    Let's say that we feed some number of files totaling up to 1.4GB in size into this program. It takes 0.24 seconds to sort the files by size.  Find the function, , that models the how quickly this program sorts these files.   "
},
{
  "id": "subsec-InitialValueProblems-5",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#subsec-InitialValueProblems-5",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "  For , find where .    For , find where and .   "
},
{
  "id": "def-IndefiniteIntegral",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#def-IndefiniteIntegral",
  "type": "Definition",
  "number": "5.1.4",
  "title": "Indefinite Integral.",
  "body": " Indefinite Integral   An indefinite integral represents a family of antiderivatives: where    is a symbol directing us to find a family of antiderivatives (or integrate)     is called the integrand     is a differential, and represents both the \"end\" of the integral as well as an indicator of what the input variable of the integrand should be (or what variable we antidifferentiate \"with regard to\").     is an antiderivative of (where ).     is called the \"constant of integration\" and represents any real number      "
},
{
  "id": "subsec-IndefiniteIntegrals-4",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#subsec-IndefiniteIntegrals-4",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": "  Find families of antiderivatives according to each of the following indefinite integrals.             While we do not know how to antidifferentiate products of functions yet, we can just multiply the integrand function! Antidifferentiate this.        Similar to the previous problem, we do not know how to antidifferentiate quotients, but we can re-write this function before we antidifferentiate! Antidifferentiate this!   "
},
{
  "id": "thm-PowerRuleAntiderivatives",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#thm-PowerRuleAntiderivatives",
  "type": "Theorem",
  "number": "5.1.6",
  "title": "Power Rule for Antiderivatives.",
  "body": " Power Rule for Antiderivatives    for    "
},
{
  "id": "thm-ExpLogAntiderivatives",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#thm-ExpLogAntiderivatives",
  "type": "Theorem",
  "number": "5.1.7",
  "title": "Antiderivatives Related to the Exponential and Log Functions.",
  "body": " Antiderivatives Related to the Exponential and Log Functions       "
},
{
  "id": "thm-TrigAntiderivatives",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#thm-TrigAntiderivatives",
  "type": "Theorem",
  "number": "5.1.8",
  "title": "Antiderivatives of Trigonometric Functions.",
  "body": " Antiderivatives of Trigonometric Functions       "
},
{
  "id": "thm-CombinationsOfIntegrals",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#thm-CombinationsOfIntegrals",
  "type": "Theorem",
  "number": "5.1.9",
  "title": "Combinations of Indefinite Integrals.",
  "body": " Combinations of Indefinite Integrals       Sums:       Differences:       Coefficients:        "
},
{
  "id": "sec-RiemannSums",
  "level": "1",
  "url": "sec-RiemannSums.html",
  "type": "Section",
  "number": "5.2",
  "title": "Riemann Sums and Area Approximations",
  "body": " Riemann Sums and Area Approximations   One of the last things we said in was that antiderivatives will be connected to areas. We're going to eventually show this! For now, though, we want to focus on areas defined by curves.   Approximating Areas   We're going to consider two different functions, and some areas based on them. Let's think about two functions: and . For both of these functions, we'll focus on the interval . Instead of thinking about the function only, we'll be considering the two-dimensional region bounded between the graph of our function and the -axis between and .    Find the area of the region bounded between the graph of and the -axis between and .    A graph of the linear function f(x)=2x+1. The points (0,1) and (2,5) are marked, and there is a shaded in trapezoid shape under the line to the axis between these points.     How did you evaluate this area? What kind(s) of shape(s) did you think about?    Estimate the area of the region bounded between the graph of and the -axis between and .    A graph of the quadratic function g(x)=x^2+1. The points (0,1) and (2,5) are marked, and there is a shaded in shape under the line to the axis between these points.      Archimedes of Syracuse discovered how to calculate this area exactly, without estimation, around 300 BC, writing his results in the now-famous \"Quadrature of the Parabola.\" This is, notably, before the formalization of Calculus (during the 1600's). It might be unfair to say that Archimedes proved this \"without using calculus,\" though, since his technique, the \"Method of Exhaustion,\" is really a version of what we do in calculus, but without a formal framework of limits.   How did you estimate this area? What kind(s) of shape(s) did you think about?    Come up with an upper and lower bound for this area. In other words, give an underestimate and overestimate for the actual area we would like to know.  How did you come up with these estimates? How \"good\" do you think your estimates are? Can you come up with \"better\" (or closer) ones?    Hopefully we've had a chance to think about and compare a couple of different strategies for estimating this area. What we want to do, though, is build a systematic way of estimating this area. We'd like it to have a couple of features:   Easy area calculations. We don't want to have to spend a lot of time thinking about tricky area formulas, so simple shapes will be nicer to use.    Flexibility. We want to be able to apply our approach to an area defined by any curve.  This is the problem with Archimedes' method: it only worked for areas defined by parabolas. Once we change our function to something else, Archimedes would have to come up with a completely new area formula for calculation. The techniques we're looking at now have the advantage of flexibility!      Precision. We want to be able to make our estimates as precise as we'd like. It's fine to come up with rough estimates, but we would like a method that allows us to increase the accuracy in our estimations.       Rectangular Approximations  We're going to re-visit the same region as before, but this time we'll outline a process that should help us approximate the area with as much precision as we'd like.   Approximating the Area using Rectangles   We're going to stick with the function on the interval , and keep thinking about the area bounded by the curve and the -axis on this interval. We're going to approximate the area in a couple of different tries, each one more accurate than the one before. By the end of this activity, we'll have a pretty good process built!    Let's start with approximating this region with a single rectangle. We're going to define the rectangle by picking some -value in the interval . Then, we'll use the point at that -value to define the height of our rectangle.  Essentially, we are picking a single point on the our function on the interval and our approximation is pretending that the single point we picked is representative of the whole function on the interval.     Can you try re-picking an -value, and trying to find one that gets you an area approximation that is pretty good?    We're going to use more rectangles. Let's jump up to 3 rectangles. If we split up the interval between and into 3 rectangles, we can make them all the same width, and pick an -value that we can use to get a representative point for each of the 3 rectangles.  We'll need to pick 3 -values this time.     Can you try re-picking your -values, and trying to find one that gets you an area approximation that is pretty good?    Let's scale this up a bit. Pick a good number for your number of rectangles. We'll call this value .  (If you're working in a classroom, maybe it would be good to pick the number of groups or the number of students, or some other number between 10 and 20 or something like that.)  For your value , we're going to divide up the interval between and into pieces. These will be the intervals that we pick from to get our rectangles. What are the subintervals? What are the widths of each subinterval (and then the widths of the rectangles)? Call this with .    For each subinterval, pick an -value in the subinterval to represent it.    Evaluate the function at each of the -values you picked. These are the heights of your rectangles!    Find the areas of each rectangle by multiplying the height of each rectangle by , the width of each rectangle.    Add these areas up to get a total approximation of the actual area!  What do you think: is it worth fiddling with what -value to pick from each subinterval to try to get a better approximation? If is large, do you think it matters how we pick the -values from each subinterval?    This is our process! We'll refer to it often as the slice-and-sum process , since we are slicing out region into a bunch of pieces, approximating the area on each piece (by using one point to represent the whole slice), and then summing the areas back up.  More formally, we can call this the Riemann Sum process, because the sum of the areas is a special form of summation.   Riemann Sum   For a closed interval with a partition with , consider some , any -value in the interval and , the length of the interval . If is a function that is defined on the interval , then we call the sum a Riemann Sum for on .     In practice, we typically choose a Regular Partition , where each subinterval is equally-wide, and so for every . We then normally write our Riemann sum as where is the value of the widths of all of the equally-sized subintervals.     Selection Strategies  This is great! We have a scalable way to approximate areas, and it seems like we can pretty easily increase the precision of our approximations by increasing , the number of slices\/rectangles that we use. And the great thing about this is that when we do increase , we don't increase the complexity of our calculations!  Sure, it would be tedious to calculate and add 100 areas of rectangles by hand, but those area calculations don't get more difficult: there are just more of them.  The only real downside is that when we increase the number of slices\/rectangles, we are really increasing the number of decisions that we have to make: we have to choose an for each subinterval, and so while it isn't hard to just calculate a bunch of areas and add them up, it is difficult, on a human level, to make a bunch of decisions about which -value to choose from each subinterval. But this decision isn't even that important!  We use the \"star\" notation on the to represent the fact that it really doesn't matter which -value gets chosen from the subinterval: as long as we pick one, we get an approximation! And when increases, it matters less and less what the actual -value is: as long as our function is continuous, then there will be not much variation among the -value outputs for any -values in each (small) interval!  All of this to say: let's make a single decision about picking  -values from subintervals instead of having to make decisions (one for each -value).   Left, Right, and Midpoint Riemann Sums  When we build a Riemann sum, we can make a choice to systematically choose the values for (for ). There are many ways of doing this, but here are three:    Left Riemann Sum: We pick the left-most -value from each subinterval. That is, if the partition is , then we choose as our -values to evaluate at for the rectangle heights.  We refer to these as , a Left Riemann sum with rectangles.     Right Riemann Sum: We pick the right-most -value from each subinterval. That is, if the partition is , then we choose as our -values to evaluate at for the rectangle heights.  We refer to these as , a Right Riemann sum with rectangles.     Midpoint Riemann Sum: We pick the -value that is in the middle of each subinterval. That is, if the partition is , then we choose as our -values to evaluate at for the rectangle heights.  We refer to these as , a Midpoint Riemann sum with rectangles.      None of this is a requirement for a Riemann sum, but we will consistently find that when we limit the number of decisions that we have to make, the complexity of the calculation decreases.  Notice that we've already made a similar choice with how we calculate : it is not required that each rectangle have the same width, but it is very nice to not have to think about different widths!  Lastly, we'll finish with a nice interactive Riemann sum calculator. Feel free to explore some different graphs and see how the Riemann sums work when we change how we select the values for as well as when we change the number of rectangles, .    "
},
{
  "id": "act-ApproximatingArea",
  "level": "2",
  "url": "sec-RiemannSums.html#act-ApproximatingArea",
  "type": "Activity",
  "number": "5.2.1",
  "title": "Approximating Areas.",
  "body": " Approximating Areas   We're going to consider two different functions, and some areas based on them. Let's think about two functions: and . For both of these functions, we'll focus on the interval . Instead of thinking about the function only, we'll be considering the two-dimensional region bounded between the graph of our function and the -axis between and .    Find the area of the region bounded between the graph of and the -axis between and .    A graph of the linear function f(x)=2x+1. The points (0,1) and (2,5) are marked, and there is a shaded in trapezoid shape under the line to the axis between these points.     How did you evaluate this area? What kind(s) of shape(s) did you think about?    Estimate the area of the region bounded between the graph of and the -axis between and .    A graph of the quadratic function g(x)=x^2+1. The points (0,1) and (2,5) are marked, and there is a shaded in shape under the line to the axis between these points.      Archimedes of Syracuse discovered how to calculate this area exactly, without estimation, around 300 BC, writing his results in the now-famous \"Quadrature of the Parabola.\" This is, notably, before the formalization of Calculus (during the 1600's). It might be unfair to say that Archimedes proved this \"without using calculus,\" though, since his technique, the \"Method of Exhaustion,\" is really a version of what we do in calculus, but without a formal framework of limits.   How did you estimate this area? What kind(s) of shape(s) did you think about?    Come up with an upper and lower bound for this area. In other words, give an underestimate and overestimate for the actual area we would like to know.  How did you come up with these estimates? How \"good\" do you think your estimates are? Can you come up with \"better\" (or closer) ones?   "
},
{
  "id": "act-RectangularApproximation",
  "level": "2",
  "url": "sec-RiemannSums.html#act-RectangularApproximation",
  "type": "Activity",
  "number": "5.2.2",
  "title": "Approximating the Area using Rectangles.",
  "body": " Approximating the Area using Rectangles   We're going to stick with the function on the interval , and keep thinking about the area bounded by the curve and the -axis on this interval. We're going to approximate the area in a couple of different tries, each one more accurate than the one before. By the end of this activity, we'll have a pretty good process built!    Let's start with approximating this region with a single rectangle. We're going to define the rectangle by picking some -value in the interval . Then, we'll use the point at that -value to define the height of our rectangle.  Essentially, we are picking a single point on the our function on the interval and our approximation is pretending that the single point we picked is representative of the whole function on the interval.     Can you try re-picking an -value, and trying to find one that gets you an area approximation that is pretty good?    We're going to use more rectangles. Let's jump up to 3 rectangles. If we split up the interval between and into 3 rectangles, we can make them all the same width, and pick an -value that we can use to get a representative point for each of the 3 rectangles.  We'll need to pick 3 -values this time.     Can you try re-picking your -values, and trying to find one that gets you an area approximation that is pretty good?    Let's scale this up a bit. Pick a good number for your number of rectangles. We'll call this value .  (If you're working in a classroom, maybe it would be good to pick the number of groups or the number of students, or some other number between 10 and 20 or something like that.)  For your value , we're going to divide up the interval between and into pieces. These will be the intervals that we pick from to get our rectangles. What are the subintervals? What are the widths of each subinterval (and then the widths of the rectangles)? Call this with .    For each subinterval, pick an -value in the subinterval to represent it.    Evaluate the function at each of the -values you picked. These are the heights of your rectangles!    Find the areas of each rectangle by multiplying the height of each rectangle by , the width of each rectangle.    Add these areas up to get a total approximation of the actual area!  What do you think: is it worth fiddling with what -value to pick from each subinterval to try to get a better approximation? If is large, do you think it matters how we pick the -values from each subinterval?   "
},
{
  "id": "subsec-RectangularApproximations-4",
  "level": "2",
  "url": "sec-RiemannSums.html#subsec-RectangularApproximations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slice-and-sum process "
},
{
  "id": "def-RiemannSum",
  "level": "2",
  "url": "sec-RiemannSums.html#def-RiemannSum",
  "type": "Definition",
  "number": "5.2.3",
  "title": "Riemann Sum.",
  "body": " Riemann Sum   For a closed interval with a partition with , consider some , any -value in the interval and , the length of the interval . If is a function that is defined on the interval , then we call the sum a Riemann Sum for on .   "
},
{
  "id": "note-RegularPartition",
  "level": "2",
  "url": "sec-RiemannSums.html#note-RegularPartition",
  "type": "Note",
  "number": "5.2.4",
  "title": "",
  "body": " In practice, we typically choose a Regular Partition , where each subinterval is equally-wide, and so for every . We then normally write our Riemann sum as where is the value of the widths of all of the equally-sized subintervals.  "
},
{
  "id": "sec-DefiniteIntegral",
  "level": "1",
  "url": "sec-DefiniteIntegral.html",
  "type": "Section",
  "number": "5.3",
  "title": "The Definite Integral",
  "body": " The Definite Integral   The big result from our last section on Riemann sums is not just that we can approximate areas by thinking about a bunch of small (thin) rectangles. The big result is that this strategy is scalable: we can increase , the number of slices\/rectangles, and essentially guarantee that, eventually, our approximations will be very accurate.  Now, we move from a concrete process for building rectangles to calculate areas to a more conceptual framework: what happens when ?    Evaluating Areas (Instead of Approximating Them)  Our goal is to move from approximating area to evaluating areas: calculating the real value of the area of these regions bounded between curves and the -axis. We have already decided (when we built the framework for Riemann sums and made scalability and precision in our estimates a focus) that the area we're interested in is the result of some limiting process: we increase the number of slices, , and in turn decrease the width of each slice, .   Definite Integral   If is some function defined on the interval and is a Riemann sum with slices and , then we say that the definite integral of from to is: if this limit exists. When this limit exists, we say that is integrable on the interval .  We call and the limits of integration for this definite integral, and we read as \"the integral from to of with regard to ,\" or sometimes we might just say \"of \" for short.     This is assuming we're using a Regular Partition ( ). If we are not, and each slice has its own width called , then the definition of a definite integral requires that as we see for all . Essentially, we need all of the widths to eventually get tiny: we can't let one slice take up half of the width and then let all of the other slices get tiny, since that would still be an approximation of the area we want.  We don't need to worry about this, though, since we'll always just choose to make all of the 's the same size: .   Let us make something very clear: we will absolutely not calculate these areas this way. Let's see why not.  Let's say we want to calculate . This is the area we were estimating in . How many slices did you pick at the end of this activity? How annoying was it to add up those areas?  Whatever you did, it's not enough: even if we decided to divide this region up into pieces, this is merely an approximation of the limit we want: There are some ways of evaluating this specific limit using some known formulas for sums of squares and end behavior limits of rational functions. But these techniques are extremely limited: we might get lucky being able to fiddle with this limit of this sum for this function, but we won't be so lucky in general.  Instead, let's just think about these areas, focus on what types of functions are integrable, and then build towards our end goal of connecting these areas to antiderivatives.    Signed Area  We're going to now deal with the consequences of our decisions. A truth about mathematics, sometimes not an obvious truth, is that every time we state a definition what we are actually doing is making a decision. We are deciding on some common way of classifying and describing an object. These classifications and descriptions are choices that we are making: choices to prioritize some property or aspect over a different one, choices to include or exclude a type of object into the group of things we're interested in, choices that come with downstream effects.  We chose to define the area bounded between a curve defined by the function and the -axis between and as: . We are going to stand by this definition. It's a good one, for the reasons we described at the beginning of .  But there are some weird things to notice. Let's notice them!   Weird Areas   Let's think about a simple linear function, . We'll both approximate and evaluate the area bounded between and the -axis from to :     A graph of the linear function f(x)=4-3x. The points (0,4) and (3,-5) are marked, and the region between the curve and the axis is shaded in. This shape makes two triangles, one above the axis and one below it, since the line crosses the x-axis.       Explain why we do not need to think about Riemann sums in order for us to calculate the shaded in area. How would you calculate this without using calculus?  Calculate the area!   Are there some shapes that you recognize? What are the dimensions of these shapes?    Let's approximate this area using a Riemann sum. Calculate , the Left Riemann sum with rectangles.   You're going to divide up the interval from to into 3 subintervals: , , and . Note that .  Then you're picking the left-most -value from each subinterval ( , , and ) to plug into in order to find the heights of your rectangles.    Let's approximate this area a second time, but with a different selection strategy for our -values. Calculate , the Right Riemann sum with rectangles.   You're still going to divide up the interval from to into 3 subintervals: , , and . We still have .  Then you're picking the right-most -value from each subinterval ( , , and ) to plug into in order to find the heights of your rectangles.    Compare your answers for and . They should be very different. Why? What is happening that makes specifically such a weird value?    Do you need to go back and re-calculate the area geometrically (from the first part of this activity)? Explain why your answer for  should be negative, based on the Riemann sums we calculated.   Did you account for \"negative\" area in the second trianglular region in this integral?    Find a value such that: .    Find a different value such that: . Is there a second way of making this area 0?   Depending on what you did earlier, you might have to find some ending -value that \"balances\" the area above and below the -axis. If you already did this, then you might have to find an ending -value that collapses this shape down to a 1-dimensional shape with no area.    Weird areas, right? Negative? That's not how we normally think about areas. So we have to be slightly careful with how we describe this new object, the definite integral, that we've built. We don't need to go back and change anything about the object itself: we just need to change how we talk about it.  It's common to think about as the \"area under the curve from to ,\" but we know that's not really true. Instead, we'll think about it as a signed area of the region bounded between the curve and the -axis from to . When we say \"signed area,\" we're just referring to the consequence of using -values to define \"heights\" of the rectangles: when the curve is under the -axis, we end up with negative values for heights, and so those rectangles have negative area.   Weird Areas - Part 2   We're going to think about the same region, kind of.     A graph of the linear function f(x)=4-3x. The points (0,4) and (3,-5) are marked, and the region between the curve and the axis is shaded in. This shape makes two triangles, one above the axis and one below it, since the line crosses the x-axis.    Let's think about the same linear function, , but this time we'll approximate and evaluate the area bounded between and the -axis from to :     Use geometry to calculate the area. Compare this to the result from .    Let's approximate this using a Riemann sum. Calculate , the Midpoint Riemann sum with rectangles.   You're going to divide up the interval from to into 3 subintervals: , , and .  Then you're picking the middle -value from each subinterval ( , , and ) to plug into in order to find the heights of your rectangles.  If and , , and , then what value do we use for the widths, ?    Do you need to go back and re-calculate the area geometrically (from the first part of this activity)? Explain why your answer for  should be positive, based on the Riemann sums we calculated.    Ok so we have some intuition about how the signs of these areas work, and we've also built up some nice properties that we can talk through. Let's finish this section by just summarizing some of the things we've done and thinking about what kinds of functions this works for!    Properties of Definite Integrals  First, this result should be reasonable: we can always calculate these areas for continuous functions!   Continuous Functions are Integrable   If is continuous on the interval , then is integrable on . That is, the limit exists and so we can evaluate the definite integral: .    We'll come back to this, but first, let's summarize some properties that we've discovered.   Properties of Definite Integrals   If . , and are real numbers and is a function that is continuous on the intervals and , then:   The signed area under a single point is 0:     We can cut a region into pieces and evaluate the areas separately:     When we integrate a function \"backwards\" through an interval, we an area with an opposite sign:          Ok, that's enough of this: let's get to the point and try to figure out how to actually calculate these areas without relying on our functions being \"nice\" enough that we can use geometry!   "
},
{
  "id": "def-DefiniteIntegral",
  "level": "2",
  "url": "sec-DefiniteIntegral.html#def-DefiniteIntegral",
  "type": "Definition",
  "number": "5.3.1",
  "title": "Definite Integral.",
  "body": " Definite Integral   If is some function defined on the interval and is a Riemann sum with slices and , then we say that the definite integral of from to is: if this limit exists. When this limit exists, we say that is integrable on the interval .  We call and the limits of integration for this definite integral, and we read as \"the integral from to of with regard to ,\" or sometimes we might just say \"of \" for short.   "
},
{
  "id": "note-GeneralDelta",
  "level": "2",
  "url": "sec-DefiniteIntegral.html#note-GeneralDelta",
  "type": "Note",
  "number": "5.3.2",
  "title": "",
  "body": " This is assuming we're using a Regular Partition ( ). If we are not, and each slice has its own width called , then the definition of a definite integral requires that as we see for all . Essentially, we need all of the widths to eventually get tiny: we can't let one slice take up half of the width and then let all of the other slices get tiny, since that would still be an approximation of the area we want.  We don't need to worry about this, though, since we'll always just choose to make all of the 's the same size: .  "
},
{
  "id": "act-WeirdAreas",
  "level": "2",
  "url": "sec-DefiniteIntegral.html#act-WeirdAreas",
  "type": "Activity",
  "number": "5.3.1",
  "title": "Weird Areas.",
  "body": " Weird Areas   Let's think about a simple linear function, . We'll both approximate and evaluate the area bounded between and the -axis from to :     A graph of the linear function f(x)=4-3x. The points (0,4) and (3,-5) are marked, and the region between the curve and the axis is shaded in. This shape makes two triangles, one above the axis and one below it, since the line crosses the x-axis.       Explain why we do not need to think about Riemann sums in order for us to calculate the shaded in area. How would you calculate this without using calculus?  Calculate the area!   Are there some shapes that you recognize? What are the dimensions of these shapes?    Let's approximate this area using a Riemann sum. Calculate , the Left Riemann sum with rectangles.   You're going to divide up the interval from to into 3 subintervals: , , and . Note that .  Then you're picking the left-most -value from each subinterval ( , , and ) to plug into in order to find the heights of your rectangles.    Let's approximate this area a second time, but with a different selection strategy for our -values. Calculate , the Right Riemann sum with rectangles.   You're still going to divide up the interval from to into 3 subintervals: , , and . We still have .  Then you're picking the right-most -value from each subinterval ( , , and ) to plug into in order to find the heights of your rectangles.    Compare your answers for and . They should be very different. Why? What is happening that makes specifically such a weird value?    Do you need to go back and re-calculate the area geometrically (from the first part of this activity)? Explain why your answer for  should be negative, based on the Riemann sums we calculated.   Did you account for \"negative\" area in the second trianglular region in this integral?    Find a value such that: .    Find a different value such that: . Is there a second way of making this area 0?   Depending on what you did earlier, you might have to find some ending -value that \"balances\" the area above and below the -axis. If you already did this, then you might have to find an ending -value that collapses this shape down to a 1-dimensional shape with no area.   "
},
{
  "id": "subsec-SignedArea-7",
  "level": "2",
  "url": "sec-DefiniteIntegral.html#subsec-SignedArea-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "signed area "
},
{
  "id": "act-WeirdAreas-2",
  "level": "2",
  "url": "sec-DefiniteIntegral.html#act-WeirdAreas-2",
  "type": "Activity",
  "number": "5.3.2",
  "title": "Weird Areas - Part 2.",
  "body": " Weird Areas - Part 2   We're going to think about the same region, kind of.     A graph of the linear function f(x)=4-3x. The points (0,4) and (3,-5) are marked, and the region between the curve and the axis is shaded in. This shape makes two triangles, one above the axis and one below it, since the line crosses the x-axis.    Let's think about the same linear function, , but this time we'll approximate and evaluate the area bounded between and the -axis from to :     Use geometry to calculate the area. Compare this to the result from .    Let's approximate this using a Riemann sum. Calculate , the Midpoint Riemann sum with rectangles.   You're going to divide up the interval from to into 3 subintervals: , , and .  Then you're picking the middle -value from each subinterval ( , , and ) to plug into in order to find the heights of your rectangles.  If and , , and , then what value do we use for the widths, ?    Do you need to go back and re-calculate the area geometrically (from the first part of this activity)? Explain why your answer for  should be positive, based on the Riemann sums we calculated.   "
},
{
  "id": "thm-IntegrableFunction",
  "level": "2",
  "url": "sec-DefiniteIntegral.html#thm-IntegrableFunction",
  "type": "Theorem",
  "number": "5.3.5",
  "title": "Continuous Functions are Integrable.",
  "body": " Continuous Functions are Integrable   If is continuous on the interval , then is integrable on . That is, the limit exists and so we can evaluate the definite integral: .   "
},
{
  "id": "thm-DefiniteIntegralProperties",
  "level": "2",
  "url": "sec-DefiniteIntegral.html#thm-DefiniteIntegralProperties",
  "type": "Theorem",
  "number": "5.3.6",
  "title": "Properties of Definite Integrals.",
  "body": " Properties of Definite Integrals   If . , and are real numbers and is a function that is continuous on the intervals and , then:   The signed area under a single point is 0:     We can cut a region into pieces and evaluate the areas separately:     When we integrate a function \"backwards\" through an interval, we an area with an opposite sign:       "
},
{
  "id": "sec-FTOC",
  "level": "1",
  "url": "sec-FTOC.html",
  "type": "Section",
  "number": "5.4",
  "title": "The Fundamental Theorem of Calculus",
  "body": " The Fundamental Theorem of Calculus   Let's remind ourselves of how we interpret derivatives. We are going to repeat a task that we did in . It should feel familiar, which is good! We're going to use the intuition to make the big connection we've been forecasting so far.   Interpreting the Graph of a Derivarive   Let's look at a picture of a graph of the first derivative, , and try to get some information about from it. Use the following graph of , the first derivative, to answer the questions about .   Since we don't have a huge amount of detail, you'll likely have to estimate the -values for intervals and points in the following questions, but that's ok! Estimate away! Just make sure you know what you're looking for in the graph of to answer these questions.    List the intervals on which is increasing. What about decreasing?    Find the -values of any local maximums and\/or local minimums of .    List the intervals on which is concave up. What about concave down?    Find the -values of any inflection points of .      Areas and Antiderivatives   Interpreting Area   First, we're going to define a bit of a weird function. Sometimes it's called the Area function : . This is a strange function, because we're defining the function as an integral of another function. Specifically, note that the input for our area function is the ending limit of integration: we're calculating the signed area \"under\" the curve of from up to some variable ending point .  We can visualize this function by looking at the areas we create as we change . For now, get used to just seeing the area \"under\" when we move the point around. The areas themselves are the outputs of the function .   Now we can think about this area function, and try to connect it to the graph of .    List the intervals on which is increasing. What about decreasing?    Find the -values of any local maximums and\/or local minimums of .    List the intervals on which is concave up. What about concave down?    Find the -values of any inflection points of .    Compare your answers here to your answers about the behavior of based on the (same) graph of in .  What does this mean about the connection between areas and derivatives, or areas and antiderivatives?    There it is! The way that we can interpret antiderivatives of functions! We found that the derivative of the function that tells us the signed area trapped between a curve and the -axis between a fixed starting point and a variable ending point is the curve itself.  Another way of saying this, though, is that the function that tells us the signed area trapped between a curve and the -axis between a fixed starting point and a variable ending point is an antiderivative of the curve itself! This is the Fundamental Theorem of Calculus, or at least half of it.   Fundamental Theorem of Calculus (Part 1)   For a function that is continuous on an interval , and a function defined for -values in , then . That is: .    The proof of this theorem is one of the most delightful proofs we'll see. This is a \"connector\" theorem: a theorem that brings together several big ideas or objects from one common area of math and links them together. Let's enjoy the proof together.  Let be a function that is continuous on the interval . Then, we'll define the area function as for . We are interested in .  From , we know: If we just focus on the numerator, , we have: Let's approximate this integral with a Riemann sum with rectangle.     Area shaded in under a curve from t=a to t=x, labeled A(x). After this there is a rectangle with width Delta x that touches the curve at some point (x*,f(x*)). The rectangle spans from t=x to t=x + Delta x.    The total width of our interval is , so we have that where is some -value in . Note that we don't have a sum, as we normally would, since we are only \"adding\" a single area of a single rectangle.  This is only an approximation of the difference , and so we can say, for small values of , All that is left to do is to convince ourselves of two facts:   This approximation gets better as gets smaller, and as we have .     Area shaded in under a curve from t=a to t=x, labeled A(x). After this there is a very thin rectangle that touches the curve at some point (x*,f(x*)). This point looks like it's essentially at the same point as t=x, and the rectangle spans from t=x to some other t value close by, with the label Delta x approaches 0.      As , the options for in reduce to just , since the interval collapses towards the single value. So as , we have .   To be convinced that , we just have to rely on the fact that, while our Riemann sum only has rectangle, as the width(s) of \"all\" of our rectangles (our only one) approach 0, and so we end up with the definition of a definite integral in the limit: Hopefully it is easy to see that , since collapses on .  Once we are convinced of these two facts, then it is clear that , since: This completes the proof! Most of the proofs that you might see for this theorem use the to help, since we can see a connection between the derivative and the average rate of change of the area function: The Mean Value Theorem really is behind many of the most important results in calculus!    This theorem is going to be the big result that we use to show how to actually evaluate an area, and so it is easy to think of it as purely support for a \"more important\" result coming next. But we should pause and think about what this result tells us.  What we've done here is come up with a way of:   Guaranteeing that every continuous function has an antiderivative family. We have found a function whose derivative is whatever continuous function we want!    Generating antiderivatives. Until now, we have had to rely on being able to recognize functions as derivatives of other things, or be able to \"undo\" derivative rules. And this will continue to be an important way for us to antidifferentiate functions. But now we have a way of constructing antiderivatives, albeit weird looking ones we are not yet used to thinking about a function that is defined as a definite integral with a variable ending point.   We will play with this idea more later (in ), and so for now we will push forward towards our goal of evaluating a definite integral without directly calculating a limit of Riemann sums.    Evaluating Definite Integrals   Evaluating Areas and Antiderivatives   In this short activity, we'll just collect information about antiderivatives and this new area function, for a function that is continuous on the interval .  For our purposes in this activity, let's say that .    From the , we know that is an antiderivative of , since .  Write out the function , and then name\/write out one other antiderivative of , some .    , and for you can use your antidifferentiation rules from .    We know that all of the antiderivatives of a function are connected to each other.  Describe the connection between and your .   This is the result that we proved in and used to define a family of antiderivatives in .    What is the value of ? What is the value of ? How are they different from each other?    For , you can evaluate your antiderivative at . The important part is thinking about how these two values are different from each other.    What is the value of ? What is the value of ? How are they different from each other?    For , you can evaluate your antiderivative at . The important part is thinking about how these two values are different from each other. Is the difference between these values the same, or different from the difference between and ?    What about the differences: compared to ?   It is worth noting that:      Fundamental Theorem of Calculus (Part 2)   For a function continuous on the closed interval and some , an antiderivative of , then . The vertical bar means \"evaluated,\" and is typically read as \" evaluated from to .\"    Phew, this was a lot! Let's sit back a bit and enjoy the fruits of all of this deep, mathematical thinking: we have a relatively straight-forward way of evaluating definite integrals!   Find an antiderivative of the integrand. (Any antiderivative will do, so we can just choose the one with 0 as the constant term!)    Evaluate that antiderivative at the end points of the interval we're integrating over, and subtract.       Evaluate the following definite integrals. Interpret the answers.         This is the area we were approximating in !         Why is this area 0? What does that mean about the region trapped between and the -axis between and ?         This value is . Why is this value negative? What does that mean about the region we're looking at, and the function we're looking at?     "
},
{
  "id": "act-InterpretDerivative",
  "level": "2",
  "url": "sec-FTOC.html#act-InterpretDerivative",
  "type": "Activity",
  "number": "5.4.1",
  "title": "Interpreting the Graph of a Derivarive.",
  "body": " Interpreting the Graph of a Derivarive   Let's look at a picture of a graph of the first derivative, , and try to get some information about from it. Use the following graph of , the first derivative, to answer the questions about .   Since we don't have a huge amount of detail, you'll likely have to estimate the -values for intervals and points in the following questions, but that's ok! Estimate away! Just make sure you know what you're looking for in the graph of to answer these questions.    List the intervals on which is increasing. What about decreasing?    Find the -values of any local maximums and\/or local minimums of .    List the intervals on which is concave up. What about concave down?    Find the -values of any inflection points of .   "
},
{
  "id": "act-FTOC1",
  "level": "2",
  "url": "sec-FTOC.html#act-FTOC1",
  "type": "Activity",
  "number": "5.4.2",
  "title": "Interpreting Area.",
  "body": " Interpreting Area   First, we're going to define a bit of a weird function. Sometimes it's called the Area function : . This is a strange function, because we're defining the function as an integral of another function. Specifically, note that the input for our area function is the ending limit of integration: we're calculating the signed area \"under\" the curve of from up to some variable ending point .  We can visualize this function by looking at the areas we create as we change . For now, get used to just seeing the area \"under\" when we move the point around. The areas themselves are the outputs of the function .   Now we can think about this area function, and try to connect it to the graph of .    List the intervals on which is increasing. What about decreasing?    Find the -values of any local maximums and\/or local minimums of .    List the intervals on which is concave up. What about concave down?    Find the -values of any inflection points of .    Compare your answers here to your answers about the behavior of based on the (same) graph of in .  What does this mean about the connection between areas and derivatives, or areas and antiderivatives?   "
},
{
  "id": "thm-FTOC1",
  "level": "2",
  "url": "sec-FTOC.html#thm-FTOC1",
  "type": "Theorem",
  "number": "5.4.1",
  "title": "Fundamental Theorem of Calculus (Part 1).",
  "body": " Fundamental Theorem of Calculus (Part 1)   For a function that is continuous on an interval , and a function defined for -values in , then . That is: .    The proof of this theorem is one of the most delightful proofs we'll see. This is a \"connector\" theorem: a theorem that brings together several big ideas or objects from one common area of math and links them together. Let's enjoy the proof together.  Let be a function that is continuous on the interval . Then, we'll define the area function as for . We are interested in .  From , we know: If we just focus on the numerator, , we have: Let's approximate this integral with a Riemann sum with rectangle.     Area shaded in under a curve from t=a to t=x, labeled A(x). After this there is a rectangle with width Delta x that touches the curve at some point (x*,f(x*)). The rectangle spans from t=x to t=x + Delta x.    The total width of our interval is , so we have that where is some -value in . Note that we don't have a sum, as we normally would, since we are only \"adding\" a single area of a single rectangle.  This is only an approximation of the difference , and so we can say, for small values of , All that is left to do is to convince ourselves of two facts:   This approximation gets better as gets smaller, and as we have .     Area shaded in under a curve from t=a to t=x, labeled A(x). After this there is a very thin rectangle that touches the curve at some point (x*,f(x*)). This point looks like it's essentially at the same point as t=x, and the rectangle spans from t=x to some other t value close by, with the label Delta x approaches 0.      As , the options for in reduce to just , since the interval collapses towards the single value. So as , we have .   To be convinced that , we just have to rely on the fact that, while our Riemann sum only has rectangle, as the width(s) of \"all\" of our rectangles (our only one) approach 0, and so we end up with the definition of a definite integral in the limit: Hopefully it is easy to see that , since collapses on .  Once we are convinced of these two facts, then it is clear that , since: This completes the proof! Most of the proofs that you might see for this theorem use the to help, since we can see a connection between the derivative and the average rate of change of the area function: The Mean Value Theorem really is behind many of the most important results in calculus!   "
},
{
  "id": "act-FTOC2",
  "level": "2",
  "url": "sec-FTOC.html#act-FTOC2",
  "type": "Activity",
  "number": "5.4.3",
  "title": "Evaluating Areas and Antiderivatives.",
  "body": " Evaluating Areas and Antiderivatives   In this short activity, we'll just collect information about antiderivatives and this new area function, for a function that is continuous on the interval .  For our purposes in this activity, let's say that .    From the , we know that is an antiderivative of , since .  Write out the function , and then name\/write out one other antiderivative of , some .    , and for you can use your antidifferentiation rules from .    We know that all of the antiderivatives of a function are connected to each other.  Describe the connection between and your .   This is the result that we proved in and used to define a family of antiderivatives in .    What is the value of ? What is the value of ? How are they different from each other?    For , you can evaluate your antiderivative at . The important part is thinking about how these two values are different from each other.    What is the value of ? What is the value of ? How are they different from each other?    For , you can evaluate your antiderivative at . The important part is thinking about how these two values are different from each other. Is the difference between these values the same, or different from the difference between and ?    What about the differences: compared to ?   It is worth noting that:    "
},
{
  "id": "thm-FTOC2",
  "level": "2",
  "url": "sec-FTOC.html#thm-FTOC2",
  "type": "Theorem",
  "number": "5.4.4",
  "title": "Fundamental Theorem of Calculus (Part 2).",
  "body": " Fundamental Theorem of Calculus (Part 2)   For a function continuous on the closed interval and some , an antiderivative of , then . The vertical bar means \"evaluated,\" and is typically read as \" evaluated from to .\"   "
},
{
  "id": "subsec-EvaluatingIntegrals-5",
  "level": "2",
  "url": "sec-FTOC.html#subsec-EvaluatingIntegrals-5",
  "type": "Example",
  "number": "5.4.5",
  "title": "",
  "body": "  Evaluate the following definite integrals. Interpret the answers.         This is the area we were approximating in !         Why is this area 0? What does that mean about the region trapped between and the -axis between and ?         This value is . Why is this value negative? What does that mean about the region we're looking at, and the function we're looking at?   "
},
{
  "id": "sec-MoreDefiniteIntegral",
  "level": "1",
  "url": "sec-MoreDefiniteIntegral.html",
  "type": "Section",
  "number": "5.5",
  "title": "More Results about Definite Integrals",
  "body": " More Results about Definite Integrals   We'll end this chapter by looking a bit more closely at definite integrals and pulling a couple of small results out of our understanding of them, as well as some prior knowledge.    Symmetry   Symmetry in Functions and Integrals   First, let's take a moment to remind ourselves (or see for the first time) what two types of \"symmetry\" we'll be considering. We call them \"even\" and \"odd\" symmetry, but sometimes we think of them as a \"reflective\" symmetry and a \"rotational\" symmetry in the graphs of our functions.     Convince yourself that you know what we mean when we say that a function is even symmetric on an interval if on the interval.  Similarly, convince yourself that you know what we mean when we say that a function is odd symmetric on an interval if on the interval.   Look at the relationship between the points on the graphs when you select the different symmetries: How do their -values relate to each other? How do their -values relate to each other?    Now let's think about areas. Before we visualize too much, let's start with a small question: How does the height of a function impact the area defined by a definite integral? It should be helpful to think about Riemann sums and areas of rectangles here.  The important question then, is how does a function being even or odd symmetric tell us information about areas defined by definite integrals of that function?   If we know that for an even symmetric function, there are some heights\/ -values that are the same, then we know that there are some areas\/integrals that should also be the same. Which ones?  If we know that for an odd symmetric function, there are some heights\/ -values that are opposite, then we know that there are some areas\/integrals that should also be opposite. Which ones?     Definite Integrals of Symmetric Functions   If is a continuous function on for some real number , then:   If is even symmetric on , then: .    If is odd symmetric on , then: .        Connecting Symmetric Integrals   We're going to do some sketching here, and I want you to be clear about something: your sketches can be absolutely terrible. It's ok! They just need to embody the kind of symmetry we're talking about. You will probably sketch something and notice that your areas aren't to scale (or maybe even the wrong sign!), and that's fine.  It might be helpful to practice sketching graphs accurately, but don't worry if that part is a struggle.    Sketch a function with the following properties:    is even symmetric on the interval                  Find the values of the following integrals:               Since is even symmetric, what are the two other integrals that we know about? How can we use those to help us find these two?                   Sketch a function with the following properties:    is odd symmetric on the interval                  Find the values of the following integrals:               Since is even symmetric, what are the two other integrals that we know about? How can we use those to help us find these two?                     Average Value of a Function   Visualizing the Average Height of a Function   We are going to build a formula to find the \"average height\" or \"average value\" of a function on the interval . We're going to look at a function and try to find the average height. Along the way, we'll think a bit about areas!    Consider the following function. Find the average height of the function on the interval pictured!     How does the area \"under\" the curve on the interval compare to the area of the rectangle formed by the average height line?    How do you define the two areas?   One of these is the area under from to , which we can use calculus for!  The other is the area of a rectangle with a height (the average height of ) and a width (the width of the interval).    Set up an equation connecting the two areas, and solve for the average height of .   If , then doesn't it make sense that ? How, then, do we find average height by dividing an area and a width?     Average Value of a Function   If a function is continuous on the interval , then the average value of on is: .     "
},
{
  "id": "act-Symmetry",
  "level": "2",
  "url": "sec-MoreDefiniteIntegral.html#act-Symmetry",
  "type": "Activity",
  "number": "5.5.1",
  "title": "Symmetry in Functions and Integrals.",
  "body": " Symmetry in Functions and Integrals   First, let's take a moment to remind ourselves (or see for the first time) what two types of \"symmetry\" we'll be considering. We call them \"even\" and \"odd\" symmetry, but sometimes we think of them as a \"reflective\" symmetry and a \"rotational\" symmetry in the graphs of our functions.     Convince yourself that you know what we mean when we say that a function is even symmetric on an interval if on the interval.  Similarly, convince yourself that you know what we mean when we say that a function is odd symmetric on an interval if on the interval.   Look at the relationship between the points on the graphs when you select the different symmetries: How do their -values relate to each other? How do their -values relate to each other?    Now let's think about areas. Before we visualize too much, let's start with a small question: How does the height of a function impact the area defined by a definite integral? It should be helpful to think about Riemann sums and areas of rectangles here.  The important question then, is how does a function being even or odd symmetric tell us information about areas defined by definite integrals of that function?   If we know that for an even symmetric function, there are some heights\/ -values that are the same, then we know that there are some areas\/integrals that should also be the same. Which ones?  If we know that for an odd symmetric function, there are some heights\/ -values that are opposite, then we know that there are some areas\/integrals that should also be opposite. Which ones?   "
},
{
  "id": "thm-SymmetricIntegrals",
  "level": "2",
  "url": "sec-MoreDefiniteIntegral.html#thm-SymmetricIntegrals",
  "type": "Theorem",
  "number": "5.5.1",
  "title": "Definite Integrals of Symmetric Functions.",
  "body": " Definite Integrals of Symmetric Functions   If is a continuous function on for some real number , then:   If is even symmetric on , then: .    If is odd symmetric on , then: .      "
},
{
  "id": "act-SymmetricIntegrals",
  "level": "2",
  "url": "sec-MoreDefiniteIntegral.html#act-SymmetricIntegrals",
  "type": "Activity",
  "number": "5.5.2",
  "title": "Connecting Symmetric Integrals.",
  "body": " Connecting Symmetric Integrals   We're going to do some sketching here, and I want you to be clear about something: your sketches can be absolutely terrible. It's ok! They just need to embody the kind of symmetry we're talking about. You will probably sketch something and notice that your areas aren't to scale (or maybe even the wrong sign!), and that's fine.  It might be helpful to practice sketching graphs accurately, but don't worry if that part is a struggle.    Sketch a function with the following properties:    is even symmetric on the interval                  Find the values of the following integrals:               Since is even symmetric, what are the two other integrals that we know about? How can we use those to help us find these two?                   Sketch a function with the following properties:    is odd symmetric on the interval                  Find the values of the following integrals:               Since is even symmetric, what are the two other integrals that we know about? How can we use those to help us find these two?                  "
},
{
  "id": "act-AvgValue",
  "level": "2",
  "url": "sec-MoreDefiniteIntegral.html#act-AvgValue",
  "type": "Activity",
  "number": "5.5.3",
  "title": "Visualizing the Average Height of a Function.",
  "body": " Visualizing the Average Height of a Function   We are going to build a formula to find the \"average height\" or \"average value\" of a function on the interval . We're going to look at a function and try to find the average height. Along the way, we'll think a bit about areas!    Consider the following function. Find the average height of the function on the interval pictured!     How does the area \"under\" the curve on the interval compare to the area of the rectangle formed by the average height line?    How do you define the two areas?   One of these is the area under from to , which we can use calculus for!  The other is the area of a rectangle with a height (the average height of ) and a width (the width of the interval).    Set up an equation connecting the two areas, and solve for the average height of .   If , then doesn't it make sense that ? How, then, do we find average height by dividing an area and a width?   "
},
{
  "id": "thm-AverageValue",
  "level": "2",
  "url": "sec-MoreDefiniteIntegral.html#thm-AverageValue",
  "type": "Theorem",
  "number": "5.5.2",
  "title": "Average Value of a Function.",
  "body": " Average Value of a Function   If a function is continuous on the interval , then the average value of on is: .   "
},
{
  "id": "sec-uSubstitution",
  "level": "1",
  "url": "sec-uSubstitution.html",
  "type": "Section",
  "number": "5.6",
  "title": "<span class=\"process-math\">\\(u\\)<\/span>-Substitution",
  "body": " -Substitution   Undoing the Chain Rule      Substitution for Definite Integrals       More to Translate    Integrate the following, making sure to translate the whole integrand function to be written in terms of .        We can write as , or if you really want to, we can write it as          "
},
{
  "id": "subsec-MoreToTranslate-2",
  "level": "2",
  "url": "sec-uSubstitution.html#subsec-MoreToTranslate-2",
  "type": "Example",
  "number": "5.6.1",
  "title": "",
  "body": "  Integrate the following, making sure to translate the whole integrand function to be written in terms of .        We can write as , or if you really want to, we can write it as        "
},
{
  "id": "sec-NetChange",
  "level": "1",
  "url": "sec-NetChange.html",
  "type": "Section",
  "number": "6.1",
  "title": "Integrals as Net Change",
  "body": " Integrals as Net Change   We have some rudimentary ideas of what an integral is, but we want to challenge and expand those ideas by examining the object at the root of the definition of the definite integral: a Riemann sum.    Estimating Movement  Here is some text leading to our first activity.   Estimating Movement   We're observing an object traveling back and forth in a straight line. Throughout a 5 minute interval, we get the following information about the velocity (in feet\/second) of the object.   Velocity of an Object        0  0    30  2    60  4.25    90  5.75    120  3.5    150  0.75    180  -1.25    210  -3.5    240  -2.75    270  -0.5    300  -0.25       Describe the motion of the object in general.   How do we interpret the different values of velocity? How do we interpret the sign of velocity? What about how velocity changes from one of the 30-second time points to the next?    When was the acceleration of the object the greatest? When was it the least?   You can decide how to interpret the \"least\" acceleration: it is either where the acceleration is closes to 0, or it is the most negative value of the acceleration. These are interpreted differently, but it's a bit ambiguous what we might mean when we say \"least acceleration.\"    Estimate the total displacement of the object over the 5 minute interval. What is the overall change in position from the start to the end?   How do we use velocity and some time interval to estimate the distance traveled? How do we estimate\/assume the velocity on each 30-second time interval?    Is this different than the total distance that the object traveled over the 5 minute interval? Why or why not?   How do we think about (or ignore) the direction of the object? Why is this important here?    If we know the initial position of the object, how could we find the position of the object at some time, , where is a multiple of 30 between 0 and 300?   Can we limit the time intervals that we use to calculate the object's displacement? How do we use displacement and a starting point to find an ending point?    So what are the big ideas in this short activity? There are a lot, and many of them are already things we know, at least to some level. So we are really focusing on adding depth to our understanding of these big ideas. Let's list them in the order that they showed up in this activity:   We interpret the velocity as the derivative of the position of the object. So when we interpret the value of the velocity of the object (large vs small, positive vs negative, etc.) we are interpreting these through the lens of a rate of change.    Acceleration is the derivative of the velocity function. While we don't have the full picture of the velocity function at any value of , we still were interested in the rates at which velocity changes with regard to time.    We can estimate the total displacement of the object by predicting how far it traveled in eahc 30-second time interval. We might pick the starting velocity for each 30-second interval and multiply that by 30 seconds. We could alternatively pick the ending velocity of each 30-second interval. Then we can add all of these products of velocity and time together to approximate a total change in position! Doesn't this feel like a Riemann sum?    When we calculate displacement, the negative velocities get multiplied out to get negative changes in position for the object -- that's because a negative velocity means that the object is moving backwards. If we wanted to calculate the distance traveled, then we need to not account for negative velocities. We can just disregard the sign of the velocity on each time interval and repeat the process above. So, another Riemann sum then?    In order to forecast some position at time , we just need to start with the initial position, and then calculate (or approximate) the displacement from to whatever time we care about, and then add the displacement to the intitial position.   Ok, now let's formalize those results!    Position, Velocity, and Acceleration  We know that the velocity of an object is really a rate of change of the position of that object with regard to time. Similarly, the acceleration of an object is the rate of change of the velocity of the object with regard to time. So we're really thinking about derivatives!    For an object moving along a straight line, if represents the position of that object at time , then the velocity of theobject at time is and the acceleration of the object at time is .    Once we establish this relationship, we can answer questions about movement of an object using the same interpretations of derivatives that we practiced in Chapter 3 of this text.   A Friendly Jogger   Consider a jogger running along a straight-line path, where their velocity at hours is , and velocity is measured in miles per hour. We begin observing this jogger at and observe them over a course of 3 hours.    When is the jogger's acceleration equal to 0 mi\/hr ?   Solve .    Does this time represent a maximum or minimum velocity for the jogger?   You can use the First Derivative Test or the Second Derivative Test here!    When is the jogger's velocity equal to 0 mi\/hr?    Describe the motion of the jogger, including information about the direction that they travel and their top speeds.      Displacement, Distance, and Speed  Let's revisit . When we approximated the displacement of the object, we built a Riemann sum: We chose our as either the time at the beginning of each 30-second interval or the time atr the end of the 30-second interval, but that was only because of the limited information that we had about different values of . If we had information about the function at any values of ( ), then we could pick any time in each 30-second time interval for our Riemann sum! We might note, though, that if we did have this kind of information about the velocity at any time in the 5-minute interval, then we would also build a more precise approximation by subdividing the time interval into smaller\/shorter pieces. So maybe the Riemann sum (where we are dividing up the 5 minute interval into 100 3-second intervals) would do a better job! But why stop there? If we have the definition of the velocity function, and so we can truly obtain the velocity of the object at any time in the 5 minute interval, then we can use the definition of the definite integral as the limit of a Riemann sum: This should work out well with our first understanding of displacement: the displacement of an object is just the difference in position from the starting time to the ending time. So we could say that if is the position function, then we might expect to represent displacement from to as . But isn't this just the Fundamental Theorem of Calculus, since ?    If an object is moving along a straight line with velocity and position , then the displacement of the object from time to is     Let's keep revisiting the same activity. We also noticed that when we looked at the distance compared to the displacement, the only difference was that we were integrating the absolute value of the velocity function, since we didn't care about the sign of the velocity (the direction that the object was traveling) on each interval.    If an object is moving along a straight line with velocity , then the distance traveled by the object from time to is: Here, we call the speed of the object (instead of the velocity).    We should note that we don't have any quick and easy ways of dealing with the integral of the absolute value of a function. So, in order for us to integrate , we need to think about where the velocity passes through 0, so that we can see where it might change from positive to negative.   Tracking our Jogger   Let's revisit our jogger from .    Calculate the total displacement of the jogger from to .   Set up and evaluate a definite integral here, using the velocity function.    Think back to our descroption of the jogger's movement: when is this jogger moving backwards? Split up the time interval from (the start of their run) to (where is the time that the jogger changed direction) to . Calculate the displacements on each of these two intervals.    Calculate the total distance that the jogger traveled in their 3 hour run.   Remember that we're really calculating:       Finding the Future Value of a Function  We can again think back to and build our last result of this section. Remember when we were looking to predict the location of our object at different times: we said it was reasonable to start at our initial position, and then add the displacement of the object from that initial time up to the time that we were interested in. So, to estimate the object's position after 150 seconds, we would calculate: . But we said we could do this to estimate the object's position at any value for time, .   Future Position of an Object   For some object moving along a straight line with velocity and an intitial position of , the future position of the object at some time (with ) is: Note that we change the variable in the velocity function while we integrate: since we want our position function to be in terms of , the ending time point that we calculate the displacement up to, we need to choose a different variable to write velocity in terms of. Mechanically, there is no difference, since we're just swapping out the variables and naming them .    We can note that this relationship between velocity and position can exist in many other context: any pair of functions that are derivatives\/antiderivatives of each other can have this relationship!   Net Change and Future Value   Suppose the value changes over time at a known rate . Then the net change in between and is: . Similarly, given the initial value , the future value of at time is:        Explain the following terms in reference to an object moving along a straight path from time to time .    Position of the object at time .    Displacement of the object.    Distance traveled by the object.    Velocity of the object at time .    Speed of the object at time .    Consider the graph of a velocity function, , of some object moving along a line on the time interval .     A polynomial function that starts at (0,0), decreases down to some negative output around t=2, increases to (4,0) and then continues to some positive output before decreasing and ending at (7,0).     Do you expect the displacement of the object from to to be positive, negative, or 0?   Write two different expressions that represent the total displacement of the object from to .   Do you expect the distance traveled by the object from to to be positive, negative, or 0?   Write two different expressions that represent the total distance traveled by the object from to .    Let's consider an animal running along a straight path with the velocity function: on the time interval .   What is the total displacement of the animal on the time interval ?   What is the total displacement of the animal on the time interval ?   What is the total displacement of the animal on the time interval ?   What is the total displacement of the animal on the time interval ?   What is the total distance traveled by the animal on the time interval ?   Write a short summary of the animal's movement, including notes about direction, speed, and where the animal travels.    Consider an object with velocity function on the interval with the initial position .   Determine the position function, , for using the .   Determine the position function, , for using the strategy.   Compare the results from both methods. Explain why these are equivalent.    Consider an object with an acceleration function for with .   Determine the velocity function, , for using the .   Determine the velocity function, , for using the strategy.   Can you obtain the position function, ? Explain why or why not, based on the information given.    During a brake test for a heavy truck, the truck decelerates from an initial velocity of 88 ft\/s with the acceleration function ft\/s². Assume that the initial position of the truck is .   Find the velocity function for the truck.   When does the truck stop? In this situation, the truck won't have a negative velocity (since it's just braking and not eventually going in reverse). What time interval is the velocity function relevant on?   What is the total displacement of the truck on this time interval?   Safety standards say that for a truck like this, it needs to be able to stop (from a speed of 88ft\/s) in, at most, 200 feet.  Do we need to make changes to the braking mechanism, in order to have the acceleration function change? If so, what does the acceleration need to be (assuming it is constant and we are just replacing it with a new negative number)?    "
},
{
  "id": "act-EstimatingMovement",
  "level": "2",
  "url": "sec-NetChange.html#act-EstimatingMovement",
  "type": "Activity",
  "number": "6.1.1",
  "title": "Estimating Movement.",
  "body": " Estimating Movement   We're observing an object traveling back and forth in a straight line. Throughout a 5 minute interval, we get the following information about the velocity (in feet\/second) of the object.   Velocity of an Object        0  0    30  2    60  4.25    90  5.75    120  3.5    150  0.75    180  -1.25    210  -3.5    240  -2.75    270  -0.5    300  -0.25       Describe the motion of the object in general.   How do we interpret the different values of velocity? How do we interpret the sign of velocity? What about how velocity changes from one of the 30-second time points to the next?    When was the acceleration of the object the greatest? When was it the least?   You can decide how to interpret the \"least\" acceleration: it is either where the acceleration is closes to 0, or it is the most negative value of the acceleration. These are interpreted differently, but it's a bit ambiguous what we might mean when we say \"least acceleration.\"    Estimate the total displacement of the object over the 5 minute interval. What is the overall change in position from the start to the end?   How do we use velocity and some time interval to estimate the distance traveled? How do we estimate\/assume the velocity on each 30-second time interval?    Is this different than the total distance that the object traveled over the 5 minute interval? Why or why not?   How do we think about (or ignore) the direction of the object? Why is this important here?    If we know the initial position of the object, how could we find the position of the object at some time, , where is a multiple of 30 between 0 and 300?   Can we limit the time intervals that we use to calculate the object's displacement? How do we use displacement and a starting point to find an ending point?   "
},
{
  "id": "def-position-velocity-acceleration",
  "level": "2",
  "url": "sec-NetChange.html#def-position-velocity-acceleration",
  "type": "Definition",
  "number": "6.1.2",
  "title": "",
  "body": "  For an object moving along a straight line, if represents the position of that object at time , then the velocity of theobject at time is and the acceleration of the object at time is .   "
},
{
  "id": "act-Jogger",
  "level": "2",
  "url": "sec-NetChange.html#act-Jogger",
  "type": "Activity",
  "number": "6.1.2",
  "title": "A Friendly Jogger.",
  "body": " A Friendly Jogger   Consider a jogger running along a straight-line path, where their velocity at hours is , and velocity is measured in miles per hour. We begin observing this jogger at and observe them over a course of 3 hours.    When is the jogger's acceleration equal to 0 mi\/hr ?   Solve .    Does this time represent a maximum or minimum velocity for the jogger?   You can use the First Derivative Test or the Second Derivative Test here!    When is the jogger's velocity equal to 0 mi\/hr?    Describe the motion of the jogger, including information about the direction that they travel and their top speeds.   "
},
{
  "id": "def-displacement",
  "level": "2",
  "url": "sec-NetChange.html#def-displacement",
  "type": "Definition",
  "number": "6.1.3",
  "title": "",
  "body": "  If an object is moving along a straight line with velocity and position , then the displacement of the object from time to is    "
},
{
  "id": "def-distance",
  "level": "2",
  "url": "sec-NetChange.html#def-distance",
  "type": "Definition",
  "number": "6.1.4",
  "title": "",
  "body": "  If an object is moving along a straight line with velocity , then the distance traveled by the object from time to is: Here, we call the speed of the object (instead of the velocity).   "
},
{
  "id": "act-Jogger-2",
  "level": "2",
  "url": "sec-NetChange.html#act-Jogger-2",
  "type": "Activity",
  "number": "6.1.3",
  "title": "Tracking our Jogger.",
  "body": " Tracking our Jogger   Let's revisit our jogger from .    Calculate the total displacement of the jogger from to .   Set up and evaluate a definite integral here, using the velocity function.    Think back to our descroption of the jogger's movement: when is this jogger moving backwards? Split up the time interval from (the start of their run) to (where is the time that the jogger changed direction) to . Calculate the displacements on each of these two intervals.    Calculate the total distance that the jogger traveled in their 3 hour run.   Remember that we're really calculating:    "
},
{
  "id": "thm-FuturePosition",
  "level": "2",
  "url": "sec-NetChange.html#thm-FuturePosition",
  "type": "Theorem",
  "number": "6.1.5",
  "title": "Future Position of an Object.",
  "body": " Future Position of an Object   For some object moving along a straight line with velocity and an intitial position of , the future position of the object at some time (with ) is: Note that we change the variable in the velocity function while we integrate: since we want our position function to be in terms of , the ending time point that we calculate the displacement up to, we need to choose a different variable to write velocity in terms of. Mechanically, there is no difference, since we're just swapping out the variables and naming them .   "
},
{
  "id": "thm-FutureValue",
  "level": "2",
  "url": "sec-NetChange.html#thm-FutureValue",
  "type": "Theorem",
  "number": "6.1.6",
  "title": "Net Change and Future Value.",
  "body": " Net Change and Future Value   Suppose the value changes over time at a known rate . Then the net change in between and is: . Similarly, given the initial value , the future value of at time is:    "
},
{
  "id": "ex-NetChange-1",
  "level": "2",
  "url": "sec-NetChange.html#ex-NetChange-1",
  "type": "Exercise",
  "number": "6.1.5.1",
  "title": "",
  "body": " Explain the following terms in reference to an object moving along a straight path from time to time .    Position of the object at time .    Displacement of the object.    Distance traveled by the object.    Velocity of the object at time .    Speed of the object at time .  "
},
{
  "id": "ex-NetChange-2",
  "level": "2",
  "url": "sec-NetChange.html#ex-NetChange-2",
  "type": "Exercise",
  "number": "6.1.5.2",
  "title": "",
  "body": " Consider the graph of a velocity function, , of some object moving along a line on the time interval .     A polynomial function that starts at (0,0), decreases down to some negative output around t=2, increases to (4,0) and then continues to some positive output before decreasing and ending at (7,0).     Do you expect the displacement of the object from to to be positive, negative, or 0?   Write two different expressions that represent the total displacement of the object from to .   Do you expect the distance traveled by the object from to to be positive, negative, or 0?   Write two different expressions that represent the total distance traveled by the object from to .  "
},
{
  "id": "ex-NetChange-3",
  "level": "2",
  "url": "sec-NetChange.html#ex-NetChange-3",
  "type": "Exercise",
  "number": "6.1.5.3",
  "title": "",
  "body": " Let's consider an animal running along a straight path with the velocity function: on the time interval .   What is the total displacement of the animal on the time interval ?   What is the total displacement of the animal on the time interval ?   What is the total displacement of the animal on the time interval ?   What is the total displacement of the animal on the time interval ?   What is the total distance traveled by the animal on the time interval ?   Write a short summary of the animal's movement, including notes about direction, speed, and where the animal travels.  "
},
{
  "id": "ex-NetChange-4",
  "level": "2",
  "url": "sec-NetChange.html#ex-NetChange-4",
  "type": "Exercise",
  "number": "6.1.5.4",
  "title": "",
  "body": " Consider an object with velocity function on the interval with the initial position .   Determine the position function, , for using the .   Determine the position function, , for using the strategy.   Compare the results from both methods. Explain why these are equivalent.  "
},
{
  "id": "ex-NetChange-5",
  "level": "2",
  "url": "sec-NetChange.html#ex-NetChange-5",
  "type": "Exercise",
  "number": "6.1.5.5",
  "title": "",
  "body": " Consider an object with an acceleration function for with .   Determine the velocity function, , for using the .   Determine the velocity function, , for using the strategy.   Can you obtain the position function, ? Explain why or why not, based on the information given.  "
},
{
  "id": "ex-NetChange-6",
  "level": "2",
  "url": "sec-NetChange.html#ex-NetChange-6",
  "type": "Exercise",
  "number": "6.1.5.6",
  "title": "",
  "body": " During a brake test for a heavy truck, the truck decelerates from an initial velocity of 88 ft\/s with the acceleration function ft\/s². Assume that the initial position of the truck is .   Find the velocity function for the truck.   When does the truck stop? In this situation, the truck won't have a negative velocity (since it's just braking and not eventually going in reverse). What time interval is the velocity function relevant on?   What is the total displacement of the truck on this time interval?   Safety standards say that for a truck like this, it needs to be able to stop (from a speed of 88ft\/s) in, at most, 200 feet.  Do we need to make changes to the braking mechanism, in order to have the acceleration function change? If so, what does the acceleration need to be (assuming it is constant and we are just replacing it with a new negative number)?  "
},
{
  "id": "sec-AreaBetweenCurves",
  "level": "1",
  "url": "sec-AreaBetweenCurves.html",
  "type": "Section",
  "number": "6.2",
  "title": "Area Between Curves",
  "body": " Area Between Curves   Let's remember Riemann Sums.    Remembering Riemann Sums  Text here.   Remembering Riemann Sums   Let's start with the function on the interval with on the interval. We will construct a Riemman sum to approximate the area under the curve on this interval, and then build that into the integral formula.     A graph of a positive curve, labeled f(x), from x=a to x=b. The region between the curve and the x-axis is shaded.      Divide the interval into 4 equally-sized subintervals.    Pick an for , one for each subinterval. Then, plot the points , , , and .   These points are just general ones, and you don't have to come up with actual numbers for the -values or the corresponding -values. Instead, just draw them in on the curve, somewhere in each of the subintervals.    Use these 4 points to draw 4 rectangles. What are the dimensions of these rectangles (the height and width)?   You won't have any numbers to calculate here, really: instead, see if you can calculate the widths by thinking about the total width of your interval. Then calculate the heights by thinking about the points you created.    Find the area of each rectangle by multiplying the heights and widths for each rectangle.    Add up the areas to construct a Riemman sum. Is this sum very accurate? Why or why not?   Try to think about the accuracy of your area approximation by looking at it visually. Are there any places where your approximation looks far away from the actual area we're thinking about?    Now we will generalize a little more. Let's say we divide this up into equally-sized pieces (instead of 4). Instead of trying to pick an for the unknown number of subintervals (since we don't have a value for yet), let's just focus on one of these: the arbitrary th subinterval.     The same graph of a positive curve, labeled f(x), from x=a to x=b. Now, though, there is a single rectangle sitting on the x-axis and spanning up to f(x). It is delta-x wide, and the top of the rectangle touches the graph at the point (x_k, f(x_k)).    What are the dimensions of this th rectangle?    Find , the area of this th rectangle.    Add up the areas of for to approximate the total area,    You might want to use summation notation, starting with     Apply a limit as to this Riemann sum in order to construct the integral formula for the area under the curve from to .    This activity hopefully reminds of the definition of a Riemann Sum ( ) from earlier in this text ( ).    Building an Integral Formula for the Area Between Curves   Area Between Curves   Let's start with our same function on the same interval m but also add the function on the same interval, with on the interval. We will construct a Riemann sum to approximate the area between these two curves on this interval, and then build that into the integral formula.     A graph of a positive curve and a less positive curve, g(x), labeled f(x), from x=a to x=b. The space between these curves is shaded.      Divide the interval into 4 equally-sized subintervals.    Pick an for , one for each subinterval. Plot the points , , , and . Then plot the corresponding points on the function: , , , and .    Use these 8 points to draw 4 rectangles, with the points on the function defining the tops of the rectangles and the points on the function defining the bottoms of the rectangles. What are the dimensions of these rectangles (the height and width)?    Find the area of each rectangle by multiplying the heights and widths for each rectangle.    Add up the areas to construct a Riemman sum.    Now we will generalize a little more. Let's say we divide this up into equally-sized pieces (instead of 4). Instead of trying to pick an for the unknown number of subintervals (since we don't have a value for yet), let's just focus on one of these: the arbitrary th subinterval.     The same graph of the two curves f(x) and g(x) between x=a and x=b. Now, though, there is a single rectangle sitting on g(x) and spanning up to f(x). It is delta-x wide. The bottom of the rectangle touches the graph at the point (x_k, g(x_k)) and the top of the rectangle touches the graph at the point (x_k, f(x_k)).    What are the dimensions of this th rectangle?    Find , the area of this th rectangle.    Add up the areas of for to approximate the total area,    You might want to use summation notation, starting with     Apply a limit as to this Riemann sum in order to construct the integral formula for the area between the curves and from to .     Area Between Curves   If and are continuous functions with on the interval , then the area bounded between the curves  and between and is .    Example here.    Changing Perspective  Text here.   Trying for a Single Integral   Let's consider the same setup as earlier: the region bounded between two curves, and , as well as the -axis (the line ). We'll need to name these functions, so let's call them and . But this time, we'll approach the region a bit differently: we're going to try to find the area of the region using only a single integral.     A graph of the two curves y=x+6 and y=x^3 as well as the line y=0. The region trapped inside is shaded, and the intersection points (-6,0) and (2,8) are labelled.      The range of -values in this region span from to . Divide this interval evenly into 4 equally sized-subintervals. What is the height of each subinterval? We'll call this .        Pick a -value from each sub-interval. You can call these , , , and .    Find the corresponding -values on the function for each of the -values you selected. These will be , , , and .   You're really just putting your -values into the equation and solving for . Or you can solve for in general, by solving for while leaving as a variable.    Do the same thing for the function. Now you have 8 points that you can plot: , , , and as well as , , , and . Plot them.    Use these points to draw 4 rectangles with points on and determining the left and right ends of the rectangle. What are the dimensions of these rectangles (height and width)?    Find the area of each rectangle by multiplying the height and widths for each rectangle.    Add up the areas to construct a Riemann sum.    Again, we'll generalize this and think about the th rectangle, pictured below.     The same region, but this time with a horizontal rectangle spanning across it, with the height labeled delta y. The curves are re-labeled x=y-6 and x = cuberoot(y).    Which variable defines the location of the th rectangle, here? That is, if you were to describe where in this graph the th rectangle is laying, would you describe it with an or variable? This will act as our general input variable for the integral we're ending with.    What are the dimensions of the th rectangle?    Find , the area of this th rectangle.    Add up the areas of for to approximate the total area,    You might want to use summation notation, starting with     Apply a limit as to this Riemann sum in order to construct the integral formula for the area between the curves and from to .    Now that you have an integral, evaluate it! Find the area of this region to compare with the work we did previously, where we used multiple integrals to measure the size of this same region.    We can re-write our definition of the area between curves ( ) to account for this change in perspective, by thinking about these same functions in terms of .   Area Between Curves (in terms of )   If and are continuous functions with on the interval of -values , then the area bounded between the curves  and from to is .      Explain how we use the \"slice and sum\" method to build an integral formula for the area bounded between curves. Give some details, enough to make sure you understand how the Riemann sums are constructed and how they turn into our integral formula.  What are some changes\/considerations that we need to make when we decide to set up our integral in terms of instead of ?   Set up (and practice evaluating) an integral expression representing the area of each of the regions described below.   The region bounded by the curves and between and .     The region bounded by the curves and between and      The region bounded by the curves and and the line .     The region bounded by the curves and .      Set up and evaluate an integral representing the area of each of the regions described below. Explain whether you chose to integrate with respect to or , and why you made that choice.   The region bounded by the curves and and the line between and .     The region bounded by the curves and and the line in the first quadrant.     The region bounded by the curves and and the line in the third quadrant.     The region bounded by the curves , , and in the first quadrant.     The region bounded by the curves , , and in the first quadrant.     The other region bounded by the curves , , and in the first quadrant.     The region bounded by the curves and .     The region(s) bounded by the curves and .      "
},
{
  "id": "act-RememberingRiemann",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#act-RememberingRiemann",
  "type": "Activity",
  "number": "6.2.1",
  "title": "Remembering Riemann Sums.",
  "body": " Remembering Riemann Sums   Let's start with the function on the interval with on the interval. We will construct a Riemman sum to approximate the area under the curve on this interval, and then build that into the integral formula.     A graph of a positive curve, labeled f(x), from x=a to x=b. The region between the curve and the x-axis is shaded.      Divide the interval into 4 equally-sized subintervals.    Pick an for , one for each subinterval. Then, plot the points , , , and .   These points are just general ones, and you don't have to come up with actual numbers for the -values or the corresponding -values. Instead, just draw them in on the curve, somewhere in each of the subintervals.    Use these 4 points to draw 4 rectangles. What are the dimensions of these rectangles (the height and width)?   You won't have any numbers to calculate here, really: instead, see if you can calculate the widths by thinking about the total width of your interval. Then calculate the heights by thinking about the points you created.    Find the area of each rectangle by multiplying the heights and widths for each rectangle.    Add up the areas to construct a Riemman sum. Is this sum very accurate? Why or why not?   Try to think about the accuracy of your area approximation by looking at it visually. Are there any places where your approximation looks far away from the actual area we're thinking about?    Now we will generalize a little more. Let's say we divide this up into equally-sized pieces (instead of 4). Instead of trying to pick an for the unknown number of subintervals (since we don't have a value for yet), let's just focus on one of these: the arbitrary th subinterval.     The same graph of a positive curve, labeled f(x), from x=a to x=b. Now, though, there is a single rectangle sitting on the x-axis and spanning up to f(x). It is delta-x wide, and the top of the rectangle touches the graph at the point (x_k, f(x_k)).    What are the dimensions of this th rectangle?    Find , the area of this th rectangle.    Add up the areas of for to approximate the total area,    You might want to use summation notation, starting with     Apply a limit as to this Riemann sum in order to construct the integral formula for the area under the curve from to .   "
},
{
  "id": "act-AreaBetweenCurves",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#act-AreaBetweenCurves",
  "type": "Activity",
  "number": "6.2.2",
  "title": "Area Between Curves.",
  "body": " Area Between Curves   Let's start with our same function on the same interval m but also add the function on the same interval, with on the interval. We will construct a Riemann sum to approximate the area between these two curves on this interval, and then build that into the integral formula.     A graph of a positive curve and a less positive curve, g(x), labeled f(x), from x=a to x=b. The space between these curves is shaded.      Divide the interval into 4 equally-sized subintervals.    Pick an for , one for each subinterval. Plot the points , , , and . Then plot the corresponding points on the function: , , , and .    Use these 8 points to draw 4 rectangles, with the points on the function defining the tops of the rectangles and the points on the function defining the bottoms of the rectangles. What are the dimensions of these rectangles (the height and width)?    Find the area of each rectangle by multiplying the heights and widths for each rectangle.    Add up the areas to construct a Riemman sum.    Now we will generalize a little more. Let's say we divide this up into equally-sized pieces (instead of 4). Instead of trying to pick an for the unknown number of subintervals (since we don't have a value for yet), let's just focus on one of these: the arbitrary th subinterval.     The same graph of the two curves f(x) and g(x) between x=a and x=b. Now, though, there is a single rectangle sitting on g(x) and spanning up to f(x). It is delta-x wide. The bottom of the rectangle touches the graph at the point (x_k, g(x_k)) and the top of the rectangle touches the graph at the point (x_k, f(x_k)).    What are the dimensions of this th rectangle?    Find , the area of this th rectangle.    Add up the areas of for to approximate the total area,    You might want to use summation notation, starting with     Apply a limit as to this Riemann sum in order to construct the integral formula for the area between the curves and from to .   "
},
{
  "id": "def-AreaBetweenCurves",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#def-AreaBetweenCurves",
  "type": "Definition",
  "number": "6.2.5",
  "title": "Area Between Curves.",
  "body": " Area Between Curves   If and are continuous functions with on the interval , then the area bounded between the curves  and between and is .   "
},
{
  "id": "act-SingleIntegral",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#act-SingleIntegral",
  "type": "Activity",
  "number": "6.2.3",
  "title": "Trying for a Single Integral.",
  "body": " Trying for a Single Integral   Let's consider the same setup as earlier: the region bounded between two curves, and , as well as the -axis (the line ). We'll need to name these functions, so let's call them and . But this time, we'll approach the region a bit differently: we're going to try to find the area of the region using only a single integral.     A graph of the two curves y=x+6 and y=x^3 as well as the line y=0. The region trapped inside is shaded, and the intersection points (-6,0) and (2,8) are labelled.      The range of -values in this region span from to . Divide this interval evenly into 4 equally sized-subintervals. What is the height of each subinterval? We'll call this .        Pick a -value from each sub-interval. You can call these , , , and .    Find the corresponding -values on the function for each of the -values you selected. These will be , , , and .   You're really just putting your -values into the equation and solving for . Or you can solve for in general, by solving for while leaving as a variable.    Do the same thing for the function. Now you have 8 points that you can plot: , , , and as well as , , , and . Plot them.    Use these points to draw 4 rectangles with points on and determining the left and right ends of the rectangle. What are the dimensions of these rectangles (height and width)?    Find the area of each rectangle by multiplying the height and widths for each rectangle.    Add up the areas to construct a Riemann sum.    Again, we'll generalize this and think about the th rectangle, pictured below.     The same region, but this time with a horizontal rectangle spanning across it, with the height labeled delta y. The curves are re-labeled x=y-6 and x = cuberoot(y).    Which variable defines the location of the th rectangle, here? That is, if you were to describe where in this graph the th rectangle is laying, would you describe it with an or variable? This will act as our general input variable for the integral we're ending with.    What are the dimensions of the th rectangle?    Find , the area of this th rectangle.    Add up the areas of for to approximate the total area,    You might want to use summation notation, starting with     Apply a limit as to this Riemann sum in order to construct the integral formula for the area between the curves and from to .    Now that you have an integral, evaluate it! Find the area of this region to compare with the work we did previously, where we used multiple integrals to measure the size of this same region.   "
},
{
  "id": "def-AreaBetweenCurves-y",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#def-AreaBetweenCurves-y",
  "type": "Definition",
  "number": "6.2.8",
  "title": "Area Between Curves (in terms of <span class=\"process-math\">\\(y\\)<\/span>).",
  "body": " Area Between Curves (in terms of )   If and are continuous functions with on the interval of -values , then the area bounded between the curves  and from to is .   "
},
{
  "id": "ex-AreaBetweenCurves-1",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#ex-AreaBetweenCurves-1",
  "type": "Exercise",
  "number": "6.2.4.1",
  "title": "",
  "body": "Explain how we use the \"slice and sum\" method to build an integral formula for the area bounded between curves. Give some details, enough to make sure you understand how the Riemann sums are constructed and how they turn into our integral formula. "
},
{
  "id": "ex-AreaBetweenCurves-2",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#ex-AreaBetweenCurves-2",
  "type": "Exercise",
  "number": "6.2.4.2",
  "title": "",
  "body": "What are some changes\/considerations that we need to make when we decide to set up our integral in terms of instead of ? "
},
{
  "id": "ex-AreaBetweenCurves-3",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#ex-AreaBetweenCurves-3",
  "type": "Exercise",
  "number": "6.2.4.3",
  "title": "",
  "body": " Set up (and practice evaluating) an integral expression representing the area of each of the regions described below.   The region bounded by the curves and between and .     The region bounded by the curves and between and      The region bounded by the curves and and the line .     The region bounded by the curves and .    "
},
{
  "id": "ex-AreaBetweenCurves-4",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#ex-AreaBetweenCurves-4",
  "type": "Exercise",
  "number": "6.2.4.4",
  "title": "",
  "body": " Set up and evaluate an integral representing the area of each of the regions described below. Explain whether you chose to integrate with respect to or , and why you made that choice.   The region bounded by the curves and and the line between and .     The region bounded by the curves and and the line in the first quadrant.     The region bounded by the curves and and the line in the third quadrant.     The region bounded by the curves , , and in the first quadrant.     The region bounded by the curves , , and in the first quadrant.     The other region bounded by the curves , , and in the first quadrant.     The region bounded by the curves and .     The region(s) bounded by the curves and .    "
},
{
  "id": "sec-VolumesOfRevolution",
  "level": "1",
  "url": "sec-VolumesOfRevolution.html",
  "type": "Section",
  "number": "6.3",
  "title": "Volumes of Solids of Revolution",
  "body": " Volumes of Solids of Revolution       From Area To Volume  Text.   Volume by Disks\/Washers   If and are continuous functions with on the interval , then the volume of the solid formed by revolving the region bounded between the curves and from to around the -axis is: . This is called the Washer Method . Note that if , then the resulting volume is: . This is called the Disk Method .     Volumes by Disks\/Washers   Consider the region bounded between the curves and . Will will create a 3-dimensional solid by revolving this region around the -axis.    Visualize the solid you'll create when you revolve this region around the -axis.    Draw a single rectangle in your region, standing perpendicular to the -axis.    Let's use this rectangle to visualize the th slice of this 3-dimensional solid. What does the \"face\" of it look like?    Find the area of the face of the th slice.   Note that this is a 2-dimensional shape, and we're just finding the area of it.    Set up, and evaluate, the integral representing the volume of the solid.     Another Volume   Now lets consider another region: this time, the one bounded between the curves and . We will, again, create a 3-dimensional solid by revolving this region around the -axis.    Visualize the solid you'll create when you revolve this region around the -axis.    Draw a single rectangle in your region standing perpendicular to the -axis.    Let's use this rectangle to visualize the th slice of this 3-dimensional solid. What does the \"face\" of it look like?    Find the area of the face of the th slice.    Set up and evaluate the integral representing the volume of this solid.      Re-Orienting our Rectangles   Volume by Shells   If and are continuous functions with on the interval (with ), then the volume of the solid formed when the region bounded between the curves and from to is revolved around the -axis is .     Volume by Shells   Let's consider the region bounded by the curves and as well as the line . You might remember this region from . This time, we'll create a 3-dimensional solid by revolving the region around the -axis     A graph of the two curves y=x+6 and y=x^3 as well as the line y=0. The region trapped inside is shaded, and the intersection points (-6,0) and (2,8) are labelled.      Sketch one or two rectangles that are perpendicular to the -axis. Then set up an integral expression to find the volume of the solid using them.   Note that in this context, we're actually using disks and washers. Also note that the bottom of the rectangles are bounded by from to and then switches to being bounded by from to .    Now draw a single rectangle in the region that is parallel to the axis of revolution. Use this rectangle to visualize the th slice of this 3-dimensional solid. What does that single rectangle create when it is revolved around the -axis?   This won't create a disk or washer!    Set up and evaluate the integral expression representing the volume of the solid.      We say that the volume of a solid can be thought of as where is a function describing the cross-sectional area of our solid at an -value between and . Explain how this integral formula gets built, referencing the slice-and-sum (Riemann sum) method.  Explain the differences and similarities between the disk and washer methods for finding volumes of solids of revolution.  When do we integrate with regard to (using a in our integral and writing our functions with -value inputs) and when do we integrate with regard to (using a in our integral and writing our functions with -value inputs) when we're finding volumes using disks and washers? How do we know?   For each of the solids described below, set up an integral using the disk\/washer method that describes the volume of the solid. It will be helpful to visualize the region, a rectangle on that region, as well as the rectangle revolved around the axis of revolution.   The region bounded by the curve and the lines and , revolved around the -axis.     The region bounded by the curve and the -axis between and , revolved around the -axis.     The region bounded by the curves and between and , revolved around the -axis.     The region bounded by the curves and between and , revolved around the -axis.     The region bounded by the curve , the -axis, and the line , revolved around the -axis.     The region bounded by the curve and the -axis between and , revolved around the -axis.     Explain where the pieces of the shell formula come from. How is this different than using disks\/washers?  Say we're revolving a region around the -axis to create a solid. Using the disk\/washer method, we will integrate with respect to . Using the shell method, we integrate with respect to . Explain the difference, and why this difference occurs.   For each of the solids described below, set up an integral using the shell method that describes the volume of the solid. It will be helpful to visualize the region, a rectangle on that region, as well as the rectangle revolved around the axis of revolution.   The region bounded by the curve and the lines and , revolved around the -axis.     The region bounded by the curve and the -axis between and , revolved around the -axis.     The region bounded by the curves and and the line revolved around the -axis.     The region bounded by the curves and from to , revolved around the -axis.     The region bounded by the curves and revolved around the -axis.     The region bounded by the curves and and the -axis between and , revolved around the -axis.     Pick at least 2 integrals from to re-write using shells instead. What about those regions did you look for to choose which ones to re-write and which ones to not?  Pick at least 2 integrals from to re-write using disks\/washers instead. What about those regions did you look for to choose which ones to re-write and which ones to not?   For each of the following solids, set up an integral expression using either the disk\/washer method or the shell method. You don't need to evaluate them, but you should do some careful thinking about how you set these up, especially as you choose between methods and what variable you are integrating with.   The region bounded by the curves and in the first quadrant, revolved around the -axis.     The region bounded by the curves and in the first quadrant, revolved around the -axis.     The region bounded by the curves and in the first quadrant, revolved around the -axis.      "
},
{
  "id": "def-VolumesDisksWashers",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#def-VolumesDisksWashers",
  "type": "Definition",
  "number": "6.3.1",
  "title": "Volume by Disks\/Washers.",
  "body": " Volume by Disks\/Washers   If and are continuous functions with on the interval , then the volume of the solid formed by revolving the region bounded between the curves and from to around the -axis is: . This is called the Washer Method . Note that if , then the resulting volume is: . This is called the Disk Method .   "
},
{
  "id": "act-VolumesDisksWashers",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#act-VolumesDisksWashers",
  "type": "Activity",
  "number": "6.3.1",
  "title": "Volumes by Disks\/Washers.",
  "body": " Volumes by Disks\/Washers   Consider the region bounded between the curves and . Will will create a 3-dimensional solid by revolving this region around the -axis.    Visualize the solid you'll create when you revolve this region around the -axis.    Draw a single rectangle in your region, standing perpendicular to the -axis.    Let's use this rectangle to visualize the th slice of this 3-dimensional solid. What does the \"face\" of it look like?    Find the area of the face of the th slice.   Note that this is a 2-dimensional shape, and we're just finding the area of it.    Set up, and evaluate, the integral representing the volume of the solid.   "
},
{
  "id": "act-VolumesDisksWashers-y",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#act-VolumesDisksWashers-y",
  "type": "Activity",
  "number": "6.3.2",
  "title": "Another Volume.",
  "body": " Another Volume   Now lets consider another region: this time, the one bounded between the curves and . We will, again, create a 3-dimensional solid by revolving this region around the -axis.    Visualize the solid you'll create when you revolve this region around the -axis.    Draw a single rectangle in your region standing perpendicular to the -axis.    Let's use this rectangle to visualize the th slice of this 3-dimensional solid. What does the \"face\" of it look like?    Find the area of the face of the th slice.    Set up and evaluate the integral representing the volume of this solid.   "
},
{
  "id": "def-VolumesShells",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#def-VolumesShells",
  "type": "Definition",
  "number": "6.3.2",
  "title": "Volume by Shells.",
  "body": " Volume by Shells   If and are continuous functions with on the interval (with ), then the volume of the solid formed when the region bounded between the curves and from to is revolved around the -axis is .   "
},
{
  "id": "act-VolumesShells",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#act-VolumesShells",
  "type": "Activity",
  "number": "6.3.3",
  "title": "Volume by Shells.",
  "body": " Volume by Shells   Let's consider the region bounded by the curves and as well as the line . You might remember this region from . This time, we'll create a 3-dimensional solid by revolving the region around the -axis     A graph of the two curves y=x+6 and y=x^3 as well as the line y=0. The region trapped inside is shaded, and the intersection points (-6,0) and (2,8) are labelled.      Sketch one or two rectangles that are perpendicular to the -axis. Then set up an integral expression to find the volume of the solid using them.   Note that in this context, we're actually using disks and washers. Also note that the bottom of the rectangles are bounded by from to and then switches to being bounded by from to .    Now draw a single rectangle in the region that is parallel to the axis of revolution. Use this rectangle to visualize the th slice of this 3-dimensional solid. What does that single rectangle create when it is revolved around the -axis?   This won't create a disk or washer!    Set up and evaluate the integral expression representing the volume of the solid.   "
},
{
  "id": "ex-Volumes-1",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-1",
  "type": "Exercise",
  "number": "6.3.3.1",
  "title": "",
  "body": "We say that the volume of a solid can be thought of as where is a function describing the cross-sectional area of our solid at an -value between and . Explain how this integral formula gets built, referencing the slice-and-sum (Riemann sum) method. "
},
{
  "id": "ex-Volumes-2",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-2",
  "type": "Exercise",
  "number": "6.3.3.2",
  "title": "",
  "body": "Explain the differences and similarities between the disk and washer methods for finding volumes of solids of revolution. "
},
{
  "id": "ex-Volumes-3",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-3",
  "type": "Exercise",
  "number": "6.3.3.3",
  "title": "",
  "body": "When do we integrate with regard to (using a in our integral and writing our functions with -value inputs) and when do we integrate with regard to (using a in our integral and writing our functions with -value inputs) when we're finding volumes using disks and washers? How do we know? "
},
{
  "id": "problem-Washers",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#problem-Washers",
  "type": "Exercise",
  "number": "6.3.3.4",
  "title": "",
  "body": " For each of the solids described below, set up an integral using the disk\/washer method that describes the volume of the solid. It will be helpful to visualize the region, a rectangle on that region, as well as the rectangle revolved around the axis of revolution.   The region bounded by the curve and the lines and , revolved around the -axis.     The region bounded by the curve and the -axis between and , revolved around the -axis.     The region bounded by the curves and between and , revolved around the -axis.     The region bounded by the curves and between and , revolved around the -axis.     The region bounded by the curve , the -axis, and the line , revolved around the -axis.     The region bounded by the curve and the -axis between and , revolved around the -axis.    "
},
{
  "id": "ex-Volumes-5",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-5",
  "type": "Exercise",
  "number": "6.3.3.5",
  "title": "",
  "body": "Explain where the pieces of the shell formula come from. How is this different than using disks\/washers? "
},
{
  "id": "ex-Volumes-6",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-6",
  "type": "Exercise",
  "number": "6.3.3.6",
  "title": "",
  "body": "Say we're revolving a region around the -axis to create a solid. Using the disk\/washer method, we will integrate with respect to . Using the shell method, we integrate with respect to . Explain the difference, and why this difference occurs. "
},
{
  "id": "problem-Shells",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#problem-Shells",
  "type": "Exercise",
  "number": "6.3.3.7",
  "title": "",
  "body": " For each of the solids described below, set up an integral using the shell method that describes the volume of the solid. It will be helpful to visualize the region, a rectangle on that region, as well as the rectangle revolved around the axis of revolution.   The region bounded by the curve and the lines and , revolved around the -axis.     The region bounded by the curve and the -axis between and , revolved around the -axis.     The region bounded by the curves and and the line revolved around the -axis.     The region bounded by the curves and from to , revolved around the -axis.     The region bounded by the curves and revolved around the -axis.     The region bounded by the curves and and the -axis between and , revolved around the -axis.    "
},
{
  "id": "ex-Volumes-8",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-8",
  "type": "Exercise",
  "number": "6.3.3.8",
  "title": "",
  "body": "Pick at least 2 integrals from to re-write using shells instead. What about those regions did you look for to choose which ones to re-write and which ones to not? "
},
{
  "id": "ex-Volumes-9",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-9",
  "type": "Exercise",
  "number": "6.3.3.9",
  "title": "",
  "body": "Pick at least 2 integrals from to re-write using disks\/washers instead. What about those regions did you look for to choose which ones to re-write and which ones to not? "
},
{
  "id": "ex-Volumes-10",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-10",
  "type": "Exercise",
  "number": "6.3.3.10",
  "title": "",
  "body": " For each of the following solids, set up an integral expression using either the disk\/washer method or the shell method. You don't need to evaluate them, but you should do some careful thinking about how you set these up, especially as you choose between methods and what variable you are integrating with.   The region bounded by the curves and in the first quadrant, revolved around the -axis.     The region bounded by the curves and in the first quadrant, revolved around the -axis.     The region bounded by the curves and in the first quadrant, revolved around the -axis.    "
},
{
  "id": "sec-MoreVolumes",
  "level": "1",
  "url": "sec-MoreVolumes.html",
  "type": "Section",
  "number": "6.4",
  "title": "More Volumes: Shifting the Axis of Revolution",
  "body": " More Volumes: Shifting the Axis of Revolution   We have introduced some methods for creating and calculating the volume of different 3 dimensional solids of revolution.    What Changes?  Let's first consider a volume created using disks or washers.   What Changes (in the Washer Method) with a New Axis?   Let's revisit , and ask some more follow-up questions. First, we'll tinker with the solid we created: instead of revolving around the -axis, let's revolve the same solid around the horizontal line .    What changes, if anything, do you have to make to the rectangle you drew in ?    What changes, if anything, do you have to make to the area of the \"face\" th washer?    What changes, if anything, do you have to make to the eventual volume integral for this solid?    Now let's consider a volume created using shells.   What Changes (in the Shell Method) with a New Axis?   Let's revisit , and ask some more follow-up questions about the shell method. Again, we'll tinker with the solid we created: instead of revolving around the -axis, let's revolve the same solid around the horizontal line .    What changes, if anything, do you have to make to the rectangle you drew in ?    What changes, if anything, do you have to make to the area of the rectangle formed by \"unrolling\" up th cylinder?    What changes, if anything, do you have to make to the eventual volume integral for this solid?    In both of these cases, we can notice that the only changes we make are to the radii : we just need to re-measure the distance from axis of revolution to either the ends of the rectangle (in the washer method) or the side of the rectangle (in the shell method).    Formalizing These Changes in the Washers and Shells   More Shifted Axes   We're going to spend some time constructing several different volume integrals in this activity. We'll consider the same region each time, but make changes to the axis of revolution. For each, we'll want to think about what kind of method we're using (disks\/washers or shells) and how the different axis of revolution gets implemented into our volume integral formulas.  Let's consider the region bounded by the curves and between and .    Let's start with revolving this around the -axis and thinking about the solid formed. While you set up your volume integral, think carefully about which method you'll be using (disks\/washers or shells) as well as which variable you are integrating with regard to ( or ).   Note that in this region, we definitely want to use rectangles that stand up vertically. That means that they'll have a very small width, , and sit perpendicular to the axis of revolution.    Now let's create a different solid by revolving this region around the -axis. Set up a volume integral, and continue to think carefully about which method you'll be using (disks\/washers or shells) as well as which variable you are integrating with regard to ( or ).   We still will use the same tall rectangle with a small side length, but this time it will be parallel to our axis of revolution.    We'll start shifting our axis of revolution now. We'll revolve the same region around the horizontal line to create a solid. Set up an integral expression to calculate the volume.   Note that we're still using the same rectangle (perpendicular to this horizontal axis), and so still integrating with regard to , and using the washer method.   Since in the washer method our function outputs represent the radii, we need to re-measure the distance from our curves to the axis of revolution to find each circle's radius in the washer formula. For a -value on each curve, how do we find the vertical distance down to the line ?    Now revolve the region around the line to create a solid of revolution, and write down the integral representing the volume.   Note, now, that the -value of the axis of revolution is larger than all of the -values on the curves, meaning that to measure the distance from the axis of revolution to the curves, we might measure them in the opposite direction. Also, which curve is further away from the axis of revolution, representing the larger\/outer radius?    Let's change things up. Revolve the region around the vertical line to create a new solid. Set up an integral representing the volume of that solid.   Note that the same rectangle that we used before is standing parallel to our axis of revolution. We're going to change methodology, and use the shell method!   Normally we use the input variable ( in this case) to measure the radius from the rectangles at different -value to the axis of revolution, the -axis. Now, though, we're not looking at the distance from -values to . We're looking to find the radius, the distance from -values in this region to .    We'll do one more solid. Let's revolve this region around the line . Set up an integral representing the volume.   Note that this time, the axis of revolution's -value is larger than all of the -values in our region. So when we subtract to measure the radius, we need to subtract from down to the varying -values in the region.      Consider the integral formula for computing volumes of a solid of revolution using the disk\/washer method. What part of this integral formula represents the radius\/radii of any circle(s)? Why is the radius represented using the function output from the curve(s) defining the region?  Consider the integral formula for computing volumes of a solid of revolution using the shell method. What part of this integral formula represents the radius\/radii of any circle(s)? Why is the radius not represented using the function output from the curve(s) defining the region?   For each of the solids described below, set up an integral expression using disks\/washers representing the volume of the solid.   The region bounded by the curve in the first quadrant, revolved around .   The region bounded by the curve in the first quadrant, revolved around .   The region bounded by the curve in the first quadrant, revolved around .   The region bounded by the curve in the first quadrant, revolved around .    For each of the solids described below, set up an integral expression using shells representing the volume of the solid.   The region bounded by the curves and in the first quadrant, revolved around the line .   The region bounded by the curves and in the first quadrant, revolved around the line .   The region bounded by the curves and in the first quadrant, revolved around the line .   The region bounded by the curves and in the first quadrant, revolved around the line .    "
},
{
  "id": "act-VolumesWhatChanges-Washers",
  "level": "2",
  "url": "sec-MoreVolumes.html#act-VolumesWhatChanges-Washers",
  "type": "Activity",
  "number": "6.4.1",
  "title": "What Changes (in the Washer Method) with a New Axis?",
  "body": " What Changes (in the Washer Method) with a New Axis?   Let's revisit , and ask some more follow-up questions. First, we'll tinker with the solid we created: instead of revolving around the -axis, let's revolve the same solid around the horizontal line .    What changes, if anything, do you have to make to the rectangle you drew in ?    What changes, if anything, do you have to make to the area of the \"face\" th washer?    What changes, if anything, do you have to make to the eventual volume integral for this solid?   "
},
{
  "id": "act-VolumesWhatChanges-Shells",
  "level": "2",
  "url": "sec-MoreVolumes.html#act-VolumesWhatChanges-Shells",
  "type": "Activity",
  "number": "6.4.2",
  "title": "What Changes (in the Shell Method) with a New Axis?",
  "body": " What Changes (in the Shell Method) with a New Axis?   Let's revisit , and ask some more follow-up questions about the shell method. Again, we'll tinker with the solid we created: instead of revolving around the -axis, let's revolve the same solid around the horizontal line .    What changes, if anything, do you have to make to the rectangle you drew in ?    What changes, if anything, do you have to make to the area of the rectangle formed by \"unrolling\" up th cylinder?    What changes, if anything, do you have to make to the eventual volume integral for this solid?   "
},
{
  "id": "act-ShiftedAxes",
  "level": "2",
  "url": "sec-MoreVolumes.html#act-ShiftedAxes",
  "type": "Activity",
  "number": "6.4.3",
  "title": "More Shifted Axes.",
  "body": " More Shifted Axes   We're going to spend some time constructing several different volume integrals in this activity. We'll consider the same region each time, but make changes to the axis of revolution. For each, we'll want to think about what kind of method we're using (disks\/washers or shells) and how the different axis of revolution gets implemented into our volume integral formulas.  Let's consider the region bounded by the curves and between and .    Let's start with revolving this around the -axis and thinking about the solid formed. While you set up your volume integral, think carefully about which method you'll be using (disks\/washers or shells) as well as which variable you are integrating with regard to ( or ).   Note that in this region, we definitely want to use rectangles that stand up vertically. That means that they'll have a very small width, , and sit perpendicular to the axis of revolution.    Now let's create a different solid by revolving this region around the -axis. Set up a volume integral, and continue to think carefully about which method you'll be using (disks\/washers or shells) as well as which variable you are integrating with regard to ( or ).   We still will use the same tall rectangle with a small side length, but this time it will be parallel to our axis of revolution.    We'll start shifting our axis of revolution now. We'll revolve the same region around the horizontal line to create a solid. Set up an integral expression to calculate the volume.   Note that we're still using the same rectangle (perpendicular to this horizontal axis), and so still integrating with regard to , and using the washer method.   Since in the washer method our function outputs represent the radii, we need to re-measure the distance from our curves to the axis of revolution to find each circle's radius in the washer formula. For a -value on each curve, how do we find the vertical distance down to the line ?    Now revolve the region around the line to create a solid of revolution, and write down the integral representing the volume.   Note, now, that the -value of the axis of revolution is larger than all of the -values on the curves, meaning that to measure the distance from the axis of revolution to the curves, we might measure them in the opposite direction. Also, which curve is further away from the axis of revolution, representing the larger\/outer radius?    Let's change things up. Revolve the region around the vertical line to create a new solid. Set up an integral representing the volume of that solid.   Note that the same rectangle that we used before is standing parallel to our axis of revolution. We're going to change methodology, and use the shell method!   Normally we use the input variable ( in this case) to measure the radius from the rectangles at different -value to the axis of revolution, the -axis. Now, though, we're not looking at the distance from -values to . We're looking to find the radius, the distance from -values in this region to .    We'll do one more solid. Let's revolve this region around the line . Set up an integral representing the volume.   Note that this time, the axis of revolution's -value is larger than all of the -values in our region. So when we subtract to measure the radius, we need to subtract from down to the varying -values in the region.   "
},
{
  "id": "ex-MoreVolumes-1",
  "level": "2",
  "url": "sec-MoreVolumes.html#ex-MoreVolumes-1",
  "type": "Exercise",
  "number": "6.4.3.1",
  "title": "",
  "body": "Consider the integral formula for computing volumes of a solid of revolution using the disk\/washer method. What part of this integral formula represents the radius\/radii of any circle(s)? Why is the radius represented using the function output from the curve(s) defining the region? "
},
{
  "id": "ex-MoreVolumes-2",
  "level": "2",
  "url": "sec-MoreVolumes.html#ex-MoreVolumes-2",
  "type": "Exercise",
  "number": "6.4.3.2",
  "title": "",
  "body": "Consider the integral formula for computing volumes of a solid of revolution using the shell method. What part of this integral formula represents the radius\/radii of any circle(s)? Why is the radius not represented using the function output from the curve(s) defining the region? "
},
{
  "id": "ex-MoreVolumes-3",
  "level": "2",
  "url": "sec-MoreVolumes.html#ex-MoreVolumes-3",
  "type": "Exercise",
  "number": "6.4.3.3",
  "title": "",
  "body": " For each of the solids described below, set up an integral expression using disks\/washers representing the volume of the solid.   The region bounded by the curve in the first quadrant, revolved around .   The region bounded by the curve in the first quadrant, revolved around .   The region bounded by the curve in the first quadrant, revolved around .   The region bounded by the curve in the first quadrant, revolved around .  "
},
{
  "id": "ex-MoreVolumes-4",
  "level": "2",
  "url": "sec-MoreVolumes.html#ex-MoreVolumes-4",
  "type": "Exercise",
  "number": "6.4.3.4",
  "title": "",
  "body": " For each of the solids described below, set up an integral expression using shells representing the volume of the solid.   The region bounded by the curves and in the first quadrant, revolved around the line .   The region bounded by the curves and in the first quadrant, revolved around the line .   The region bounded by the curves and in the first quadrant, revolved around the line .   The region bounded by the curves and in the first quadrant, revolved around the line .  "
},
{
  "id": "sec-ArcLengthSurfaceArea",
  "level": "1",
  "url": "sec-ArcLengthSurfaceArea.html",
  "type": "Section",
  "number": "6.5",
  "title": "Arc Length and Surface Area",
  "body": " Arc Length and Surface Area  Text of section.  "
},
{
  "id": "sec-OtherApplications",
  "level": "1",
  "url": "sec-OtherApplications.html",
  "type": "Section",
  "number": "6.6",
  "title": "Other Applications of Integrals",
  "body": " Other Applications of Integrals  Text of section.  "
},
{
  "id": "sec-ImproperIntegrals",
  "level": "1",
  "url": "sec-ImproperIntegrals.html",
  "type": "Section",
  "number": "7.1",
  "title": "Improper Integrals",
  "body": " Improper Integrals   Remembering a Theme so Far   Let's say that we want to find what the -values of some function are when the -values are \"infinitely close to\" some value, . Since there is no single -value that is \"infinitely close to\" that we can evaluate at, we need to do something else. How do we do this?    Let's say that we want to find the rate of change of some function instantaneously at a point with . We can't find a rate of change unless we have two points, since we need to find some differences in the outputs and inputs. How do we do this?    Suppose you want to find the total area, covered by an infinite number of infinitely thin rectangles. You have a formula for finding the dimensions and areas for some finite number of rectangles, but how do we get an infinite number of them?    Can you find the common calculus theme in each of these scenarios?     Remembering the Fundamental Theorem of Calculus   We want to think about generalizing our notion of integrals a bit. So in this activity, section, we're going to think about some of the requirements for the Fundamental Theorem of Calculus and try to loosen them up a bit to see what happens. We'll try to construct meaningful approaches to these situations that fit our overall goals of calculating area under a curve.  This practice, in general, is a really good and common mathematical process: taking some result and playing with the requirements or assumptions to see what else can happen. So it might feel like we're just fiddling with the \"What if?\" questions, but what we're actually doing is good mathematics!    What does the Fundamental Theorem of Calculus say about evaluating the definite integral ?    What do we need to be true about our setup, our function, etc. for us to be able to apply this technique to evaluate ?    We are going to introduce the idea of \"Improper Integrals\" as kind-of-but-not-quite definite integrals that we can evaluate. They are going to violate the requirements for the Fundamental Theorem of Calculus, but we'll work to salvage them in meaningful ways.     Improper Integral   An integral is an improper integral if it is an extension of a definite integral whose integrand or limits of integration violate a requirement in one of two ways:   The interval that we integrate the function over is unbounded in width, or infinitely wide.    The integrand is unbounded in height, or infinitely tall, somewhere on the interval that we integrate over.        Evaluating Improper Integrals (Infinite Width)  For a function that is continuous on , we can evaluate the improper integral : .  If is continuous on , we can evaluate the improper integral : .  Finally, if is continuous on and is some real number, then we can evaluate the improper integral : .    Evaluating Improper Integrals (Infinite Height)  For a function that has an unbounded discontinuity (a vertical asymptote) at     Convergence of an Improper Integral   We say that an improper integral converges if the limit of the appropriate definite integral exists. If the limit does not exist, then we say that the improper integral diverges .     Explain what it means for an integral to be improper. What kinds of issues are we looking at?  Give an example of an integral that is improper due to an unbounded or infinite interval of integration (infinite width).  Give an example of an integral that is improper due to an unbounded integrand (infinite height).  What does it mean for an improper integral to ``converge?'' How does this connect with limits?  What does it mean for an improper integral to ``diverge?'' How does this connect with limits?  Why do we need to use limits to evaluate improper integrals?   For each of the following improper integrals:   Explain why the integral is improper. Be specific, and point out the issues in detail.    Set up the integral using the correct limit notation.    Antidifferentiate and evaluate the limit.    Explain whether the integral converges or diverges.                              One of the big ideas in probability is that for a curve that defines a probability density function, the area under the curve needs to be 1. What value of makes the function a valid probability distribution on the interval ?   Let's consider the integral . This is a difficult integral to evaluate!   First, compare to using an inequality: which one is bigger?   Second, use this inequality to compare the function to for : which one is bigger? Again, use your inequality from above to help!   Now compare to . Which one is bigger?   Explain how we can use this result to make a conclusion about whether our integral, converges or diverges.    "
},
{
  "id": "act-RememberingTheme",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#act-RememberingTheme",
  "type": "Activity",
  "number": "7.1.1",
  "title": "Remembering a Theme so Far.",
  "body": " Remembering a Theme so Far   Let's say that we want to find what the -values of some function are when the -values are \"infinitely close to\" some value, . Since there is no single -value that is \"infinitely close to\" that we can evaluate at, we need to do something else. How do we do this?    Let's say that we want to find the rate of change of some function instantaneously at a point with . We can't find a rate of change unless we have two points, since we need to find some differences in the outputs and inputs. How do we do this?    Suppose you want to find the total area, covered by an infinite number of infinitely thin rectangles. You have a formula for finding the dimensions and areas for some finite number of rectangles, but how do we get an infinite number of them?    Can you find the common calculus theme in each of these scenarios?   "
},
{
  "id": "act-RememberingFTOC",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#act-RememberingFTOC",
  "type": "Activity",
  "number": "7.1.2",
  "title": "Remembering the Fundamental Theorem of Calculus.",
  "body": " Remembering the Fundamental Theorem of Calculus   We want to think about generalizing our notion of integrals a bit. So in this activity, section, we're going to think about some of the requirements for the Fundamental Theorem of Calculus and try to loosen them up a bit to see what happens. We'll try to construct meaningful approaches to these situations that fit our overall goals of calculating area under a curve.  This practice, in general, is a really good and common mathematical process: taking some result and playing with the requirements or assumptions to see what else can happen. So it might feel like we're just fiddling with the \"What if?\" questions, but what we're actually doing is good mathematics!    What does the Fundamental Theorem of Calculus say about evaluating the definite integral ?    What do we need to be true about our setup, our function, etc. for us to be able to apply this technique to evaluate ?    We are going to introduce the idea of \"Improper Integrals\" as kind-of-but-not-quite definite integrals that we can evaluate. They are going to violate the requirements for the Fundamental Theorem of Calculus, but we'll work to salvage them in meaningful ways.   "
},
{
  "id": "def-ImproperIntegral",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#def-ImproperIntegral",
  "type": "Definition",
  "number": "7.1.1",
  "title": "Improper Integral.",
  "body": " Improper Integral   An integral is an improper integral if it is an extension of a definite integral whose integrand or limits of integration violate a requirement in one of two ways:   The interval that we integrate the function over is unbounded in width, or infinitely wide.    The integrand is unbounded in height, or infinitely tall, somewhere on the interval that we integrate over.      "
},
{
  "id": "def-ConvergenceImproperIntegral",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#def-ConvergenceImproperIntegral",
  "type": "Definition",
  "number": "7.1.2",
  "title": "Convergence of an Improper Integral.",
  "body": " Convergence of an Improper Integral   We say that an improper integral converges if the limit of the appropriate definite integral exists. If the limit does not exist, then we say that the improper integral diverges .   "
},
{
  "id": "ex-ImproperIntegrals-1",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-1",
  "type": "Exercise",
  "number": "7.1.1",
  "title": "",
  "body": "Explain what it means for an integral to be improper. What kinds of issues are we looking at? "
},
{
  "id": "ex-ImproperIntegrals-2",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-2",
  "type": "Exercise",
  "number": "7.1.2",
  "title": "",
  "body": "Give an example of an integral that is improper due to an unbounded or infinite interval of integration (infinite width). "
},
{
  "id": "ex-ImproperIntegrals-3",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-3",
  "type": "Exercise",
  "number": "7.1.3",
  "title": "",
  "body": "Give an example of an integral that is improper due to an unbounded integrand (infinite height). "
},
{
  "id": "ex-ImproperIntegrals-4",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-4",
  "type": "Exercise",
  "number": "7.1.4",
  "title": "",
  "body": "What does it mean for an improper integral to ``converge?'' How does this connect with limits? "
},
{
  "id": "ex-ImproperIntegrals-5",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-5",
  "type": "Exercise",
  "number": "7.1.5",
  "title": "",
  "body": "What does it mean for an improper integral to ``diverge?'' How does this connect with limits? "
},
{
  "id": "ex-ImproperIntegrals-6",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-6",
  "type": "Exercise",
  "number": "7.1.6",
  "title": "",
  "body": "Why do we need to use limits to evaluate improper integrals? "
},
{
  "id": "ex-ImproperIntegrals-7",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-7",
  "type": "Exercise",
  "number": "7.1.7",
  "title": "",
  "body": " For each of the following improper integrals:   Explain why the integral is improper. Be specific, and point out the issues in detail.    Set up the integral using the correct limit notation.    Antidifferentiate and evaluate the limit.    Explain whether the integral converges or diverges.                             "
},
{
  "id": "ex-ImproperIntegrals-8",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-8",
  "type": "Exercise",
  "number": "7.1.8",
  "title": "",
  "body": "One of the big ideas in probability is that for a curve that defines a probability density function, the area under the curve needs to be 1. What value of makes the function a valid probability distribution on the interval ? "
},
{
  "id": "ex-ImproperIntegrals-9",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-9",
  "type": "Exercise",
  "number": "7.1.9",
  "title": "",
  "body": " Let's consider the integral . This is a difficult integral to evaluate!   First, compare to using an inequality: which one is bigger?   Second, use this inequality to compare the function to for : which one is bigger? Again, use your inequality from above to help!   Now compare to . Which one is bigger?   Explain how we can use this result to make a conclusion about whether our integral, converges or diverges.  "
},
{
  "id": "sec-MoreuSubstitution",
  "level": "1",
  "url": "sec-MoreuSubstitution.html",
  "type": "Section",
  "number": "7.2",
  "title": "More on <span class=\"process-math\">\\(u\\)<\/span>-Substitution",
  "body": " More on -Substitution       Variable Substitution in Integrals     "
},
{
  "id": "sec-AlgebraicManipulations",
  "level": "1",
  "url": "sec-AlgebraicManipulations.html",
  "type": "Section",
  "number": "7.3",
  "title": "Manipulating Integrands to Reveal Substitution",
  "body": " Manipulating Integrands to Reveal Substitution   We've looked at how to use a variable substitution to antidifferentiate composite functions. We've already seen, though, that sometimes identifying and actually using a helpful substitution can be difficult to do. In this section, we want to introduce some different strategies for noticing and setting up useful substitutions in some specific instances.    Rewriting the Integrand   A Negative Exponent   Let's think about this integral: .    Is there any composition in this integral? Pick it out, and either explain or show that using this to guide your substitution will not be helpful.   Notice that is composed inside of the exponential function. Try a substitution with .    What does mean? What does mean?    Re-write the integral, specifically focusing on the negative exponent. You should find that the function looks worse! How can you clean that up?   Re-write as , giving you: .   Either add the fractions in the denominator or multiply the whole fraction by .   You should have an integral that looks like: .    Why is this new integral set up so much better for the purpose of -substitution? How could we tell this just by looking at the initial integral?          Try to re-write this integral as .          Antidifferentiating Rational Functions  Strategies for antidifferentiating rational functions are just that: strategies. There aren't really easy ways to antidifferentiate these, but we'll find some common tactics to apply and try to build our intuition for noticing the different kinds of structure we can have in these rational functions. All of these strategies are based around cleverly re-writing our rational functions (using some algebraic manipulations) to reveal some structure. We'll try to notice the structure, so that we know what we're trying to reveal.   Integrating Rational Functions        Use polynomial division or some clever factoring to re-write and find the following indefinite integrals or evaluate the following definite integrals.                        Complete the square in order to find the following indefinite integrals.                Find the following indefinite integrals.                            "
},
{
  "id": "act-NegativeExponent",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#act-NegativeExponent",
  "type": "Activity",
  "number": "7.3.1",
  "title": "A Negative Exponent.",
  "body": " A Negative Exponent   Let's think about this integral: .    Is there any composition in this integral? Pick it out, and either explain or show that using this to guide your substitution will not be helpful.   Notice that is composed inside of the exponential function. Try a substitution with .    What does mean? What does mean?    Re-write the integral, specifically focusing on the negative exponent. You should find that the function looks worse! How can you clean that up?   Re-write as , giving you: .   Either add the fractions in the denominator or multiply the whole fraction by .   You should have an integral that looks like: .    Why is this new integral set up so much better for the purpose of -substitution? How could we tell this just by looking at the initial integral?   "
},
{
  "id": "subsec-Rewriting-3",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#subsec-Rewriting-3",
  "type": "Example",
  "number": "7.3.1",
  "title": "",
  "body": "      Try to re-write this integral as .       "
},
{
  "id": "ex-AlgebraicManipulations-1",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#ex-AlgebraicManipulations-1",
  "type": "Exercise",
  "number": "7.3.3.1",
  "title": "",
  "body": " Use polynomial division or some clever factoring to re-write and find the following indefinite integrals or evaluate the following definite integrals.                      "
},
{
  "id": "problem-CompleteTheSquare",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#problem-CompleteTheSquare",
  "type": "Exercise",
  "number": "7.3.3.2",
  "title": "",
  "body": " Complete the square in order to find the following indefinite integrals.              "
},
{
  "id": "ex-AlgebraicManipulations-3",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#ex-AlgebraicManipulations-3",
  "type": "Exercise",
  "number": "7.3.3.3",
  "title": "",
  "body": " Find the following indefinite integrals.                          "
},
{
  "id": "sec-IntegrationByParts",
  "level": "1",
  "url": "sec-IntegrationByParts.html",
  "type": "Section",
  "number": "7.4",
  "title": "Integration By Parts",
  "body": " Integration By Parts   We've seen now that is a useful technique for undo-ing . We set up the variable substitution with the specific goal of going backwards through the Chain Rule and antidifferentiating some composition of functions.  A reasonable next step is to ask: What other derivative rules can we \"undo?\" What other operations between functions should we think about? This brings us to Integration by Parts, the integration technique specifically for undo-ing .    Discovering the Integration by Parts Formula   Discovering the Integration by Parts Formula   The product rule for derivatives says that: . We know that we intend to \"undo\" the product rule, so let's try to re-frame the product rule from a rule about derivatives to a rule about antiderivatives.    Antidifferentiate the product rule by antidifferentiating each side of the equation.    Note that on the left side of this equation you're antidifferentiating a derivative. What will that give you? Then, on the right side, we're just splitting up the terms of the product rule into two different integrals.    On the right side, we have two integrals. Since each of them has a product of functions (one function and a derivative of another), we can isolate one of them in this equation and create a formula for how to antidifferentiate a product of functions! Solve for .    Look back at this formula for . Explain how this is really the product rule for derivatives (without just undo-ing all of the steps we have just done).    What made it so useful to pick instead of in this case? Since we know that we are going to get another integral, one that specifically has the new derivative and new antiderivative that we find from the parts we picked, we noticed that differentiating the function was much nicer than antidifferentiating it: we get a constant that we multiply by the trig function in this new integral, instead of a power function with an even bigger exponent. We can also notice that when it comes to the trig function, it doesn't really matter if we differentiate it or antidifferentiate it. In both cases, we get a in our new integral, with the only difference being whether it is positive or negative.    We typically use the substitutions and to re-write the integrals.   Integration by Parts  Suppose and are both differentiable functions. Then: .   When we select the parts for our integral, we are selecting a function to be labeled and a function to be labeled as . We begin with one of the pieces of the product rule, a function multiplied by some other function's derivative. It is important to recognize that we do different things to these functions: for one of them, , we need to find the derivative, . For the other, , we need to find an antiderivative, . Because of these differences, it is important to build some good intuition for how to select the parts.    Intuition for Selecting the Parts   Picking the Parts for Integration by Parts   Let's consider the integral: . We'll investigate how to set up the integration by parts formula with the different choices for the parts.    We'll start with selecting and . Fill in the following with the rest of the pieces:     Now set up the integration by parts formula using your labeled pieces. Notice that the integration by parts formula gives us another integral. Don't worry about antidifferentiating this yet, let's just set the pieces up.        Let's swap the pieces and try the setup with and . Fill in the following with the rest of the pieces:     Now set up the integration by parts formula using this setup.        Compare the two results we have. Which setup do you think will be easier to move forward with? Why?   When we say we need to keep moving forward with our setup, what we mean is that we have another integral to antidifferentiate. Which one will be easier to work with: or ?    Finalize your work with the setup you have chosen to find .    What made things so much better when we chose compared to ? We know that the new integral from our integration by parts formula will be built from the new pieces, the derivative we find from and the antiderivative we pick from . So when we differentiate , we get a constant, compared to antidifferentiating and getting another power function, but with a larger exponent. We know this will be combined with a function no matter what (since the derivative and antiderivatives of will only differ in their sign). So picking the version that gets that second integral to be built from a trig function and a constant is going to be much nicer than a trig function and a power function. It was nice to pick to be the piece that we found the derivative of!    Let's practice this comparison with another example in order to build our intuition for picking the parts in our integration by parts formula.   Picking the Parts for Integration by Parts   This time we'll look at a very similar integral: . Again, we'll set this up two different ways and compsare them.    We'll start with selecting and . Fill in the following with the rest of the pieces:    You're not forgetting how to antidifferentiate . This is just something we don't know yet!    Ok, so here we have to swap the pieces and try the setup with and , since we only know how to differentiate . Fill in the following with the rest of the pieces:     Now set up the integration by parts formula using this setup.        Why was it fine for us to antidifferentiate in this example, but not in ?    Finish this work to find .   Notice that .    So here, we didn't actually get much choice. We couldn't pick in order to differentiate it (and get a constant to multiply into our second integral) since we don't know how to antidifferentiate (yet: once we know how, it might be fun to come back to this problem and try it again with the parts flipped). But we can also notice that it ended up being fine to antidifferentiate : the increased power from our power rule didn't really matter much when we combined it with the derivative of the logarithm, since the derivative of the log is also a power function ! So we were able to combine those easily and actually integrate that second integral.     It is common for students to want to place functions into sort of hierarchy or classification guidelines for choosing the parts. Some students have found that the acronym LIPET (logs, inverse trig, power functions, exponentials, and trig functions) can be a useful tool for selecting the parts. When you have two different types of functions, it might help to select to be whichever function shows up first in that list.     Integrate the following:        It doesn't matter whether we differentiate or antidifferentiate , since we'll get the same thing. Let's pick so that we can differentiate it.     We need to do more integration by parts!          We don't know how to antidifferentiate , but we do know how to differentiate it!           Some Flexible Choices for Parts  We're going to look at a couple of examples where we can showcase some of the flexibility we have with our choices of parts. First, we'll revisit .In this example, when we got to that second integral, we noticed that for the fraction , we could either do some long division (since the degrees in the numerator and denominator are the same) or do some clever re-writing of the numerator. Either way, we know that this fraction is almost 1...It's really some bit (in this case, the extra bit was a fraction ).  What if we chose our parts differently? Not the and parts, though, since we still haven't figured out how to antidifferentiate . But we get one more choice!  Once we choose , we don't really get a separate choice for : it's simply the derivative of with regard to multiplied by the differential . But consider our choice of , and the subsequent process of finding . Yes, there's only one possible answer, but in a much more real sense, there isn't just one possible answer. There are an infinite number of them! We know, due to the and then later due to , that there are an infinite number of antiderivatives, all differing by at most a constant term. So let's pick a more appropriate antiderivative!    Integrate , this time making a more intentional choice for .    Note that if we pick , then the second integral will be just delightful.          So we get the same thing, but didn't have to think through the long division or the forced factoring. But the trade off here is that we almost have to see this coming to notice it. This flexibility doesn't always come into play for us. But we can look at a different kind of flexibility.  We've looked at integrals with both and . For these, and for other inverse functions specifically, we pick them to be the part in our integration by parts problems because we don't know how do antidifferentiate them.  So let's look at , and we'll solve this integral by, specifically, differentiating instead of antidifferentiating it.   Antidifferentiating the Log Function   Integrate .    Pick , since we can differentiate it. What does that leave for ?          We can use this same strategy to find antiderivatives of , , and eventually .   For , we'll need to use this same tactic of setting and , but then later on we'll need to use a technique called to finish the problem.   Now that we know the antiderivative family for , we can revisit the problem in , , and try to work through the integration by parts when and .    Integrate .      Note that this last integral is really recognizable: it's the one we started with! Let's \"solve\" this equation for that integral by adding it to both sides of our equation.       Solving for the Integral  In this last example, we ended up seeing the original integral repeated when we did integration by parts. This is a useful technique, especially when we deal with functions that have a kind of \"repeating\" structure to their derivatives or antiderivatives. We'll look at a couple of classic integrals where we see this kind of technique employed.    For each of the following integrals, use integration by parts to solve.        This one is pretty straight forward, since it doesn't really matter what we select as our parts. Notice, though, that this isn't the only way we can approach this! We can use -substitution, or even re-write this using a trigonometric identity.                     Notice that we can come up with a bunch of different examples that are similar to . If we put trigonometric functions inside our integral, we'll have some options with how we approach them! We can use -substitution, since the derivatives of trigonometric functions are other trigonometric functions. In , for instance, we could write and , or even chose and .  The real issues will come when our integrand is not just a product of two trigonometric functions, but when they are products of trigonometric functions raised to exponents. We'll have some combinations of these products (which maybe makes us think about integration by parts) and composition (which points towards -substitution). In the next section, we'll develop some strategies to deal with these kinds of integrals.    Explain how we build the Integration by Parts formula, as well as what the purpose of this integration strategy is.  How do you choose options for and ? What are some good strategies to think about?  Let's say that you make a choice for and and begin working through the Integration by Parts strategy. How can you tell if you've made a poor choice for your parts? Can you always tell?   Integrate the following.                                            Evaluate the following definite integrals.                In this problem, we'll consider the integral . We'll integrate this in two different ways!   We know that: . Use the Integration by Parts strategy, and especially note that you can solve for the integral ( ).   We can use a trigonometric identity to re-write the integral: . So we have: . Use -substitution.   Were your answers the same or different? Should they be the same? Why or why not? Are they connected somehow?   They might be different, but they should only be different by at most a constant.    For these next problems, we'll use and to substitute into the integral as written. Then use Integration by Parts.            "
},
{
  "id": "act-IntegrationByParts",
  "level": "2",
  "url": "sec-IntegrationByParts.html#act-IntegrationByParts",
  "type": "Activity",
  "number": "7.4.1",
  "title": "Discovering the Integration by Parts Formula.",
  "body": " Discovering the Integration by Parts Formula   The product rule for derivatives says that: . We know that we intend to \"undo\" the product rule, so let's try to re-frame the product rule from a rule about derivatives to a rule about antiderivatives.    Antidifferentiate the product rule by antidifferentiating each side of the equation.    Note that on the left side of this equation you're antidifferentiating a derivative. What will that give you? Then, on the right side, we're just splitting up the terms of the product rule into two different integrals.    On the right side, we have two integrals. Since each of them has a product of functions (one function and a derivative of another), we can isolate one of them in this equation and create a formula for how to antidifferentiate a product of functions! Solve for .    Look back at this formula for . Explain how this is really the product rule for derivatives (without just undo-ing all of the steps we have just done).    What made it so useful to pick instead of in this case? Since we know that we are going to get another integral, one that specifically has the new derivative and new antiderivative that we find from the parts we picked, we noticed that differentiating the function was much nicer than antidifferentiating it: we get a constant that we multiply by the trig function in this new integral, instead of a power function with an even bigger exponent. We can also notice that when it comes to the trig function, it doesn't really matter if we differentiate it or antidifferentiate it. In both cases, we get a in our new integral, with the only difference being whether it is positive or negative.   "
},
{
  "id": "act-PickingParts-1",
  "level": "2",
  "url": "sec-IntegrationByParts.html#act-PickingParts-1",
  "type": "Activity",
  "number": "7.4.2",
  "title": "Picking the Parts for Integration by Parts.",
  "body": " Picking the Parts for Integration by Parts   Let's consider the integral: . We'll investigate how to set up the integration by parts formula with the different choices for the parts.    We'll start with selecting and . Fill in the following with the rest of the pieces:     Now set up the integration by parts formula using your labeled pieces. Notice that the integration by parts formula gives us another integral. Don't worry about antidifferentiating this yet, let's just set the pieces up.        Let's swap the pieces and try the setup with and . Fill in the following with the rest of the pieces:     Now set up the integration by parts formula using this setup.        Compare the two results we have. Which setup do you think will be easier to move forward with? Why?   When we say we need to keep moving forward with our setup, what we mean is that we have another integral to antidifferentiate. Which one will be easier to work with: or ?    Finalize your work with the setup you have chosen to find .    What made things so much better when we chose compared to ? We know that the new integral from our integration by parts formula will be built from the new pieces, the derivative we find from and the antiderivative we pick from . So when we differentiate , we get a constant, compared to antidifferentiating and getting another power function, but with a larger exponent. We know this will be combined with a function no matter what (since the derivative and antiderivatives of will only differ in their sign). So picking the version that gets that second integral to be built from a trig function and a constant is going to be much nicer than a trig function and a power function. It was nice to pick to be the piece that we found the derivative of!   "
},
{
  "id": "act-PickingParts-2",
  "level": "2",
  "url": "sec-IntegrationByParts.html#act-PickingParts-2",
  "type": "Activity",
  "number": "7.4.3",
  "title": "Picking the Parts for Integration by Parts.",
  "body": " Picking the Parts for Integration by Parts   This time we'll look at a very similar integral: . Again, we'll set this up two different ways and compsare them.    We'll start with selecting and . Fill in the following with the rest of the pieces:    You're not forgetting how to antidifferentiate . This is just something we don't know yet!    Ok, so here we have to swap the pieces and try the setup with and , since we only know how to differentiate . Fill in the following with the rest of the pieces:     Now set up the integration by parts formula using this setup.        Why was it fine for us to antidifferentiate in this example, but not in ?    Finish this work to find .   Notice that .    So here, we didn't actually get much choice. We couldn't pick in order to differentiate it (and get a constant to multiply into our second integral) since we don't know how to antidifferentiate (yet: once we know how, it might be fun to come back to this problem and try it again with the parts flipped). But we can also notice that it ended up being fine to antidifferentiate : the increased power from our power rule didn't really matter much when we combined it with the derivative of the logarithm, since the derivative of the log is also a power function ! So we were able to combine those easily and actually integrate that second integral.   "
},
{
  "id": "subsec-PickingParts-6",
  "level": "2",
  "url": "sec-IntegrationByParts.html#subsec-PickingParts-6",
  "type": "Example",
  "number": "7.4.1",
  "title": "",
  "body": "  Integrate the following:        It doesn't matter whether we differentiate or antidifferentiate , since we'll get the same thing. Let's pick so that we can differentiate it.     We need to do more integration by parts!          We don't know how to antidifferentiate , but we do know how to differentiate it!        "
},
{
  "id": "subsec-FlexibleChoices-5",
  "level": "2",
  "url": "sec-IntegrationByParts.html#subsec-FlexibleChoices-5",
  "type": "Example",
  "number": "7.4.2",
  "title": "",
  "body": "  Integrate , this time making a more intentional choice for .    Note that if we pick , then the second integral will be just delightful.         "
},
{
  "id": "subsec-FlexibleChoices-9",
  "level": "2",
  "url": "sec-IntegrationByParts.html#subsec-FlexibleChoices-9",
  "type": "Example",
  "number": "7.4.3",
  "title": "Antidifferentiating the Log Function.",
  "body": " Antidifferentiating the Log Function   Integrate .    Pick , since we can differentiate it. What does that leave for ?         "
},
{
  "id": "subsec-FlexibleChoices-13",
  "level": "2",
  "url": "sec-IntegrationByParts.html#subsec-FlexibleChoices-13",
  "type": "Example",
  "number": "7.4.4",
  "title": "",
  "body": "  Integrate .      Note that this last integral is really recognizable: it's the one we started with! Let's \"solve\" this equation for that integral by adding it to both sides of our equation.    "
},
{
  "id": "subsec-SolvingForIntegral-3",
  "level": "2",
  "url": "sec-IntegrationByParts.html#subsec-SolvingForIntegral-3",
  "type": "Example",
  "number": "7.4.5",
  "title": "",
  "body": "  For each of the following integrals, use integration by parts to solve.        This one is pretty straight forward, since it doesn't really matter what we select as our parts. Notice, though, that this isn't the only way we can approach this! We can use -substitution, or even re-write this using a trigonometric identity.                    "
},
{
  "id": "ex-ByParts-1",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-1",
  "type": "Exercise",
  "number": "7.4.5.1",
  "title": "",
  "body": "Explain how we build the Integration by Parts formula, as well as what the purpose of this integration strategy is. "
},
{
  "id": "ex-ByParts-2",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-2",
  "type": "Exercise",
  "number": "7.4.5.2",
  "title": "",
  "body": "How do you choose options for and ? What are some good strategies to think about? "
},
{
  "id": "ex-ByParts-3",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-3",
  "type": "Exercise",
  "number": "7.4.5.3",
  "title": "",
  "body": "Let's say that you make a choice for and and begin working through the Integration by Parts strategy. How can you tell if you've made a poor choice for your parts? Can you always tell? "
},
{
  "id": "ex-ByParts-4",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-4",
  "type": "Exercise",
  "number": "7.4.5.4",
  "title": "",
  "body": " Integrate the following.                                          "
},
{
  "id": "ex-ByParts-5",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-5",
  "type": "Exercise",
  "number": "7.4.5.5",
  "title": "",
  "body": " Evaluate the following definite integrals.              "
},
{
  "id": "ex-ByParts-6",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-6",
  "type": "Exercise",
  "number": "7.4.5.6",
  "title": "",
  "body": " In this problem, we'll consider the integral . We'll integrate this in two different ways!   We know that: . Use the Integration by Parts strategy, and especially note that you can solve for the integral ( ).   We can use a trigonometric identity to re-write the integral: . So we have: . Use -substitution.   Were your answers the same or different? Should they be the same? Why or why not? Are they connected somehow?   They might be different, but they should only be different by at most a constant.  "
},
{
  "id": "ex-ByParts-7",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-7",
  "type": "Exercise",
  "number": "7.4.5.7",
  "title": "",
  "body": " For these next problems, we'll use and to substitute into the integral as written. Then use Integration by Parts.          "
},
{
  "id": "sec-PowersOfTrig",
  "level": "1",
  "url": "sec-PowersOfTrig.html",
  "type": "Section",
  "number": "7.5",
  "title": "Integrating Powers of Trigonometric Functions",
  "body": " Integrating Powers of Trigonometric Functions   Let's remind ourselves of two example problems that we've done in the past.  In , we performed a -substitution, but needed to work to re-write our whole integrand in terms of . Specifically, we found that in the numerator, there was an , but . We were substituting out a linear function of in the numerator, but the actual function was cubic. This wasn't a problem: we re-wrote , and noticed that the extra was able to be substituted, since we could re-write out subsitution rule: we noted that is equivalent to . This meant that even though we had an extra factor of \"in\" the part that we were using for substituting in the differential , we were still able to translate the whole function to be written in terms of .  Then, more recently, in , we noted that we could use a mix of methods to integrate this:  One on hand, we can look at the structure of the integrand and notice that we have a product of two functions! Integration by parts was a fine strategy to employ, and that's what we did in the example. On the other hand, we noticed that since we have this function-derivative pairing, a -substitution was also appropriate.  In this section, we'll explore more combinations of trigonometric functions and build a strategy for antidifferentiating them that includes some ideas from both of these previous examples.    Building a Strategy for Powers of Sines and Cosines   Compare and Contrast   Let's do a quick comparison of two integrals, keeping the above examples in mind. Consider these two integrals:     Consider the first integral, . Think about and set up a good technique for antidifferentiating. Without actually solving the integral, explain why this technique will work.   It might be helpful to notice that can be re-written as . Does this help reveal something important about the structure of this integrand?    Now consider the second integral, . Does the same integration strategy work here? What happens when you apply the same thing?   Let again, and . What happens with the cosine functions? How many are \"left\" after applying our substitution?    We know that and are related to each other through derivatives (each is the derivative of the other, up to a negative). Is there some other connection that we have between these functions? We might especially notice that we have a left over in our integral. Can we write this in terms of , so that we can write it in terms of ?   We have a trigonometric identity (the Pythagorean Identity): .    Why would this strategy not have worked if we were looking at the integrals or ? What, specifically, did we need in order to use this combination of substitution and trigonometric identity to solve the integral?     Integrating Powers of Sine and Cosine  For integrals in the form where and are real number exponents:   If , the exponent on is odd, we should use and . Then we can apply the Pythagorean Identity .    If , the exponent on is odd, we should use and . Then we can apply the Pythagorean Identity .    If both and are even, we can either use or use the following power-reducing trigonometric identities:       A strange note, here, is that we typically pick our -substitution based on looking to see a suitable candidate for : we look for functions that are composed \"inside\" of other functions or we look for a function whose derivative is in the integral (the \"function-derivative pair\" that we talk about in ). Here, though, we're selecting our substitution based on : we're looking to see which function we can set aside one copy of for the differential, and then have an even power left over so that we can apply the Pythagorean Identity to translate the rest.    Building a Strategy for Powers of Secants and Tangents   Compare and Contrast (Again)   We're going to do another Compare and Contrast, but this time we're only going to consider one integral: . We're going to employ another strategy, similar to the one for .    Before you start thinking about this integral, let's build the relevant version of the Pythagorean Identity that we'll use. Our standard version of this is: . Since we want a version that connects , which is also written as , with , or , let's divide everything in the Pythagorean Identity by :         Now start with the integral. We're going to use two different processes here, two different -substitutions. First, set . Complete the substitution and solve the integral.   Here, . We'll also use .        Now try the integral again, this time using as your substitution.   Now , and we'll use the same Pythagorean identity, just re-written as .        For each of these integrals, why were the exponents set up just right for -substitution each time? How does the structure of the derivatives of each function play into this?   Notice we had an even exponent on the function, but an odd exponent on the function.    Which substitution would be best for the integral . Why?    Which substitution would be best for the integral . Why?     Integrating Powers of Secant and Tangent  For integrals in the form where and are real number exponents:   If , the exponent on , is odd, we can use and . Then we can apply the Pythagorean Identity .    If , the exponent on , is even, we can use and . Then we can apply the Pythagorean Identity .    If is odd and is even, we can use .        For an integral , how do you know whether to use or as the substitution?  For an integral , how do you know whether to use or as the substitution?   Integrate the following.                            Integrate the following.                    Consider the integral .   Use the trigonometric identity: to integrate.   Use integration by parts to integrate.   Check out    Which of these techniques do you think was easier to implement and use? Why is that?    Consider the integral .   Use the trigonometric identity: to integrate.   Use integration by parts to integrate.   Try picking and .   Which of these techniques did you prefer? Why?    Integrate the following integrals.       Use a Pythagorean Identity to convert this to be written in terms of secant functions.       Integration by parts works well here, and it's helpful to know the derivative of and an antiderivative of .       You can technically use either or here.        "
},
{
  "id": "act-CompareContrast",
  "level": "2",
  "url": "sec-PowersOfTrig.html#act-CompareContrast",
  "type": "Activity",
  "number": "7.5.1",
  "title": "Compare and Contrast.",
  "body": " Compare and Contrast   Let's do a quick comparison of two integrals, keeping the above examples in mind. Consider these two integrals:     Consider the first integral, . Think about and set up a good technique for antidifferentiating. Without actually solving the integral, explain why this technique will work.   It might be helpful to notice that can be re-written as . Does this help reveal something important about the structure of this integrand?    Now consider the second integral, . Does the same integration strategy work here? What happens when you apply the same thing?   Let again, and . What happens with the cosine functions? How many are \"left\" after applying our substitution?    We know that and are related to each other through derivatives (each is the derivative of the other, up to a negative). Is there some other connection that we have between these functions? We might especially notice that we have a left over in our integral. Can we write this in terms of , so that we can write it in terms of ?   We have a trigonometric identity (the Pythagorean Identity): .    Why would this strategy not have worked if we were looking at the integrals or ? What, specifically, did we need in order to use this combination of substitution and trigonometric identity to solve the integral?   "
},
{
  "id": "act-SecTan",
  "level": "2",
  "url": "sec-PowersOfTrig.html#act-SecTan",
  "type": "Activity",
  "number": "7.5.2",
  "title": "Compare and Contrast (Again).",
  "body": " Compare and Contrast (Again)   We're going to do another Compare and Contrast, but this time we're only going to consider one integral: . We're going to employ another strategy, similar to the one for .    Before you start thinking about this integral, let's build the relevant version of the Pythagorean Identity that we'll use. Our standard version of this is: . Since we want a version that connects , which is also written as , with , or , let's divide everything in the Pythagorean Identity by :         Now start with the integral. We're going to use two different processes here, two different -substitutions. First, set . Complete the substitution and solve the integral.   Here, . We'll also use .        Now try the integral again, this time using as your substitution.   Now , and we'll use the same Pythagorean identity, just re-written as .        For each of these integrals, why were the exponents set up just right for -substitution each time? How does the structure of the derivatives of each function play into this?   Notice we had an even exponent on the function, but an odd exponent on the function.    Which substitution would be best for the integral . Why?    Which substitution would be best for the integral . Why?   "
},
{
  "id": "ex-PowersOfTrig-1",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-1",
  "type": "Exercise",
  "number": "7.5.3.1",
  "title": "",
  "body": "For an integral , how do you know whether to use or as the substitution? "
},
{
  "id": "ex-PowersOfTrig-2",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-2",
  "type": "Exercise",
  "number": "7.5.3.2",
  "title": "",
  "body": "For an integral , how do you know whether to use or as the substitution? "
},
{
  "id": "ex-PowersOfTrig-3",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-3",
  "type": "Exercise",
  "number": "7.5.3.3",
  "title": "",
  "body": " Integrate the following.                          "
},
{
  "id": "ex-PowersOfTrig-4",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-4",
  "type": "Exercise",
  "number": "7.5.3.4",
  "title": "",
  "body": " Integrate the following.                  "
},
{
  "id": "ex-PowersOfTrig-5",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-5",
  "type": "Exercise",
  "number": "7.5.3.5",
  "title": "",
  "body": " Consider the integral .   Use the trigonometric identity: to integrate.   Use integration by parts to integrate.   Check out    Which of these techniques do you think was easier to implement and use? Why is that?  "
},
{
  "id": "ex-PowersOfTrig-6",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-6",
  "type": "Exercise",
  "number": "7.5.3.6",
  "title": "",
  "body": " Consider the integral .   Use the trigonometric identity: to integrate.   Use integration by parts to integrate.   Try picking and .   Which of these techniques did you prefer? Why?  "
},
{
  "id": "ex-PowersOfTrig-7",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-7",
  "type": "Exercise",
  "number": "7.5.3.7",
  "title": "",
  "body": " Integrate the following integrals.       Use a Pythagorean Identity to convert this to be written in terms of secant functions.       Integration by parts works well here, and it's helpful to know the derivative of and an antiderivative of .       You can technically use either or here.      "
},
{
  "id": "sec-TrigSub",
  "level": "1",
  "url": "sec-TrigSub.html",
  "type": "Section",
  "number": "7.6",
  "title": "Trigonometric Substitution",
  "body": " Trigonometric Substitution  Text of section.   Explain how trigonometric substitution helps to convert sums or differences of squares to products of squares. Why is this helpful? When is it helpful?  Draw a right triangle with as one of the non-hypotenuse side lengths. What is the length of the hypotenuse? What about the other side length? What would be an appropriate substitution for an integral containing ?  Draw a right triangle with as one of the non-hypotenuse side lengths. What is the length of the hypotenuse? What about the other side length? What would be an appropriate substitution for an integral containing ?  Draw a right triangle with as one of the hypotenuse. What are the lengths of the other two sides? What would be an appropriate substitution for an integral containing ?   Integrate the following using an appropriate trigonometric substitution.                        (for )            Complete the square and then integrate.            "
},
{
  "id": "ex-TrigSub-1",
  "level": "2",
  "url": "sec-TrigSub.html#ex-TrigSub-1",
  "type": "Exercise",
  "number": "7.6.1",
  "title": "",
  "body": "Explain how trigonometric substitution helps to convert sums or differences of squares to products of squares. Why is this helpful? When is it helpful? "
},
{
  "id": "ex-TrigSub-2",
  "level": "2",
  "url": "sec-TrigSub.html#ex-TrigSub-2",
  "type": "Exercise",
  "number": "7.6.2",
  "title": "",
  "body": "Draw a right triangle with as one of the non-hypotenuse side lengths. What is the length of the hypotenuse? What about the other side length? What would be an appropriate substitution for an integral containing ? "
},
{
  "id": "ex-TrigSub-3",
  "level": "2",
  "url": "sec-TrigSub.html#ex-TrigSub-3",
  "type": "Exercise",
  "number": "7.6.3",
  "title": "",
  "body": "Draw a right triangle with as one of the non-hypotenuse side lengths. What is the length of the hypotenuse? What about the other side length? What would be an appropriate substitution for an integral containing ? "
},
{
  "id": "ex-TrigSub-4",
  "level": "2",
  "url": "sec-TrigSub.html#ex-TrigSub-4",
  "type": "Exercise",
  "number": "7.6.4",
  "title": "",
  "body": "Draw a right triangle with as one of the hypotenuse. What are the lengths of the other two sides? What would be an appropriate substitution for an integral containing ? "
},
{
  "id": "ex-TrigSub-5",
  "level": "2",
  "url": "sec-TrigSub.html#ex-TrigSub-5",
  "type": "Exercise",
  "number": "7.6.5",
  "title": "",
  "body": " Integrate the following using an appropriate trigonometric substitution.                        (for )          "
},
{
  "id": "ex-TrigSub-6",
  "level": "2",
  "url": "sec-TrigSub.html#ex-TrigSub-6",
  "type": "Exercise",
  "number": "7.6.6",
  "title": "",
  "body": " Complete the square and then integrate.          "
},
{
  "id": "sec-PartialFractions",
  "level": "1",
  "url": "sec-PartialFractions.html",
  "type": "Section",
  "number": "7.7",
  "title": "Partial Fractions",
  "body": " Partial Fractions   Comparing Rational Integrands   We're going to compare three integrals:       Start with the first integral: . How would you approach integrating this?   This is a constant over a quadratic: can you complete the square, and then connect the result to an inverse tangent function?    Try the same tactic on the second integral: . You don't need to complete this integral, but think about how you might proceed.   Check the structure of the denominator when you complete the square: since you don't end up with a sum of squares, you can't use the inverse tangent setup. You'll need to do a trig substitution instead...    Think about the third integral: . How would you integrate this?    The third integral is unique from the other two in that is has two terms. Let's combine them together to see how we could write this integral to compare it more closely to the other two.  Subtract using common denominators and compare your re-written integral to the other two.    Which of these integrals and\/or representations of an integral is easiest to work with? Which one is most annoying to work with? Why?     Why do we use partial fraction decomposition on some integrals of rational functions? Give an example and explain why it is helpful in your example.   For each rational function described, write out the corresponding partial fraction forms.    where is some polynomial with degree less than 3.    where is some polynomial with degree less than 5.    where is some polynomial with degree less than 4.    where is some polynomial with degree less than 4.   There's some factoring to be done here! Note that and then we can factor .    Consider the following integral, with the partial fraction forms written out: .   Write an equation connecting the numerators.   Find (and use) a specific -value to input into the equation to solve for .   Use , and notice what happens to the rest of the terms.   Find (and use) a specific -value to input into the equation to solve for .   Use , and notice what happens to the rest of the terms.   Why can you not use this strategy to solve for coefficients or ?   Find the cubic terms (you will need to do some multiplication) on both sides of your equation. Use these to solve for .   Find the constant terms (you will need to do some multiplication) on both sides of your equation. Use these to solve for .   Integrate!    Explain why partial fractions is not an appropriate technique for the following integral: . How should we approach this integral, instead?   Note the degree in the numerator compared to the denominator!    Integrate the following.                           In the problems we are looking at in this section, we're limiting ourselves to, at most, irreducible quadratic factors in the denominator. In problems with simple linear factors, repeated linear factors, or irreducible quadratic factors, what types of antiderivative functions do you expect to see? Explain.   For each of the following integrals, we will do some preliminary work before using partial fractions to integrate. Really, we'll perform a specific -substitution that will give us some resulting integral to use partial fractions on.    where we use .   If then and our resulting integral looks like: .    where we use .   If then and the resulting integral is: .    where we use .   If then and the resulting integral is: .    "
},
{
  "id": "act-PartialFractionCompare",
  "level": "2",
  "url": "sec-PartialFractions.html#act-PartialFractionCompare",
  "type": "Activity",
  "number": "7.7.1",
  "title": "Comparing Rational Integrands.",
  "body": " Comparing Rational Integrands   We're going to compare three integrals:       Start with the first integral: . How would you approach integrating this?   This is a constant over a quadratic: can you complete the square, and then connect the result to an inverse tangent function?    Try the same tactic on the second integral: . You don't need to complete this integral, but think about how you might proceed.   Check the structure of the denominator when you complete the square: since you don't end up with a sum of squares, you can't use the inverse tangent setup. You'll need to do a trig substitution instead...    Think about the third integral: . How would you integrate this?    The third integral is unique from the other two in that is has two terms. Let's combine them together to see how we could write this integral to compare it more closely to the other two.  Subtract using common denominators and compare your re-written integral to the other two.    Which of these integrals and\/or representations of an integral is easiest to work with? Which one is most annoying to work with? Why?   "
},
{
  "id": "ex-PartialFractions-1",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-1",
  "type": "Exercise",
  "number": "7.7.1",
  "title": "",
  "body": "Why do we use partial fraction decomposition on some integrals of rational functions? Give an example and explain why it is helpful in your example. "
},
{
  "id": "ex-PartialFractions-2",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-2",
  "type": "Exercise",
  "number": "7.7.2",
  "title": "",
  "body": " For each rational function described, write out the corresponding partial fraction forms.    where is some polynomial with degree less than 3.    where is some polynomial with degree less than 5.    where is some polynomial with degree less than 4.    where is some polynomial with degree less than 4.   There's some factoring to be done here! Note that and then we can factor .  "
},
{
  "id": "ex-PartialFractions-3",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-3",
  "type": "Exercise",
  "number": "7.7.3",
  "title": "",
  "body": " Consider the following integral, with the partial fraction forms written out: .   Write an equation connecting the numerators.   Find (and use) a specific -value to input into the equation to solve for .   Use , and notice what happens to the rest of the terms.   Find (and use) a specific -value to input into the equation to solve for .   Use , and notice what happens to the rest of the terms.   Why can you not use this strategy to solve for coefficients or ?   Find the cubic terms (you will need to do some multiplication) on both sides of your equation. Use these to solve for .   Find the constant terms (you will need to do some multiplication) on both sides of your equation. Use these to solve for .   Integrate!  "
},
{
  "id": "ex-PartialFractions-4",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-4",
  "type": "Exercise",
  "number": "7.7.4",
  "title": "",
  "body": " Explain why partial fractions is not an appropriate technique for the following integral: . How should we approach this integral, instead?   Note the degree in the numerator compared to the denominator!  "
},
{
  "id": "ex-PartialFractions-5",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-5",
  "type": "Exercise",
  "number": "7.7.5",
  "title": "",
  "body": " Integrate the following.                          "
},
{
  "id": "ex-PartialFractions-6",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-6",
  "type": "Exercise",
  "number": "7.7.6",
  "title": "",
  "body": "In the problems we are looking at in this section, we're limiting ourselves to, at most, irreducible quadratic factors in the denominator. In problems with simple linear factors, repeated linear factors, or irreducible quadratic factors, what types of antiderivative functions do you expect to see? Explain. "
},
{
  "id": "ex-PartialFractions-7",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-7",
  "type": "Exercise",
  "number": "7.7.7",
  "title": "",
  "body": " For each of the following integrals, we will do some preliminary work before using partial fractions to integrate. Really, we'll perform a specific -substitution that will give us some resulting integral to use partial fractions on.    where we use .   If then and our resulting integral looks like: .    where we use .   If then and the resulting integral is: .    where we use .   If then and the resulting integral is: .  "
},
{
  "id": "sec-IntroSequences",
  "level": "1",
  "url": "sec-IntroSequences.html",
  "type": "Section",
  "number": "8.1",
  "title": "Introduction to Infinite Sequences",
  "body": " Introduction to Infinite Sequences   Sequences as Functions  Before we move on to our actual goal of analyzing infinite series, we will construct infinite sequences. The big thing to remember here is that, when we build and analyze these sequences, we are are really building and analyzing functions. We want to keep this idea of sequences as functions in the forefront, since it will help us as we think about accumulating these function values into infinite series.   Building our First Sequences   We might already have some familiarity with sequences. Here, we'll focus less on some of the detailed mechanics and just think about these sequences as functions.    Describe a sequence of numbers where you use a consistent rule\/function to build each term (each number) based only on the previous term in the sequence. You will need to decide on some first term to start your sequence.    Describe a different sequence of numbers using the same rule to generate new terms\/numbers from the previous one. What do you need to do to make these two sequences different from each other?    Describe a new sequence of numbers where you use a consistent rule\/function to build each term based on its position in the sequence (i.e. the first term will be some rule\/function based on the input 1, the second will be based on 2, you'll use 3 to get the third term, etc.). We will call the position of each term in the sequence the index .    Describe another, new, sequence of numbers where you use a consistent rule\/function to build each term based on its index. This time, make the terms get smaller in size as the index increases.     Explicit Formula   An infinite sequence defined using an explicit formula is one where the th term of the sequence is defined as a function output of , the term's index.  Using notation, we might say that where:    is the ``name'' of the sequence (similar to how and are common names of functions).     is the index of the term, typically a non-negative integer.     is the function that we use to generate the terms.        Recursion Relation   A sequence is defined using a recursion relation is one where the th term of the sequence is defined as a function output of the previous term, the st term. The sequence also needs some initial term to base the subsequent terms from.  Using notation, we might say that .    These definitions are relatively limited. You might, for instance, know of a very famous sequence that is defined recursively by having each term being the sum of the two previous terms. Our study of sequences will be brief and all pointing towards infinite series, so there are a lot of nuances about sequences that we will skip.   Returning to our First Sequences   Let's return back to the four sequences we created in .    For each of the sequences, how are we going to define them? Explicit formulas? Recursion relations? How do you know?    Now, for each sequence, define the sequence formally using either an explicit formula or recursion relation, whichever matches with how you described the sequence in .     Practice Writing some Terms   For each of the following sequences, write out the first handful of terms. There isn't a set amount, but you should write out enough to get a feel for the sequence structure and how the different ways of defining the sequences work. In each, you can start the index at 1 and count upwards ( ).     and                     Describing These Sequences   Let's look at the sequences from . Go through the following tasks for each sequence.    What do you think each sequence is \"counting towards\" (if anything)?   If you're not sure, maybe you need to write out a few more terms! You can also change how you write the numbers themselves: in some cases, fractions might be helpful, but in others it might be useful to write the numbers in decimal form. Maybe you'll approximate values of the sine or exponential functions, or maybe you'll leave them as or .    Can you show that the sequence is counting towards what you think it is with a limit (or show that it's not counting towards anything)?   Some of these limits, as , will be tricky to work with! When might you want to use ? When might you want to use ?     Write the Sequence Rules   We'll look at some sequences by writing out the first handful of terms. From there, our goal is to write out more terms and eventually define each sequence fully.  For each sequence, write an explicit formula and a recursion relation to define the sequence. You can choose whether to start your index at or .        It might be helpful to write these numbers using a common denominator! Or at least some of the numbers. Alternatively, you can try a common numerator (which is very fun to do, since we normally don't do that).   If you are recursively multiplying by a number each time, what will that look like in the explicit formula? How do we represent repeated multiplication?        You can re-write these fractions! Have any of them been \"reduced?\"   Re-write and by scaling the numerator and denominator by 2. Can you find a formula for the numerator and denominator separately? This one is very difficult to find a recursion relation for, so feel free to only write it explicitly!        This one will definitely be helpful to re-write so that all fractions have a common denominator.   If you are recursively adding something, how does that show up in the explicit formula? How do we repeatedly add?    What kinds of connections do you notice between the explicit formulas and the recursion relations for these sequences?    Before moving on, we should think about a couple of notes:   Notes about recursion and explicit formulas       Graphing Sequences  We have tried introducing and talking about sequences as special types of functions, mapping natural number inputs to real number outputs. If we are committed to thinking about sequences as functions, with maybe some special context, then we should really investigate how one of our primary representations of functions (graphs) manifests itself in this new context.  There really is not too much to think about here! We can focus on the domain of these functions. If we define a sequence explicitly, then we have some function , and we can plot this sequence function in the same way that we normally would any other function . We will use the horizontal axis for the inputs and the vertical axis to represent the outputs, and try to visualize the graph as the set of all of the pairs of inputs with their (single) corresponding output.  The only new feature, then, is that these functions have only non-negative integer inputs. So when we plot the points, we do not get some nice curve acting as a visual representation of the function: we get discrete points floating on the 2-dimensional plane, each with some consistent horizontal spacing between them.  Graph comparison.  Let's continue to think about these sequences as just functions in a special kind of context. How does this discrete context change how we talk about functions and what kinds of terminology we use?    Sequence Terminology  If a sequence is a function (and we're saying in this introductory section that it is), then we can think of all of the different terminology and adjectives that we use to describe functions. How many of them are relevant to sequences?   Continuous?    Differentiable?    Integrable?    Increasing?    Decreasing?   For now, we'll talk about sequences in two ways: their direction and the size of their terms.   Direction of a Sequence   We say that a sequence is increasing if, for all , . If for all then we say that is non-decreasing .  We say that a sequence is decreasing if, for all , . If for all then we say that is non-increasing .  We say that is constant if , but this is a very boring sequence and we will likely not think terribly hard about these kinds of sequences.  Sometimes we might say that a sequence is eventually non-increasing if there is some , and the sequence is non-increasing for , and similarly for eventually non-decreasing .     Monotonic Sequences   For the sequence , we say that is monotonic if is either non-increasing or non-decreasing.     Bounded Sequences   We say that a sequence is bounded below if there is some real number such that for all .  Similarly we say that a sequence is bounded above if there is some real number such that for all .  If a sequence has both an upper bound and a lower bound, then we often just say that the sequence is bounded .    Lastly, we'll focus on the end-behavior of a sequence. We'll think about convergence of a sequence in the same way that we did for : does the limit exist?   Sequence Convergence   For the sequence , if is some real number and , the we say that the sequence  converges to . If this limit does not exist, we say that the sequence  diverges .     Monotone Convergence Theorem   If is a sequence that is both monotonic and bounded, then it must converge.    This theorem seems to be a bit obvious to many students: why would we care about this, when we can just find a limit of the explicit formula for a sequence? We'll see throughout the rest of this chapter that this theorem is one of the most important and most useful results in our study of infinite sequences and infinite series. For now, though, let's use it to find the limits of some recursively defined sequences.    Some Cool Recursive Examples  Let's re-visit one of the recursively defined sequences that we've seen already and then think about a couple of other interesting ones. Before we do that, though, we should recognize why we need to treat recursively defined sequences a bit differently than ones defined explicitly.  In an explicit formula, the terms themselves are a function of , the index. This means that we can simply apply a limit as to understand whether or not the sequence converges and what it might converge to. These limits could be tricky, but we have the tools to evaluate them! In a recursion relation, though, each term is not a function of the index, which means we can't easily apply a limit as to the term definition.  We'll be able to apply a limit, but it will feel a bit different: we're going to go into the limit work under the assumption that the limit exists. Let's see how it goes.    Let's re-visit the first sequence from : where and .    Let's start by assuming that the sequence converges. That means that there exists some real number such that .  What would this be, if it exists? A key thing to note is that if exists (and we have a symbol, , for it) then we can say that . Whether or not this is obvious to you is not a mark of your understanding, but we need to make sure that this ends up being obvious to you. If it's not, that's ok! But it is an indicator that you should take a couple of minutes to think about this. Once you are convinced that these two limits are the same thing, move on to the next part.    Let's now apply a limit to the sequence definition:   And so we have two solutions to this equation: and . This is strange: how can a sequence have more than one value that it converges to?  It's because we have yet to take into account the initial term, ! Depending on this value, the sequence might converge or not, and if it does converge, then there are two options for what the sequence can converge to, based on the value of .    You can do the next part on your own, but I want you to pick different numbers for and write out some terms of the resulting sequence. You should find that some of them look like they're converging to , one of them will converge to (it's a fun hunt to find which one), and some will diverge.   You should find that if , then the sequence is constant and converges to . If then the sequence seems like it'll converge to . And if , then it looks like the sequence diverges.    Now it is up to us to show that this sequence, with , does converge. Sure, we have some evidence and a good conjecture that it converges to , but that is just our good guess based on what we have seen in the first handful of numbers.  We will attempt to convince ourselves that this sequence is both monotonic and bounded. We'll begin with boundedness.  It should be clear that , since as long as , then . Since we start with , we are guaranteed to get non-zero values from the formula for a new term! Great news, we have a lower bound.  Let's show that is an upper bound: when   Since , we know that each successive term will also be less than . So we have an upper bound!  So the sequence is bounded. Now we just need to convince ourselves that this sequence is monotonic. We know that our terms are bounded above by , and I hope that this means we can convince ourselves that since our terms are smaller than this, which would produce a constant sequence, then all of our terms are probably decreasing.  Let's show this by showing that : We can solve for when this is negative! It shouldn't be hard to show that when . And we've already shown this is true in our case!  So is bounded and monotonic and must therefore converge because of the . Because , we know that this sequence doesn't converge to , and so must converge to the only other option: 0.    There are some other fun ways of doing this same thing for other recursive examples. The argument above is relatively bulky to use, and so we understandably will not think about recursively defined sequences very much: we'll leave that topic for another course where we have more time to really explore them. If you are interested in trying this same argument with other sequences though, we'll end this section with two more fun examples.    Consider the sequence defined by with . Does this sequence converge? To what?    Write out some terms to get a feel for things! Then, assuming that the sequence converges to some real number, , think about what happens when you apply a limit as : we should get the equation .    Consider the sequence defined by with . Does this sequence converge? To what?    Write out some terms to get a feel for things! Then, assuming that the sequence converges to some real number, , think about what happens when you apply a limit as : we should get the equation .     "
},
{
  "id": "act-FirstSequences",
  "level": "2",
  "url": "sec-IntroSequences.html#act-FirstSequences",
  "type": "Activity",
  "number": "8.1.1",
  "title": "Building our First Sequences.",
  "body": " Building our First Sequences   We might already have some familiarity with sequences. Here, we'll focus less on some of the detailed mechanics and just think about these sequences as functions.    Describe a sequence of numbers where you use a consistent rule\/function to build each term (each number) based only on the previous term in the sequence. You will need to decide on some first term to start your sequence.    Describe a different sequence of numbers using the same rule to generate new terms\/numbers from the previous one. What do you need to do to make these two sequences different from each other?    Describe a new sequence of numbers where you use a consistent rule\/function to build each term based on its position in the sequence (i.e. the first term will be some rule\/function based on the input 1, the second will be based on 2, you'll use 3 to get the third term, etc.). We will call the position of each term in the sequence the index .    Describe another, new, sequence of numbers where you use a consistent rule\/function to build each term based on its index. This time, make the terms get smaller in size as the index increases.   "
},
{
  "id": "def-ExplicitFormula",
  "level": "2",
  "url": "sec-IntroSequences.html#def-ExplicitFormula",
  "type": "Definition",
  "number": "8.1.1",
  "title": "Explicit Formula.",
  "body": " Explicit Formula   An infinite sequence defined using an explicit formula is one where the th term of the sequence is defined as a function output of , the term's index.  Using notation, we might say that where:    is the ``name'' of the sequence (similar to how and are common names of functions).     is the index of the term, typically a non-negative integer.     is the function that we use to generate the terms.      "
},
{
  "id": "def-RecursionRelation",
  "level": "2",
  "url": "sec-IntroSequences.html#def-RecursionRelation",
  "type": "Definition",
  "number": "8.1.2",
  "title": "Recursion Relation.",
  "body": " Recursion Relation   A sequence is defined using a recursion relation is one where the th term of the sequence is defined as a function output of the previous term, the st term. The sequence also needs some initial term to base the subsequent terms from.  Using notation, we might say that .   "
},
{
  "id": "act-FirstSequencesAgain",
  "level": "2",
  "url": "sec-IntroSequences.html#act-FirstSequencesAgain",
  "type": "Activity",
  "number": "8.1.2",
  "title": "Returning to our First Sequences.",
  "body": " Returning to our First Sequences   Let's return back to the four sequences we created in .    For each of the sequences, how are we going to define them? Explicit formulas? Recursion relations? How do you know?    Now, for each sequence, define the sequence formally using either an explicit formula or recursion relation, whichever matches with how you described the sequence in .   "
},
{
  "id": "ex-PracticeWritingTerms",
  "level": "2",
  "url": "sec-IntroSequences.html#ex-PracticeWritingTerms",
  "type": "Example",
  "number": "8.1.3",
  "title": "Practice Writing some Terms.",
  "body": " Practice Writing some Terms   For each of the following sequences, write out the first handful of terms. There isn't a set amount, but you should write out enough to get a feel for the sequence structure and how the different ways of defining the sequences work. In each, you can start the index at 1 and count upwards ( ).     and                   "
},
{
  "id": "act-DescribingSequences",
  "level": "2",
  "url": "sec-IntroSequences.html#act-DescribingSequences",
  "type": "Activity",
  "number": "8.1.3",
  "title": "Describing These Sequences.",
  "body": " Describing These Sequences   Let's look at the sequences from . Go through the following tasks for each sequence.    What do you think each sequence is \"counting towards\" (if anything)?   If you're not sure, maybe you need to write out a few more terms! You can also change how you write the numbers themselves: in some cases, fractions might be helpful, but in others it might be useful to write the numbers in decimal form. Maybe you'll approximate values of the sine or exponential functions, or maybe you'll leave them as or .    Can you show that the sequence is counting towards what you think it is with a limit (or show that it's not counting towards anything)?   Some of these limits, as , will be tricky to work with! When might you want to use ? When might you want to use ?   "
},
{
  "id": "act-WriteSequences",
  "level": "2",
  "url": "sec-IntroSequences.html#act-WriteSequences",
  "type": "Activity",
  "number": "8.1.4",
  "title": "Write the Sequence Rules.",
  "body": " Write the Sequence Rules   We'll look at some sequences by writing out the first handful of terms. From there, our goal is to write out more terms and eventually define each sequence fully.  For each sequence, write an explicit formula and a recursion relation to define the sequence. You can choose whether to start your index at or .        It might be helpful to write these numbers using a common denominator! Or at least some of the numbers. Alternatively, you can try a common numerator (which is very fun to do, since we normally don't do that).   If you are recursively multiplying by a number each time, what will that look like in the explicit formula? How do we represent repeated multiplication?        You can re-write these fractions! Have any of them been \"reduced?\"   Re-write and by scaling the numerator and denominator by 2. Can you find a formula for the numerator and denominator separately? This one is very difficult to find a recursion relation for, so feel free to only write it explicitly!        This one will definitely be helpful to re-write so that all fractions have a common denominator.   If you are recursively adding something, how does that show up in the explicit formula? How do we repeatedly add?    What kinds of connections do you notice between the explicit formulas and the recursion relations for these sequences?   "
},
{
  "id": "def-SequenceDirection",
  "level": "2",
  "url": "sec-IntroSequences.html#def-SequenceDirection",
  "type": "Definition",
  "number": "8.1.4",
  "title": "Direction of a Sequence.",
  "body": " Direction of a Sequence   We say that a sequence is increasing if, for all , . If for all then we say that is non-decreasing .  We say that a sequence is decreasing if, for all , . If for all then we say that is non-increasing .  We say that is constant if , but this is a very boring sequence and we will likely not think terribly hard about these kinds of sequences.  Sometimes we might say that a sequence is eventually non-increasing if there is some , and the sequence is non-increasing for , and similarly for eventually non-decreasing .   "
},
{
  "id": "def-Monotonic",
  "level": "2",
  "url": "sec-IntroSequences.html#def-Monotonic",
  "type": "Definition",
  "number": "8.1.5",
  "title": "Monotonic Sequences.",
  "body": " Monotonic Sequences   For the sequence , we say that is monotonic if is either non-increasing or non-decreasing.   "
},
{
  "id": "def-Bounded",
  "level": "2",
  "url": "sec-IntroSequences.html#def-Bounded",
  "type": "Definition",
  "number": "8.1.6",
  "title": "Bounded Sequences.",
  "body": " Bounded Sequences   We say that a sequence is bounded below if there is some real number such that for all .  Similarly we say that a sequence is bounded above if there is some real number such that for all .  If a sequence has both an upper bound and a lower bound, then we often just say that the sequence is bounded .   "
},
{
  "id": "def-SequenceConvergence",
  "level": "2",
  "url": "sec-IntroSequences.html#def-SequenceConvergence",
  "type": "Definition",
  "number": "8.1.7",
  "title": "Sequence Convergence.",
  "body": " Sequence Convergence   For the sequence , if is some real number and , the we say that the sequence  converges to . If this limit does not exist, we say that the sequence  diverges .   "
},
{
  "id": "thm-MonotoneConvergence",
  "level": "2",
  "url": "sec-IntroSequences.html#thm-MonotoneConvergence",
  "type": "Theorem",
  "number": "8.1.8",
  "title": "Monotone Convergence Theorem.",
  "body": " Monotone Convergence Theorem   If is a sequence that is both monotonic and bounded, then it must converge.   "
},
{
  "id": "ex-FirstRecursiveSequence",
  "level": "2",
  "url": "sec-IntroSequences.html#ex-FirstRecursiveSequence",
  "type": "Example",
  "number": "8.1.9",
  "title": "",
  "body": "  Let's re-visit the first sequence from : where and .    Let's start by assuming that the sequence converges. That means that there exists some real number such that .  What would this be, if it exists? A key thing to note is that if exists (and we have a symbol, , for it) then we can say that . Whether or not this is obvious to you is not a mark of your understanding, but we need to make sure that this ends up being obvious to you. If it's not, that's ok! But it is an indicator that you should take a couple of minutes to think about this. Once you are convinced that these two limits are the same thing, move on to the next part.    Let's now apply a limit to the sequence definition:   And so we have two solutions to this equation: and . This is strange: how can a sequence have more than one value that it converges to?  It's because we have yet to take into account the initial term, ! Depending on this value, the sequence might converge or not, and if it does converge, then there are two options for what the sequence can converge to, based on the value of .    You can do the next part on your own, but I want you to pick different numbers for and write out some terms of the resulting sequence. You should find that some of them look like they're converging to , one of them will converge to (it's a fun hunt to find which one), and some will diverge.   You should find that if , then the sequence is constant and converges to . If then the sequence seems like it'll converge to . And if , then it looks like the sequence diverges.    Now it is up to us to show that this sequence, with , does converge. Sure, we have some evidence and a good conjecture that it converges to , but that is just our good guess based on what we have seen in the first handful of numbers.  We will attempt to convince ourselves that this sequence is both monotonic and bounded. We'll begin with boundedness.  It should be clear that , since as long as , then . Since we start with , we are guaranteed to get non-zero values from the formula for a new term! Great news, we have a lower bound.  Let's show that is an upper bound: when   Since , we know that each successive term will also be less than . So we have an upper bound!  So the sequence is bounded. Now we just need to convince ourselves that this sequence is monotonic. We know that our terms are bounded above by , and I hope that this means we can convince ourselves that since our terms are smaller than this, which would produce a constant sequence, then all of our terms are probably decreasing.  Let's show this by showing that : We can solve for when this is negative! It shouldn't be hard to show that when . And we've already shown this is true in our case!  So is bounded and monotonic and must therefore converge because of the . Because , we know that this sequence doesn't converge to , and so must converge to the only other option: 0.   "
},
{
  "id": "ex-FunRecursive",
  "level": "2",
  "url": "sec-IntroSequences.html#ex-FunRecursive",
  "type": "Example",
  "number": "8.1.10",
  "title": "",
  "body": "  Consider the sequence defined by with . Does this sequence converge? To what?    Write out some terms to get a feel for things! Then, assuming that the sequence converges to some real number, , think about what happens when you apply a limit as : we should get the equation .    Consider the sequence defined by with . Does this sequence converge? To what?    Write out some terms to get a feel for things! Then, assuming that the sequence converges to some real number, , think about what happens when you apply a limit as : we should get the equation .   "
},
{
  "id": "sec-IntroSeries",
  "level": "1",
  "url": "sec-IntroSeries.html",
  "type": "Section",
  "number": "8.2",
  "title": "Introduction to Infinite Series",
  "body": " Introduction to Infinite Series   Let's try to introduce the idea of an infinite series using a framework that we know and are (maybe) comfortable with: integrals!  With an integral, we have a nice way of evaluating integrals of nicely behaved functions with finite limits of integration ( ).  Then, when we talked about improper integrals, we built a nice way to think about evaluating integrals with unbounded limits of integration ( ). How will we use this to think about infinite series, a sum of the infinitely many terms from an infinite sequence?    Partial Sums  If we approach infinite series in a manner similar to improper integrals, then we will need to do a couple of things.   Truncate the infinite series at some finite ending point. This is what we did with the integral, when we replaced the infinity with some real number variable . We might use for the series \"ending index.\"    Find a formula for this truncated\/finite version. For the integrals, we could use the for this! For series, we'll need to do something else.    Apply a limit as (or in the case of infinite series) goes off to infinity!      How Do We Think About Infinite Series?   Let's consider the following sequence:     White out the first 5 terms of the sequence.    What does this sequence converge to? Show this with a limit!    Now we'll construct a new sequence, this time by adding things up. We're going to be working with the sequence where . Write out the first five terms of this sequence: .    Can you come up with an explicit formula for ?    Does converge or diverge? Use a limit to find what it converges to!    What do you think this means for the infinite series ? Does the infinite series converge or diverge?    This is hopefully a nice little introduction to how we'll think about infinite series: we'll consider, instead, the sequence of sums where we add up more and more terms. This is also a nice first example, because we really just showed that since .  But more importantly, we now have a good strategy for thinking about infinite series as sequences of partial sums .     Partial Sum   For an infinite series , we call the th Partial Sum of the infinite series.     Series Convergence   We say that the infinite series  converges to the real number if the sequence converges to ( ), where is the th partial sum of the infinite series.  If the sequence of partial sums diverges (the limit does not exist), then we say that the infinite series  diverges .      Visualizing the Sequence of Partial Sums  Since we'll think about an infinite series as the sequence of its partial sums, , then we can think about visualizing an infinite series as really the same thing as visualizing a sequence in general ( ).  Graphing examples.    Special Series  Let's look at three examples where we can think about partial sums and play with our new idea of series convergence.    For each of the following series, write out a few of the terms of the series. Then write out the corresponding partial sums. Use these to find a formula for , the th partial sum. Then make a claim about whether or not the series converges and what it converges to.         The series converges to 2.         So the series diverges.        This one is tricky! It's hard to notice anything unless we write out the series term formula a bit differently. Use to re-write as .         These examples are a bit misleading: we often won't be able to do this kind of thing! For most infinite series, we will struggle to find an explicit formula for the th partial sum. In these examples, though, we took advantage of some specific structure.  In this first example (as well as the example in ), we noticed that because of the exponential function defining the terms, we were able to find some nice patterns in the partial sums. We'll explore this a bit more later in .  Then in these other two examples, we noticed that once we could write each term as really a difference of two fractions that have a really similar structure, we got these \"repeat\" values from term to term where the opposite signs made things add up to 0. These are called \"telescoping series,\" and they're mostly fun examples to think about partial sum formulas. We'll see some pop up later though, and Partial Fraction Decomposition is a nice trick to keep in mind for these kinds of things.   "
},
{
  "id": "act-IntroSeries",
  "level": "2",
  "url": "sec-IntroSeries.html#act-IntroSeries",
  "type": "Activity",
  "number": "8.2.1",
  "title": "How Do We Think About Infinite Series?",
  "body": " How Do We Think About Infinite Series?   Let's consider the following sequence:     White out the first 5 terms of the sequence.    What does this sequence converge to? Show this with a limit!    Now we'll construct a new sequence, this time by adding things up. We're going to be working with the sequence where . Write out the first five terms of this sequence: .    Can you come up with an explicit formula for ?    Does converge or diverge? Use a limit to find what it converges to!    What do you think this means for the infinite series ? Does the infinite series converge or diverge?    This is hopefully a nice little introduction to how we'll think about infinite series: we'll consider, instead, the sequence of sums where we add up more and more terms. This is also a nice first example, because we really just showed that since .  But more importantly, we now have a good strategy for thinking about infinite series as sequences of partial sums .   "
},
{
  "id": "def-PartialSum",
  "level": "2",
  "url": "sec-IntroSeries.html#def-PartialSum",
  "type": "Definition",
  "number": "8.2.1",
  "title": "Partial Sum.",
  "body": " Partial Sum   For an infinite series , we call the th Partial Sum of the infinite series.   "
},
{
  "id": "def-SeriesConvergence",
  "level": "2",
  "url": "sec-IntroSeries.html#def-SeriesConvergence",
  "type": "Definition",
  "number": "8.2.2",
  "title": "Series Convergence.",
  "body": " Series Convergence   We say that the infinite series  converges to the real number if the sequence converges to ( ), where is the th partial sum of the infinite series.  If the sequence of partial sums diverges (the limit does not exist), then we say that the infinite series  diverges .   "
},
{
  "id": "ex-geometric",
  "level": "2",
  "url": "sec-IntroSeries.html#ex-geometric",
  "type": "Example",
  "number": "8.2.3",
  "title": "",
  "body": "  For each of the following series, write out a few of the terms of the series. Then write out the corresponding partial sums. Use these to find a formula for , the th partial sum. Then make a claim about whether or not the series converges and what it converges to.         The series converges to 2.         So the series diverges.        This one is tricky! It's hard to notice anything unless we write out the series term formula a bit differently. Use to re-write as .        "
},
{
  "id": "sec-DivergenceTest",
  "level": "1",
  "url": "sec-DivergenceTest.html",
  "type": "Section",
  "number": "8.3",
  "title": "The Divergence Test and the Harmonic Series",
  "body": " The Divergence Test and the Harmonic Series   The Relationship Between a Sequence and Series  We have looked at both infinite sequences and infinite series so far, and, to make things complicated, we're really thinking about an infinite series (of terms from an infinite sequence) as an infinite sequence (of partial sums of the series). We've looked at how to visualize these (in both and ).  Let's first start with defining a new series. This is a relatively important one by itself (it does have its own name), but it's mostly an important series because it leads us into some new and interesting ways of thinking about series in general.   Harmonic Series   We call the series the Harmonic Series .     Investigating the Harmonic Series   Write out the first several terms of the harmonic series, terms from . Write however many you need to get a feel for how the terms work.    Can you find out how many terms you would have to go \"into\" the series before the term was less than 0.00000001?   When is ?    Can you do this same kind of thing, no matter how small? For instance, how many terms would you have to go into the series before the term was less than some real number where ?   When is ?    Remind\/explain\/convince yourself that what we've really done is show that . This isn't a new or terribly interesting fact, but make sure that you understand why the argument above shows this.    Let's do something very similar, but with , the sequence of partial sums, instead. Write out the first few partial sums. There's no specific number that you need to write, but make sure to write enough partial sums to get a feel for how the partial sums work.    Can you find out how many terms you need to add up until the partial sum is larger than 1?   Find a value for to give .    Can you find out how many terms you need to add up until the partial sum is larger than 5?   Find a value for to give .    This is the first partial sum greater than 5.    Can you find out how many terms you need to add up until the partial sum is larger than 10?   Find a value for to give . This will be absolutely awful to try calculating by hand! Use some piece of technology!    This is the first partial sum greater than 10.    Do you think that for any positive number , we can always find some partial sum ? What do you think this would mean about ?    To actually show that for any we could always find an where is an extremely difficult task! We will show that the Harmonic Series diverges in a different way, but for now I want us to notice these contradictory results: we have a series whose terms get small, but whose partial sums do not seem to converge.  We have but it seems like does not exist. Is this behavior special to the Harmonic Series? Is this something we should make note of? Is there some other connection between the terms of a series and the behavior of the partial sums of the series that we need to note?    Let's continue to think about this strange series, but actually prove that the series itself diverges.   The Harmonic Series Diverges   The Harmonic Series , , diverges.    Let's assume, for the sake of eventual contradiction, that the harmonic series converges.      The Divergence Test   Divergence Test   For an infinite series , if the infinite series converges then . This is equivalent to saying that if then the infinite series diverges.          Apply the Divergence Test to the following series and interpret the results.        We can do a couple of things here! There is a nice result about limits of polynomials that we can use in the numerator ( ). We could also get this same result using some other techniques, like what we use to prove that theorem. Then we can use to evaluate the limit, since we have a indeterminate form.               "
},
{
  "id": "def-HarmonicSeries",
  "level": "2",
  "url": "sec-DivergenceTest.html#def-HarmonicSeries",
  "type": "Definition",
  "number": "8.3.1",
  "title": "Harmonic Series.",
  "body": " Harmonic Series   We call the series the Harmonic Series .   "
},
{
  "id": "act-HarmonicSeries",
  "level": "2",
  "url": "sec-DivergenceTest.html#act-HarmonicSeries",
  "type": "Activity",
  "number": "8.3.1",
  "title": "Investigating the Harmonic Series.",
  "body": " Investigating the Harmonic Series   Write out the first several terms of the harmonic series, terms from . Write however many you need to get a feel for how the terms work.    Can you find out how many terms you would have to go \"into\" the series before the term was less than 0.00000001?   When is ?    Can you do this same kind of thing, no matter how small? For instance, how many terms would you have to go into the series before the term was less than some real number where ?   When is ?    Remind\/explain\/convince yourself that what we've really done is show that . This isn't a new or terribly interesting fact, but make sure that you understand why the argument above shows this.    Let's do something very similar, but with , the sequence of partial sums, instead. Write out the first few partial sums. There's no specific number that you need to write, but make sure to write enough partial sums to get a feel for how the partial sums work.    Can you find out how many terms you need to add up until the partial sum is larger than 1?   Find a value for to give .    Can you find out how many terms you need to add up until the partial sum is larger than 5?   Find a value for to give .    This is the first partial sum greater than 5.    Can you find out how many terms you need to add up until the partial sum is larger than 10?   Find a value for to give . This will be absolutely awful to try calculating by hand! Use some piece of technology!    This is the first partial sum greater than 10.    Do you think that for any positive number , we can always find some partial sum ? What do you think this would mean about ?    To actually show that for any we could always find an where is an extremely difficult task! We will show that the Harmonic Series diverges in a different way, but for now I want us to notice these contradictory results: we have a series whose terms get small, but whose partial sums do not seem to converge.  We have but it seems like does not exist. Is this behavior special to the Harmonic Series? Is this something we should make note of? Is there some other connection between the terms of a series and the behavior of the partial sums of the series that we need to note?   "
},
{
  "id": "thm-HarmonicSeriesDiverges",
  "level": "2",
  "url": "sec-DivergenceTest.html#thm-HarmonicSeriesDiverges",
  "type": "Theorem",
  "number": "8.3.2",
  "title": "The Harmonic Series Diverges.",
  "body": " The Harmonic Series Diverges   The Harmonic Series , , diverges.    Let's assume, for the sake of eventual contradiction, that the harmonic series converges.   "
},
{
  "id": "thm-DivergenceTest",
  "level": "2",
  "url": "sec-DivergenceTest.html#thm-DivergenceTest",
  "type": "Theorem",
  "number": "8.3.3",
  "title": "Divergence Test.",
  "body": " Divergence Test   For an infinite series , if the infinite series converges then . This is equivalent to saying that if then the infinite series diverges.       "
},
{
  "id": "subsec-DivergenceTest-3",
  "level": "2",
  "url": "sec-DivergenceTest.html#subsec-DivergenceTest-3",
  "type": "Example",
  "number": "8.3.4",
  "title": "",
  "body": "  Apply the Divergence Test to the following series and interpret the results.        We can do a couple of things here! There is a nice result about limits of polynomials that we can use in the numerator ( ). We could also get this same result using some other techniques, like what we use to prove that theorem. Then we can use to evaluate the limit, since we have a indeterminate form.             "
},
{
  "id": "sec-IntegralTest",
  "level": "1",
  "url": "sec-IntegralTest.html",
  "type": "Section",
  "number": "8.4",
  "title": "The Integral Test",
  "body": " The Integral Test   Infinite Series As a Kind of Integral  We start here with a connection between objects. Earlier (in ) we tried to describe sequences as just a special kind of function: the domain is the set of non-negative integer (or positive integers, depending on whether we start our index at or ) and we map these inputs to real number outputs. And now we want to think about what it might mean to accumulate the values of these kinds of functions.  Function value accumulation is what we've been looking at lately! That's what integration is! We are trying to accumulate all of the function values and weigh them based on their \"width.\" In the context of continuous functions, that means we start approximating this accumulation by looking at some finite number of function values that we pick, and we give them some width between them. That's our Riemann sum: And from there, we work on making that space between function values get smaller (as the number of function values we use gets higher). So when is the number of function values, we can let and correspondingly we get , the differential in our integral: .  And this is how we've talked about infinite series so far, even adopting the same notions of convergence and thinking about how we extend a familiar idea (in this case adding numbers, compared to integrating a function) out to infinity: we just keep walking our (finite) ending point out to infinity using a limit!  So this brings us to this comparison of the same types of objects across these two different contexts.   Comparisons of Calculus Objects in Continuous and Discrete Contexts    Object  Continuous Context  Discrete Context    Function      Graph    Finite Accumulation  Definite Integral  Partial Sum         Infinite Accumulation  Improper Integral  Infinite Series          So in this section, we'll investigate this link between infinite series and improper integrals as the same kind of object occurring in different contexts. Intuitively, then, they'll be related to each other, under the right conditions.    The Integral Test  We'll build the integral test.   Integral Test   If is an infinite series with for all and is a continuous and decreasing function with for all , then we can compare the behaviors of and : the integral and the series are guaranteed to either both diverge or both converge.      Why Do We Need These Conditions?  Riemann sum approximation Oscillating function can make an integral converge but series diverge opposite.   "
},
{
  "id": "subsec-SeriesAsIntegrals-6",
  "level": "2",
  "url": "sec-IntegralTest.html#subsec-SeriesAsIntegrals-6",
  "type": "Table",
  "number": "8.4.1",
  "title": "Comparisons of Calculus Objects in Continuous and Discrete Contexts",
  "body": " Comparisons of Calculus Objects in Continuous and Discrete Contexts    Object  Continuous Context  Discrete Context    Function      Graph    Finite Accumulation  Definite Integral  Partial Sum         Infinite Accumulation  Improper Integral  Infinite Series         "
},
{
  "id": "thm-IntegralTest",
  "level": "2",
  "url": "sec-IntegralTest.html#thm-IntegralTest",
  "type": "Theorem",
  "number": "8.4.2",
  "title": "Integral Test.",
  "body": " Integral Test   If is an infinite series with for all and is a continuous and decreasing function with for all , then we can compare the behaviors of and : the integral and the series are guaranteed to either both diverge or both converge.   "
},
{
  "id": "sec-AlternatingSeries",
  "level": "1",
  "url": "sec-AlternatingSeries.html",
  "type": "Section",
  "number": "8.5",
  "title": "Alternating Series and Conditional Convergence",
  "body": " Alternating Series and Conditional Convergence  Before we move too far forward, let's circle back to a point made in . In the , we required the terms of our series (and the continuous function we connected it with) to be positive. This was really just a mechanism that allowed us to say, in our proof, that the sequence of partial sums was monotonic. When we accumulate more of a positive thing, the total gets bigger. This is half of what we needed for us to employ the . Because this is such a useful tool, we'll see more of this \"positive term series\" condition showing up in the tools we use to see if a series converges.  But that makes this a perfect time to stop and ask a hallowed mathematical question: What happens if that property isn't there? What happens when our series does not only have positive terms?  We definitely have fewer tools to use, since we don't get anything that relies on applying the to partial sums. So instead, we'll take a brief detour into something we call Alternating Series (a series whose terms alternate in sign).   Which is More Likely to Converge?   We're going to try to think about what might be different when we analyze an alternating series compared to a series with only positive (or non-negative) terms.  Let's say that is some sequence of positive real numbers. Now let's consider the two series:     Let's first consider the sequences of terms: compared with . Is either of these more or less likely to converge? Does this tell us anything about whether or not the corresponding series converges?   Try thinking about how we might find , especially using the .   What does the say? Is either of these sequences more or less likely to converge to 0 (or not)?    Now let's think of the partial sums: Is either of these sequences more or less likely to converge? Does this tell us anything about whether or not the corresponding series converges?     Alternating Series   An infinite series is called an Alternating Series when or for all . That is, the sign of the terms alternates:      Alternating Series Test   If is an alternating series and the size of the terms is decreasing, then if then converges.    "
},
{
  "id": "sec-AlternatingSeries-4",
  "level": "2",
  "url": "sec-AlternatingSeries.html#sec-AlternatingSeries-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Alternating Series "
},
{
  "id": "act-LikelyToConverge",
  "level": "2",
  "url": "sec-AlternatingSeries.html#act-LikelyToConverge",
  "type": "Activity",
  "number": "8.5.1",
  "title": "Which is More Likely to Converge?",
  "body": " Which is More Likely to Converge?   We're going to try to think about what might be different when we analyze an alternating series compared to a series with only positive (or non-negative) terms.  Let's say that is some sequence of positive real numbers. Now let's consider the two series:     Let's first consider the sequences of terms: compared with . Is either of these more or less likely to converge? Does this tell us anything about whether or not the corresponding series converges?   Try thinking about how we might find , especially using the .   What does the say? Is either of these sequences more or less likely to converge to 0 (or not)?    Now let's think of the partial sums: Is either of these sequences more or less likely to converge? Does this tell us anything about whether or not the corresponding series converges?   "
},
{
  "id": "def-AlternatingSeries",
  "level": "2",
  "url": "sec-AlternatingSeries.html#def-AlternatingSeries",
  "type": "Definition",
  "number": "8.5.1",
  "title": "Alternating Series.",
  "body": " Alternating Series   An infinite series is called an Alternating Series when or for all . That is, the sign of the terms alternates:    "
},
{
  "id": "thm-AlternatingSeriesTest",
  "level": "2",
  "url": "sec-AlternatingSeries.html#thm-AlternatingSeriesTest",
  "type": "Theorem",
  "number": "8.5.2",
  "title": "Alternating Series Test.",
  "body": " Alternating Series Test   If is an alternating series and the size of the terms is decreasing, then if then converges.   "
},
{
  "id": "sec-CommonSeries",
  "level": "1",
  "url": "sec-CommonSeries.html",
  "type": "Section",
  "number": "8.6",
  "title": "Common Series Types",
  "body": " Common Series Types   In this section, we'll stop and recap some of the common series types that we should recognize moving forward. We'll look at the structure of these series (mainly the functions defining the terms of the series) as well as the convergence criteria for them.  Look back to . We noticed that we were able to find an explicit formula for the th partial sum, which allowed us to evaluate . We noticed this again in .  But there are some differences between why we were able to find formulas for the th partial sum in each of these examples. Let's first focus on the infinite series with terms defined by exponential functions.    Geometric Series   Geometric Series   For real numbers and with , we say that the series is a geometric series . We call the constant ratio and the initial term .     Geometric Series Convergence Criteria   A geometric series converges to when and diverges if .      -Series   -Series   For a real number , we say that the series is a -series . We mostly will be concerned about the case where , making the terms of the series be reciprocal power functions.     -Series Convergence Criteria   A -series converges when and diverges when .    Let's divide this into four cases: when , when , when , and when .  Case 1:  Note that for with , we can write this as . Now we can consider the limit of the terms, in order to use the . Since this limit is non-zero (since it is either or 1, depending on whether or not), the series diverges by the Divergence Test.   Case 2:   When , we can apply the to the series. It is worth showing that the conditions of the test are met, but this is left up to the reader.  So now we will consider the integral as a way of seeing whether the series converges or diverges. We can note that since , that . This means that when , as well. This integral diverges, and so then does the series.   Case 3:   This is the ! This series diverges ( ).   Case 4:   We can repeat the proof from Case 2 , but we will end with a different conclusion based on the sign of the exponent! Let us, again, apply the Integral Test.  Consider the integral as a way of seeing whether the series converges or diverges. Now, though, we have which means that . This means that . So now we will consider the limit, and note that as , we get . This integral converges, and so then does the series. We remember, though, that the series converges to something different than the integral, and so we do not know what the series converges to.      Recapping Our Mathematical Objects   (Im)Possible Combinations   When we have thought about infinite series, we have thought about three different mathematical objects: the sequence of terms of the series, the sequence of partial sums of the series, and the infinite series itself. As a reminder, if we had an infinite series we can say that:    is the sequence of terms of the series     is a partial sum and is the sequence of partial sums of the series   For each of these three objects -- the terms, the partial sums, and the series -- we have some notion of what it means for that object to converge or diverge.  Consider the following table of all of the different combinations of convergence and divergence of the three objects. For each combination, decide whether this combination is possible or impossible. If it is possible, give an example of an infinite series whose terms, partial sums, and the series itself converge\/diverge appropriately. If it is impossible, give an explanation of why.   (Im)Possible Combinations       (Im)Possible?  Example or Explanation    Converges  Converges  Converges      Converges  Converges  Diverges      Converges  Diverges  Converges      Converges  Diverges  Diverges      Diverges  Converges  Converges      Diverges  Converges  Diverges      Diverges  Diverges  Converges      Diverges  Diverges  Diverges         We can think back to some results or definitions that connect pairs of these objects. Can you think of any result or definition that connects an infinite series and a sequence of partial sums? What about a result or definition that connects the sequence of terms with the infinite series?    Look back at and .     (Im)Possible Combinations    (Im)Possible?  Example or Explanation    Possible  Any converging series serves as an example.    Impossible  The sequence of partial sums and the infinite series are the same object, and so must behave in the same way.    Impossible  The sequence of partial sums and the infinite series are the same object, and so must behave in the same way.    Possible     Impossible  If the infinite series converges, then the sequence of terms must converge to 0.    Impossible  The sequence of partial sums and the infinite series are the same object, and so must behave in the same way.    Impossible  Both of the reasons, and apply here!    Possible         "
},
{
  "id": "def-GeometricSeries",
  "level": "2",
  "url": "sec-CommonSeries.html#def-GeometricSeries",
  "type": "Definition",
  "number": "8.6.1",
  "title": "Geometric Series.",
  "body": " Geometric Series   For real numbers and with , we say that the series is a geometric series . We call the constant ratio and the initial term .   "
},
{
  "id": "thm-GeometricSeries",
  "level": "2",
  "url": "sec-CommonSeries.html#thm-GeometricSeries",
  "type": "Theorem",
  "number": "8.6.2",
  "title": "Geometric Series Convergence Criteria.",
  "body": " Geometric Series Convergence Criteria   A geometric series converges to when and diverges if .   "
},
{
  "id": "def-pSeries",
  "level": "2",
  "url": "sec-CommonSeries.html#def-pSeries",
  "type": "Definition",
  "number": "8.6.3",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-Series.",
  "body": " -Series   For a real number , we say that the series is a -series . We mostly will be concerned about the case where , making the terms of the series be reciprocal power functions.   "
},
{
  "id": "thm-pSeries",
  "level": "2",
  "url": "sec-CommonSeries.html#thm-pSeries",
  "type": "Theorem",
  "number": "8.6.4",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-Series Convergence Criteria.",
  "body": " -Series Convergence Criteria   A -series converges when and diverges when .    Let's divide this into four cases: when , when , when , and when .  Case 1:  Note that for with , we can write this as . Now we can consider the limit of the terms, in order to use the . Since this limit is non-zero (since it is either or 1, depending on whether or not), the series diverges by the Divergence Test.   Case 2:   When , we can apply the to the series. It is worth showing that the conditions of the test are met, but this is left up to the reader.  So now we will consider the integral as a way of seeing whether the series converges or diverges. We can note that since , that . This means that when , as well. This integral diverges, and so then does the series.   Case 3:   This is the ! This series diverges ( ).   Case 4:   We can repeat the proof from Case 2 , but we will end with a different conclusion based on the sign of the exponent! Let us, again, apply the Integral Test.  Consider the integral as a way of seeing whether the series converges or diverges. Now, though, we have which means that . This means that . So now we will consider the limit, and note that as , we get . This integral converges, and so then does the series. We remember, though, that the series converges to something different than the integral, and so we do not know what the series converges to.   "
},
{
  "id": "act-ImpossibleCombinations",
  "level": "2",
  "url": "sec-CommonSeries.html#act-ImpossibleCombinations",
  "type": "Activity",
  "number": "8.6.1",
  "title": "(Im)Possible Combinations.",
  "body": " (Im)Possible Combinations   When we have thought about infinite series, we have thought about three different mathematical objects: the sequence of terms of the series, the sequence of partial sums of the series, and the infinite series itself. As a reminder, if we had an infinite series we can say that:    is the sequence of terms of the series     is a partial sum and is the sequence of partial sums of the series   For each of these three objects -- the terms, the partial sums, and the series -- we have some notion of what it means for that object to converge or diverge.  Consider the following table of all of the different combinations of convergence and divergence of the three objects. For each combination, decide whether this combination is possible or impossible. If it is possible, give an example of an infinite series whose terms, partial sums, and the series itself converge\/diverge appropriately. If it is impossible, give an explanation of why.   (Im)Possible Combinations       (Im)Possible?  Example or Explanation    Converges  Converges  Converges      Converges  Converges  Diverges      Converges  Diverges  Converges      Converges  Diverges  Diverges      Diverges  Converges  Converges      Diverges  Converges  Diverges      Diverges  Diverges  Converges      Diverges  Diverges  Diverges         We can think back to some results or definitions that connect pairs of these objects. Can you think of any result or definition that connects an infinite series and a sequence of partial sums? What about a result or definition that connects the sequence of terms with the infinite series?    Look back at and .     (Im)Possible Combinations    (Im)Possible?  Example or Explanation    Possible  Any converging series serves as an example.    Impossible  The sequence of partial sums and the infinite series are the same object, and so must behave in the same way.    Impossible  The sequence of partial sums and the infinite series are the same object, and so must behave in the same way.    Possible     Impossible  If the infinite series converges, then the sequence of terms must converge to 0.    Impossible  The sequence of partial sums and the infinite series are the same object, and so must behave in the same way.    Impossible  Both of the reasons, and apply here!    Possible       "
},
{
  "id": "sec-ComparisonTests",
  "level": "1",
  "url": "sec-ComparisonTests.html",
  "type": "Section",
  "number": "8.7",
  "title": "Comparison Tests",
  "body": " Comparison Tests   So far, our strategies for thinking about infinite series have been focused around drawing a connection between the infinite series we care about and some other mathematical object:   The draws a connection (even thought it's a limited one) between the terms of the series and the series itself.    The draws a (stronger) connection between the terms of, specifically, an and the series itself.    The draws a connection between the series and a corresponding integral.   Now we'll work on building the most important series convergence test mechanism: we'll draw a link between the series we care about and some other series that we already know about.  This is helpful for three reasons:   We already have a couple of types of series that we know about ( ), and we can keep adding to that list.    We can take advantage of similar structure or common term formulas when we see them to essentially say, \"This series kind of looks like one that I recognize. I wonder if they act the same?\"    We don't always have to integrate things using the Integral Test! Integrating can be hard!       Comparing Partial Sums  We're going to start by trying to do the same thing we did when we build the : show that the partial sums are monotonic and bounded and then make use of the .   Direct Comparison Test   If and are infinite series with positive terms ( and for ) with the ordering for , then:   If diverges, then also diverges.    If converges, then also converges.         Failed Comparisons      Limit Comparison   Limit Comparison Test   If and are infinite series with positive terms ( and for ), then we can consider .   If , then:   If diverges, then diverges as well.    If converges, then converges as well.       If , then:   If converges, then converges as well.    If diverges, then diverges as well.       If where is some non-zero real number, then and will either both converge or both diverge.         If is a rational function of , \\where both and are polynomial functions, then:   If , then converges.    If , then diverges.        "
},
{
  "id": "thm-DirectComparisonTest",
  "level": "2",
  "url": "sec-ComparisonTests.html#thm-DirectComparisonTest",
  "type": "Theorem",
  "number": "8.7.1",
  "title": "Direct Comparison Test.",
  "body": " Direct Comparison Test   If and are infinite series with positive terms ( and for ) with the ordering for , then:   If diverges, then also diverges.    If converges, then also converges.      "
},
{
  "id": "thm-LimitComparisonTest",
  "level": "2",
  "url": "sec-ComparisonTests.html#thm-LimitComparisonTest",
  "type": "Theorem",
  "number": "8.7.2",
  "title": "Limit Comparison Test.",
  "body": " Limit Comparison Test   If and are infinite series with positive terms ( and for ), then we can consider .   If , then:   If diverges, then diverges as well.    If converges, then converges as well.       If , then:   If converges, then converges as well.    If diverges, then diverges as well.       If where is some non-zero real number, then and will either both converge or both diverge.      "
},
{
  "id": "thm-RationalComparison",
  "level": "2",
  "url": "sec-ComparisonTests.html#thm-RationalComparison",
  "type": "Theorem",
  "number": "8.7.3",
  "title": "",
  "body": "  If is a rational function of , \\where both and are polynomial functions, then:   If , then converges.    If , then diverges.      "
},
{
  "id": "sec-RatioRootTests",
  "level": "1",
  "url": "sec-RatioRootTests.html",
  "type": "Section",
  "number": "8.8",
  "title": "The Ratio and Root Tests",
  "body": " The Ratio and Root Tests   Introduction, remind that the is super useful for rational functions and things that act like .    Eventually Geometric-ish  We'll look at series that act like geometric series, but first let's remind us what Geometric Series act like.   Reminder about Geometric Series   We are going to build some convergence tests that try to link some infinite series to the family of geometric series and show that even though a series is not geometric, it might act enough like one to be considered \"eventually geometric-ish.\"  But first, what does it mean for a series to be a geometric series?    Describe a defining characteristic of a geometric series. What makes it geometric?    Can you describe this characteristic in another way? For instance, if you described a geometric series using a characteristic about the , can you describe the same characteristic in the context of the instead? Or vice versa?   What kinds of functions do we see in the formula for the terms of a geometric series?   How do you describe how you might get from one term in a geometric series to the next one?    Write out a generalized and simplified form of the term of a geometric series explicitly and recursively. In each case, solve for , the ratio between terms.     Root Test   Let be an infinite series with for and consider .   If there is some real number with and , then the series converges.    If there is some real number with and or if does not exist, then the series diverges.    If then the Root Test fails and is inconclusive.        Ratio Test   Let be an infinite series with for and consider .   If there is some real number with and , then the series converges.    If there is some real number with and or if does not exist, then the series diverges.    If then the Root Test fails and is inconclusive.        "
},
{
  "id": "act-ReminderGeometric",
  "level": "2",
  "url": "sec-RatioRootTests.html#act-ReminderGeometric",
  "type": "Activity",
  "number": "8.8.1",
  "title": "Reminder about Geometric Series.",
  "body": " Reminder about Geometric Series   We are going to build some convergence tests that try to link some infinite series to the family of geometric series and show that even though a series is not geometric, it might act enough like one to be considered \"eventually geometric-ish.\"  But first, what does it mean for a series to be a geometric series?    Describe a defining characteristic of a geometric series. What makes it geometric?    Can you describe this characteristic in another way? For instance, if you described a geometric series using a characteristic about the , can you describe the same characteristic in the context of the instead? Or vice versa?   What kinds of functions do we see in the formula for the terms of a geometric series?   How do you describe how you might get from one term in a geometric series to the next one?    Write out a generalized and simplified form of the term of a geometric series explicitly and recursively. In each case, solve for , the ratio between terms.   "
},
{
  "id": "thm-RootTest",
  "level": "2",
  "url": "sec-RatioRootTests.html#thm-RootTest",
  "type": "Theorem",
  "number": "8.8.1",
  "title": "Root Test.",
  "body": " Root Test   Let be an infinite series with for and consider .   If there is some real number with and , then the series converges.    If there is some real number with and or if does not exist, then the series diverges.    If then the Root Test fails and is inconclusive.      "
},
{
  "id": "thm-RatioTest",
  "level": "2",
  "url": "sec-RatioRootTests.html#thm-RatioTest",
  "type": "Theorem",
  "number": "8.8.2",
  "title": "Ratio Test.",
  "body": " Ratio Test   Let be an infinite series with for and consider .   If there is some real number with and , then the series converges.    If there is some real number with and or if does not exist, then the series diverges.    If then the Root Test fails and is inconclusive.      "
},
{
  "id": "sec-PolynomialApproximation",
  "level": "1",
  "url": "sec-PolynomialApproximation.html",
  "type": "Section",
  "number": "9.1",
  "title": "Polynomial Approximations of Functions",
  "body": " Polynomial Approximations of Functions    "
},
{
  "id": "sec-TaylorSeries",
  "level": "1",
  "url": "sec-TaylorSeries.html",
  "type": "Section",
  "number": "9.2",
  "title": "Taylor Series",
  "body": " Taylor Series  Text of section.  "
},
{
  "id": "sec-PowerSeriesProperties",
  "level": "1",
  "url": "sec-PowerSeriesProperties.html",
  "type": "Section",
  "number": "9.3",
  "title": "Properties of Power Series",
  "body": " Properties of Power Series  Text of section.  "
},
{
  "id": "sec-BuildingTaylorSeries",
  "level": "1",
  "url": "sec-BuildingTaylorSeries.html",
  "type": "Section",
  "number": "9.4",
  "title": "How to Build Taylor Series",
  "body": " How to Build Taylor Series  Text of section.  "
},
{
  "id": "sec-ApplyingTaylorSeries",
  "level": "1",
  "url": "sec-ApplyingTaylorSeries.html",
  "type": "Section",
  "number": "9.5",
  "title": "How to Use Taylor Series",
  "body": " How to Use Taylor Series  Text of section.  "
},
{
  "id": "app-limits",
  "level": "1",
  "url": "app-limits.html",
  "type": "Appendix",
  "number": "A",
  "title": "More on Limits",
  "body": " More on Limits  Text here.  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
