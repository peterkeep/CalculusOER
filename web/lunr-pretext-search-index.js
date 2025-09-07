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
  "body": " Acknowledgements  There are several people that I want to thank for their help or contributions to this book.  First, thanks to Dan and Terra in the library at Moraine Valley. They've both been so supportive of the project and worked so hard to make it possible for me to find space and time to actually write the book.  In the math department at Moraine Valley, Amy, Angelina, and Lisa all were so helpful in different ways. I'm so thankful for their help with writing and editing practice problems (and solutions) and contributing their expertise to make sure that this is a teaching and learning resource first and foremost. Thanks for agreeing to help and always providing great feedback.  Thank you to the Consortium of Academic and Research Libraries in Illinois (CARLI) and the Illinois State Library for providing the opportunity through grant funding for me to write this. I've been wanting to put this type of resource together for my students for years and had never been able to find a way to carve out the time required. Your support to developing good OER practices and investment in Illinois is so appreciated.  Thanks also to the PreTeXt people: both the people behind it and the wonderful people that use it. Especially the following:   Matt Boelkins and Mitch Keller and the rest of the Active Calculus authors,    Steven Clontz and Drew Lewis and the rest of the TBIL group,    Tien Chih,    Spencer Bagley,    Oscar Levin.   I've learned so much by digging through the source code of all of your projects. Thanks so much for providing such great projects and offering up your source code for others to learn from.  And last, thank you to my students. I've loved thinking about calculus with you for so many years, and in every semester, our classes together are the highlight of my job. The way we talk about calculus together has changed over the years for the better, and I'm so thankful for your influence over how I think about calculus and how we can present calculus to people who want to learn it.  "
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
  "body": " Notes for Students  Hi! Thanks so much for reading this book! I hope it's a good and useful tool for you as you learn calculus. Before you dive into it, I want to try to explain some of the choices I made in putting this book together and how I hope you'll use it.  First, let's talk about all of the activities. In each section you'll find activities that lead into things like definitions or theorems. These are activities that I give my students to work on in groups. If you're using this independently, I hope you still engage with the activities: think about them, try to use them as ways of exploring the results or definitions before we state them. I want you to build intuition and I hope that these activities are helpful, even without the group exploration that would normally happen with them.  You might also notice that there aren't many proofs in this book. That's not extremely unique for an introductory calculus book, but there might be even fewer than expected. The ones that are included are ones that I think are important. Most of the included proofs show some of the kind of reasoning that we want students in calculus classes to see.  The last thing that I'll say is that I hope, most of all, that however you use this book and whatever parts of it you engage in, that it is useful for you. I hope that it helps you as you work to understand these wonderful groups of topics.  Thanks for letting me and my book be a part of your journey learning mathematics!  "
},
{
  "id": "sec-DefinitionOfLimits",
  "level": "1",
  "url": "sec-DefinitionOfLimits.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Definition of the Limit",
  "body": " The Definition of the Limit   We're going to start this textbook by stating a definition. This is a common practice in math classes: we need to agree upon a common definition of the mathematical objects and adjectives we are thinking about. We will state a lot of definitions in this textbook.  What I hope we will do, though, is motivate these definitions. We want to arrive at a point where it makes sense to give a name to this phenomena or object that we're thinking of. Or maybe we arrive at a point where the specifics of the definition don't just come down to us out of nowhere, but feel like reasonable and obvious things to consider.  So for now, we're going to work on defining a very important and very key mathematical object that is used in calculus: the limit.  A limit is all about closeness, so let's first interact with the idea of closeness, and then work on a definition of a limit.    Defining a Limit   Close or Not?   We're going to try to think how we might define \"close\"-ness as a property, but, more importantly, we're going to try to realize the struggle of creating definitions in a mathematical context. We want our definition to be meaningful, precise, and useful, and those are hard goals to reach! Coming to some agreement on this is a particularly tricky task.     For each of the following pairs of things, decide on which pairs you would classify as \"close\" to each other.   You, right now, and the nearest city with a population of 1 million or higher    Your two nostrils    You and the door of the room you are in    You and the person nearest you    The floor of the room you are in and the ceiling of the room you are in         For your classification of \"close,\" what does \"close\" mean? Finish the sentence: A pair of objects are close to each other if...      Let's think about how close two things would have to be in order to satisfy everyone's definition of \"close.\" Pick two objects that you think everyone would agree are \"close,\" if by \"everyone\" we meant:   All of the people in the building you are in right now.    All of the people in the city that you are in right now.    All of the people in the country that you are in right now.    Everyone, everywhere, all at once.         Let's put ourselves into the context of functions and numbers. Consider the linear function . Our goal is to find some -values that, when we put them into our function, give us -value outputs that are \"close\" to the number 2. You get to define what close means.  First, evaluate and . Are these -values \"close\" to 2, in your definition of \"close?\"      Pick five more, different, numbers that are \"close\" to 2 in your definition of \"close.\" For each one, find the -values that give you those -values.      How far away from can you go and still have -value outputs that are \"close\" to 2?     To wrap this up, think about your points that you have: you have a list of -coordinates that are clustered around where, when you evaluate at those -values, you get -values that are \"close\" to 2. Great!  Do you think others will agree? Or do you think that other people might look at your list of -values and decide that some of them aren't close to 2?  Do you think you would agree with other peoples' lists? Or you do think that you might look at other peoples' lists of -values and decide that some of them aren't close to 2?    The balance that we need to find, as we discovered in , is about being able to leave room for those with a very strict idea of what \"close\" might be. We will want to think of an idea kind of like \"infinite closeness,\" but we're not going to frame it this way: we're going to think about a function's output being so close to some specific number that literally everyone can agree. It is so close that it is within every possible definition of closeness.  The general idea is that we want to think about the behavior of a function at inputs that are near some specific input. Is there a trend with the outputs? Are they all centered around a specific value or do they differ wildly?   Limit of a Function   For the function defined at all -xalues around (except maybe at itself), we say that the limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but not equal to, . We write this as: or sometimes we write when .    We can clarify a couple of things here:   There are two types of close in this definition: arbitrarily close and sufficiently close. One of these is in references to -values being close to a number and the other is in reference to function outputs being close to a specific number.    We are concerned with the behavior of a function around, but not at, a specific -value: . We don't really care about what the function is doing at that input (if anything at all), and we already have words to describe that kind of behavior!    When we talk about -values that are near , that might reference -values that are a bit bigger than or -values that are a bit smaller than . We can be more specific by simply changing this definition to focus on only one side individually.   We can go back to and think about how we chose -values that were larger than and smaller than . Let's define these ideas a bit more formally!   Left-Sided Limit   For the function defined at all -xalues around and less than , we say that the left-sided limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but less than, . We write this as: or sometimes we write when .     Right-Sided Limit   For the function defined at all -xalues around and greater than , we say that the right-sided limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but greater than, . We write this as: or sometimes we write when .    This should lead us to our first result in this textbook. This first result will do two things:   Introduce some language that we can use when we talk about limits as well as a classification that we can apply to them.    Introduce how we will build our results throughout the course of this text. We want to discover these results as things that are required for us to talk about (and do) calculus together, and hopefully we can motivate each one beforehand.     In lieu of a formal activity, let's just review pose the following questions to think about:   Why do we put emphasis on being a number? What could happen if it wasn't?    Why do we put the emphasis on the number being a real number? What other type(s) of number could it be?    Why do we put emphasis on being a single number? How could we have the function be close to multiple real numbers?     We can look at one of the ways that we break the definition: by having two different values that the function gets close to.   Mismatched Limits   For a function , if both , then we say that  does not exist .      Approximating Limits Using Our New Definition  We have defined a new term, and now we do the typical mathematical task: define a new thing and then investigate it.   A common joke in mathematics is that we make up a guy to get mad at. It's really only kind of a joke, because it really is a pretty good description of what we do! Here, we defined a new object and now we'll think about it and find ways that it frustrates us or some other weird behavior about it. That's mathematics!   We will eventually get really good at thinking about limits and using them, but for now we just want to get familiar with them. Let's approximate these values that our function is near by looking at some pictures of graphs and some tables of function outputs.  Later on, we'll formalize this more. For now, we just want to use these pictures and tables to get familiar with what a limit even is.   Approximating Limits   For each of the following graphs of functions, approximate the limit in question. When you do so, approximate the values of the relevant one-sided limits as well.     Approximate using the graph of the function below.     A decreasing linear function with a single point removed from the line. At the x-value x=1, there is a hole on the line at y=1, and a point is located at (1,0).        Approximate using the graph of the function below.     A piecewise defined function, where the graph is split up into two sections around x=2. For x-values less than (and equal) to 2, the function is decreasing and curves downward towards a filled in point at (2,1). Then the graph drops to an open point at (2,0), where the graph is linear and increasing afterwards from that hole.        Approximate the following three limits using the graph of the function below.                      A piecewise-defined fucntion with three distinct pieces. For x-values less than -1, the graph is increasing and curves towards an open hole at (-1,0). Then, at x=-1, we have a point at (-1,1). The graph is constant at y=1 until a hole at (0,1). After this hole, it decreases from (0,1) towards and through (3,0) linearly.        Why do we say these are \"approximations\" or \"estimations\" of the limits we're interested in?      Are there any limit statements that you made that you are 100% confident in? Which ones?      Which limit statements are you least confident in? What about them makes them ones you aren't confident in?      What extra details would you like to see to increase the confidence in your estimations? Are there changes we could make to the way these functions are represented that would make these approximations better or easier to make?     It can be hard to focus on the aspects of a graph that we really care about for the purpose of a limit. Let's build a small strategy to help us think about what we're looking at. We'll start by just considering some function, . Using our definition of the as a guide, we'll make sure that it's defined around some -value, .   The function, .   The graph of a function f(x). It passes through the origin and then curves a bit in the first quadrant. There is a label for x=a on the horizontal axis.    Now we want to investigate more of our definition. We want to look at the -values that are around, but not equal to, .    The -values around .   The graph of a function f(x). Around x=a is a vertical band, representing the interval of x-values around x=a.     The -values around, but not equal to, .   The graph of a function f(x). Around x=a is a vertical band, representing the interval of x-values around x=a, and the point at x=a has been removed.     We can see that we might as well remove any point at from our graph: we are only concerned with the behavior around that -value instead of the function's behavior at it.  And now our focus can turn to the function outputs. For the -values in this interval of inputs that we've constructed, is there some common real number that the corresponding function outputs are close to? We can visualize some interval of -values. We'll think of this as a target: we want to build an interval of -values that all of the function outputs from this interval of -values land in.   The corresponding function outputs are all in the target interval of -values.   The graph of a function f(x). Around x=a is a vertical band, representing the interval of x-values around x=a, and there is a corresponding horizontal band of y-values surrounding a label y=L.    This is a pretty wide range of -values, but we can see that the graph of the function (when we limit to just the interval of -values selected) produces function outputs that exist only in that interval. We don't fill the interval, but that's fine!  What we really care about, though, is if these function outputs are all close to the same, single, real number. What we can do is look at a more strict idea of closeness in the -interval by shrinking it. In order for us to produce function outputs that are in this new, smaller, interval, we'll need to correspondingly shrink our interval of inputs to more closely surround .   The -values around, but not equal to, .   The graph of a function f(x) is highlighted in the interval of x-values. The interval of y-values is smaller, as is the interval of x-values.    In this visualization, we've also tried to focus on just the portion of our function that exists in this little intersection of intervals: we want to know what these functions values are close to, or more specifically if they are all close to the same thing. So we can de-emphasize the rest of our function!  All we're doing is working on a strategy to focus on the parts of this graph that matter: only the parts of the curve that are surrounding (but not that actual point specifically). From there, we just want to know what the function outputs are clustered around, if anything.  Let's look at this same kind of visualization for a limit that does not exist: we're going to think about the case where the one-sided limits don't match. We'll start a little further on in this visualization process: we have a function, and we can visualize an interval of -values whose function outputs land inside a target interval of -values.     The graph of a function g(x). Around x=a is a vertical band, representing the interval of x-values around x=a, and there is a corresponding horizontal band of y-values. The function itself is a piecewise function and has a big vertical gap at x=a.    We can see the problem: that vertical space between the function on the left of and the where the function values are on the right of will make it so that horizontal bar cannot get much smaller. We can disregard the point at as well as the function outside of the interval, but once try to shrink the target interval of -values, but we'll see the problem.     The graph of a function g(x). Around x=a is a vertical band, representing the interval of x-values around x=a, and there is a corresponding horizontal band of y-values. The function itself is a piecewise function and has a big vertical gap at x=a.    These function outputs are spread apart! They are not close to a single value. Instead, they're close to two! The function is close to a value on the left side, and then the function is close to a larger value on the right side. .  Now let's think about how we can approximate (and learn more about) limits using when we just think about the actual values of a function's inputs and corresponding outputs.   Approximating Limits Numerically   For each of the following tables of function values, approximate the limit in question. When you do so, approximate the values of the relevant one-sided limits as well.     Approximate using the table of values of below.        0.5  0.9  0.99  1  1.01  1.1  1.5     8.672  9.2  9.0001  -7  8.9998  9.5  7.59         Approximate using the table of values of below.        -3.5  -3.1  -3.01  -3  -2.99  -2.9  -2.5     -4.41  -3.89  -4.003  -4  7.035  2.06  -4.65         Approximate using the table of values of below.        3.1  3.14  3.141     3.142  3.15  3.2     6  6  6  undefined  5.915  6.75  8.12         Are you 100% confident about the existence (or lack of existence) of any of these limits?      What extra details would you like to see to increase the confidence in your estimations? Are there changes we could make to the way these functions are represented that would make these approximations better or easier to make?       Overall, there's a common theme here: in either representation (graphically or numerically), we're making a best guess at the behavior of the function values around a point. We have limited information in these estimations, and so we're doing the best we can: in graphs, we're trying our best to make sense of the lack of precision in in the scales of our visual, and in the numerical tables we are only given a limited number of points to think about. In both cases, we are hoping to see more information to add more confidence to these estimations.  We want to make the jump from estimating these limits to evaluating them, and for that to happen, we'll need to add more information and more precision about the behavior of our function.     Explain in your own words the meaning of: .    Explain in your own words the meaning of: .    Explain in your own words the meaning of: .     Say we know that and . What do we know (specifically or in general, if anything) about each of the following?          We do not know anything about the value of , including whether or not there is such a vale.           The value of should be close to the number . We do not know exactly what the value is, though.           The value of should be close to the number . We do not know exactly what the value is, though.           Since both the left and the right sided limits are the same single, real number (2), so is the limit: .       Which of the following is possible? Explain why or why not, and any other conclusions that we can draw.     For some function , and     This is possible.      For some function , and .    This is possible, although it means that does not exist.      For some function , and .    This is not possible, since for we would need and .      For some function , does not exist, , and .    This is possible.      For some function , while does not exist.    This is possible.       Fill in the following tables in order to satisfy the requirements listed. Afterwards, include a sentence or two justifying your choices.      Requirements:                               Requirements:  , , and doesn't exist.                             Requirements:  does not exist and                              Requirements:  and .                             From the following tables, estimate\/report each of the requested values. Explain your choices.      Requested:  , , , and                            Estimated:                   Reported:         Requested:  , , , and                            Estimated:               doesn't exist    Reported:         Requested:  , , , and                   does not exist          Estimated:                   Reported:  does not exist       For each of the listed requirements, sketch a graph of a function that satisfies each. Afterwards, include a sentence or two justifying you sketch.      Requirements:  , , , and does not exist.       Requirements:  , , and does not exist.       Requirements:  , , , and .       From the graph of below, estimate of each of the requested values. Explain each of your choices.   The function .   A piecwise defined function. It is linear, traveling upwards towards a closed point at (-2,0). Then, at an open point at (-2,1), it is constant until an open point at (1,1). There is a closed point at (1,-1). The function continues at the open point at (1,1) in a parabolic shape, decreasing towards (2,0) where it turns and increases.                                     doesn't exist, since the left and right sided limits don't match.                                                                                                                  "
},
{
  "id": "act-CloseOrNot",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#act-CloseOrNot",
  "type": "Activity",
  "number": "1.1.1",
  "title": "Close or Not?",
  "body": " Close or Not?   We're going to try to think how we might define \"close\"-ness as a property, but, more importantly, we're going to try to realize the struggle of creating definitions in a mathematical context. We want our definition to be meaningful, precise, and useful, and those are hard goals to reach! Coming to some agreement on this is a particularly tricky task.     For each of the following pairs of things, decide on which pairs you would classify as \"close\" to each other.   You, right now, and the nearest city with a population of 1 million or higher    Your two nostrils    You and the door of the room you are in    You and the person nearest you    The floor of the room you are in and the ceiling of the room you are in         For your classification of \"close,\" what does \"close\" mean? Finish the sentence: A pair of objects are close to each other if...      Let's think about how close two things would have to be in order to satisfy everyone's definition of \"close.\" Pick two objects that you think everyone would agree are \"close,\" if by \"everyone\" we meant:   All of the people in the building you are in right now.    All of the people in the city that you are in right now.    All of the people in the country that you are in right now.    Everyone, everywhere, all at once.         Let's put ourselves into the context of functions and numbers. Consider the linear function . Our goal is to find some -values that, when we put them into our function, give us -value outputs that are \"close\" to the number 2. You get to define what close means.  First, evaluate and . Are these -values \"close\" to 2, in your definition of \"close?\"      Pick five more, different, numbers that are \"close\" to 2 in your definition of \"close.\" For each one, find the -values that give you those -values.      How far away from can you go and still have -value outputs that are \"close\" to 2?     To wrap this up, think about your points that you have: you have a list of -coordinates that are clustered around where, when you evaluate at those -values, you get -values that are \"close\" to 2. Great!  Do you think others will agree? Or do you think that other people might look at your list of -values and decide that some of them aren't close to 2?  Do you think you would agree with other peoples' lists? Or you do think that you might look at other peoples' lists of -values and decide that some of them aren't close to 2?   "
},
{
  "id": "def-Limit",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#def-Limit",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Limit of a Function.",
  "body": " Limit of a Function   For the function defined at all -xalues around (except maybe at itself), we say that the limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but not equal to, . We write this as: or sometimes we write when .   "
},
{
  "id": "def-LeftSidedLimit",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#def-LeftSidedLimit",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Left-Sided Limit.",
  "body": " Left-Sided Limit   For the function defined at all -xalues around and less than , we say that the left-sided limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but less than, . We write this as: or sometimes we write when .   "
},
{
  "id": "def-RightSidedLimit",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#def-RightSidedLimit",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Right-Sided Limit.",
  "body": " Right-Sided Limit   For the function defined at all -xalues around and greater than , we say that the right-sided limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but greater than, . We write this as: or sometimes we write when .   "
},
{
  "id": "thm-LimitExistence",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#thm-LimitExistence",
  "type": "Theorem",
  "number": "1.1.4",
  "title": "Mismatched Limits.",
  "body": " Mismatched Limits   For a function , if both , then we say that  does not exist .   "
},
{
  "id": "act-ApproximatingLimitsGraphically",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#act-ApproximatingLimitsGraphically",
  "type": "Activity",
  "number": "1.1.2",
  "title": "Approximating Limits.",
  "body": " Approximating Limits   For each of the following graphs of functions, approximate the limit in question. When you do so, approximate the values of the relevant one-sided limits as well.     Approximate using the graph of the function below.     A decreasing linear function with a single point removed from the line. At the x-value x=1, there is a hole on the line at y=1, and a point is located at (1,0).        Approximate using the graph of the function below.     A piecewise defined function, where the graph is split up into two sections around x=2. For x-values less than (and equal) to 2, the function is decreasing and curves downward towards a filled in point at (2,1). Then the graph drops to an open point at (2,0), where the graph is linear and increasing afterwards from that hole.        Approximate the following three limits using the graph of the function below.                      A piecewise-defined fucntion with three distinct pieces. For x-values less than -1, the graph is increasing and curves towards an open hole at (-1,0). Then, at x=-1, we have a point at (-1,1). The graph is constant at y=1 until a hole at (0,1). After this hole, it decreases from (0,1) towards and through (3,0) linearly.        Why do we say these are \"approximations\" or \"estimations\" of the limits we're interested in?      Are there any limit statements that you made that you are 100% confident in? Which ones?      Which limit statements are you least confident in? What about them makes them ones you aren't confident in?      What extra details would you like to see to increase the confidence in your estimations? Are there changes we could make to the way these functions are represented that would make these approximations better or easier to make?    "
},
{
  "id": "fig-LimitGraph1-1",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#fig-LimitGraph1-1",
  "type": "Figure",
  "number": "1.1.8",
  "title": "",
  "body": " The function, .   The graph of a function f(x). It passes through the origin and then curves a bit in the first quadrant. There is a label for x=a on the horizontal axis.   "
},
{
  "id": "LimitGraph1-2",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#LimitGraph1-2",
  "type": "Figure",
  "number": "1.1.9",
  "title": "",
  "body": " The -values around .   The graph of a function f(x). Around x=a is a vertical band, representing the interval of x-values around x=a.   "
},
{
  "id": "LimitGraph1-3",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#LimitGraph1-3",
  "type": "Figure",
  "number": "1.1.10",
  "title": "",
  "body": " The -values around, but not equal to, .   The graph of a function f(x). Around x=a is a vertical band, representing the interval of x-values around x=a, and the point at x=a has been removed.   "
},
{
  "id": "LimitGraph1-4",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#LimitGraph1-4",
  "type": "Figure",
  "number": "1.1.11",
  "title": "",
  "body": " The corresponding function outputs are all in the target interval of -values.   The graph of a function f(x). Around x=a is a vertical band, representing the interval of x-values around x=a, and there is a corresponding horizontal band of y-values surrounding a label y=L.   "
},
{
  "id": "LimitGraph1-5",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#LimitGraph1-5",
  "type": "Figure",
  "number": "1.1.12",
  "title": "",
  "body": " The -values around, but not equal to, .   The graph of a function f(x) is highlighted in the interval of x-values. The interval of y-values is smaller, as is the interval of x-values.   "
},
{
  "id": "LimitGraph2-1",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#LimitGraph2-1",
  "type": "Figure",
  "number": "1.1.13",
  "title": "",
  "body": "   The graph of a function g(x). Around x=a is a vertical band, representing the interval of x-values around x=a, and there is a corresponding horizontal band of y-values. The function itself is a piecewise function and has a big vertical gap at x=a.   "
},
{
  "id": "LimitGraph2-2",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#LimitGraph2-2",
  "type": "Figure",
  "number": "1.1.14",
  "title": "",
  "body": "   The graph of a function g(x). Around x=a is a vertical band, representing the interval of x-values around x=a, and there is a corresponding horizontal band of y-values. The function itself is a piecewise function and has a big vertical gap at x=a.   "
},
{
  "id": "act-ApproximateLimitsNumerically",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#act-ApproximateLimitsNumerically",
  "type": "Activity",
  "number": "1.1.3",
  "title": "Approximating Limits Numerically.",
  "body": " Approximating Limits Numerically   For each of the following tables of function values, approximate the limit in question. When you do so, approximate the values of the relevant one-sided limits as well.     Approximate using the table of values of below.        0.5  0.9  0.99  1  1.01  1.1  1.5     8.672  9.2  9.0001  -7  8.9998  9.5  7.59         Approximate using the table of values of below.        -3.5  -3.1  -3.01  -3  -2.99  -2.9  -2.5     -4.41  -3.89  -4.003  -4  7.035  2.06  -4.65         Approximate using the table of values of below.        3.1  3.14  3.141     3.142  3.15  3.2     6  6  6  undefined  5.915  6.75  8.12         Are you 100% confident about the existence (or lack of existence) of any of these limits?      What extra details would you like to see to increase the confidence in your estimations? Are there changes we could make to the way these functions are represented that would make these approximations better or easier to make?    "
},
{
  "id": "ex-DefinitionOfLimits-1",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#ex-DefinitionOfLimits-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Explain in your own words the meaning of: .  "
},
{
  "id": "ex-DefinitionOfLimits-2",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#ex-DefinitionOfLimits-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Explain in your own words the meaning of: .  "
},
{
  "id": "ex-DefinitionOfLimits-3",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#ex-DefinitionOfLimits-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Explain in your own words the meaning of: .  "
},
{
  "id": "ex-DefinitionOfLimits-4",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#ex-DefinitionOfLimits-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Say we know that and . What do we know (specifically or in general, if anything) about each of the following?          We do not know anything about the value of , including whether or not there is such a vale.           The value of should be close to the number . We do not know exactly what the value is, though.           The value of should be close to the number . We do not know exactly what the value is, though.           Since both the left and the right sided limits are the same single, real number (2), so is the limit: .    "
},
{
  "id": "ex-DefinitionOfLimits-5",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#ex-DefinitionOfLimits-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Which of the following is possible? Explain why or why not, and any other conclusions that we can draw.     For some function , and     This is possible.      For some function , and .    This is possible, although it means that does not exist.      For some function , and .    This is not possible, since for we would need and .      For some function , does not exist, , and .    This is possible.      For some function , while does not exist.    This is possible.    "
},
{
  "id": "ex-DefinitionOfLimits-6",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#ex-DefinitionOfLimits-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Fill in the following tables in order to satisfy the requirements listed. Afterwards, include a sentence or two justifying your choices.      Requirements:                               Requirements:  , , and doesn't exist.                             Requirements:  does not exist and                              Requirements:  and .                          "
},
{
  "id": "ex-DefinitionOfLimits-7",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#ex-DefinitionOfLimits-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  From the following tables, estimate\/report each of the requested values. Explain your choices.      Requested:  , , , and                            Estimated:                   Reported:         Requested:  , , , and                            Estimated:               doesn't exist    Reported:         Requested:  , , , and                   does not exist          Estimated:                   Reported:  does not exist    "
},
{
  "id": "ex-DefinitionOfLimits-8",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#ex-DefinitionOfLimits-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  For each of the listed requirements, sketch a graph of a function that satisfies each. Afterwards, include a sentence or two justifying you sketch.      Requirements:  , , , and does not exist.       Requirements:  , , and does not exist.       Requirements:  , , , and .    "
},
{
  "id": "ex-DefinitionOfLimits-9",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#ex-DefinitionOfLimits-9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  From the graph of below, estimate of each of the requested values. Explain each of your choices.   The function .   A piecwise defined function. It is linear, traveling upwards towards a closed point at (-2,0). Then, at an open point at (-2,1), it is constant until an open point at (1,1). There is a closed point at (1,-1). The function continues at the open point at (1,1) in a parabolic shape, decreasing towards (2,0) where it turns and increases.                                     doesn't exist, since the left and right sided limits don't match.                                                                                                                "
},
{
  "id": "sec-EvaluatingLimits",
  "level": "1",
  "url": "sec-EvaluatingLimits.html",
  "type": "Section",
  "number": "1.2",
  "title": "Evaluating Limits",
  "body": " Evaluating Limits   Adding Precision to Our Estimations   From Estimating to Evaluating Limits (Part 1)   Let's consider the following graphs of functions and .    The function decreases linearly towards (1,1), but has a hole there. After the holw the function increases away from this point. There is a point above the curve at (1,3).   Graph of the function .     The graph increases until (1,3) and then decreases down to the filled in point at (2,2). There is a jump down towards an open point at (2,1). The function continues decreasing from here until (3,0), where it starts increasing again.   Graph of the function .        Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                       Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                       Find the values of and .      For the limits and function values above, which of these are you most confident in? What about the limit, function value, or graph of the function makes you confident about your answer?  Similarly, which of these are you the least confident in? What about the limit, function value, or graph of the function makes you not have confidence in your answer?     We're going to repeat this process, but with a slight change to the representation of each function. Hopefully this will be illuminating in our attempt to add more precision to our estimations.   From Estimating to Evaluating Limits (Part 2)   Let's consider the following graphs of functions and , now with the added labels of the equations defining each part of these functions.    The function decreases linearly towards (1,1), but has a hole there. After the holw the function increases away from this point. There is a point above the curve at (1,3). The graph also has the function labeled on it: y=2-x when x is less than 1, and y = x^2\/4 - x\/2 + 5\/4 when x is greater than 1.   Graph of the function .     The graph increases until (1,3) and then decreases down to the filled in point at (2,2). There is a jump down towards an open point at (2,1). The function continues decreasing from here until (3,0), where it starts increasing again. The graph also has the function labeled on it: y=3-(x-1)^2 when x is less than or equal to 2, and y=(x-3)^2 when x is greater than 2.   Graph of the function .        Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                       Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                       Does the addition of the function rules change the level of confidence you have in these answers? What limits are you more confident in with this added information?      Consider these functions without their graphs:  Find the limits and . Compare these values of and : are they related at all?     These two examples are hopefully helpful for us to see that when we are given the actual rule for a function that connects to the corresponding output , we are able to move past estimation. We suddenly have whatever level of precision we'd like, since we can immediately see what is happening with every input to produce the corresponding output.  In order for us to formalize this evaluation of limits, we're going to think about some properties of this limit object.    Limit Properties   Combinations of Functions   We want to remind ourselves how we can combine functions using different operations, and how we might find outputs based on the different combinations. Our goal is to then think about how this might work with limits: how can we summarize the behavior of combinations of functions around some point?  Let's consider some functions and . We'll say that the domain of both functions is for our own convenience.     Let's consider the function . Describe at least two different ways of finding the value of .    You might think about writing out a function rule for . But can you also find without ever writing out a rule for ?       Since , we can evaluate by:     Since , we can evaluate by:          If we instead define the function , how would you describe at least two different ways of finding the value of ?      What about a scaled version of one of these functions? If we let and , can you describe more than one way to find the value of and ?      You can probably guess where we're going: we're going to define a function that is the product of and : . Describe more than one way of evaluating .      And finally, let's define . Now describe more than one way of finding .      If , then are there any -values that are in the domain of and (the domain is ) that cannot be defined for? Why?     Ok, we can confront this big idea: when we combine functions, we can either evaluate the combination of the functions at some -value or evaluate each function separately and just combine the answers! Of course, there are some limitations (like when the combination isn't nicely defined because of division by 0 or something else), but this is a good framework to move forward with!    Maybe this activity was obvious for you, but it might not have been! This isn't something that we always think about with functions, even if (deep down) we know it to be true.  A nice extension that we can make is that moving past functions evaluated at a specific -value towards descriptions of the behavior of functions around that specific -value.  We'll apply this same kind of thinking (combining things by looking at each piece individually first, and then combining the answers together) to limits of combinations of functions.   Combinations of Limits   If and are two functions defined at -values around, but maybe not at, and and both exist, then we can evaluate limits of combinations of these functions.    Sums: The limit of the sum of and is the sum of the limits of and :      Differences: The limit of a difference of and is the difference of the limits of and :      Coefficients: If is some real number coefficient, then:      Products: The limit of a product of and is the product of the limits of and :      Quotients: The limit of a quotient of and is the quotient of the limits of and (provided that you do not divide by 0):        We can summarize these properties: when we are thinking about our basic operations on functions, we can evaluate limits by just looking at the limits of each component function individually and then piecing those individual limit values back together.  This kind of structural building-block behavior is a really important one in mathematics. Whenever we define some new mathematical object, properties like this are typically good ideas for us to check in order to learn more about the object we've defined.  Ok, let's move on. We're going to turn our attention to something more concrete. We're going to think of two function types: constant functions and the identity function.    Limits of Two Basic Functions   Let be some real number.    Limit of a Constant Function: If is some real number constant, then:      Limit of the Identity Function:         These two functions might seem pretty simplistic (most functions that we think of are more complicated than these), but we can use these to build more functions!   Limits of Polynomial Functions   We're going to use a combination of properties from and to think a bit more deeply about polynomial functions. Let's consider a polynomial function:      We're going to evaluate the limit . First, use the properties from to re-write this limit as 4 different limits added or subtracted together.           Now, for each of these limits, re-write them as products of things until you have only limits of constants and identity functions, as in . Evaluate your limits.           Based on the definition of a limit ( ), we normally say that is not dependent on the value of . Why do we say this?      Compare the values of and . Why do these values feel connected?      Come up with a new polynomial function: some combination of coefficients with 's raised to natural number exponents. Call your new polynomial function . Evaluate and compare the value to . Explain why these values are the same.      Explain why, for any polynomial function , the limit is the same value as .     This leads us to an important result about a whole class of functions: polynomials! We can (finally) evaluate the limit of a polynomial without having to think too carefully about the distinction between the behavior of the function around  and the behavior of the function at  .   Limits of Polynomials   If is a polynomial function and is some real number, then:     This result really just says that polynomials are friendly functions for limits: sure, a limit is really about the behavior of the function outputs around but not at , but for polynomial functions, specifically, we can wave our hands and say Ah, who cares, it's all the same anyways!     Some questions that we might ask:   Are there other functions that have the same nice result about them that says for polynomials?    Are there some typical functions that we'll work with where this result doesn't work (and we actually have to be aware of the behavior around a point instead of at it)?    What are we even going to use these limits for, anyways? Why do we care about these?   The answers to these questions will come slowly but surely, and we'll hopefully be able to start using these limits as a tool to think about more interesting and important topics soon: we just need to make sure we're familiar with them first.      Given and , evaluate the following limits. If the limit doesn't exist, explain why. Write out a few steps and explanations to justify your work.                           Evaluate each limit. Justify your answers.                    where is some real number                            Evaluate each limit. If the limit does not exist, explain why not.     Let .  Evaluate , , and .      Let .  Evaluate , , and .      Let .  Evaluate , , and       Let .  Evaluate , , and .      "
},
{
  "id": "act-EstimatingToEvaluating-1",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#act-EstimatingToEvaluating-1",
  "type": "Activity",
  "number": "1.2.1",
  "title": "From Estimating to Evaluating Limits (Part 1).",
  "body": " From Estimating to Evaluating Limits (Part 1)   Let's consider the following graphs of functions and .    The function decreases linearly towards (1,1), but has a hole there. After the holw the function increases away from this point. There is a point above the curve at (1,3).   Graph of the function .     The graph increases until (1,3) and then decreases down to the filled in point at (2,2). There is a jump down towards an open point at (2,1). The function continues decreasing from here until (3,0), where it starts increasing again.   Graph of the function .        Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                       Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                       Find the values of and .      For the limits and function values above, which of these are you most confident in? What about the limit, function value, or graph of the function makes you confident about your answer?  Similarly, which of these are you the least confident in? What about the limit, function value, or graph of the function makes you not have confidence in your answer?    "
},
{
  "id": "act-EstimatingToEvaluating-2",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#act-EstimatingToEvaluating-2",
  "type": "Activity",
  "number": "1.2.2",
  "title": "From Estimating to Evaluating Limits (Part 2).",
  "body": " From Estimating to Evaluating Limits (Part 2)   Let's consider the following graphs of functions and , now with the added labels of the equations defining each part of these functions.    The function decreases linearly towards (1,1), but has a hole there. After the holw the function increases away from this point. There is a point above the curve at (1,3). The graph also has the function labeled on it: y=2-x when x is less than 1, and y = x^2\/4 - x\/2 + 5\/4 when x is greater than 1.   Graph of the function .     The graph increases until (1,3) and then decreases down to the filled in point at (2,2). There is a jump down towards an open point at (2,1). The function continues decreasing from here until (3,0), where it starts increasing again. The graph also has the function labeled on it: y=3-(x-1)^2 when x is less than or equal to 2, and y=(x-3)^2 when x is greater than 2.   Graph of the function .        Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                       Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                       Does the addition of the function rules change the level of confidence you have in these answers? What limits are you more confident in with this added information?      Consider these functions without their graphs:  Find the limits and . Compare these values of and : are they related at all?    "
},
{
  "id": "act-CombinationsOfFunctions",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#act-CombinationsOfFunctions",
  "type": "Activity",
  "number": "1.2.3",
  "title": "Combinations of Functions.",
  "body": " Combinations of Functions   We want to remind ourselves how we can combine functions using different operations, and how we might find outputs based on the different combinations. Our goal is to then think about how this might work with limits: how can we summarize the behavior of combinations of functions around some point?  Let's consider some functions and . We'll say that the domain of both functions is for our own convenience.     Let's consider the function . Describe at least two different ways of finding the value of .    You might think about writing out a function rule for . But can you also find without ever writing out a rule for ?       Since , we can evaluate by:     Since , we can evaluate by:          If we instead define the function , how would you describe at least two different ways of finding the value of ?      What about a scaled version of one of these functions? If we let and , can you describe more than one way to find the value of and ?      You can probably guess where we're going: we're going to define a function that is the product of and : . Describe more than one way of evaluating .      And finally, let's define . Now describe more than one way of finding .      If , then are there any -values that are in the domain of and (the domain is ) that cannot be defined for? Why?     Ok, we can confront this big idea: when we combine functions, we can either evaluate the combination of the functions at some -value or evaluate each function separately and just combine the answers! Of course, there are some limitations (like when the combination isn't nicely defined because of division by 0 or something else), but this is a good framework to move forward with!   "
},
{
  "id": "thm-CombinationsOfLimits",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#thm-CombinationsOfLimits",
  "type": "Theorem",
  "number": "1.2.5",
  "title": "Combinations of Limits.",
  "body": " Combinations of Limits   If and are two functions defined at -values around, but maybe not at, and and both exist, then we can evaluate limits of combinations of these functions.    Sums: The limit of the sum of and is the sum of the limits of and :      Differences: The limit of a difference of and is the difference of the limits of and :      Coefficients: If is some real number coefficient, then:      Products: The limit of a product of and is the product of the limits of and :      Quotients: The limit of a quotient of and is the quotient of the limits of and (provided that you do not divide by 0):       "
},
{
  "id": "thm-LimitsOfTwoFunctions",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#thm-LimitsOfTwoFunctions",
  "type": "Theorem",
  "number": "1.2.6",
  "title": "Limits of Two Basic Functions.",
  "body": " Limits of Two Basic Functions   Let be some real number.    Limit of a Constant Function: If is some real number constant, then:      Limit of the Identity Function:        "
},
{
  "id": "act-LimitsOfPolynomials",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#act-LimitsOfPolynomials",
  "type": "Activity",
  "number": "1.2.4",
  "title": "Limits of Polynomial Functions.",
  "body": " Limits of Polynomial Functions   We're going to use a combination of properties from and to think a bit more deeply about polynomial functions. Let's consider a polynomial function:      We're going to evaluate the limit . First, use the properties from to re-write this limit as 4 different limits added or subtracted together.           Now, for each of these limits, re-write them as products of things until you have only limits of constants and identity functions, as in . Evaluate your limits.           Based on the definition of a limit ( ), we normally say that is not dependent on the value of . Why do we say this?      Compare the values of and . Why do these values feel connected?      Come up with a new polynomial function: some combination of coefficients with 's raised to natural number exponents. Call your new polynomial function . Evaluate and compare the value to . Explain why these values are the same.      Explain why, for any polynomial function , the limit is the same value as .    "
},
{
  "id": "thm-LimitsOfPolynomials",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#thm-LimitsOfPolynomials",
  "type": "Theorem",
  "number": "1.2.7",
  "title": "Limits of Polynomials.",
  "body": " Limits of Polynomials   If is a polynomial function and is some real number, then:    "
},
{
  "id": "ex-EvaluatingLimits-1",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#ex-EvaluatingLimits-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Given and , evaluate the following limits. If the limit doesn't exist, explain why. Write out a few steps and explanations to justify your work.                        "
},
{
  "id": "ex-EvaluatingLimits-2",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#ex-EvaluatingLimits-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Evaluate each limit. Justify your answers.                    where is some real number                         "
},
{
  "id": "ex-EvaluatingLimits-3",
  "level": "2",
  "url": "sec-EvaluatingLimits.html#ex-EvaluatingLimits-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Evaluate each limit. If the limit does not exist, explain why not.     Let .  Evaluate , , and .      Let .  Evaluate , , and .      Let .  Evaluate , , and       Let .  Evaluate , , and .    "
},
{
  "id": "sec-IndeterminateForms",
  "level": "1",
  "url": "sec-IndeterminateForms.html",
  "type": "Section",
  "number": "1.3",
  "title": "First Indeterminate Forms",
  "body": " First Indeterminate Forms   We're going to really focus on one of the main aspects of a limit in this next activity. The activity should serve two purposes:   We'll review a really important property or aspect of what a limit is!    We'll look at this thing that we already know from a slightly different perspective (or maybe just a specific perspective), and we'll discover a really important and helpful result from it!      Limits of (Slightly) Different Functions    Using the graph of below, approximate .   A graph of a decreasing function down to an open hole at (1,1). There is a point above the curve at (1,3). The graph continues from (1,1) and increases up to (3,3) where it begins decreasing.          Using the graph of the slightly different function below, approximate .   A graph of a decreasing function down to an open hole at (1,1). There is a point below the curve at (1,-1). The graph continues from (1,1) and increases up to (3,3) where it begins decreasing. It is the same graph as the function f(x) above other than the point at (1,3) being at (1,-1).          Compare the values of and and discuss the impact that this difference had on the values of the limits.      For the function defined below, evaluate the limit .       For the slightly different function defined below, evaluate the limit .       Do the changes in the way that the function was defined impact the evaluation of the limit at all? Why not?     This is an important thing to notice: we can change our function by changing the value of the function at without changing the value of the limit as .   Limits of (Slightly) Different Functions   If and are two functions defined at -values around (but maybe not at itself) with for the -values around but with then , if the limits exist.    Why will this be helpful? At the end of we found that some functions (polynomials) are great: the limit of these functions is the same as the function value at the point ( ). This is a special case, and many functions won't be so nice to work with. But maybe we could use to swap out an annoying-to-work-with function for a nice-to-work-with function!    A First Introduction to Indeterminate Forms  So before we begin applying this result, we will focus on a situation where we need it. We're going to do something strange: define a situation before we experience it.   Indeterminate Form   We say that a limit has an indeterminate form if the general structure of the limit could take on any different value, or not exist, depending on the specific circumstances.  For instance, if and , then we say that the limit has an indeterminate form. We typically denote this using the informal symbol , as in: .    Ok, so why do we need this definition? What does the word indeterminate even mean, here?  We're going to see in this next activity that this kind of form of a limit can actually lead to very different behavior: we call it indeterminate because we cannot determine, based solely on the form , what the limit is or even if it will exist.     Were going to evaluate .   First, check that we get the indeterminate form when .    Now we want to find a new function that is equivalent to for all -values other than . Try factoring the numerator, . What do you notice?    \"Cancel\" out any factors that show up in the numerator and denominator. Make a special note about what that factor is.    This function is equivalent to except at . The difference is that this function has an actual function output at , while doesn't. Evaluate the limit as for your new function.         Now we'll evaluate a new limit: .   First, check that we get the indeterminate form when .    Now we want a new function that is equivalent to for all -values other than . Try multiplying the numerator and the denominator by . We'll call this the \"conjugate\" of the numerator.    In your multiplication, confirm that .    Try to factor the new numerator and denominator. Do you notice anything? Can you \"cancel\" anything? Make another note of what factor(s) you cancel.    This function is equivalent to except at . The difference is that this function has an actual function output at , while doesn't. Evaluate the limit as for your new function.         Our last limit in this activity is going to be .   Again, check to see that we get the indeterminate form when .    Again, we want a new function that is equivalent to for all -values other than . Try completing the subtraction in the numerator, , using \"common denominators.\"    Try to factor the new numerator and denominator(s). Do you notice anything? Can you \"cancel\" anything? Make another note of what factor(s) you cancel.    For the final time, we've found a function that is equivalent to except at . The difference is that this function has an actual function output at , while doesn't. Evaluate the limit as for your new function.         In each of the previous limits, we ended up finding a factor that was shared in the numerator and denominator to cancel. Think back to each example and the factor you found. Why is it clear that these must have been the factors we found to cancel?      Let's say we have some new function where . You know, based on these examples, that you're going to apply some algebra trick to re-write your function, factor, and cancel. Can you predict what you will end up looking for to cancel in the numerator and denominator? Why?     This is great: we're applying because in each algebraic manipulation, we change the domain of the function by removing some factor from the denominator!  These three algebra tricks are all we'll look at for now. In reality, there are plenty of little tricky manipulations we can use to slightly change functions, but if we focused on trying to build one for every situation we could run into, we'd spend the rest of this text just outlining different algebra tricks for different situations.   Algebra Tricks for Indeterminate Forms  For limits with the indeterminate form, we can apply the following algebraic tricks:    Factor and cancel: This works well when we have polynomials divided by polynomials.     Conjugates: This works well when we have some difference of square roots in the numerator or denominator.     Combine fractions with common denominators: This works well when we have some subtraction with fractions inside of a numerator or denominator of another fraction.        What if There Is No Algebra Trick?  We've seen some nice examples above where we were able to use some algebra to manipulate functions in such was as to force some shared factor in the numerator and denominator into revealing itself. From there, we were able to apply and swap out our problematic function with a new one, knowing that the limit would be the same.  But what if we can't do that? What if the specific structure of the function seems resistent somehow to our attempts at wielding algebra?  This happens a lot, and we'll investigate some more of those types of limits in . For now, though, let's look at a very famous limit and reason our way through the indeterminate form.    Let's consider a new limit: . This one is strange!     Notice that this function, , is resistent to our algebra tricks:   There's nothing to \"factor\" here, since our trigonometric function is not a polynomial.    We can't use a trick like the \"conjugate\" to multiply and re-write, since there's no square roots and also only one term in the numerator.    There aren't any fractions that we can combine by addition or subtraction.         Be frustrated at this new limit for resisting our algebra tricks.      Now let's think about the meaning of and even in general. In this text, we will often use Greek letters, like , to represent angles. In general, these angles will be measured in radians (unless otherwise specified). So what does the sine function do or tell us ? What is a radian?    On the unit circle, if we plot some point at an angle of , then the coordinates of that point can be represented with trig functions! Which ones?    The length of the curve defining a unit circle is . This also corresponds to the angle we would use to represent moving all the way around the circle. What must the length of the portion of the circle be up to some point at an angle ?      Let's visualize our limit, then, by comparing the length of the arc and the height of the point as .       Explain to yourself, until you are absolutely certain, why the two lengths must be the same in the limit as . What does this mean about ?         Explain, in your own words, why is true.      Consider the following limit: .     Confirm that this limit has an indeterminate form.      Evaluate the limit.      When you were evaluating the limit, you likely cancelled a factor of from the numerator and denominator. Why might you have known, before factoring anything, that would be a factor shared in the numerator and denominator?  For instance, how did you know it wasn't going to be or or something else?       Consider the following limit: .     Confirm that this limit has an indeterminate form.      Evaluate the limit.      When you were evaluating the limit, you likely cancelled a factor of from the numerator and denominator. Why might you have known, before factoring anything, that would be a factor shared in the numerator and denominator?  For instance, how did you know it wasn't going to be or or something else?       Use the algebra tricks from to evaluate each limit.                                         where is some non-negative real number                     where is some real number      "
},
{
  "id": "act-SlightlyDifferentFunctions",
  "level": "2",
  "url": "sec-IndeterminateForms.html#act-SlightlyDifferentFunctions",
  "type": "Activity",
  "number": "1.3.1",
  "title": "Limits of (Slightly) Different Functions.",
  "body": " Limits of (Slightly) Different Functions    Using the graph of below, approximate .   A graph of a decreasing function down to an open hole at (1,1). There is a point above the curve at (1,3). The graph continues from (1,1) and increases up to (3,3) where it begins decreasing.          Using the graph of the slightly different function below, approximate .   A graph of a decreasing function down to an open hole at (1,1). There is a point below the curve at (1,-1). The graph continues from (1,1) and increases up to (3,3) where it begins decreasing. It is the same graph as the function f(x) above other than the point at (1,3) being at (1,-1).          Compare the values of and and discuss the impact that this difference had on the values of the limits.      For the function defined below, evaluate the limit .       For the slightly different function defined below, evaluate the limit .       Do the changes in the way that the function was defined impact the evaluation of the limit at all? Why not?    "
},
{
  "id": "thm-SlightlyDifferentFunctions",
  "level": "2",
  "url": "sec-IndeterminateForms.html#thm-SlightlyDifferentFunctions",
  "type": "Theorem",
  "number": "1.3.3",
  "title": "Limits of (Slightly) Different Functions.",
  "body": " Limits of (Slightly) Different Functions   If and are two functions defined at -values around (but maybe not at itself) with for the -values around but with then , if the limits exist.   "
},
{
  "id": "def-IndeterminateForm",
  "level": "2",
  "url": "sec-IndeterminateForms.html#def-IndeterminateForm",
  "type": "Definition",
  "number": "1.3.4",
  "title": "Indeterminate Form.",
  "body": " Indeterminate Form   We say that a limit has an indeterminate form if the general structure of the limit could take on any different value, or not exist, depending on the specific circumstances.  For instance, if and , then we say that the limit has an indeterminate form. We typically denote this using the informal symbol , as in: .   "
},
{
  "id": "act-IndeterminateForms",
  "level": "2",
  "url": "sec-IndeterminateForms.html#act-IndeterminateForms",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": "   Were going to evaluate .   First, check that we get the indeterminate form when .    Now we want to find a new function that is equivalent to for all -values other than . Try factoring the numerator, . What do you notice?    \"Cancel\" out any factors that show up in the numerator and denominator. Make a special note about what that factor is.    This function is equivalent to except at . The difference is that this function has an actual function output at , while doesn't. Evaluate the limit as for your new function.         Now we'll evaluate a new limit: .   First, check that we get the indeterminate form when .    Now we want a new function that is equivalent to for all -values other than . Try multiplying the numerator and the denominator by . We'll call this the \"conjugate\" of the numerator.    In your multiplication, confirm that .    Try to factor the new numerator and denominator. Do you notice anything? Can you \"cancel\" anything? Make another note of what factor(s) you cancel.    This function is equivalent to except at . The difference is that this function has an actual function output at , while doesn't. Evaluate the limit as for your new function.         Our last limit in this activity is going to be .   Again, check to see that we get the indeterminate form when .    Again, we want a new function that is equivalent to for all -values other than . Try completing the subtraction in the numerator, , using \"common denominators.\"    Try to factor the new numerator and denominator(s). Do you notice anything? Can you \"cancel\" anything? Make another note of what factor(s) you cancel.    For the final time, we've found a function that is equivalent to except at . The difference is that this function has an actual function output at , while doesn't. Evaluate the limit as for your new function.         In each of the previous limits, we ended up finding a factor that was shared in the numerator and denominator to cancel. Think back to each example and the factor you found. Why is it clear that these must have been the factors we found to cancel?      Let's say we have some new function where . You know, based on these examples, that you're going to apply some algebra trick to re-write your function, factor, and cancel. Can you predict what you will end up looking for to cancel in the numerator and denominator? Why?    "
},
{
  "id": "act-SinXOverX",
  "level": "2",
  "url": "sec-IndeterminateForms.html#act-SinXOverX",
  "type": "Activity",
  "number": "1.3.3",
  "title": "",
  "body": "  Let's consider a new limit: . This one is strange!     Notice that this function, , is resistent to our algebra tricks:   There's nothing to \"factor\" here, since our trigonometric function is not a polynomial.    We can't use a trick like the \"conjugate\" to multiply and re-write, since there's no square roots and also only one term in the numerator.    There aren't any fractions that we can combine by addition or subtraction.         Be frustrated at this new limit for resisting our algebra tricks.      Now let's think about the meaning of and even in general. In this text, we will often use Greek letters, like , to represent angles. In general, these angles will be measured in radians (unless otherwise specified). So what does the sine function do or tell us ? What is a radian?    On the unit circle, if we plot some point at an angle of , then the coordinates of that point can be represented with trig functions! Which ones?    The length of the curve defining a unit circle is . This also corresponds to the angle we would use to represent moving all the way around the circle. What must the length of the portion of the circle be up to some point at an angle ?      Let's visualize our limit, then, by comparing the length of the arc and the height of the point as .       Explain to yourself, until you are absolutely certain, why the two lengths must be the same in the limit as . What does this mean about ?    "
},
{
  "id": "exercises--1",
  "level": "2",
  "url": "sec-IndeterminateForms.html#exercises--1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Explain, in your own words, why is true.   "
},
{
  "id": "exercises--2",
  "level": "2",
  "url": "sec-IndeterminateForms.html#exercises--2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Consider the following limit: .     Confirm that this limit has an indeterminate form.      Evaluate the limit.      When you were evaluating the limit, you likely cancelled a factor of from the numerator and denominator. Why might you have known, before factoring anything, that would be a factor shared in the numerator and denominator?  For instance, how did you know it wasn't going to be or or something else?    "
},
{
  "id": "exercises--3",
  "level": "2",
  "url": "sec-IndeterminateForms.html#exercises--3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Consider the following limit: .     Confirm that this limit has an indeterminate form.      Evaluate the limit.      When you were evaluating the limit, you likely cancelled a factor of from the numerator and denominator. Why might you have known, before factoring anything, that would be a factor shared in the numerator and denominator?  For instance, how did you know it wasn't going to be or or something else?    "
},
{
  "id": "exercises--4",
  "level": "2",
  "url": "sec-IndeterminateForms.html#exercises--4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Use the algebra tricks from to evaluate each limit.                                         where is some non-negative real number                     where is some real number    "
},
{
  "id": "sec-LimitsInvolvingInfinity",
  "level": "1",
  "url": "sec-LimitsInvolvingInfinity.html",
  "type": "Section",
  "number": "1.4",
  "title": "Limits Involving Infinity",
  "body": " Limits Involving Infinity   Two types of limits involving infinity. In both cases, we'll mostly just consider what happens when we divide by small things and what happens when we divide by big things. We can summarize this here, though:   Fractions with small denominators are big, and fractions with big denominators are small.     Infinite Limits  When we talked about indeterminate forms in , we noticed that the function value wasn't defined, since we divided by 0. Specifically, we were looking at the form in the limit. What happens in other cases when we divide by 0 with a nonzero numerator?   What Happens When We Divide by 0?   First, let's make sure we're clear on one thing: there is no real number than is represented as some other number divided by 0.  When we talk about \"dividing by 0\" here (and in ), we're talking about the behavior of some function in a limit. We want to consider what it might look like to have a function that involves division where the denominator gets arbitrarily close to 0 (or, the limit of the denominator is 0).     Remember when, once upon a time, you learned that dividing one a number by a fraction is the same as multiplying the first number by the reciprocal of the fraction? Why is this true?      What is the relationship between a number and its reciprocal? How does the size of a number impact the size of the reciprocal? Why?      Consider . What is the value of this division problem when:    ?     ?     ?     ?     ?         Let's again consider . What is the value of this division problem when:    ?     ?     ?     ?     ?         Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very small and positive.      Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very small and negative.     So we want to formalize this kind of behavior. We know that the limits that we're looking at don't exist (since there isn't a single, real number that the function outputs are all close to), but there is definitely some sort of consistent behavior that we'd like to signify.   Infinite Limit   We say that a function has an infinite limit at if is arbitrarily large (positive or negative) when is sufficiently close to, but not equal to, .  We would then say, depending on the sign of the values of , that: . If the sign of both one-sided limits are the same, we can say that (depending on the sign), but it is helpful to note that, by the definition of the , this limit does not exist, since is not arbitrarily close to a single real number.    We know, from our adage Fractions with small denominators are big, and fractions with big denominators are small, that this type of behavior happens when the denominator is tiny compared to the numerator. We can summarize this:   Dividing by 0 in a Limit   If with and , then has an at . We will often denote this behavior as: where is meant to be some shorthand representation of a non-zero limit in the numerator (often, but not necessarily, some real number).    These kinds of limits are great, in that they're consistent to identify. We just look for this tiny denominator compared to the numerator, and go from there. We also know a lot about these types of limits, and can summarize this below.   Evaluating Infinite Limits  Once we know that , we know a bunch of information right away!   This limit doesn't exist.    The function has a vertical asymptote at , causing these unbounded -values near .    The one sided limits must be either or .    We only need to focus on the sign of the one sided limits! And signs of products and quotients are easy to follow.     So a pretty typical process is to factor as much as we can, and check the sign of each factor (in a numerator or denominator) as and . From there, we can find the sign of in both of those cases, which will tell us the one-sided limit.     For each function, find the relevant one-sided limits at the input-value mentioned. If you can use a two-sided limit statement to discuss the behavior of the function around this input-value, then do so.      and     Let's first factor the denominator: we want to see the factor , where we divide by . Now, when , we have . This is our form that tells us we have an infinite limit. We're going to look at the one-sided limits, but let's notice something:   For -values close to , we expect that the numerator will be close to . No matter what side of it is, it's still going to be positive.    For -values close to , we expect the denominator to be close to . Depending on what side of it is, it could be positive or negative.   So in our one-sided limits, we know that these both will be infinite limits (the function values will either approach or ). The only difference in these is the sign. So let's check the signs!  First, we'll consider . That's . We know the numerator is positive, since it is close to , and we also know that the factor . So we know that is an infinite limit, and we know that it is positive.   Now we can check the signs of these factors when (and so ). The numerator is still close to , and so still negative. Now, is positive, and is still being squared.   Since this is an infinite limit and is also positive, we know that: .  Since the function approaches on both sides, we can say that , but we know that this limit does not exist (since the function values are not close to a single real number).       and     We can start this in a similar way: factor the denominator to see the places where we divide by : . Now, when we think about the limit as , we're thinking about . We can check the signs, again! The numerator has , and so for -values slightly smaller than , this numerator is close to , and so positive. Similarly, , and so for -values close to but less than , this is negative. Then, we can see that . This is the part that gives us the form.  For , we have , and so this is negative. And so this limit is a positive infinite limit: .  Now we can similarly check the signs when , which is when . Note that, since is still close to , the numerator and the factor will retain their sign. But, for the factor , we get . And so this limit is a negative infinite limit: .       and     We can think of as a reciprocal: . Now, we can see that , hence this is an infinite limit.  Let's visualize , so that we can tell the sign of this denominator when is on either side of .     A unit circle with a point at (0,1) labeled (cos(pi\/2),sin(pi\/2)). On the right side of the point is a small blue arc labeled theta less than pi\/2. On the left side of the point is a small red arc labeled theta greater than pi\/2.    We can see that for , we are looking at a point in the first quadrant with a positive horizontal component. So, in this case, .  For the case when , though, we are looking in the second quadrant with a negative horizontal component. So we see that .  All of this to say:       These are limits where when where is a real number. What about the other way around? Is there a case where , and what would we be looking at in the behavior of ?    End Behavior Limits   What Happens When We Divide by Infinity?   Again, we need to start by making something clear: if we were really going to try divide some real number by infinity, then we would need to re-build our definition of what it means to divide. In the context we're in right now, we only have division defined as an operation for real (and maybe complex) numbers. Since infinity is neither, then we will not literally divide by infinity.  When we talk about \"dividing by infinity\" here, we're again talking about the behavior of some function in a limit. We want to consider what it might look like to have a function that involves division where the denominator gets arbitrarily large (positive or negative) (or, the limit of the denominator is infinite).     Let's again consider . What is the value of this division problem when:    ?     ?     ?     ?     ?         Let's again consider . What is the value of this division problem when:    ?     ?     ?     ?     ?         Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very large and positive.      Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very large and negative.      Why is there no difference in the behavior of as compared to when the sign of the function outputs are opposite ( when and when )?      Limit at Infinity   If is defined for all large and positive -values and gets arbitrarily close to the single real number when gets sufficiently large, then we say: .  Similarly, if is defined for all large and negative -values and gets arbitrarily close to the single real number when gets sufficiently negative, then we say: .  In the case that has a limit at infinity that exists, then we say has a horizontal asymptote at .  Lastly, if is defined for all large and positive (or negative) -values and gets arbitrarily large and positive (or negative) when gets sufficiently large (or negative), then we could say: .    Because the primary focus for limits at infinity is the end behavior of a function, we will often refer to these limits as end behavior limits .  We're going to think about end-behavior of many types of functions, but we want to start with some small examples and build from there. So we're going to start by thinking about power functions. We're going to think about power functions in two ways:   Power functions in the form of (with ). It shouldn't be too much work to convince yourself that these functions always have limits where, as , as well.    Reciprocal power functions, in the form (still with ). We already should have an idea of what's going to happen in these, based on .      End Behavior of Reciprocal Power Functions   If is a positive real number, then: .    Our last result is one that you might already know, but we'll provide some more justification for this. We can use our knowledge of end-behavior limits for both type of power functions to think about the end-behavior limits of polynomials in general!   Polynomial End Behavior Limits   For some polynomial function: with a positive integer (the degree) and all of the coefficients real numbers (with ), then   That is, the leading term (the term with the highest exponent) defines the end behavior for the whole polynomial function.    Consider the polynomial function: where is some integer and is a real number for . For simplicity, we will consider only the limit as , but we could easily repeat this exact proof for the case where .  Before we consider this limit, we can factor out , the variable with the highest exponent: Now consider the limit of this product: We can see that in the second limit, we have a single constant term, , followed by reciprocal power functions. Then, due to , we know that the second limit will by , since the reciprocal power functions will all approach 0. And so as we claimed.    Instead of spending our time thinking about these polynomial end-behavior limits too specifically (since we might already be familiar with this result), and just focus on using these polynomials in the middle of larger problems.    For each function, find the limits as and .          You can think about the limit in the numerator and the limit in the denominator. Based on , which terms will be the ones to dictate the behavior of the numerator and denominator?    What happens when you think about just those dominant terms in the numerator and denominator and reduce the fraction? What is left?    We'll start with the same kind of factoring that is used in the proof of . Now we can apply the limits as and , since the reciprocal power functions will all . Alternatively, we could have done the following: The same process could be used to show that: .           Be careful about which term (in the numerator) will persist!           It might be helpful to remind yourself of the definition of the absolute value function: . This means you can replace with either or in the limits as and .          Use the graph of the function below to determine each limit.   The function .   A rational function with a horizontal asymptote at y=0. At x=-3, the function increases up to a vertical asymptote and then decreases down from it. At x=5, the function increases up to a vertical asymptote and then increases away from it. At x=10 the function decreases towards a vertical asymptote and then decreases away from it.                                                                       Use the graph of the function below to determine each limit.   The function .   A graph of a function increasing away from a horizontal asymptote at x=-2 towards (0,0), and then decreasing towards a vertical asymptote at x=1. It decreases away from the vertical asymptote at x=1 towards a horizontal asymptote ay y=2.                      Use the graph of the function below to determine each limit.   The function .   A function increases from the bottom left corner of the graph towards an open point at (-1,0). Then it decreases away from a point at (-1,1) towards a horizontal asymptote at y=0.                      For each limit, fill in the table in a way that determines the limit, and report your answer.                     does not exist                     does not exist                              does not exist            Evaluate the following limits analytically. Also evaluate the relevant one-sided limits when needed.                                                              For each of the following functions, find the locations of any vertical asymptotes and report the behavior of the functions around those asymptotes using limit statements.                        If you'd rather, you can add the terms together to get: .                     For each of the following functions, find the locations of any horizontal asymptotes using limit statements (as and ).                                 "
},
{
  "id": "act-DivideBy0",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#act-DivideBy0",
  "type": "Activity",
  "number": "1.4.1",
  "title": "What Happens When We Divide by 0?",
  "body": " What Happens When We Divide by 0?   First, let's make sure we're clear on one thing: there is no real number than is represented as some other number divided by 0.  When we talk about \"dividing by 0\" here (and in ), we're talking about the behavior of some function in a limit. We want to consider what it might look like to have a function that involves division where the denominator gets arbitrarily close to 0 (or, the limit of the denominator is 0).     Remember when, once upon a time, you learned that dividing one a number by a fraction is the same as multiplying the first number by the reciprocal of the fraction? Why is this true?      What is the relationship between a number and its reciprocal? How does the size of a number impact the size of the reciprocal? Why?      Consider . What is the value of this division problem when:    ?     ?     ?     ?     ?         Let's again consider . What is the value of this division problem when:    ?     ?     ?     ?     ?         Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very small and positive.      Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very small and negative.    "
},
{
  "id": "def-InfiniteLimit",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#def-InfiniteLimit",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Infinite Limit.",
  "body": " Infinite Limit   We say that a function has an infinite limit at if is arbitrarily large (positive or negative) when is sufficiently close to, but not equal to, .  We would then say, depending on the sign of the values of , that: . If the sign of both one-sided limits are the same, we can say that (depending on the sign), but it is helpful to note that, by the definition of the , this limit does not exist, since is not arbitrarily close to a single real number.   "
},
{
  "id": "thm-DivBy0-InfiniteLimit",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#thm-DivBy0-InfiniteLimit",
  "type": "Theorem",
  "number": "1.4.2",
  "title": "Dividing by 0 in a Limit.",
  "body": " Dividing by 0 in a Limit   If with and , then has an at . We will often denote this behavior as: where is meant to be some shorthand representation of a non-zero limit in the numerator (often, but not necessarily, some real number).   "
},
{
  "id": "subsec-InfiniteLimits-10",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#subsec-InfiniteLimits-10",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  For each function, find the relevant one-sided limits at the input-value mentioned. If you can use a two-sided limit statement to discuss the behavior of the function around this input-value, then do so.      and     Let's first factor the denominator: we want to see the factor , where we divide by . Now, when , we have . This is our form that tells us we have an infinite limit. We're going to look at the one-sided limits, but let's notice something:   For -values close to , we expect that the numerator will be close to . No matter what side of it is, it's still going to be positive.    For -values close to , we expect the denominator to be close to . Depending on what side of it is, it could be positive or negative.   So in our one-sided limits, we know that these both will be infinite limits (the function values will either approach or ). The only difference in these is the sign. So let's check the signs!  First, we'll consider . That's . We know the numerator is positive, since it is close to , and we also know that the factor . So we know that is an infinite limit, and we know that it is positive.   Now we can check the signs of these factors when (and so ). The numerator is still close to , and so still negative. Now, is positive, and is still being squared.   Since this is an infinite limit and is also positive, we know that: .  Since the function approaches on both sides, we can say that , but we know that this limit does not exist (since the function values are not close to a single real number).       and     We can start this in a similar way: factor the denominator to see the places where we divide by : . Now, when we think about the limit as , we're thinking about . We can check the signs, again! The numerator has , and so for -values slightly smaller than , this numerator is close to , and so positive. Similarly, , and so for -values close to but less than , this is negative. Then, we can see that . This is the part that gives us the form.  For , we have , and so this is negative. And so this limit is a positive infinite limit: .  Now we can similarly check the signs when , which is when . Note that, since is still close to , the numerator and the factor will retain their sign. But, for the factor , we get . And so this limit is a negative infinite limit: .       and     We can think of as a reciprocal: . Now, we can see that , hence this is an infinite limit.  Let's visualize , so that we can tell the sign of this denominator when is on either side of .     A unit circle with a point at (0,1) labeled (cos(pi\/2),sin(pi\/2)). On the right side of the point is a small blue arc labeled theta less than pi\/2. On the left side of the point is a small red arc labeled theta greater than pi\/2.    We can see that for , we are looking at a point in the first quadrant with a positive horizontal component. So, in this case, .  For the case when , though, we are looking in the second quadrant with a negative horizontal component. So we see that .  All of this to say:      "
},
{
  "id": "act-DivideByInfinity",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#act-DivideByInfinity",
  "type": "Activity",
  "number": "1.4.2",
  "title": "What Happens When We Divide by Infinity?",
  "body": " What Happens When We Divide by Infinity?   Again, we need to start by making something clear: if we were really going to try divide some real number by infinity, then we would need to re-build our definition of what it means to divide. In the context we're in right now, we only have division defined as an operation for real (and maybe complex) numbers. Since infinity is neither, then we will not literally divide by infinity.  When we talk about \"dividing by infinity\" here, we're again talking about the behavior of some function in a limit. We want to consider what it might look like to have a function that involves division where the denominator gets arbitrarily large (positive or negative) (or, the limit of the denominator is infinite).     Let's again consider . What is the value of this division problem when:    ?     ?     ?     ?     ?         Let's again consider . What is the value of this division problem when:    ?     ?     ?     ?     ?         Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very large and positive.      Consider a function . What happens to the value of this function when ? Note that this means that the -values we're considering most are very large and negative.      Why is there no difference in the behavior of as compared to when the sign of the function outputs are opposite ( when and when )?    "
},
{
  "id": "def-LimitAtInfinity",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#def-LimitAtInfinity",
  "type": "Definition",
  "number": "1.4.5",
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
  "number": "1.4.6",
  "title": "End Behavior of Reciprocal Power Functions.",
  "body": " End Behavior of Reciprocal Power Functions   If is a positive real number, then: .   "
},
{
  "id": "thm-PolynomialEndBehavior",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#thm-PolynomialEndBehavior",
  "type": "Theorem",
  "number": "1.4.7",
  "title": "Polynomial End Behavior Limits.",
  "body": " Polynomial End Behavior Limits   For some polynomial function: with a positive integer (the degree) and all of the coefficients real numbers (with ), then   That is, the leading term (the term with the highest exponent) defines the end behavior for the whole polynomial function.    Consider the polynomial function: where is some integer and is a real number for . For simplicity, we will consider only the limit as , but we could easily repeat this exact proof for the case where .  Before we consider this limit, we can factor out , the variable with the highest exponent: Now consider the limit of this product: We can see that in the second limit, we have a single constant term, , followed by reciprocal power functions. Then, due to , we know that the second limit will by , since the reciprocal power functions will all approach 0. And so as we claimed.   "
},
{
  "id": "subsec-EndBehaviorLimits-10",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#subsec-EndBehaviorLimits-10",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": "  For each function, find the limits as and .          You can think about the limit in the numerator and the limit in the denominator. Based on , which terms will be the ones to dictate the behavior of the numerator and denominator?    What happens when you think about just those dominant terms in the numerator and denominator and reduce the fraction? What is left?    We'll start with the same kind of factoring that is used in the proof of . Now we can apply the limits as and , since the reciprocal power functions will all . Alternatively, we could have done the following: The same process could be used to show that: .           Be careful about which term (in the numerator) will persist!           It might be helpful to remind yourself of the definition of the absolute value function: . This means you can replace with either or in the limits as and .    "
},
{
  "id": "ex-LimitsInvolvingInfinity-1",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#ex-LimitsInvolvingInfinity-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Use the graph of the function below to determine each limit.   The function .   A rational function with a horizontal asymptote at y=0. At x=-3, the function increases up to a vertical asymptote and then decreases down from it. At x=5, the function increases up to a vertical asymptote and then increases away from it. At x=10 the function decreases towards a vertical asymptote and then decreases away from it.                                                                    "
},
{
  "id": "ex-LimitsInvolvingInfinity-2",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#ex-LimitsInvolvingInfinity-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Use the graph of the function below to determine each limit.   The function .   A graph of a function increasing away from a horizontal asymptote at x=-2 towards (0,0), and then decreasing towards a vertical asymptote at x=1. It decreases away from the vertical asymptote at x=1 towards a horizontal asymptote ay y=2.                   "
},
{
  "id": "ex-LimitsInvolvingInfinity-3",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#ex-LimitsInvolvingInfinity-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Use the graph of the function below to determine each limit.   The function .   A function increases from the bottom left corner of the graph towards an open point at (-1,0). Then it decreases away from a point at (-1,1) towards a horizontal asymptote at y=0.                   "
},
{
  "id": "ex-LimitsInvolvingInfinity-4",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#ex-LimitsInvolvingInfinity-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  For each limit, fill in the table in a way that determines the limit, and report your answer.                     does not exist                     does not exist                              does not exist         "
},
{
  "id": "ex-LimitsInvolvingInfinity-5",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#ex-LimitsInvolvingInfinity-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Evaluate the following limits analytically. Also evaluate the relevant one-sided limits when needed.                                                           "
},
{
  "id": "ex-LimitsInvolvingInfinity-6",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#ex-LimitsInvolvingInfinity-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  For each of the following functions, find the locations of any vertical asymptotes and report the behavior of the functions around those asymptotes using limit statements.                        If you'd rather, you can add the terms together to get: .                  "
},
{
  "id": "ex-LimitsInvolvingInfinity-7",
  "level": "2",
  "url": "sec-LimitsInvolvingInfinity.html#ex-LimitsInvolvingInfinity-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  For each of the following functions, find the locations of any horizontal asymptotes using limit statements (as and ).                               "
},
{
  "id": "sec-SqueezeTheorem",
  "level": "1",
  "url": "sec-SqueezeTheorem.html",
  "type": "Section",
  "number": "1.5",
  "title": "The Squeeze Theorem",
  "body": " The Squeeze Theorem   We won't get enough time to spend thinking about all of the possible techniques that we could use to evaluate limits, but in this section we'll investigate one more.  Here, we'll introduce a new limit involving a type of function that we've not used in limits so far: trigonometric functions.    Weird Functions, Weird Behavior  Ok, trigonometric functions aren't actually weird. But we want to look at a function that is slightly more complicated than the ones we've looked at so far.   A Weird End Behavior Limit   In this activity, we're going to find the following limit: . This limit is a bit weird, in that we really haven't looked at trigonometric functions that much. We're going to start by looking at a different limit in the hopes that we can eventually build towards this one.     Consider, instead, the following limit: . Find the limit and connect the process or intuition behind it to at least one of the results from this text.    Start with to think about the numerator and denominator separately.    Can you use in the denominator?    Is relevant?      Let's put this limit aside and briefly talk about the sine function. What are some things to remember about this function? What should we know? How does it behave?      What kinds of values doe we expect to take on for different values of ?       What happens when we square the sine function? What kinds of values can that take on?       Think back to our original goal: we wanted to know the end behavior of . Right now we have two bits of information:   We know .    We know some information about the behavior of . Specifically, we have some bounds on its values.   Can we combine this information?  In your inequality above, multiply onto all three pieces of the inequality. Make sure you're convinced about the direction or order of the inequality and whether or not it changes with this multiplication.       For your functions and , evaluate and .      What do you think this means about the limit we're interested in, ?       Squeeze Theorem  This strategy is a really nice one to use when we know the behavior of some well-behaved bounding functions. We can try to off-load the task of summarizing the behavior of a strangely behaved function to these bounding functions, and follow them! As long as they approach each other, than the strangely behaved function has to have the same behavior.  Let's formalize this result carefully.   The Squeeze Theorem   For some functions , , and which are all defined and ordered for -values near (but not necessarily at itself), and for some real number , if we know that then we also know that .     Sometimes this theorem is called the Sandwich Theorem, since the upper bounding function and the lower bounding function act as the slices of bread, while the strangely behaved middle function acts like the toppings on the sandwich.  We choose not to use that naming convention in this text in order to preserve the flexibility of the definition of a sandwich. An open-faced sandwich is still a sandwich (in the opinion of the textbook author), but this result clearly doesn't hold when we only have one bounding function.   This theorem can be difficult to use, primarily because building the bounds for a function is difficult. In , we were able to build the boundary functions by simply thinking about the bounds on the . This worked well, but we were only able to do this because of our familiarity with this function. With other functions, these bounds are harder to just come up with . This is especially true in that we need the bounds to accomplish multiple things at once:   We need them to be ordered correctly with regard to the function we care about: one above it and one below it.    We need the limits of these functions to be things we can actually evaluate! This is the whole point: we use these (hopefully easier) limits to evaluate the (probably hard) limit that we're interested in.    We need the limits of these functions to be the same as , otherwise we're not certain about where our function actually is.     In practice, we'll try to build any bounding functions with some assistance, or start with bounding functions already stated.  Let's see another way of thinking about this result using our graphical intuition.   Sketch This Function Around This Point    Sketch or visualize the functions and , especially around .      Now we want to add in a sketch of some function , all the while satisfying the requirements of the Squeeze Theorem.       Use the Squeeze Theorem to evaluate and explain for your function .      Is this limit dependent on the specific version of that you sketched? Would this limit be different for someone else's choice of given the same parameters?      What information must be true (if anything) about and ?  Do we know that these limits exist? If they do, do we have information about their values?         For each of the following statements, discuss the possible existence of the limit in question. Explain in detail how we might know whether the limit exists or not, or why it is impossible to tell.     We want to know about , and we know that for all -values, with and .      We want to know about , and we know that for the function for -values around 0.      We want to know about , and we know that for -values around , with and .       We want to use the Squeeze Theorem to evaluate .     Explain why we know that for any non-zero -values. Why does this inequality not hold for ?      Use the inequality from (a) to build an inequality of functions for non-zero -values.      With these functions and from (b), find and .      Explain how the Squeeze Theorem tells us what the value of is.      "
},
{
  "id": "act-WeirdEndBehavior",
  "level": "2",
  "url": "sec-SqueezeTheorem.html#act-WeirdEndBehavior",
  "type": "Activity",
  "number": "1.5.1",
  "title": "A Weird End Behavior Limit.",
  "body": " A Weird End Behavior Limit   In this activity, we're going to find the following limit: . This limit is a bit weird, in that we really haven't looked at trigonometric functions that much. We're going to start by looking at a different limit in the hopes that we can eventually build towards this one.     Consider, instead, the following limit: . Find the limit and connect the process or intuition behind it to at least one of the results from this text.    Start with to think about the numerator and denominator separately.    Can you use in the denominator?    Is relevant?      Let's put this limit aside and briefly talk about the sine function. What are some things to remember about this function? What should we know? How does it behave?      What kinds of values doe we expect to take on for different values of ?       What happens when we square the sine function? What kinds of values can that take on?       Think back to our original goal: we wanted to know the end behavior of . Right now we have two bits of information:   We know .    We know some information about the behavior of . Specifically, we have some bounds on its values.   Can we combine this information?  In your inequality above, multiply onto all three pieces of the inequality. Make sure you're convinced about the direction or order of the inequality and whether or not it changes with this multiplication.       For your functions and , evaluate and .      What do you think this means about the limit we're interested in, ?    "
},
{
  "id": "thm-SqueezeTheorem",
  "level": "2",
  "url": "sec-SqueezeTheorem.html#thm-SqueezeTheorem",
  "type": "Theorem",
  "number": "1.5.1",
  "title": "The Squeeze Theorem.",
  "body": " The Squeeze Theorem   For some functions , , and which are all defined and ordered for -values near (but not necessarily at itself), and for some real number , if we know that then we also know that .   "
},
{
  "id": "act-SketchSqueeze",
  "level": "2",
  "url": "sec-SqueezeTheorem.html#act-SketchSqueeze",
  "type": "Activity",
  "number": "1.5.2",
  "title": "Sketch This Function Around This Point.",
  "body": " Sketch This Function Around This Point    Sketch or visualize the functions and , especially around .      Now we want to add in a sketch of some function , all the while satisfying the requirements of the Squeeze Theorem.       Use the Squeeze Theorem to evaluate and explain for your function .      Is this limit dependent on the specific version of that you sketched? Would this limit be different for someone else's choice of given the same parameters?      What information must be true (if anything) about and ?  Do we know that these limits exist? If they do, do we have information about their values?    "
},
{
  "id": "ex-SqueezeTheorem-1",
  "level": "2",
  "url": "sec-SqueezeTheorem.html#ex-SqueezeTheorem-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  For each of the following statements, discuss the possible existence of the limit in question. Explain in detail how we might know whether the limit exists or not, or why it is impossible to tell.     We want to know about , and we know that for all -values, with and .      We want to know about , and we know that for the function for -values around 0.      We want to know about , and we know that for -values around , with and .    "
},
{
  "id": "ex-SqueezeTheorem-2",
  "level": "2",
  "url": "sec-SqueezeTheorem.html#ex-SqueezeTheorem-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  We want to use the Squeeze Theorem to evaluate .     Explain why we know that for any non-zero -values. Why does this inequality not hold for ?      Use the inequality from (a) to build an inequality of functions for non-zero -values.      With these functions and from (b), find and .      Explain how the Squeeze Theorem tells us what the value of is.    "
},
{
  "id": "sec-Continuity",
  "level": "1",
  "url": "sec-Continuity.html",
  "type": "Section",
  "number": "1.6",
  "title": "Continuity and the Intermediate Value Theorem",
  "body": " Continuity and the Intermediate Value Theorem   What does it mean for a function to be continuous?  This might be a familiar concept to you, and we all probably have some idea of what the word continuous means (or should mean), both in a colloquial context and in a math-specific context. Instead of focusing on some of the traditional ideas like can you draw the graph without picking up your pencil , we're going to formalize the idea of continuity a bit.  And the first thing that we'll have to do is shift our intuition from what continuity is describing. We won't (at least at first) use continuity as a classification of functions, as a whole. Instead, we're going to think of continuity as a description of some local behavior.    Continuity as Connectedness  We're going to try to think about what we want to describe when we define continuity. The description of drawing a graph without picking up a pencil is a global property, and also a pretty vague and ambiguous one.   Classification and Continuity   Let's consider the following functions, graphed below.   A variety of graphs for us to use to think about continuity.     A graph of a function with a vertical asymptote and a horizontal asymptote.    A graph of a function that increases from (0,0) onward.    A graph that increases up to a hole. Underneath that hole is a point that the function decreases away from.      A graph with a horizontal asymptote. The graph looks like a bell curve with a hole at its peak.    A polynomial looking function that increases up to a point, decreases down to a point, and then increases away from it.    A graph of a straight line connecting two points.         Can you point out any points on the functions above that seem like the functions might not be continuous? Note that we're not classifying each function as continuous or not continuous !      We want to build towards a definition of continuity using connectedness as the key: a function is continuous at a point if it is connected to itself. How does that work when we think about function values and limits? Use the graphs above and the points you looked at to help!     There are definitely some unknowns here. One of the questions that students ask a lot during an investigation like this is what we do about end-points. Is a function continuous at a closed ending-point in its domain? Is it connected to itself? To answer questions like this, we should try to write out what we mean by connectedness.  A pretty basic version of this is something like A function is connected to itself at a point if, for the inputs near that point, the function values are close to the function value at the point. Maybe even more concise is Small deviations in the inputs produce small changes in the outputs.     Defining Continuity  We're going to take this idea of a function being connected to itself as small deviations in the inputs produce small changes in the outputs and write it down using limit notation.   Continuous at a Point   The function is continuous at an -value in the domain of if if .  If is not continuous at , but one of the one-sided limits is equal to the function output, then we can define directional continuity at that point:   We say is continuous on the left at when .    We say is continuous on the right at when .       In using limits, we get some flexibility: we can talk about one-sided limits, specifically! This helps us take care of the pesky Is a function connected to itself at a closed ending point, question! We can say, using this definition, Yes, on the left side! or Yes, on the right side!     For the function defined below, decide whether or not the function is continuous at the point listed. If it is not continuous, report whether it is continuous on one side.      Is continuous at the point ?    Check the one-sided limits as . Do they both equal ? Does one of them?     So . Since as well, we have which means that is continuous at .      Is continuous at the point ?    Check the one-sided limits as . Do they both equal ? Does one of them?     Since we know that doesn't exist, and so this function cannot be continuous at .  But we can notice that , and so we can say that the function is still continuous on the right side at .     Another bit of flexibility that we have with this definition is that, once we know whether a function is continuous at a point or not, we can string together points in an interval and classify a function as continuous on an interval.   Continuous on an Interval   We say that is continuous on the interval  if is continuous at every -value with .  If is continuous on the right at and\/or continuous on the left at , then we will say that is continuous on the interval , , or , whichever is relevant.    Something to notice, here, is that we won't do this by checking each individual -value in an interval. If we wanted to say that a function was continuous on , we would then have to consider every real number between and . But there are an infinite amount of these!  So when we talk about a function being continuous on an interval, we'll really think about this by pointing out the places where a function is not continuous ( -values where violates some part of ).    Discontinuities  Since we'll want to label functions at places that they are not continuous (in order to write the intervals where it is continuous), we should summarize some things about discontinuities.   Where is a Function not Continuous?  Most of the functions that we consider in this text will be continuous everywhere that it makes sense: on their domain. That is, if there is a point defined at some -value, it is likely that the function's limit matches the -value of the point. More specifically, though:   A function is discontinuous at any location that results in an infinite limit. These are locations where is undefined and the limit is infinite (and so doesn't exist).    A function is, in general, discontinuous at any -value where is not defined. This seems silly to say! We probably could have left this unsaid. Of course isn't continuous at an -value not in its domain.    A function that is defined as a piecewise function could be discontinuous at locations where the pieces meet: maybe the limit doesn't exist, or maybe the function value is not defined, or maybe the limit exists and the function value is defined but they do not match.      Some quick notes:   Every polynomial function is continuous everywhere on its domain. We knew this already, from : the limit is always the same as the function value at any input!    Rational functions are only discontinuous when there is division by 0.    Even-root functions (like square roots) are continuous whenever the radicand (the stuff under the root) is positive. We might need to investigate wherever the radicand is equal to , since the function might only be continuous on one side.    The following functions are continuous on their domains:    on      on      on      on           Let's revisit the same function we looked at earlier:   We already looked at what was happening at and . Are there any other -values where this function might not be continuous? Why or why not? Can you report the intervals on which is continuous?    Can you name the function type for , and ?    Since is polynomial for and , we know that the function is continuous on those intervals as well. We can see that for , is a rational function. Since the only -value where we might divide by 0 is outside of the interval for which this function part is defined, we know that this function is continuous for .  Since our function is continuous at , we can say that it is continuous on the interval . We also say that the function was continuous on the right at , and so we can say that is also continuous on the interval .    We'll end this section with one last result that will be pretty important. Continuity, as a property, will be useful as we move forward, but only for a few specific reasons. One is the following result.   Continuity with Composition   For two functions and , if and is continuous at , then .    This is a generalization of the properties of limits that we explored earlier ( ). We can use this new theorem to evaluate limits by just noticing if pieces of our function might behave nicely with limits.  Let's evaluate the following limit: . Notice that the sine function is continuous everywhere. This means that we can bring the limit statement inside by a layer: . Now we can think about the square root function: we know that the radicand function (the exponential) always produces positive outputs. So we can bring the limit statement inside by another layer of composition: . The exponential function is also continuous everywhere: . And we also know that polynomial functions are continuous everywhere! This seemingly difficult limit is actually as easy as just evaluating the function at the input, since the function behaves nicely.    Intermediate Value Theorem  Let's introduce one of the biggest results coming from continuity of functions that exists. We're going to simply state the result and then discuss it, instead of building up towards it.   Intermediate Value Theorem   If is a function that is continuous on with and is any real number between and (either or ), then there exists some between and ( ) such that .     This theorem was stated as early as the 5th century BCE by Bryson of Heraclea. Back then, a really interesting problem was related to \"squaring the circle.\" That is, given a circle with some measurable radius, can we construct a square with equal area? This is obviously true, in that we can just use a square with the side length . What we typically mean by \"construct,\" though, is to create this square using only a compass and straightedge (a ruler without length markings) and only a finite number of steps. This was finally proven to be impossible in 1882, approximately 2300 years later.  Bryson of Heraclea knew that the square itself existed (even if he couldn't construct it) because he was able to find a circle with area less than the square (by inscribing a circle inside of the square) and a circle with area greater than the square (where the square is inscribed in the circle). Since he posited that he could increase the size of the circle in a continuous manner (without using those words), he claimed that a square with area equal to that of the circle must exist, since the area of the circle passes through all values from the smaller area to the larger area.   This is a seemingly simple result (even if it is stated in a seemingly complicated way): of course, in order to go from a point at one -value to another point at a different -value, the function has to pass through all of the -values in between. This is pretty obvious, once we see through the phrasing.  We can use this result in some pretty interesting ways, though! Here's a favorite:  Let's consider two people, standing on polar opposite points on the earth. Let's say that these two people are carrying thermometers and are measuring the ambient temperature at their location. They coordinate their movement, and begin to move around the earth in a circle, remaining at polar opposite locations as they move.  How likely is it that the pair finds some location on their path where their temperature readings are exactly identical?  Let's pretend that the locations that they start in are different temperatures (or else yay, we found the spot where the temperatures are the same!), and that the starting position of person A is hotter than the starting position of person B.   Can you see why we are guaranteed that there must be some pair of polar opposite locations where the ambient temperatures are identical?  If the ambient temperature differs continuously, then the says that between the locations where the temperature differential is negative and where it is positive, the temperature differential function must pass through zero!  This argument can be used in a variety of contexts, and can be used to show that you can typically fix a wobbly table (where the legs don't all rest nicely on the ground) or chair by rotating it until all of the legs rest nicely on the ground.  The theorem itself might not seem that interesting, but it's important both historically and also as a means of making arguments function values, especially when we claim that a function has to be 0 (because we show that there is a point where the function is positive, a point where it is negative, and the function is continuous in between the points).     Explain how the definition of continuity ( ) describes a function being connected to itself at the point.    What does it mean for a function to be continuous on the left at a point? What about on the right?     Use the definition of continuity at a point to determine whether each function is continuous at the point listed. If it is not, is the function continuous on one side at the point? Explain.      at        at        at        Find the values of that make the function continuous at the point that is listed. If no such value of exists, say so and explain why.      at        at        Use the properties of composition and continuity to evaluate the following limits.                            Even a broken clock is right twice a day, is a common phrase used to say that even an unreliable person can have a good point on accident. Explain how we can use the Intermediate Value Theorem to prove that a broken (analog) clock is guaranteed right twice per day. (Here, we're assuming that broken means stuck.)      Explain why this argument doesn't work to show that an unreliable person will be guaranteed to have a good point on accident.      Prove that at some point in your life you were exactly feet tall.     "
},
{
  "id": "act-ClassifyContinuity",
  "level": "2",
  "url": "sec-Continuity.html#act-ClassifyContinuity",
  "type": "Activity",
  "number": "1.6.1",
  "title": "Classification and Continuity.",
  "body": " Classification and Continuity   Let's consider the following functions, graphed below.   A variety of graphs for us to use to think about continuity.     A graph of a function with a vertical asymptote and a horizontal asymptote.    A graph of a function that increases from (0,0) onward.    A graph that increases up to a hole. Underneath that hole is a point that the function decreases away from.      A graph with a horizontal asymptote. The graph looks like a bell curve with a hole at its peak.    A polynomial looking function that increases up to a point, decreases down to a point, and then increases away from it.    A graph of a straight line connecting two points.         Can you point out any points on the functions above that seem like the functions might not be continuous? Note that we're not classifying each function as continuous or not continuous !      We want to build towards a definition of continuity using connectedness as the key: a function is continuous at a point if it is connected to itself. How does that work when we think about function values and limits? Use the graphs above and the points you looked at to help!    "
},
{
  "id": "def-ContinuousAtPoint",
  "level": "2",
  "url": "sec-Continuity.html#def-ContinuousAtPoint",
  "type": "Definition",
  "number": "1.6.2",
  "title": "Continuous at a Point.",
  "body": " Continuous at a Point   The function is continuous at an -value in the domain of if if .  If is not continuous at , but one of the one-sided limits is equal to the function output, then we can define directional continuity at that point:   We say is continuous on the left at when .    We say is continuous on the right at when .      "
},
{
  "id": "subsec-DefiningContinuity-5",
  "level": "2",
  "url": "sec-Continuity.html#subsec-DefiningContinuity-5",
  "type": "Example",
  "number": "1.6.3",
  "title": "",
  "body": "  For the function defined below, decide whether or not the function is continuous at the point listed. If it is not continuous, report whether it is continuous on one side.      Is continuous at the point ?    Check the one-sided limits as . Do they both equal ? Does one of them?     So . Since as well, we have which means that is continuous at .      Is continuous at the point ?    Check the one-sided limits as . Do they both equal ? Does one of them?     Since we know that doesn't exist, and so this function cannot be continuous at .  But we can notice that , and so we can say that the function is still continuous on the right side at .    "
},
{
  "id": "def-ContinuousOnInterval",
  "level": "2",
  "url": "sec-Continuity.html#def-ContinuousOnInterval",
  "type": "Definition",
  "number": "1.6.4",
  "title": "Continuous on an Interval.",
  "body": " Continuous on an Interval   We say that is continuous on the interval  if is continuous at every -value with .  If is continuous on the right at and\/or continuous on the left at , then we will say that is continuous on the interval , , or , whichever is relevant.   "
},
{
  "id": "subsec-Discontinuities-5",
  "level": "2",
  "url": "sec-Continuity.html#subsec-Discontinuities-5",
  "type": "Example",
  "number": "1.6.5",
  "title": "",
  "body": "  Let's revisit the same function we looked at earlier:   We already looked at what was happening at and . Are there any other -values where this function might not be continuous? Why or why not? Can you report the intervals on which is continuous?    Can you name the function type for , and ?    Since is polynomial for and , we know that the function is continuous on those intervals as well. We can see that for , is a rational function. Since the only -value where we might divide by 0 is outside of the interval for which this function part is defined, we know that this function is continuous for .  Since our function is continuous at , we can say that it is continuous on the interval . We also say that the function was continuous on the right at , and so we can say that is also continuous on the interval .   "
},
{
  "id": "thm-ContinuityWithComposition",
  "level": "2",
  "url": "sec-Continuity.html#thm-ContinuityWithComposition",
  "type": "Theorem",
  "number": "1.6.6",
  "title": "Continuity with Composition.",
  "body": " Continuity with Composition   For two functions and , if and is continuous at , then .   "
},
{
  "id": "thm-IVT",
  "level": "2",
  "url": "sec-Continuity.html#thm-IVT",
  "type": "Theorem",
  "number": "1.6.7",
  "title": "Intermediate Value Theorem.",
  "body": " Intermediate Value Theorem   If is a function that is continuous on with and is any real number between and (either or ), then there exists some between and ( ) such that .   "
},
{
  "id": "ex-Continuity-1",
  "level": "2",
  "url": "sec-Continuity.html#ex-Continuity-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Explain how the definition of continuity ( ) describes a function being connected to itself at the point.  "
},
{
  "id": "ex-Continuity-2",
  "level": "2",
  "url": "sec-Continuity.html#ex-Continuity-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " What does it mean for a function to be continuous on the left at a point? What about on the right?  "
},
{
  "id": "ex-Continuity-3",
  "level": "2",
  "url": "sec-Continuity.html#ex-Continuity-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Use the definition of continuity at a point to determine whether each function is continuous at the point listed. If it is not, is the function continuous on one side at the point? Explain.      at        at        at     "
},
{
  "id": "ex-Continuity-4",
  "level": "2",
  "url": "sec-Continuity.html#ex-Continuity-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Find the values of that make the function continuous at the point that is listed. If no such value of exists, say so and explain why.      at        at     "
},
{
  "id": "ex-Continuity-5",
  "level": "2",
  "url": "sec-Continuity.html#ex-Continuity-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Use the properties of composition and continuity to evaluate the following limits.                        "
},
{
  "id": "ex-Continuity-6",
  "level": "2",
  "url": "sec-Continuity.html#ex-Continuity-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "   Even a broken clock is right twice a day, is a common phrase used to say that even an unreliable person can have a good point on accident. Explain how we can use the Intermediate Value Theorem to prove that a broken (analog) clock is guaranteed right twice per day. (Here, we're assuming that broken means stuck.)   "
},
{
  "id": "ex-Continuity-7",
  "level": "2",
  "url": "sec-Continuity.html#ex-Continuity-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Explain why this argument doesn't work to show that an unreliable person will be guaranteed to have a good point on accident.   "
},
{
  "id": "ex-Continuity-8",
  "level": "2",
  "url": "sec-Continuity.html#ex-Continuity-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Prove that at some point in your life you were exactly feet tall.   "
},
{
  "id": "sec-IntroDerivatives",
  "level": "1",
  "url": "sec-IntroDerivatives.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Derivatives",
  "body": " Introduction to Derivatives   We'll start this off by thinking about slopes. Before we begin, you should be able to answer the following questions:   What is a slope? How could you describe it?    How do you calculate the slope of a line between two points?    If we have a function and we pick two points on the curve of the function, what does the slope of a straight line connecting the two points tell us? What kind of behavior about does this slope describe?       Defining the Derivative   Thinking about Slopes   We're going to calculate and make some conjectures about slopes of lines between points, where the points are on the graph of a function. Let's define the following function: .     We're going to calculate a lot of slopes! Calculate the slope of the line connecting each pair of points on the curve of :    and      and      and      and          Let's calculate another group of slopes. Find the slope of the lines connecting these pairs of points:    and      and      and      and          Just to make it clear what we've done, lay out your slopes in this table:    Between and...  Slope                                                Now imagine a line that is tangent to the graph of at . We are thinking of a line that touches the graph at , but runs along side of the curve there instead of through it.  Make a conjecture about the slope of this line, using what we've seen above.      Can you represent the slope you're thinking of above with a limit? What limit are we approximating in the slope calculations above? Set up the limit and evaluate it, confirming your conjecture.      Finding a Tangent Line   Let's think about a new function, . We're going to think about this function around the point at .     Ok, we are going to think about this function at this point, so let's find the coordinates of the point first. What's the -value on our curve at ?      Use a limit similar to the one you constructed in to find the slope of the line tangent to the graph of at .      Now that you have a slope of this line, and the coordinates of a point that the line passes through, can you find the equation of the line?      Derivative at a Point   For a function , we say that the derivative of at is: provided that the limit exists.  If exists, then we say is differentiable at .    We can investigate this definition visually. Consider the function plotted below, where we will look at the point . In the definition of the limit, we'll let , and so consider: . Can you estimate the limit of the slope of the tangent line as ?   Does it look like the limit of the slope between and exists as ? What do you think it is?    Calculating a Bunch of Slopes at Once   Calculating a Bunch of Slopes   Let's do this all again, but this time we'll calculate the slope at a bunch of different points on the same function.  Let's use .     Start calculating the following derivatives, using the definition of the :                            Stop calculating the above derivatives when you get tired\/bored of it. How many did you get through?      Notice how repetitive this is: on one hand, we have to set up a completely different limit each time (since we're looking at a different point on the function each time). On the other hand, you might have noticed that the work is all the same: you factor and cancel over and over. These limits are all ones that we covered in , and so it's no surprise that we keep using the same algebra manipulations over and over again to evaluate these limits.  Do you notice any patterns, any connections between the -value you used for each point and the slope you calculated at that point? You might need to go back and do some more.      Try to evaluate this limit in general: . Remember, you know how this goes! You're going to do the same sorts of algebra that you did earlier!  What is the formula, the pattern, the way of finding the slope on the function at any -value, ?      Confirm this by using your new formula to re-calculate the following derivatives:                           We're going to try to think about the derivative as something that can be calculated in general, as well as something that can be calculated at a point. We'll define a new way of calculating it, still a limit of slopes, that will be a bit more general.     The Derivative Function   For a function , the derivative of , denoted , is: for -values in the domain of where this limit exists.    This definition feels pretty different, but we can hopefully notice that this is really just calculating a slope. Notice, in the following plot, that there is a significant difference. In the visualization of the , the first point was fixed into place and the second point was the one that we moved and changed. It was the one with the variable -value.  Notice in the following visualization that the first point is the one that is moveable while the second point is defined based on the first one (and the horizontal difference between the points, ). This means that we don't need to define one specific point, and can find the slope of the line tangent to at some changing -value.    "
},
{
  "id": "act-Slopes",
  "level": "2",
  "url": "sec-IntroDerivatives.html#act-Slopes",
  "type": "Activity",
  "number": "2.1.1",
  "title": "Thinking about Slopes.",
  "body": " Thinking about Slopes   We're going to calculate and make some conjectures about slopes of lines between points, where the points are on the graph of a function. Let's define the following function: .     We're going to calculate a lot of slopes! Calculate the slope of the line connecting each pair of points on the curve of :    and      and      and      and          Let's calculate another group of slopes. Find the slope of the lines connecting these pairs of points:    and      and      and      and          Just to make it clear what we've done, lay out your slopes in this table:    Between and...  Slope                                                Now imagine a line that is tangent to the graph of at . We are thinking of a line that touches the graph at , but runs along side of the curve there instead of through it.  Make a conjecture about the slope of this line, using what we've seen above.      Can you represent the slope you're thinking of above with a limit? What limit are we approximating in the slope calculations above? Set up the limit and evaluate it, confirming your conjecture.    "
},
{
  "id": "act-TangentLine",
  "level": "2",
  "url": "sec-IntroDerivatives.html#act-TangentLine",
  "type": "Activity",
  "number": "2.1.2",
  "title": "Finding a Tangent Line.",
  "body": " Finding a Tangent Line   Let's think about a new function, . We're going to think about this function around the point at .     Ok, we are going to think about this function at this point, so let's find the coordinates of the point first. What's the -value on our curve at ?      Use a limit similar to the one you constructed in to find the slope of the line tangent to the graph of at .      Now that you have a slope of this line, and the coordinates of a point that the line passes through, can you find the equation of the line?    "
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
  "body": " Calculating a Bunch of Slopes   Let's do this all again, but this time we'll calculate the slope at a bunch of different points on the same function.  Let's use .     Start calculating the following derivatives, using the definition of the :                            Stop calculating the above derivatives when you get tired\/bored of it. How many did you get through?      Notice how repetitive this is: on one hand, we have to set up a completely different limit each time (since we're looking at a different point on the function each time). On the other hand, you might have noticed that the work is all the same: you factor and cancel over and over. These limits are all ones that we covered in , and so it's no surprise that we keep using the same algebra manipulations over and over again to evaluate these limits.  Do you notice any patterns, any connections between the -value you used for each point and the slope you calculated at that point? You might need to go back and do some more.      Try to evaluate this limit in general: . Remember, you know how this goes! You're going to do the same sorts of algebra that you did earlier!  What is the formula, the pattern, the way of finding the slope on the function at any -value, ?      Confirm this by using your new formula to re-calculate the following derivatives:                           We're going to try to think about the derivative as something that can be calculated in general, as well as something that can be calculated at a point. We'll define a new way of calculating it, still a limit of slopes, that will be a bit more general.   "
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
  "body": " Interpreting Derivatives   What is a derivative?  This can feel like a silly question, since we're calculating it and getting used to finding them. But what is it?  In this section, we just want to remind ourselves of what this object is, how we should hold it in our minds as we move through the course, and then practice being flexible with this interpretation.    The Derivative is a Slope   Interpreting the Derivative as a Slope   In and , we built the idea of a derivative by calculating slopes and using them. Let's continue this by considering the function .     Use to find . What does this value represent?      We want to plot the line that would be tangent to the graph of at .  Remember that we can write the equation of a line in two ways:   The equation of a line with slope that passes through the point is: .    The equation of a line with slope that passes the point (this is another way of saying that the -intercept of the line is ) is: .     Find the equation of the line tangent to at . Add it to the graph of below to check your equation.       This tangent line is very similar to the actual curve of the function near . Another way of saying this is that while the slope of is not always the value you found for , it is close to that for -values near .  Use this idea of slope to predict where the -value of our function will be at .    We know that slope is and we're using the fact that for small values of .  Here, we have , so can you use the slope to approximate the corresponding and figure out the new -value?      Compare this value with . How close was it?       The Derivative is a Rate of Change   Interpreting the Derivative as a Rate of Change   This is going to somewhat feel redundant, since maybe we know that a slope is really just a rate of change. But hopefully we'll be able to explore this a bit more and see how we can use a derivative to tell us information about some specific context.  Let's say that we want to model the speed of a car as it races along a strip of the road. By the time we start measuring it (we'll call this time 0), the position the car (along the straight strip of road) is: , where is time measured in seconds and is the position measured in feet. Let's say that this function is only relevant on the domain . That is, we only model the position of the car for a 15-second window as it speeds past us.     How far does the car travel in the 15 seconds that we model it? What was the car's average velocity on those 15 seconds?      Calculate , the derivative of , using . What information does this tell us about our vehicle?    What is the rate at which the position (in feet) of the vehicle changes per unit time (in seconds)? What do we call this, and what are the units?      Calculate . Why is this smaller than the average velocity you found? What does that mean about the velocity of the car?      If we call , then calculate . Note that this is a derivative of a derivative.      Find . Why does this make sense when we think about the difference between the average velocity on the time interval and the value of that we calculated?      What does it mean when we notice that is constant? Explain this by interpreting it in terms of both the velocity of the vehicle as well as the position.       The Derivative is a Limit  Look back at the definition of . The end of it is interesting: \"provided that the limit exists.\" We need to keep in mind that this is a limit, and so a derivative exists or fails to exist whenever that limit exists or fails to exist.  What are some ways that a limit fails to exist?   A limit doesn't exist if the left-side limit and the right-side limit do not match: .    A limit doesn't exist if it is an .   What do each of these situations look like when we're considering the limit of slopes?   When Does a Derivative Not Exist?     A derivative doesn't exist at points where the slopes on either side of the point don't match.    A derivative doesn't exist at points with vertical tangent lines.    A derivative doesn't exist at points where the function is not continuous.        The Derivative is a Function   Interpreting the Derivative as a Function   In , we calculated the derivative function for . Using the definition of , we can see that . Let's explore that a bit more.     Sketch the graphs of and . Describe the shapes of these graphs.      Find the coordinates of the point at on both the graph of and . Plot the point on each graph.      Think back to our previous interpretations of the derivative: how do we interpret the -value output you found for the function?      Find the coordinates of another point at some other -value on both the graph of and . Plot the point on each graph, and explain what the output of tells us at this point.      Use your graph of to find the -intercept of . Locate the point on with this same -value. How do we know, visually, that this point is the -intercept of ?      Use your graph of to find where is positive. Pick two -values where . What do you expect this to look like on the graph of ? Find the matching points (at the same -values) on the graph of to confirm.      Use your graph of to find where is negative. Pick two -values where . What do you expect this to look like on the graph of ? Find the matching points (at the same -values) on the graph of to confirm.      Let's wrap this up with one final pair of points. Let's think about the point on the graph of and the point on the graph of . First, explain what the value of (the output of at ) means about the point on . Finally, why can we not use the value (the output of at ) means about the point on ?       Notation for Derivatives  So far we've been using the \"prime\" notation to represent derivatives: the derivative of is . We will continue to use this notation, but we'll introduce a bunch of other ways of writing notation to represent the derivative. Each new notation will emphasize some aspect of the derivative that will serve to be useful, even though they all represent essentially the same thing.     Function  Derivative  Derivative at  Emphasis        The derivative is a function. The function takes in -value inputs and returns the slope of at that -value.         We can find slopes on any curve, not just functions. This is sometimes also used as a way to simplify the notation, especially when we want to manipulate equations involving .         The derivative is a slope. It is as , and we use and (called differentials ) to represent and as the limits as . This notation is also useful to tell us what the rate of change is: what is changing (in this case ) and what is it changing based on (in this case ).         The derivative is an action that we do to some function. We can call it an operator , although we won't formally define that term in this text. We'll look at this idea more in . We can specify what we are expecting the input variable to be, based on the differential in the denominator.      "
},
{
  "id": "act-InterpretDerivativeSlope",
  "level": "2",
  "url": "sec-InterpretingDerivatives.html#act-InterpretDerivativeSlope",
  "type": "Activity",
  "number": "2.2.1",
  "title": "Interpreting the Derivative as a Slope.",
  "body": " Interpreting the Derivative as a Slope   In and , we built the idea of a derivative by calculating slopes and using them. Let's continue this by considering the function .     Use to find . What does this value represent?      We want to plot the line that would be tangent to the graph of at .  Remember that we can write the equation of a line in two ways:   The equation of a line with slope that passes through the point is: .    The equation of a line with slope that passes the point (this is another way of saying that the -intercept of the line is ) is: .     Find the equation of the line tangent to at . Add it to the graph of below to check your equation.       This tangent line is very similar to the actual curve of the function near . Another way of saying this is that while the slope of is not always the value you found for , it is close to that for -values near .  Use this idea of slope to predict where the -value of our function will be at .    We know that slope is and we're using the fact that for small values of .  Here, we have , so can you use the slope to approximate the corresponding and figure out the new -value?      Compare this value with . How close was it?    "
},
{
  "id": "act-InterpretDerivativeChange",
  "level": "2",
  "url": "sec-InterpretingDerivatives.html#act-InterpretDerivativeChange",
  "type": "Activity",
  "number": "2.2.2",
  "title": "Interpreting the Derivative as a Rate of Change.",
  "body": " Interpreting the Derivative as a Rate of Change   This is going to somewhat feel redundant, since maybe we know that a slope is really just a rate of change. But hopefully we'll be able to explore this a bit more and see how we can use a derivative to tell us information about some specific context.  Let's say that we want to model the speed of a car as it races along a strip of the road. By the time we start measuring it (we'll call this time 0), the position the car (along the straight strip of road) is: , where is time measured in seconds and is the position measured in feet. Let's say that this function is only relevant on the domain . That is, we only model the position of the car for a 15-second window as it speeds past us.     How far does the car travel in the 15 seconds that we model it? What was the car's average velocity on those 15 seconds?      Calculate , the derivative of , using . What information does this tell us about our vehicle?    What is the rate at which the position (in feet) of the vehicle changes per unit time (in seconds)? What do we call this, and what are the units?      Calculate . Why is this smaller than the average velocity you found? What does that mean about the velocity of the car?      If we call , then calculate . Note that this is a derivative of a derivative.      Find . Why does this make sense when we think about the difference between the average velocity on the time interval and the value of that we calculated?      What does it mean when we notice that is constant? Explain this by interpreting it in terms of both the velocity of the vehicle as well as the position.    "
},
{
  "id": "act-InterpretDerivativeFunction",
  "level": "2",
  "url": "sec-InterpretingDerivatives.html#act-InterpretDerivativeFunction",
  "type": "Activity",
  "number": "2.2.3",
  "title": "Interpreting the Derivative as a Function.",
  "body": " Interpreting the Derivative as a Function   In , we calculated the derivative function for . Using the definition of , we can see that . Let's explore that a bit more.     Sketch the graphs of and . Describe the shapes of these graphs.      Find the coordinates of the point at on both the graph of and . Plot the point on each graph.      Think back to our previous interpretations of the derivative: how do we interpret the -value output you found for the function?      Find the coordinates of another point at some other -value on both the graph of and . Plot the point on each graph, and explain what the output of tells us at this point.      Use your graph of to find the -intercept of . Locate the point on with this same -value. How do we know, visually, that this point is the -intercept of ?      Use your graph of to find where is positive. Pick two -values where . What do you expect this to look like on the graph of ? Find the matching points (at the same -values) on the graph of to confirm.      Use your graph of to find where is negative. Pick two -values where . What do you expect this to look like on the graph of ? Find the matching points (at the same -values) on the graph of to confirm.      Let's wrap this up with one final pair of points. Let's think about the point on the graph of and the point on the graph of . First, explain what the value of (the output of at ) means about the point on . Finally, why can we not use the value (the output of at ) means about the point on ?    "
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
  "body": " Some Early Derivative Rules   We are going to break this topic into two parts:   We will try to find some common patterns or connections between derivatives and specific functions. For instance, when we use to build a derivative, are there patterns in the work of evaluating that limit that will allow us to get through the limit work quickly? Can we group some functions together based on how we might deal with the limit?    We will try to think about derivatives a bit more generally and show how we can build some basic properties to help us think about differentiating variations of the functions that we recognize.       Derivatives of Common Functions   Derivatives of Power Functions   We're going to do a bit of pattern recognition here, which means that we will need to differentiate several different power functions. For our reference, a power function (in general) is a function in the form where and are real numbers, and .  Let's begin our focus on the power functions , , and . We're going to use a lot, so feel free to review it before we begin.     Find . As a brief follow up, compare this to the derivative that you found in . Why are they the same? What does the difference, the , in the function do to the graph of it (compared to the graph of ) and why does this not impact the derivative?    Remember that the graph of has the same shape as the graph of , but has been shifted down by 4 units. Why does this vertical shift not change the value of the derivative at any -value?      Find .    Remember that       Find .    Remember that       Notice that in these derivative calculations, the main work is in multiplying . Look back at the work done in all three of these derivative calculations and find some unifying steps to describe how you evaluate the limit\/calculate the derivative after this tedious multiplication was finished. What steps did you do? Is it always the same thing?  Another way of stating this is: if I told you that I knew what was, could you give me some details on how the derivative limit would be finished?      Finish the following derivative calculation:       Make a conjecture about the derivative of a power function in general, .     Something to notice here is that the calculation in this limit is really dependent on knowing what is. When is an integer with , this really just translates to multiplication. If we can figure out how to multiply in general, then this limit calculation will be pretty easy to do. We noticed that:   The first term of that multiplication will combine with the subtraction of in the numerator and subtract to 0.    The rest of the terms in the multiplication have at least one copy of , and so we can factor out and \"cancel\" it with the in the denominator.    Once this has done, we've escaped the portion of the limit that was giving us the indeterminate form, and so we can evaluate the limit as . The result is just that whatever terms still have at least one remaining copy of in it \"go to\" 0, and we're left with just the terms that do not have any copies of in them.       Triangle binomial theorem for coefficients.   Power Rule for Derivatives        We have shown that this is true for , but this is also true for any value of (including , non-integers, and non-positives). We will prove this more formally later (in ), and until then we will be free to use this result.    Let's confirm this Power Rule for two examples that we are familiar with.     Find the derivative using the limit definition of the derivative function. Note that and .      Find the derivative using the limit definition of the derivative function. Note that and .     In this activity, we also found one other result.   Derivative of a Constant Function   If where is some real number constant, then . Another way of saying this is: .     Derivatives of Trigonometric Functions   Let's try to think through the derivatives of and . In this activity, we'll look at graphs and try to collect some information about the derivative functions. We'll be practicing out interpretations, so if you need to brush up on before we start, that's fine!     The following plot includes both the graph of , and the line tangent to . Watch as the point where we build the tangent line moves along the graph, between and .   Collect as much information about the derivative, , as you can. What do you know about it? What are some facts about the slopes of the tangent lines in this animation?    What kinds of values do the slopes take? Are there some values that these slopes will never be? Can you find any special points on this graph where you can actually tell what the slope is?      We're going to get more specific here: let's find the coordinates of points that are on both the graph of and it's derivative . Remember, to get the values for , we're really looking at the slope of the tangent line at that point.       Let's repeat this process using the function instead.  The following plot includes both the graph of , and the line tangent to . Watch as the point where we build the tangent line moves along the graph, between and .   Collect as much information about the derivative, , as you can. What do you know about it? What are some facts about the slopes of the tangent lines in this animation?    What kinds of values do the slopes take? Are there some values that these slopes will never be? Can you find any special points on this graph where you can actually tell what the slope is?      We're going to get more specific here: let's find the coordinates of points that are on both the graph of and it's derivative . Remember, to get the values for , we're really looking at the slope of the tangent line at that point.       Derivatives of the Sine and Cosine Functions           In order to show why and , we will work with the limit definitions of both. Consider both: Our goal is to re-write the numerators in both of these limits as something more usable. So far, we have been evaluating these types of limits ( ) using some algebraic manipulations. Instead of using algebra, we will use geometry.  Consider the unit circle below. We have plotted the angle and are reminded that the point on the circle that corresponds with the terminal side of the angle has coordinates . We can label the sides of the triangle pictured below.   Unit circle with the angle .   A unit circle, with an angle theta placed in the first quadrant. A triangle is formed using the angle, where the hypotenuse is the radius of the circle (1) the height is sin(theta) and the base is cos(theta).    Now we consider a second point on the circle, this one formed by the terminal side of the angle . This point has coordinates . Note, below, that we want to find expressions for and . We can find these geometrically.   Angles and .   A triangle on a unit circle, with standard lengths 1, sin(theta), and cos(theta). Another point is labeled on the unit circle. There is a triangle formed by the line connecting the two points, and then the vertical and horizontal components of the distance between the two points. The vertical distance is labeled sin(theta+Delta theta)-sin(theta) and the horizontal distance is labeled cos(theta)-cos(theta+Delta theta). The hypotenuse is labeled h, but it is very close to the same as the arclength between the two points, labeled Delta theta.    Note, then, that the two triangles look to be similar triangles. We can say, then, that: In fact, we will find that in the limit as , the length matches the arc length perfectly, and thus lays at a right angle to the terminal side of the angle . Since as we have , we can say:   Consider, then, the limits involved in the derivative calculations that we built earlier.   So we have shown that and as we claimed.     Derivative of the Exponential Function   We're going to consider a maybe-unfamiliar function, . We'll explore this function in a similar way to use thinking about the derivatives of sine and cosine in : we'll look at a tangent line at different points, and think about the slope.     The plot below includes both the graph of and the line tangent to . Watch as the point moves along the curve.   Collect as much information about the derivative, , as you can. What do you know about it? What are some facts about the slopes of the tangent lines in this animation?    Are there any -values where the slope is negative? Are there any where the slope is equal to 0? What happens to the slopes as increases?      There is a slightly hidden fact about slopes and tangent lines in this animation. In the following animation, we'll add (and label) one more point. Let's look at this again, this time noting the point at which this tangent line crosses the -axis. This will make it easier to think about slopes!   What information does this reveal about the slopes?    Especially it might be helpful to think about the slopes and their relationship to the -value of the point we are building the tangent line at.      Make a conjecture about the slope of the line tangent to the exponential function at any -value. What do you believe the formula\/equation for is then?      Derivative of the Exponential Function          Some Properties of Derivatives in General   Combinations of Derivatives   If and are differentiable functions, then the following statements about their derivatives are true.    Sums: The derivative of the sum of and is the sum of the derivatives of and :      Differences: The derivative of the difference of and is the difference of the derivatives of and :      Coefficients: If is some real number coefficient, then:        We can think about each of these properties through the lense of how combining these functions impacts the slopes. For instance, if we wanted to visualize the property about coefficients (that ), we can visualize this coefficient as a scaling factor.    Putting These Together   Find the following derivatives:                 "
},
{
  "id": "act-DerivativesOfPowerFunctions",
  "level": "2",
  "url": "sec-DerivativeRules.html#act-DerivativesOfPowerFunctions",
  "type": "Activity",
  "number": "2.3.1",
  "title": "Derivatives of Power Functions.",
  "body": " Derivatives of Power Functions   We're going to do a bit of pattern recognition here, which means that we will need to differentiate several different power functions. For our reference, a power function (in general) is a function in the form where and are real numbers, and .  Let's begin our focus on the power functions , , and . We're going to use a lot, so feel free to review it before we begin.     Find . As a brief follow up, compare this to the derivative that you found in . Why are they the same? What does the difference, the , in the function do to the graph of it (compared to the graph of ) and why does this not impact the derivative?    Remember that the graph of has the same shape as the graph of , but has been shifted down by 4 units. Why does this vertical shift not change the value of the derivative at any -value?      Find .    Remember that       Find .    Remember that       Notice that in these derivative calculations, the main work is in multiplying . Look back at the work done in all three of these derivative calculations and find some unifying steps to describe how you evaluate the limit\/calculate the derivative after this tedious multiplication was finished. What steps did you do? Is it always the same thing?  Another way of stating this is: if I told you that I knew what was, could you give me some details on how the derivative limit would be finished?      Finish the following derivative calculation:       Make a conjecture about the derivative of a power function in general, .     Something to notice here is that the calculation in this limit is really dependent on knowing what is. When is an integer with , this really just translates to multiplication. If we can figure out how to multiply in general, then this limit calculation will be pretty easy to do. We noticed that:   The first term of that multiplication will combine with the subtraction of in the numerator and subtract to 0.    The rest of the terms in the multiplication have at least one copy of , and so we can factor out and \"cancel\" it with the in the denominator.    Once this has done, we've escaped the portion of the limit that was giving us the indeterminate form, and so we can evaluate the limit as . The result is just that whatever terms still have at least one remaining copy of in it \"go to\" 0, and we're left with just the terms that do not have any copies of in them.      "
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
  "body": "  Let's confirm this Power Rule for two examples that we are familiar with.     Find the derivative using the limit definition of the derivative function. Note that and .      Find the derivative using the limit definition of the derivative function. Note that and .    "
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
  "body": " Derivatives of Trigonometric Functions   Let's try to think through the derivatives of and . In this activity, we'll look at graphs and try to collect some information about the derivative functions. We'll be practicing out interpretations, so if you need to brush up on before we start, that's fine!     The following plot includes both the graph of , and the line tangent to . Watch as the point where we build the tangent line moves along the graph, between and .   Collect as much information about the derivative, , as you can. What do you know about it? What are some facts about the slopes of the tangent lines in this animation?    What kinds of values do the slopes take? Are there some values that these slopes will never be? Can you find any special points on this graph where you can actually tell what the slope is?      We're going to get more specific here: let's find the coordinates of points that are on both the graph of and it's derivative . Remember, to get the values for , we're really looking at the slope of the tangent line at that point.       Let's repeat this process using the function instead.  The following plot includes both the graph of , and the line tangent to . Watch as the point where we build the tangent line moves along the graph, between and .   Collect as much information about the derivative, , as you can. What do you know about it? What are some facts about the slopes of the tangent lines in this animation?    What kinds of values do the slopes take? Are there some values that these slopes will never be? Can you find any special points on this graph where you can actually tell what the slope is?      We're going to get more specific here: let's find the coordinates of points that are on both the graph of and it's derivative . Remember, to get the values for , we're really looking at the slope of the tangent line at that point.     "
},
{
  "id": "thm-TrigDerivatives",
  "level": "2",
  "url": "sec-DerivativeRules.html#thm-TrigDerivatives",
  "type": "Theorem",
  "number": "2.3.4",
  "title": "Derivatives of the Sine and Cosine Functions.",
  "body": " Derivatives of the Sine and Cosine Functions           In order to show why and , we will work with the limit definitions of both. Consider both: Our goal is to re-write the numerators in both of these limits as something more usable. So far, we have been evaluating these types of limits ( ) using some algebraic manipulations. Instead of using algebra, we will use geometry.  Consider the unit circle below. We have plotted the angle and are reminded that the point on the circle that corresponds with the terminal side of the angle has coordinates . We can label the sides of the triangle pictured below.   Unit circle with the angle .   A unit circle, with an angle theta placed in the first quadrant. A triangle is formed using the angle, where the hypotenuse is the radius of the circle (1) the height is sin(theta) and the base is cos(theta).    Now we consider a second point on the circle, this one formed by the terminal side of the angle . This point has coordinates . Note, below, that we want to find expressions for and . We can find these geometrically.   Angles and .   A triangle on a unit circle, with standard lengths 1, sin(theta), and cos(theta). Another point is labeled on the unit circle. There is a triangle formed by the line connecting the two points, and then the vertical and horizontal components of the distance between the two points. The vertical distance is labeled sin(theta+Delta theta)-sin(theta) and the horizontal distance is labeled cos(theta)-cos(theta+Delta theta). The hypotenuse is labeled h, but it is very close to the same as the arclength between the two points, labeled Delta theta.    Note, then, that the two triangles look to be similar triangles. We can say, then, that: In fact, we will find that in the limit as , the length matches the arc length perfectly, and thus lays at a right angle to the terminal side of the angle . Since as we have , we can say:   Consider, then, the limits involved in the derivative calculations that we built earlier.   So we have shown that and as we claimed.   "
},
{
  "id": "act-ExponentialDerivatives",
  "level": "2",
  "url": "sec-DerivativeRules.html#act-ExponentialDerivatives",
  "type": "Activity",
  "number": "2.3.3",
  "title": "Derivative of the Exponential Function.",
  "body": " Derivative of the Exponential Function   We're going to consider a maybe-unfamiliar function, . We'll explore this function in a similar way to use thinking about the derivatives of sine and cosine in : we'll look at a tangent line at different points, and think about the slope.     The plot below includes both the graph of and the line tangent to . Watch as the point moves along the curve.   Collect as much information about the derivative, , as you can. What do you know about it? What are some facts about the slopes of the tangent lines in this animation?    Are there any -values where the slope is negative? Are there any where the slope is equal to 0? What happens to the slopes as increases?      There is a slightly hidden fact about slopes and tangent lines in this animation. In the following animation, we'll add (and label) one more point. Let's look at this again, this time noting the point at which this tangent line crosses the -axis. This will make it easier to think about slopes!   What information does this reveal about the slopes?    Especially it might be helpful to think about the slopes and their relationship to the -value of the point we are building the tangent line at.      Make a conjecture about the slope of the line tangent to the exponential function at any -value. What do you believe the formula\/equation for is then?    "
},
{
  "id": "thm-ExponentialDerivative",
  "level": "2",
  "url": "sec-DerivativeRules.html#thm-ExponentialDerivative",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "Derivative of the Exponential Function.",
  "body": " Derivative of the Exponential Function       "
},
{
  "id": "thm-CombinationsOfDerivatives",
  "level": "2",
  "url": "sec-DerivativeRules.html#thm-CombinationsOfDerivatives",
  "type": "Theorem",
  "number": "2.3.8",
  "title": "Combinations of Derivatives.",
  "body": " Combinations of Derivatives   If and are differentiable functions, then the following statements about their derivatives are true.    Sums: The derivative of the sum of and is the sum of the derivatives of and :      Differences: The derivative of the difference of and is the difference of the derivatives of and :      Coefficients: If is some real number coefficient, then:       "
},
{
  "id": "subsec-DerivativeProperties-5",
  "level": "2",
  "url": "sec-DerivativeRules.html#subsec-DerivativeProperties-5",
  "type": "Example",
  "number": "2.3.9",
  "title": "Putting These Together.",
  "body": " Putting These Together   Find the following derivatives:               "
},
{
  "id": "sec-ProductQuotientRule",
  "level": "1",
  "url": "sec-ProductQuotientRule.html",
  "type": "Section",
  "number": "2.4",
  "title": "The Product and Quotient Rules",
  "body": " The Product and Quotient Rules   We saw in that when we want to find the derivative of a sum or difference of functions, we can just find the derivatives of each function separately, and then combine the derivatives back together (by adding or subtracting). This, hopefully, is pretty intuitive: of course a slope of a sum of things is just the slopes of each thing added together!  In this section, we want to think about derivatives of product and quotients of functions. What happens when we differentiate a function that is really just two functions multiplied together?   Thinking About Derivatives of Products   Let's start with two quick facts: .     What is ? What about ?      Based on what you just explained, what is a reasonable assumption about what might be?    Does it seem reasonable that we could just multiply the derivatives together, and say that was the same thing as ?      Let's just think about for a moment. What is  ? Can you write this as a product? Call one of your functions and the other . You should have that for whatever you used.      Use your example to explain why, in general, .      Let's show another way that we know this. Think about . We know two things: . What, though, is ?      Use all of this to reassure yourself that even though the derivative of a sum of functions is the sum of the derivatives of the functions, we will need to develop a better understanding of how the derivatives of products of functions work.     A thing that I like to think about is this: if , then every function's derivative would be 0.  In the example with the function, we noticed that we could write the function as . This is true of every function!  If , then we could say that for any function with a derivative : . This, obviously, can't be true! We know of tons of functions that have non-zero slopes... most of them do!  So, we hopefully have some motivation for building a rule to that helps us think about derivatives of products of functions.    The Product Rule   Building a Product Rule   Let's investigate how we might differentiate the product of two functions: . We'll use an area model for multiplication here: we can consider a rectangle where the side lengths are functions and that change for different values of . Maybe is representative of some type of time component, and the side lengths change size based on time, but it could be anything.  If we want to think about , then we're really considering the change in area of the rectangle.     Find the area of the two rectangles. The second rectangle is just one where the input variable for the side length has changed by some amount, leading to a different side length.      A rectangle with the width labeled f(x) and the height labeled g(x).    A larger rectangle with the width labeled f(x+ delta x) and the height labeled g(x + delta x). The original, smaller, rectangle is marked with a dotted line inside of the new larger rectangle.         Write out a way of calculating the difference in these areas.      Let's try to calculate this difference in a second way: by finding the actual area of the region that is new in the second rectangle.     A small rectangle inside a larger rectangle. The difference is broken up into three shaded in regions. A bar on the top, a bar on the right, and a corner piece.    In order to do this, we've broken the region up into three pieces. Calculate the areas of the three pieces. Use this to fill in the following equation: .      We do not want to calculate the total change in area: a derivative is a rate of change , so in order to think about the derivative we need to divide by the change in input, .  We'll also want to think about this derivative as an instantaneous rate of change, meaning we will consider a limit as . Fill in the following: We can split this fraction up into three fractions:       In any limit with or in it, notice that we can factor part out of the limit, since these functions do not rely on , the part that changes in the limit. Factor these out.  In the third limit, factor out either or .       Use to re-write these limits. Show that when , we get: .     We can investigate this visual a bit more dynamically: see the differences in area as . What parts are left, when ? What areas aren't visible?    Product Rule   If and are functions that are differentiable at and , then: . For convenience, this is often written as: .      Use the to find the following derivatives.          Use and . Now find and , and use: .                     What about Dividing?  So we can differentiate a product of functions, and the obvious next question should be about division: if we needed to build a reasonable way of differentiating a product, shouldn't we also need to build a new way of thinking about derivatives of quotients?  A nice thing that we can do is think about division as really just multiplication. For instance, if we want to differentiate , then we can just think about this quotient as really a product: . Now we can just apply product rule!   This works great! We can always think about quotients as just products of reciprocals! But the problem is that we can't always differentiate these reciprocals (for now). We were able to differentiate by re-writing this as just a power function (with a negative exponent).  What about this flipped example: ? In order for us to do the same thing, we need to re-write this as but we don't know how to differentiate (yet).  So let's try to build a general way of differentiating quotients.   Constructing a Quotient Rule   We're going to start with a function that is a quotient of two other functions: . Our goal is that we want to find , but we're going to shuffle this function around first. We won't calculate this derivative directly!     Start with . Multiply on both sides to write a definition for .       Find .      Wait: we don't care about . Right? We care about finding !  Use what you found for and solve for .       This is a strange formula: we have a formula for written in terms of ! But we said earlier that .  In your formula for , replace with .      This formula is fine, but a little clunky. We'll try to re-write it in some nice ways, but it is a bit more complex than the .   Quotient Rule   If and are differentiable at and then: .  For convenience, this is often written as: .      Use the to find the following derivatives.        Once you have this derivative, confirm that it is the same as , the way that we found it using the Product Rule.                     Derivatives of (the Rest of the) Trigonometric Functions  You might remember that of the six main trigonometric functions, we can write four of them in terms of the other two: here are the different trigonometric functions written in terms of sine and cosine functions:     Find the derivatives of the remaining trigonometric functions.          Write and use the Quotient Rule.           Write and use the Quotient Rule.           Write and use the Quotient Rule.           Write and use the Quotient Rule.      "
},
{
  "id": "act-MotivatingProductRule",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#act-MotivatingProductRule",
  "type": "Activity",
  "number": "2.4.1",
  "title": "Thinking About Derivatives of Products.",
  "body": " Thinking About Derivatives of Products   Let's start with two quick facts: .     What is ? What about ?      Based on what you just explained, what is a reasonable assumption about what might be?    Does it seem reasonable that we could just multiply the derivatives together, and say that was the same thing as ?      Let's just think about for a moment. What is  ? Can you write this as a product? Call one of your functions and the other . You should have that for whatever you used.      Use your example to explain why, in general, .      Let's show another way that we know this. Think about . We know two things: . What, though, is ?      Use all of this to reassure yourself that even though the derivative of a sum of functions is the sum of the derivatives of the functions, we will need to develop a better understanding of how the derivatives of products of functions work.    "
},
{
  "id": "act-ProductRule",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#act-ProductRule",
  "type": "Activity",
  "number": "2.4.2",
  "title": "Building a Product Rule.",
  "body": " Building a Product Rule   Let's investigate how we might differentiate the product of two functions: . We'll use an area model for multiplication here: we can consider a rectangle where the side lengths are functions and that change for different values of . Maybe is representative of some type of time component, and the side lengths change size based on time, but it could be anything.  If we want to think about , then we're really considering the change in area of the rectangle.     Find the area of the two rectangles. The second rectangle is just one where the input variable for the side length has changed by some amount, leading to a different side length.      A rectangle with the width labeled f(x) and the height labeled g(x).    A larger rectangle with the width labeled f(x+ delta x) and the height labeled g(x + delta x). The original, smaller, rectangle is marked with a dotted line inside of the new larger rectangle.         Write out a way of calculating the difference in these areas.      Let's try to calculate this difference in a second way: by finding the actual area of the region that is new in the second rectangle.     A small rectangle inside a larger rectangle. The difference is broken up into three shaded in regions. A bar on the top, a bar on the right, and a corner piece.    In order to do this, we've broken the region up into three pieces. Calculate the areas of the three pieces. Use this to fill in the following equation: .      We do not want to calculate the total change in area: a derivative is a rate of change , so in order to think about the derivative we need to divide by the change in input, .  We'll also want to think about this derivative as an instantaneous rate of change, meaning we will consider a limit as . Fill in the following: We can split this fraction up into three fractions:       In any limit with or in it, notice that we can factor part out of the limit, since these functions do not rely on , the part that changes in the limit. Factor these out.  In the third limit, factor out either or .       Use to re-write these limits. Show that when , we get: .    "
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
  "body": "  Use the to find the following derivatives.          Use and . Now find and , and use: .                  "
},
{
  "id": "act-QuotientRule",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#act-QuotientRule",
  "type": "Activity",
  "number": "2.4.3",
  "title": "Constructing a Quotient Rule.",
  "body": " Constructing a Quotient Rule   We're going to start with a function that is a quotient of two other functions: . Our goal is that we want to find , but we're going to shuffle this function around first. We won't calculate this derivative directly!     Start with . Multiply on both sides to write a definition for .       Find .      Wait: we don't care about . Right? We care about finding !  Use what you found for and solve for .       This is a strange formula: we have a formula for written in terms of ! But we said earlier that .  In your formula for , replace with .     "
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
  "body": "  Use the to find the following derivatives.        Once you have this derivative, confirm that it is the same as , the way that we found it using the Product Rule.                  "
},
{
  "id": "subsec-MoreTrigDerivatives-3",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#subsec-MoreTrigDerivatives-3",
  "type": "Example",
  "number": "2.4.7",
  "title": "",
  "body": "  Find the derivatives of the remaining trigonometric functions.          Write and use the Quotient Rule.           Write and use the Quotient Rule.           Write and use the Quotient Rule.           Write and use the Quotient Rule.    "
},
{
  "id": "sec-ChainRule",
  "level": "1",
  "url": "sec-ChainRule.html",
  "type": "Section",
  "number": "2.5",
  "title": "The Chain Rule",
  "body": " The Chain Rule   We've been building up some intuition and rules to help us think about differentiating different functions and combinations of functions. We can find derivatives of scaled functions, sums of functions, differences of functions, products of functions, and also quotients of functions.  In this section, we'll look at our last operation between functions: composition.    Composition and Decomposition  An important part of finding derivatives of products and quotients is identifying the component functions that are being multiplied\/divided (often labeled or just and or just ). From there, we find the derivatives of each of the component functions, and then use the formula from the or to put the pieces together.  Thinking about derivatives of composed functions will be the same: we'll need to identify what functions are being composed inside of other functions, and use those pieces in some formulaic way to represent the derivative. On that note, let's remind ourselves and practice working with composition (and decomposition) of functions.   Composition (and Decomposition) Pictionary   This activity will involve a second group, or at least a partner. We'll go through the first part of this activity, and then connect with a second group\/person to finish the second part.     Build two functions, calling them and . Pick whatever kinds of functions you'd like, but this activity will work best if these functions are in a kind of sweet-spot between \"simple\" and \"complicated,\" but don't overthink this.      Compose inside of to create , which we can also write as .      Write your composed function on a separate sheet of paper. Do not leave any indication of what your chosen and are. Just write your composed function by itself.  Now, pass this composed to your partner\/a second group.      You should have received a new function from some other person\/group. It is different than yours, but also labeled (with different choices of and ).  Identify a possibility for , the outside function in this composition, as well as a possibility for , the inside function in this composition. You can check your answer by composing these!      Write a different pair of possibilities for and that will still give you the same composed function, .      Check with your partner\/the second group: did you identify the pair of functions that they originally used?  Did whoever you passed your composed function to correctly identify your functions?     A big thing to notice here is that when we pick the pieces of functions that we think were composed inside of each other, there's not a single obvious answer. This is pretty different compared to, say, using the . In these quotients, we have a natural division (literally) between the pieces. Here, it's much more subjective for us when we decide to label an \"inside\" function and an \"outside\" function.  We will build up our intuition to find a good balance for how we pick these.    The Chain Rule, Intuitively  Before we build the Chain Rule for differentiating composed functions, we should talk about some notation. Earlier (in ) we talked about the derivative notation, . One of the things we mentioned is that while we know that the derivative is an instantaneous rate of change, this notation is helpful to tell us what is changing with regard to what .  In , we are calculating how much the -variable changes when increases. If we talked about , then we are discussing how much changes for an increase in , whatever these variables represent.   Gears and Chains   Let's think about some gears. We've got three gears, all different sizes. But the gears are linked together, and a small motor works to spin one of the gears. Since the gears are linked, when one gear spins, they all do. But since they are different sizes, they complete a different number of revolutions: the smaller ones spin more times than the larger ones, since they have a smaller circumference.   For our purpose, let's say that Gear A is being driven by the motor.     Let's try to quantify how much \"faster\" Gear B is spinning compared to Gear A. How many revolutions does Gear B complete in the time it takes Gear A to complete one revolution?      Now quantify the speed of Gear C compared to its neighbor, Gear B. How many revolutions does Gear C complete in the time it takes Gear B to complete one revolution?      Use the above relative \"speeds\" to compare Gear C and Gear A: how many revolutions does Gear C complete in the time it takes Gear A to complete one revolution?  More importantly, how do we find this?      Now let's translate this into some derivative notation: we've really been finding rates at which one thing changes (the speed of the gear spinning) relative to another's.  Call the speed of Gear B compared to Gear A: . Now call the speed of Gear C compared to Gear B: . Come up with a formula to find .     So what we need to do now is to somehow translate this intuitive idea of multiplying rates of change to build a strategy for thinking about derivatives of composed functions.  We can think of these linked gears as functions: Gear C changes based on what is happening with Gear B, which changes based on Gear A. We can translate Gear A to be an input variable, like . Then Gear B is a function based on that: we can call it . Then Gear C is a function that takes in the position of Gear B (the function ), and so we can think of it as .  To build the derivative rule for composite functions, we need to find how the \"outside\" function changes as the \"inside\" function changes ( in this case) and multiply that by how the \"inside\" function changes as the input variable changes ( here).   The Chain Rule   For the composite function , if we define and , then, as long as both and are differentiable at and respectively: . Alternatively, this can be written as: .      Doing is Different than Knowing  It is lovely to know that the Chain Rule is really just linking the two rates of change together to connect a function with an input variable through a middle processing function. That's great!  But doing the Chain Rule is different than just knowing it, so let's walk through a first example. Let's find the following derivative: We'll call the \"inside\" function , so we can really write the whole function (normally we're calling this ) as . What we can notice, here, is that is just a function of some variable , and we want to find , the rate at which changes with regard to its input variable. This might feel a bit strange, since isn't just an input variable: it means something, since we have that . This is fine! The extra that we multiply will take care of linking this derivative to the input variable . After we finished differentiating , you'll notice that we used the fact that to write our combination of derivatives (the derivative of the \"outside\" function and the derivative of the \"inside\" function) in terms of the same input variable again.  The last line, rewriting as , is just for aesthetics.  Now you're ready to try some more examples! In each, focus on identifying a natural selection for the \"inside\" function, .    Use the Chain Rule to differentiate the following:          Notice that is composed under the square root. Use .           Try letting , since it's composed inside the exponent of the exponential function.           You could think about this as and try to use a very annoying product rule, but it might be easier to think about this as .       Generalizing the Derivative of the Exponential  Earlier, we looked at the specific derivative for ( ), but we haven't talked about derivatives of other exponential functions. What about things like or ? We can use a nice fact about exponentials and logarithms . We'll think more about log functions later (starting in ), but we can think a bit about them now.  A big fact to recall is that a logarithm is a way of finding an exponent with a specific property. If we want to find the exponent that we would need to put on the number to give us as an answer, we could use . This is just because logs are defined in this circular way: they are, by definition, the exponent you would need to output whatever number is inside the log.  This means that if we want to think about the number , but written in a different way, we can think of .  Ok, but why would we ever use this? This seems like a ridiculous way to write a number as basic as 2!  Consider the following: But we also might notice that we can re-write this using an exponent rule! We know that in general: . Let's re-write this exponential function: Remember, is just a number: it's specifically the number you have to put in the exponent on to get 2. So this is just a coefficient on . We can differentiate and use the Chain Rule! Now we can remember that is really which is just .  So we get . We can notice that we can re-create this with any (reasonable) value for the base of this exponential function.   Derivative of the Generalized Exponential Function   If and , then: .     "
},
{
  "id": "act-CompositionDecomposition",
  "level": "2",
  "url": "sec-ChainRule.html#act-CompositionDecomposition",
  "type": "Activity",
  "number": "2.5.1",
  "title": "Composition (and Decomposition) Pictionary.",
  "body": " Composition (and Decomposition) Pictionary   This activity will involve a second group, or at least a partner. We'll go through the first part of this activity, and then connect with a second group\/person to finish the second part.     Build two functions, calling them and . Pick whatever kinds of functions you'd like, but this activity will work best if these functions are in a kind of sweet-spot between \"simple\" and \"complicated,\" but don't overthink this.      Compose inside of to create , which we can also write as .      Write your composed function on a separate sheet of paper. Do not leave any indication of what your chosen and are. Just write your composed function by itself.  Now, pass this composed to your partner\/a second group.      You should have received a new function from some other person\/group. It is different than yours, but also labeled (with different choices of and ).  Identify a possibility for , the outside function in this composition, as well as a possibility for , the inside function in this composition. You can check your answer by composing these!      Write a different pair of possibilities for and that will still give you the same composed function, .      Check with your partner\/the second group: did you identify the pair of functions that they originally used?  Did whoever you passed your composed function to correctly identify your functions?    "
},
{
  "id": "act-Gears",
  "level": "2",
  "url": "sec-ChainRule.html#act-Gears",
  "type": "Activity",
  "number": "2.5.2",
  "title": "Gears and Chains.",
  "body": " Gears and Chains   Let's think about some gears. We've got three gears, all different sizes. But the gears are linked together, and a small motor works to spin one of the gears. Since the gears are linked, when one gear spins, they all do. But since they are different sizes, they complete a different number of revolutions: the smaller ones spin more times than the larger ones, since they have a smaller circumference.   For our purpose, let's say that Gear A is being driven by the motor.     Let's try to quantify how much \"faster\" Gear B is spinning compared to Gear A. How many revolutions does Gear B complete in the time it takes Gear A to complete one revolution?      Now quantify the speed of Gear C compared to its neighbor, Gear B. How many revolutions does Gear C complete in the time it takes Gear B to complete one revolution?      Use the above relative \"speeds\" to compare Gear C and Gear A: how many revolutions does Gear C complete in the time it takes Gear A to complete one revolution?  More importantly, how do we find this?      Now let's translate this into some derivative notation: we've really been finding rates at which one thing changes (the speed of the gear spinning) relative to another's.  Call the speed of Gear B compared to Gear A: . Now call the speed of Gear C compared to Gear B: . Come up with a formula to find .    "
},
{
  "id": "thm-ChainRule",
  "level": "2",
  "url": "sec-ChainRule.html#thm-ChainRule",
  "type": "Theorem",
  "number": "2.5.1",
  "title": "The Chain Rule.",
  "body": " The Chain Rule   For the composite function , if we define and , then, as long as both and are differentiable at and respectively: . Alternatively, this can be written as: .   "
},
{
  "id": "subsec-DoingChainRule-6",
  "level": "2",
  "url": "sec-ChainRule.html#subsec-DoingChainRule-6",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": "  Use the Chain Rule to differentiate the following:          Notice that is composed under the square root. Use .           Try letting , since it's composed inside the exponent of the exponential function.           You could think about this as and try to use a very annoying product rule, but it might be easier to think about this as .    "
},
{
  "id": "thm-GeneralizedExponentialDerivaitve",
  "level": "2",
  "url": "sec-ChainRule.html#thm-GeneralizedExponentialDerivaitve",
  "type": "Theorem",
  "number": "2.5.3",
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
  "body": " Implicit Differentiation   Let's quickly recap what we've done with this new calculus object, the derivative:   We defined the derivative at a point ( ) to find the slope of a line touching a graph of a function at a single point. We call this the \"slope of the tangent line\" at a point.    Once we calculated this slope, we quickly found a way to think about the derivative as a function ( ) that connects -values with the slope of the line tangent to at that -value.    We thought about how we could interpret the derivative as more than just a slope ( ). We can think about this as an instantaneous rate of change, and use it to add detail to how we think about mathematical models of different things.    We spent some time building up shortcuts, noticing patterns, and generalizing ways of finding these derivative functions for specific functions ( ) as well as combinations of those functions ( and ).   Our goal, now, is to generalize this a bit. What happens when we push past the restriction of only dealing with functions ? Can we think of some reasonable non-functions that might produce curves? Might we think about tangent lines and slopes in these contexts?    Explicit vs. Implicit Definitions    Explicitly and Implicitly Defined Curves   A function or curve that is defined explicitly is one where the relationship between the variables is stated in with an equation like . Here, is the input variable and we can find each corresponding value of the -variable by applying some operations to . As an example, we might consider the following function: .  A function or curve that is defined implicitly us one where the relationship between the variables is stated with an equation connecting the variables, but not necessarily one which is \"solved\" for a single variable. Here, the relationship between variables is not stated with the typical \"input\" and \"output\" variables. As an example, we might consider the same function as above, but defined as: .  Often, an implicitly defined curve is one where we cannot solve for a single variable by isolating it.   A classic and important implicitly defined curve is the unit circle: . We can try to isolate for and write this as an explicitly defined curve, and end up with: . Unfortunately, this only displays the upper half of the circle, since the square root will only output positive values. In this case, we can get around this by defining the circle with two functions.   As we move forward, let's work with this circle using the implicitly defined version ( ). How might we find a slope of a line tangent to this circle at some point?    Using a Derivative as an Operator  Let's recall back to . We talked about how we can use the notation as a kind of action: the notation says \"find the derivative of with respect to .\" When we say \"with respect to ,\" we mean that we are treating as an input variable, and trying to find out how changes based on changes to that input. The notation says, \"find the rate at which changes as increases.\"  Because this notation is a call to action, we can use it when we're dealing with an equation. We can call back to our early algebra days, where we learn that whatever we do to one side of an equation needs to be done to the other side as well, in order to maintain the equality.  We can apply this to our derivative actions: we can differentiate both sides of an equation!   Thinking about the Chain Rule    Explain to someone how (and why) we use the to find the following derivative: .      Let's say that . Explain how we find the following derivative: . How is this different, or not different, than the previous derivative?      Let's say that we have some other function, . Explain how we find the following derivative: . How is this different, or not different, than the previous derivatives?      What is the difference between the following derivatives:     When do we need to use the Chain Rule? When do we need to use some linking derivative to connect the function we're looking at with the variable we care about?                Because we'll be applying our derivative notation to pieces of some equation, we'll need to be very aware of where we need to apply the Chain Rule.  Now we can look at some examples of implicitly defined curves and think about questions about the derivative. Let's start with our circle.   Slopes on a Circle   Visualize the unit circle. Feel free to draw one, or find the picture above. We're going to think about slopes on this circle.     Point out the locations on the unit circle where you would expect to see tangent lines that are perfectly horizontal. What do you think the value of the derivative, , would be at these points?      Point out the locations on the unit circle where you would expect to see tangent lines that are perfectly vertical. What do you think the value of the derivative, , would be at these points?      Find the point(s) where . What do you think the value of the derivative, , would be at these points?    There are two points to consider here: and .      For the unit circle defined by the equation , apply the derivative to both sides of this equation to get the following: Carefully consider each of these derivatives (each of the terms). Which of these will you need to apply the Chain Rule for?      Differentiate. Solve for or , whichever notation you decide to use.    Make sure to use the Chain Rule when necessary!     or       Go back to the first few questions, and try to answer them again:   Find the locations of any horizontal tangent lines (where ).    Find the locations of any vertical tangent lines (where doesn't exist, or where you would divide by 0).    Find the values of for the points on the circle where .          Let's repeat some of this process, but using a new curve. Consider the curve defined by the equation: . This curve is a special curve with some interesting mathematical properties, and is actually a part of a family of curves called elliptic curves . For now, let's just consider it as a fun curve to look at, and use implicit differentiation to think about it.     The elliptic curve, y^2=x^3-x+1. If has a flared horseshoe type shape. The curve has a symmetry across the x-axis, and the upper section starts somewhere near (-1.3,0). It starts moving vertically upwards, and then curves towards (-1,1). From there, it descends lightly towards somewhere near (0.6, 0.6), where it flares upwards. The portion under the x-axis is a reflection of this.       Mark the locations on the curve where it looks like the curve will have horizontal tangent lines. How many did you find?      Mark the locations on the curve where it looks like the curve will have vertical tangent lines. How many did you find?      Find the point(s) where . What do you think the value of the derivative, , would be at these points?      For the elliptic curve defined by the equation , apply the derivative to both sides of this equation: Carefully consider each of these derivatives (each of the terms). Which of these will you need to apply the Chain Rule for?      Differentiate. Solve for or , whichever notation you decide to use.    Make sure to use the Chain Rule when necessary!     or       Go back to the first few questions, and try to answer them again:   Find the locations of any horizontal tangent lines (where ).    Find the locations of any vertical tangent lines (where doesn't exist, or where you would divide by 0).    Find the values of for the points on the curve where .        This example was pretty similar to the first activity: in both of these, we use the Chain Rule to differentiate . Let's look at another example.     Let's consider a new curve: .    A curve with 4 independent loops visible. The main, middle, loop, looks like a deformed circle. It passes through the origin, and has some straight sides and almost pointed corners, although they are still round. On the x-axis, there are two very flat round loops: one around (8,0) and another around (-5,0). A third one lays on the y-axis around (-5,0).        We are going to find or . Let's dive into differentiation: Think carefully about these derivatives. For each of the three, how will you approach it? What kinds of nuances or rules or strategies will you need to think about? Why?    Are any of these derivatives involving a variable other than , the input variable (based on our notation, since we are thinking about how changes with regard to  ).  Are any of these derivatives involving any other combination of functions? Are there products and\/or quotients that we need to think about?      Implement your ideas or strategies from above to differentiate each term.    We need to apply the Chain Rule to and then we need to apply the Product Rule . Notice that when we find the derivative of for the Product Rule, we need to use the Chain Rule!           Now we need to solve for or , whichever you are using. While this equation can look complicated, we can notice something about the \"location\" of or in our equation.  Why do we always know that or will be multiplied on a term whenever it shows up?      Now that we are confident that we will always know that we are multiplying this derivative, we can employ a consistent strategy:   Rearrange our equation so that every term with a or is on one side, and everything without is on the other.    Now we are guaranteed that or is a common factor: factor it out.    Now we can solve for or by dividing!   Solve for or in your equation!      Build the equation of a line that lays tangent to the curve at the origin. Does the value of at look reasonable to you?       Some Summary and Strategy  Let's wrap this up with some general strategy and summary of what we've seen.  The first thing we can notice is that we have talked through how to employ two of the three big derivative rules: we used Chain Rule throughout these examples, and in we needed to use the Product Rule in order to differentiate . We have a glaring omission from our examples so far, though. Where is the Quotient Rule?  In these implicitly defined curves, we can manipulate the equations to never have to think about division! Consider the curve: . Graph this curve in a graphing utility like desmos. Does it look any different than the curve in ?  The only difference, really, is that the curve with the division is not defined at . As long as we keep those domain issues in mind, we can multiply everything by to get our familiar equation: . And there we go, we never have to think about the Quotient Rule in these kinds of contexts!  So we really only need a strategy for using the Chain Rule and the Product Rule.   Strategy for Implicit Differentiation     We use the Chain Rule whenever we differentiate something like . We differentiate whatever the function is, and multiply by the derivative of : .  This generalizes more: any time the variable in our derivative notation does not match the variable in the function\/term, we need to use the Chain Rule:     We use the Product Rule whenever we differentiate a term with some combination of and variables. More generally, we can use the Product Rule any time we have a combination of at least two variables. We have to treat these as different kinds of functions getting multiplied!         From here on out, we will use the ideas of implicit differentiation to accomplish two things:   We have a bit more flexibility with how we think of derivatives! We do not need to be restricted to only thinking about functions in order to think about rates of change or slopes at a point. We can think about any curve, any relationship between variables, and think about the relationship between them based on how one changes with regard to the other.    Implicit differentiation will be a very useful tool. Even when we have functions that can be written explicitly, they might be hard to deal with -- overly complex or maybe involving functions that we aren't used to. It is absolutely possible, and a really useful strategy, to re-write the relationship between variables implicitly! We can maybe create a version of these equations that we can differentiate!   We're going to use this second idea first: in the next section we'll be thinking about inverse functions. We do not have any idea of how to think about derivatives of logarithmic functions, like .  We can re-write this: . This second representation is something we can differentiate!  Similarly, if we wanted to think about the derivative of , we might instead think about re-writing this: . There are some weird issues to think about with the domains and ranges of these functions, but this is how we'll approach these derivatives next.   "
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
  "body": " Thinking about the Chain Rule    Explain to someone how (and why) we use the to find the following derivative: .      Let's say that . Explain how we find the following derivative: . How is this different, or not different, than the previous derivative?      Let's say that we have some other function, . Explain how we find the following derivative: . How is this different, or not different, than the previous derivatives?      What is the difference between the following derivatives:     When do we need to use the Chain Rule? When do we need to use some linking derivative to connect the function we're looking at with the variable we care about?               "
},
{
  "id": "act-Circle",
  "level": "2",
  "url": "sec-ImplicitDifferentiation.html#act-Circle",
  "type": "Activity",
  "number": "3.1.2",
  "title": "Slopes on a Circle.",
  "body": " Slopes on a Circle   Visualize the unit circle. Feel free to draw one, or find the picture above. We're going to think about slopes on this circle.     Point out the locations on the unit circle where you would expect to see tangent lines that are perfectly horizontal. What do you think the value of the derivative, , would be at these points?      Point out the locations on the unit circle where you would expect to see tangent lines that are perfectly vertical. What do you think the value of the derivative, , would be at these points?      Find the point(s) where . What do you think the value of the derivative, , would be at these points?    There are two points to consider here: and .      For the unit circle defined by the equation , apply the derivative to both sides of this equation to get the following: Carefully consider each of these derivatives (each of the terms). Which of these will you need to apply the Chain Rule for?      Differentiate. Solve for or , whichever notation you decide to use.    Make sure to use the Chain Rule when necessary!     or       Go back to the first few questions, and try to answer them again:   Find the locations of any horizontal tangent lines (where ).    Find the locations of any vertical tangent lines (where doesn't exist, or where you would divide by 0).    Find the values of for the points on the circle where .       "
},
{
  "id": "subsec-DerivativeOperator-9",
  "level": "2",
  "url": "sec-ImplicitDifferentiation.html#subsec-DerivativeOperator-9",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": "  Let's repeat some of this process, but using a new curve. Consider the curve defined by the equation: . This curve is a special curve with some interesting mathematical properties, and is actually a part of a family of curves called elliptic curves . For now, let's just consider it as a fun curve to look at, and use implicit differentiation to think about it.     The elliptic curve, y^2=x^3-x+1. If has a flared horseshoe type shape. The curve has a symmetry across the x-axis, and the upper section starts somewhere near (-1.3,0). It starts moving vertically upwards, and then curves towards (-1,1). From there, it descends lightly towards somewhere near (0.6, 0.6), where it flares upwards. The portion under the x-axis is a reflection of this.       Mark the locations on the curve where it looks like the curve will have horizontal tangent lines. How many did you find?      Mark the locations on the curve where it looks like the curve will have vertical tangent lines. How many did you find?      Find the point(s) where . What do you think the value of the derivative, , would be at these points?      For the elliptic curve defined by the equation , apply the derivative to both sides of this equation: Carefully consider each of these derivatives (each of the terms). Which of these will you need to apply the Chain Rule for?      Differentiate. Solve for or , whichever notation you decide to use.    Make sure to use the Chain Rule when necessary!     or       Go back to the first few questions, and try to answer them again:   Find the locations of any horizontal tangent lines (where ).    Find the locations of any vertical tangent lines (where doesn't exist, or where you would divide by 0).    Find the values of for the points on the curve where .       "
},
{
  "id": "act-ImplicitSine",
  "level": "2",
  "url": "sec-ImplicitDifferentiation.html#act-ImplicitSine",
  "type": "Activity",
  "number": "3.1.3",
  "title": ".",
  "body": "   Let's consider a new curve: .    A curve with 4 independent loops visible. The main, middle, loop, looks like a deformed circle. It passes through the origin, and has some straight sides and almost pointed corners, although they are still round. On the x-axis, there are two very flat round loops: one around (8,0) and another around (-5,0). A third one lays on the y-axis around (-5,0).        We are going to find or . Let's dive into differentiation: Think carefully about these derivatives. For each of the three, how will you approach it? What kinds of nuances or rules or strategies will you need to think about? Why?    Are any of these derivatives involving a variable other than , the input variable (based on our notation, since we are thinking about how changes with regard to  ).  Are any of these derivatives involving any other combination of functions? Are there products and\/or quotients that we need to think about?      Implement your ideas or strategies from above to differentiate each term.    We need to apply the Chain Rule to and then we need to apply the Product Rule . Notice that when we find the derivative of for the Product Rule, we need to use the Chain Rule!           Now we need to solve for or , whichever you are using. While this equation can look complicated, we can notice something about the \"location\" of or in our equation.  Why do we always know that or will be multiplied on a term whenever it shows up?      Now that we are confident that we will always know that we are multiplying this derivative, we can employ a consistent strategy:   Rearrange our equation so that every term with a or is on one side, and everything without is on the other.    Now we are guaranteed that or is a common factor: factor it out.    Now we can solve for or by dividing!   Solve for or in your equation!      Build the equation of a line that lays tangent to the curve at the origin. Does the value of at look reasonable to you?    "
},
{
  "id": "sec-DerivativesInverse",
  "level": "1",
  "url": "sec-DerivativesInverse.html",
  "type": "Section",
  "number": "3.2",
  "title": "Derivatives of Inverse Functions",
  "body": " Derivatives of Inverse Functions   We should start here by saying: we're going to be thinking about inverse functions, and so maybe it will be helpful to recap some facts about inverse functions.   If is some function, then we can use the inverse function to represent this relationship between variables: .Some examples:    . That is, the logarithm function \"solves\" for the exponent (sometimes this is easier to just say that the logarithm is the exponent).     . That is, this inverse sine function (or sometimes ) finds the angle at which sine of that angle is . With these trigonometric functions, we need to make some restrictions: because there are an infinite number of angles that will produce the same output of the sine function (reflecting the angle across the -axis will do it, as will adding any multiple of ), we restrict the angles that the inverse sine function can output to being in .       Based on this re-representation above, we can always compose a function and its inverse to get the identity function, . In general, if has an inverse function , then . Similarly, we can compose in the opposite order: . This can be a bit trickier to think about for the inverse trigonometric functions, since this only works on intervals of where that inverse is defined. So we end up with strange things like: . This is because the inverse sine function finds only angles in the interval , and the angles and are coterminal (and so have the same output from the sine function).   With these small facts in mind, we can think about derivatives of inverse functions.    Wielding Implicit Differentiation  We're going to do a very cool thing: in order to find derivatives of inverse functions, we can invert the relationship between and , and then use to find .   Building the Derivative of the Logarithm   We're going to accomplish two things here:   By the end of this activity, we'll have a nice way of thinking about , and we will now be able to differentiate functions involving logarithms!    Throughout this activity, we're going to develop a way of approaching derivatives of inverse functions more generally. Then we can apply this framework to other functions!   Let's think about this logarithmic function!     We have stated (a couple of times now) how we define the log function: . This arrow goes both directions: the log function is the inverse of the exponential, but the exponential is the inverse of the log function!  Can you re-write the relationship using its inverse (the exponential)?      For your inverted from above (it should be ), apply a derivative operator to both sides, and use implicit differentiation to find or .    Where do we have to use Chain Rule?      A weird thing that we can notice is that when we use implicit differentiation, it is common to end up with our derivative written in terms of both and variables. This makes sense for our earlier examples: we needed specific coordinates of the point on the circle, for instance, to find the slope there.  But if , we want or to be a function of : . Your derivative is written with only values.  Since , replace any instance of with the log function. What do you have left?      Remember that . Substitute this into your equation for . Can you write this in a pretty simplistic way?    Remember that , since these functions are inverses of each other!      Before we go much further, we should be a bit careful. What is the domain of this derivative?  What are the values of where makes sense to think about?      Derivative of the Logarithmic Function    for .  Further, since (for and ), we can say that: for .      Derivatives of the Inverse Trigonometric Functions  Let's try a similar thing with inverse trigonometric functions. We'll start with the inverse sine function, .   Finding the Derivative of the Inverse Sine Function   We're going to do the same trick, except that there will be a couple of small differences due to thinking specifically about trigonometric functions.  Let's think about the function . We know that this is equivalent to (for -values in ).     Move the point around the portion of the unit circle in the graph below. Convince yourself that:         when      when       What is in this figure? Does the sign change depending on the value of ?      Use implicit differentiation and the equation to find or       If you still have your derivative written in terms of , make sure to write in terms of !      Let's think about the domain of this derivative: what -values make sense to think about?  Think about this both in terms of what -values reasonably fit into your formula of as well as the domain of the inverse sine function in general.      Notice that in the denominator of , you have a square root. Based on that information (and the visual above), what do you expect to be true about the sign of the derivative of the inverse sine function?  Confirm this by playing with the graph of below.       Investigate the behavior of at the end-points of the function: at and . What do the slopes look like they're doing, graphically?  How does this work when you look at the function you built above? What happens when you try to find or ?     Let's repeat the process to find the derivatives of and .   Building the Derivatives for Inverse Tangent and Secant    Consider the triangle representing the case when .     Right triangle with hypotenuse sqrt(x^2+1) and the other side lengths 1 and x. The angle between 1 and sqrt(x^2+1) is labeled y.    For , find using implicit differentiation. Find an appropriate expression for based on the triangle above, but we will refer back to the version with the in it later.      Consider the triangle representing the case when .     Right triangle with hypotenuse x and the other side lengths 1 and sqrt(x^2-1). The angle between 1 and x is labeled y.    For , find using implicit differentiation. Find an appropriate expression for and based on the triangle above, but we will refer back to the version with the functions of in it later.      Here's a graph of just the unit circle for angles . We are choosing to focus on this region, since these are the angles that the inverse tangent and inverse secant functions will return to us. We want to investigate the signs of and .       Go back to our derivative expressions for both the inverse tangent and inverse secant functions. What do we know about the signs of these derivatives?    Notice that in , we know that the derivative must be positive. Even when , we are squaring it.  In , we know that the derivative must also always be positive. Whenever , we have , and so the product must be positive.      Confirm your idea about the sign of the derivatives by investigating the graphs of each function.       How do we need to write these derivatives, when we write them in terms of to account for the sign of the derivative?    Use an absolute value in the formula for !     It is important to think carefully about how things might change when we start thinking about other trigonometric functions. For instance, what happens when we think about instead? We could repeat the process from with instead (and we'll do that for ), but for now let's think about the graph of .   Connecting These Inverse Functions   We're going to look at a graph of , but we're specifically going to try to compare it to the graph of . We'll use some graphical transformations to make these functions match up, and then later we'll think about derivatives.     Ok, consider the graph of and a transformed version of the inverse sine function. Apply some graphical transformations to make these match!       It might be fun to think about another reason that this connection between and exists.  Consider this triangle:    A right triangle with side lengths labeled x and sqrt(1-x^2) with the hypotenuse labeled 1.   We're going to think about these inverse trigonometric functions as angles: let and . We can re-write these as: . Can you fill in your triangle using this information?  Why does ? Convince yourself that this is what we did with the graphical transformations above, as well.      Use this equation above, re-writing as some expression involving the inverse sine function, and then find .          We could repeat this task to try to connect the graph of with as well as the graph of with , but we can hopefully see what will happen. In each case, we have the same kind of connection that we saw in the triangle, since these are cofunctions of each other!  We can summarize by believing that:      Derivatives of the Inverse Trigonometric Functions         "
},
{
  "id": "act-lnxDerivative",
  "level": "2",
  "url": "sec-DerivativesInverse.html#act-lnxDerivative",
  "type": "Activity",
  "number": "3.2.1",
  "title": "Building the Derivative of the Logarithm.",
  "body": " Building the Derivative of the Logarithm   We're going to accomplish two things here:   By the end of this activity, we'll have a nice way of thinking about , and we will now be able to differentiate functions involving logarithms!    Throughout this activity, we're going to develop a way of approaching derivatives of inverse functions more generally. Then we can apply this framework to other functions!   Let's think about this logarithmic function!     We have stated (a couple of times now) how we define the log function: . This arrow goes both directions: the log function is the inverse of the exponential, but the exponential is the inverse of the log function!  Can you re-write the relationship using its inverse (the exponential)?      For your inverted from above (it should be ), apply a derivative operator to both sides, and use implicit differentiation to find or .    Where do we have to use Chain Rule?      A weird thing that we can notice is that when we use implicit differentiation, it is common to end up with our derivative written in terms of both and variables. This makes sense for our earlier examples: we needed specific coordinates of the point on the circle, for instance, to find the slope there.  But if , we want or to be a function of : . Your derivative is written with only values.  Since , replace any instance of with the log function. What do you have left?      Remember that . Substitute this into your equation for . Can you write this in a pretty simplistic way?    Remember that , since these functions are inverses of each other!      Before we go much further, we should be a bit careful. What is the domain of this derivative?  What are the values of where makes sense to think about?    "
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
  "body": " Finding the Derivative of the Inverse Sine Function   We're going to do the same trick, except that there will be a couple of small differences due to thinking specifically about trigonometric functions.  Let's think about the function . We know that this is equivalent to (for -values in ).     Move the point around the portion of the unit circle in the graph below. Convince yourself that:         when      when       What is in this figure? Does the sign change depending on the value of ?      Use implicit differentiation and the equation to find or       If you still have your derivative written in terms of , make sure to write in terms of !      Let's think about the domain of this derivative: what -values make sense to think about?  Think about this both in terms of what -values reasonably fit into your formula of as well as the domain of the inverse sine function in general.      Notice that in the denominator of , you have a square root. Based on that information (and the visual above), what do you expect to be true about the sign of the derivative of the inverse sine function?  Confirm this by playing with the graph of below.       Investigate the behavior of at the end-points of the function: at and . What do the slopes look like they're doing, graphically?  How does this work when you look at the function you built above? What happens when you try to find or ?    "
},
{
  "id": "act-InverseTangentSecant",
  "level": "2",
  "url": "sec-DerivativesInverse.html#act-InverseTangentSecant",
  "type": "Activity",
  "number": "3.2.3",
  "title": "Building the Derivatives for Inverse Tangent and Secant.",
  "body": " Building the Derivatives for Inverse Tangent and Secant    Consider the triangle representing the case when .     Right triangle with hypotenuse sqrt(x^2+1) and the other side lengths 1 and x. The angle between 1 and sqrt(x^2+1) is labeled y.    For , find using implicit differentiation. Find an appropriate expression for based on the triangle above, but we will refer back to the version with the in it later.      Consider the triangle representing the case when .     Right triangle with hypotenuse x and the other side lengths 1 and sqrt(x^2-1). The angle between 1 and x is labeled y.    For , find using implicit differentiation. Find an appropriate expression for and based on the triangle above, but we will refer back to the version with the functions of in it later.      Here's a graph of just the unit circle for angles . We are choosing to focus on this region, since these are the angles that the inverse tangent and inverse secant functions will return to us. We want to investigate the signs of and .       Go back to our derivative expressions for both the inverse tangent and inverse secant functions. What do we know about the signs of these derivatives?    Notice that in , we know that the derivative must be positive. Even when , we are squaring it.  In , we know that the derivative must also always be positive. Whenever , we have , and so the product must be positive.      Confirm your idea about the sign of the derivatives by investigating the graphs of each function.       How do we need to write these derivatives, when we write them in terms of to account for the sign of the derivative?    Use an absolute value in the formula for !    "
},
{
  "id": "act-InverseCosineGraph",
  "level": "2",
  "url": "sec-DerivativesInverse.html#act-InverseCosineGraph",
  "type": "Activity",
  "number": "3.2.4",
  "title": "Connecting These Inverse Functions.",
  "body": " Connecting These Inverse Functions   We're going to look at a graph of , but we're specifically going to try to compare it to the graph of . We'll use some graphical transformations to make these functions match up, and then later we'll think about derivatives.     Ok, consider the graph of and a transformed version of the inverse sine function. Apply some graphical transformations to make these match!       It might be fun to think about another reason that this connection between and exists.  Consider this triangle:    A right triangle with side lengths labeled x and sqrt(1-x^2) with the hypotenuse labeled 1.   We're going to think about these inverse trigonometric functions as angles: let and . We can re-write these as: . Can you fill in your triangle using this information?  Why does ? Convince yourself that this is what we did with the graphical transformations above, as well.      Use this equation above, re-writing as some expression involving the inverse sine function, and then find .          We could repeat this task to try to connect the graph of with as well as the graph of with , but we can hopefully see what will happen. In each case, we have the same kind of connection that we saw in the triangle, since these are cofunctions of each other!  We can summarize by believing that:    "
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
  "body": " Logarithmic Differentiation   We're going to start with a quick fact about logs and their derivatives. The derivative rule for is still relatively new for us, so it is ok to still be getting comfortable with it, but we should notice this nice fact.   Derivative of the Log of a Function    Note that there's nothing really special going on here: this is just an application of the to the .    Throughout this section, the goal is to convince any open-minded readers of one thing:   Logs are friends.   Let us be informal and technically not quite correct but hopefully clear in this. Logs really are friendly mathematical objects. They were created to be friendly objects! In a time when doing arithmetic with large numbers was difficult due to a lack of computing technology, logs were introduced to make arithmetic easier.  The general idea is that, if there is some kind of hierarchy of operations, then logs transform operations between things into different operations that are lower on the hierarchy of operations. So logs turn things like products (repeated addition) and quotients (repeated subtraction) into addition and subtraction. Logs turn exponents (repeated multiplication) into coefficients.  Using math notation, we can write the following log properties.   Properties of Logarithms   We will make use of the following properties of logarithms.                 Because of the domain of the log function, we need for these properties to make sense. We will use them relatively loosely, with functions that take on negative and positive values, and not worry too much about the domain issues when we don't need to.      Logs Are Friends!  Ok, so how will we use these new-found friends? We're going to think about some functions (and combinations of functions) that are new to us and that aren't so clear for us to use things like the Product, Quotient, or Chain Rule. We'll try to use logs to re-write our functions into some easier to approach implicitly defined relationships in order for us to differentiate.  But first, let's build an explanation for the .   Returning to the Power Rule   Back in we built an explanation for why that relied on thinking about exponents as repeated multiplication: it relied on being some positive integer. We said, at the time, that the Power Rule generalizes and works for any integer, but did so without explanation.  Let's consider where is just some real number without any other restrictions.     Apply a logarithm to both sides of this equation: Now use one of the to re-write this equation.      Use implicit differentiation to find or .    Remember that when you solve for or , you might have some -variables in your derivative. Replace them with .      Explain to yourself why this is equivalent to the Power Rule that we built so long ago: .      Let's get weird. What if we have a not-quite-power function? Where the thing in the exponent isn't simply a number, but another variable?  Let's use the same technique to think about and its derivative. First, though, confirm that this is not a power function (and so we cannot use the Power Rule to find the derivative) and is also not an exponential function (and so the derivative isn't itself or itself scaled by a log).      Now apply a log to both sides: . Re-write this using the same log property as before, and then use implicit differentiation to find or .    Don't forget that in order to find , we need to use the Product Rule.      Explain to yourself why logs are friends, especially when trying to differentiate functions in the form of .     This idea that we've just implemented (applying a logarithm to make some function more friendly and then using implicit differentiation to differentiate) is often called logarithmic differentiation . It works so well because logs are friends .    Wow, So Friendly!  This is incredible! We can now differentiate a whole new class of functions! Functions raised to functions, what could we think of next!  How about products and quotients of functions? I know, I know, we have ...what about big products and quotients? Annoying ones. Complicated ones.   Logarithmic Differentiation with Products and Quotients   Let's say we've got some function that has products and quotients in it. Like, a lot. Consider the function: .     Work out a general strategy for how you would find directly. Where would you have to use Quotient Rule? What are the pieces? Where would you have to use Product Rule? What are the pieces? Where would you have to use Chain Rule? What are the pieces?  To be clear: do not actually differentiate this. Just look at it in horror and try to outline a plan that some other fool would use.  Click on the \"Solution\" below to see what the fool did.     What now? Can we \"simplify\" this somehow? Maybe, but I am not doing any more of this!      Let's instead use logarithmic differentiation. First, apply the log to both sides to get: . Since this function is just a bunch of products of things with exponents all put into some big quotient, we can use our log properties to re-write this!      We should have: . Confirm this.      Now differentiate both sides! You'll have to use some Chain Rule (but not a lot)! Refer back to for help here.      Solve for or .      While this is not a nice looking expression for the derivative, spend some time confirming that this was a nicer process then differentiating directly. This is because logs are friends.       So how do we wrap this up? I hope we can see that logs are a useful and powerful tool: we can use logarithmic differentiation to transform our functions to become \"easier to work with\" versions of themselves: we put everything on a log-scale and allow our properties of logarithms to make the operations become a bit more accessible.  This is a commonly used trick in many applications of calculus. Specifically, this is used often enough in statistics that there is a whole paradigm of estimation (called Maximum Likelihood Estimation) that uses a log-transformed version of a likelihood function and then applies some basic calculus ideas (that we'll cover in ) to perform some powerful estimations.  While I hope that we end up leaving this section knowing that logs are friends , we can probably add a second (and related result) that we're using over and over.   Using the Chain Rule is probably easier than any other option.   We apply logs in order to re-write these functions in a friendly way because we would rather use the Chain Rule than any combination of other derivative strategies.   "
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
  "body": " Returning to the Power Rule   Back in we built an explanation for why that relied on thinking about exponents as repeated multiplication: it relied on being some positive integer. We said, at the time, that the Power Rule generalizes and works for any integer, but did so without explanation.  Let's consider where is just some real number without any other restrictions.     Apply a logarithm to both sides of this equation: Now use one of the to re-write this equation.      Use implicit differentiation to find or .    Remember that when you solve for or , you might have some -variables in your derivative. Replace them with .      Explain to yourself why this is equivalent to the Power Rule that we built so long ago: .      Let's get weird. What if we have a not-quite-power function? Where the thing in the exponent isn't simply a number, but another variable?  Let's use the same technique to think about and its derivative. First, though, confirm that this is not a power function (and so we cannot use the Power Rule to find the derivative) and is also not an exponential function (and so the derivative isn't itself or itself scaled by a log).      Now apply a log to both sides: . Re-write this using the same log property as before, and then use implicit differentiation to find or .    Don't forget that in order to find , we need to use the Product Rule.      Explain to yourself why logs are friends, especially when trying to differentiate functions in the form of .    "
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
  "body": " Logarithmic Differentiation with Products and Quotients   Let's say we've got some function that has products and quotients in it. Like, a lot. Consider the function: .     Work out a general strategy for how you would find directly. Where would you have to use Quotient Rule? What are the pieces? Where would you have to use Product Rule? What are the pieces? Where would you have to use Chain Rule? What are the pieces?  To be clear: do not actually differentiate this. Just look at it in horror and try to outline a plan that some other fool would use.  Click on the \"Solution\" below to see what the fool did.     What now? Can we \"simplify\" this somehow? Maybe, but I am not doing any more of this!      Let's instead use logarithmic differentiation. First, apply the log to both sides to get: . Since this function is just a bunch of products of things with exponents all put into some big quotient, we can use our log properties to re-write this!      We should have: . Confirm this.      Now differentiate both sides! You'll have to use some Chain Rule (but not a lot)! Refer back to for help here.      Solve for or .      While this is not a nice looking expression for the derivative, spend some time confirming that this was a nicer process then differentiating directly. This is because logs are friends.    "
},
{
  "id": "sec-MeanValueTheorem",
  "level": "1",
  "url": "sec-MeanValueTheorem.html",
  "type": "Section",
  "number": "4.1",
  "title": "Mean Value Theorem",
  "body": " Mean Value Theorem   Let's begin here with some weird questions. The questions aren't weird because of what they're asking. Instead, they're weird because of the logic of how we interpret them compared to how we want to interpret them.   Why is the derivative of a constant function 0?    Why do and have the same derivative?    If a function is only increasing on the interval , what do we know about the derivative at any of these -values in ?   These questions are ones we can think through and answer.  Here are some answers for these first three questions:   A constant function has all of the same -values for any -value in the domain: of course the slope everywhere is 0! There isn't any change in the -values!    We can differentiate these functions term by term: we know that the term has a derivative of , and then for each function's constant, the derivative has to be 0. So it doesn't matter what each constant was, the derivatives wouldn't rely on that value!    If a function is increasing on an interval, then it means that for any pair of -values, , we get -values in the same order: . If we find the limit of slopes as , we'll always get a positive slope, so the derivative has to be positive.       What's tricky is that these don't always say what we want to say. For instance, I might sometimes want to say the following:   If you know a function's derivative is 0, then you know the function is constant. Another way of saying this is that the only functions whose derivative is 0 are constant functions.    Similarly, we might want to say that if you know two functions that have the same derivative, then the only difference between the functions is a constant. There aren't any other ways for functions to be different with the same derivative.    We might want to say that if you know the derivative is positive on an interval, that means that the function has to be increasing.   Do you see the (slight) difference?  What we'll secretly see is that all of these statements are actually correct but require a result for us to say them. The Mean Value Theorem will be the result that we use to build important and helpful results throughout the rest of this course.    Slopes  We have two different kinds of slopes that we think of right now: a slope between two points, and a slope at a single point.  We can translate this into a rate of change! We think of two rates of change: an average rate of change on some interval and the instantaneous rate of change at some point.  We will try to connect these two different slopes\/rates of change for \"well-behaved\" functions. Let's take a look at an example. In the graph below, we have a curve where we are considering some closed interval, as well as a point within that interval. Both slopes are visualized and calculated: the slope between the ending points of the interval is the average slope, while the slope of the line tangent to the curve at a point is the instantaneous slope. Move the point\/interval around and get a feel for how these two different slopes relate (or don't relate!) to each other.   If you move the interval\/point around enough, you'll see that sometimes these two slopes are really similar and sometimes they're very different. But what if the point in the middle of the interval wasn't so \"set\" at being stuck in the exact middle of the interval? What if we stuck the interval in place, and then had the freedom to move the point anywhere in the interval?   Do you think we will always be able to do this? What kinds of functions will have these points where the slope at the point matches the average slope on the interval?    The Mean Value Theorem   Mean Value Theorem   For a function that is continuous on the closed interval and differentiable on the open interval , then there is some value with where: .    This theorem is really just guaranteeing the existence of at least one of the points we found above: a point where the slope of the line tangent to the curve is the same as the slope between the endpoints of the interval. We can (and, very briefly, we will) use this theorem to find the point that is guaranteed to exist, but we will, more generally, use this theorem as a tool for connection.  We will try to use it as a way of connecting derivatives to the behavior of a function. The Mean Value Theorem gives us this equation where on one side we have a derivative, and on the other side we have function outputs. This is really similar to the definition of the , except that in this case we have no limit: we just get to use the behavior of the function on an interval around the point.  Secretly, the Mean Value Theorem is the driving force behind most of the results we will look at from here on out, at least when the requirements include continuity and differentiability on an interval. You can almost guarantee that if a theorem or result has these two requirements, then the Mean Value Theorem is likely at work.  Let's look at one example, at least, before we move on.    Let's say that a person is planning on biking to their college campus, 8 miles away. At 2:39pm they send a text to their friend with a selfie of them on their bike about to start their trip, captioned \"Beautiful day for a ride!\" At 3:27pm, they post a picture on their social media of them in front of the bike rack on campus.     What was the average velocity of the student between 2:39pm and 3:27pm?    The total trip took 48 minutes (or 0.8 hours), and the student traveled a total distance of 8 miles.  The student's average velocity is miles per hour.      The Mean Value Theorem connects average slopes with slopes of tangent lines. What does that mean, in general, in this context?    In this case, the average rate of change of the function on the interval is the average velocity of the biker. So then the instantaneous rate of change must correspond with an instantaneous velocity, of their velocity at some specific point in time.      Make a claim about the instantaneous velocity of the student on their bike at some point in time.    We know that at some point between 2:39pm and 3:27pm, the cyclist had to be traveling at exactly 10 miles per hour.        For a function on the interval , find the point that the Mean Value Theorem guarantees the existence of, and explain what it is.    Let's calculate the average slope on the interval: So we know that there is some -value between 1 and 4 where .  The derivative is , so we can solve for : So the point guaranteed to exist by the Mean Value Theorem is located at , where the slope of the tangent line is .     These examples are fine, but the real power of the Mean Value Theorem comes in how we can use it to general more interesting results. Let's check those out!    More Results due to the Mean Value Theorem  First, let's remind ourselves of what it means for a function to be increasing or decreasing on an interval.   Increasing and Decreasing on an Interval   A function is increasing on the interval if, for every pair of -values and (with ), .  If , then we say that is decreasing on the interval .    Note that we classify a function as increasing or decreasing based on comparing two function outputs. This is a perfect time to use the Mean Value Theorem, since it can connect these pairs of function outputs with a derivative!   Sign of the Derivative and Direction of a Function   If is a function that is differentiable on the interval and for all in the interval , then must be increasing on .  Similarly, if for all in the interval , then must be decreasing on .    Before we begin, let's just agree to think about only the case where on the interval . The other case (where ) ends up being the exact same argument, with some changes in signs and directions of inequalities. So we'll say for all -values in the interval .  Ok, let's begin!  Let's pick two arbitrary -values from the interval . Call them and , and we'll make sure that we name them in a way where . Now, must be continuous on and differentiable on . We also know that for every in the interval ( ).  The Mean Value Theorem says that there is some in with . Equivalently, this means that . Notice that (since the derivative is positive everywhere in the interval) and (by the wat we named these -values). This means that , and so as well.  Ok so notice what just happened: we arbitrarily chose -values and and noticed that for any of these pairs where , we found that . This is exactly what it means for to be increasing on the interval (based on ).    We'll use this result pretty extensively in the next couple of topics. It is helpful for us to use this to connect the signs of a derivative with our intuition about what that must mean for the direction of a function.   If a Function's Derivative is 0, it's Constant   If is a function defined on with for all -values in the interval , then is a constant function.    We can almost exactly replicate the proof from here!  Let's pick two arbitrary -values from the interval . Call them and , and we'll again make sure that we name them in a way where . Now, must be continuous on and differentiable on . This time, we know that for every in the interval ( ).  The Mean Value Theorem says that there is some in with . Equivalently, this means that . Notice that (since the derivative is zero everywhere in the interval). This means that , and so as well.  This means that every -value from the function is the same as every other one, since we picked these points arbitrarily. So must be a constant function!     Equal Derivatives Correspond with Related Functions   For two functions and , both differentiable on , if for all -values on , then we know that for some real number constant . That is, the only differences in and are due to a difference in the constant term.    This one is pretty easy to prove: we're going to use a fun little trick where we connect this theorem to .  Let's think about these two functions and with , and let's think about a function . Now we can notice that which has to be 0.  Oh wow, is a function with on the interval . It must be a constant function (based on )! Let's call it , where is some real number constant.  This means that , and we can see that the only difference between these two functions is a constant.    We'll use this result a bit later on, but it's a great example of how we can use the Mean Value Theorem to connect information about the derivative to information about how a function might work.    Let me interject my own opinion here: I think the Mean Value Theorem is extremely important. But I also don't think that it is that important for you to use .  I think you should know the general idea of connecting the slopes of the line tangent to the curve and the average slope on an interval. I think you should remember the picture we looked at. I think you should be content to see some results later on in the course and smile fondly about how the Mean Value Theorem is under the surface, churning away and getting us cool results to think about. I think we should be happy that the Mean Value Theorem is here and we can recognize it as, maybe, the most important result in this textbook.  But we don't need to pretend that we need to actually use it directly...we aren't going to need to compute a lot or anything like that. We'll just know it.   "
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
  "body": "  Let's say that a person is planning on biking to their college campus, 8 miles away. At 2:39pm they send a text to their friend with a selfie of them on their bike about to start their trip, captioned \"Beautiful day for a ride!\" At 3:27pm, they post a picture on their social media of them in front of the bike rack on campus.     What was the average velocity of the student between 2:39pm and 3:27pm?    The total trip took 48 minutes (or 0.8 hours), and the student traveled a total distance of 8 miles.  The student's average velocity is miles per hour.      The Mean Value Theorem connects average slopes with slopes of tangent lines. What does that mean, in general, in this context?    In this case, the average rate of change of the function on the interval is the average velocity of the biker. So then the instantaneous rate of change must correspond with an instantaneous velocity, of their velocity at some specific point in time.      Make a claim about the instantaneous velocity of the student on their bike at some point in time.    We know that at some point between 2:39pm and 3:27pm, the cyclist had to be traveling at exactly 10 miles per hour.    "
},
{
  "id": "subsec-MVT-8",
  "level": "2",
  "url": "sec-MeanValueTheorem.html#subsec-MVT-8",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "   For a function on the interval , find the point that the Mean Value Theorem guarantees the existence of, and explain what it is.    Let's calculate the average slope on the interval: So we know that there is some -value between 1 and 4 where .  The derivative is , so we can solve for : So the point guaranteed to exist by the Mean Value Theorem is located at , where the slope of the tangent line is .    "
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
  "body": " Increasing and Decreasing Functions    How Should We Think About Direction?   Our goal in this activity is to motivate some new terminology and results that will help us talk about the \"direction\" of a function and some interesting points on a function (related to the direction of a function). For us to do this, we'll look at some different examples of functions and try to think about some unifying ideas.       A rational function that increases gently up to a point in the third quadrant, then decreases towards a vertical asymptote at x=0. In the first quadrant, the function decreases down to some point, and then gently increases.    A polynomial function that decreases down to a point, then increases, then decreases, then increases.      A kind of oscillating function that looks like it bounces off of the horizontal axis, creating sharp corners. It gently changes direction near the peak. The graph decreases, hits the axis and increases, then gently decreases towards the horizontal axis. It bounces one more time, and increases then decreases.    A bell curve, with horizontal asymptote at y=0. It increases up to a point on the top where it changes to decreasing towards the horizontal axis.      These examples do not cover all of the possibilities of how a function can act, but will hopefully provide us enough fertile ground to think about some different situations.     In each graph, find and identify:   The intervals where the function is increasing.    The intervals where the function is decreasing.    The points (or locations) around and between these intervals, the points where the function changes direction or the direction terminates.         Make a conjecture about the behavior of a function at any point where the function changes direction.    What do you think has to be true about the derivative at these points?      Look at the highest and lowest points on each function. You can even include the points that are highest and lowest just compared to the points around it. Make a conjecture about the behavior of the function at these points.    What do you think has to be true about the derivative at these points?     We want to turn this little bit of thinking and exploring into some useful definitions for us. To craft these definitions, we need to start with thinking about what we care about and why we might care about it.    Critical Points, Local Maximums, and Local Minimums  Let's start by saying what we're really looking for is the highest and lowest points on a function. These points are interesting, have useful applications, and are difficult to find in general without calculus. We hopefully noticed, though, that these points always end up showing up at the same kinds of locations! They're points where the direction of a function changes (or terminates).  We also noticed that there are some common characteristics of those points. They're points where the derivative was either 0 or didn't exist. So we'll start by defining these points, and then we'll define the idea of \"highest\" and \"lowest\" points. Then we'll put together a result that we hopefully noticed here: that the highest and lowest points show up at these points where the derivative is 0 or doesn't exist.   Critical Point of a Function   We say that a point on the graph of is a critical point of the function if or doesn't exist.  If is a critical point of , then we sometimes will call a critical number and a critical value .    So these are the points we will look for to find the \"highest\" and \"lowest\" points.  Now we need to define this idea so that we can build the result that tells us how to find these highest and lowest points.   Local Maximum\/Minimum   A point is a local maximum of if there is some open interval of real numbers around (that is, ) and for all -values in the intersection of and the domain of .  Similarly, a point is a local minimum of if there is some open interval of real numbers around (that is, ) and for all -values in the intersection of and the domain of .  These are really just slightly technical ways of saying that is either the highest or lowest -value produced by the function for the -values near .     If you look around online, or in other textbooks, you'll find different definitions of these same kinds of pints. Some of those definitions have silly stipulations, like saying that an ending point of a function cannot be a local maximum\/local minimum.  This seems to come from some sense that the derivative must be defined on each \"side\" of a local max\/min. In this book, we'll not worry about this restriction, and instead just look at the highest and lowest points relative to the other points near it.   Now we want to build the connection between these points. In , we pointed out that the highest and lowest points on a function all had the common theme of showing up at places where the derivative was 0 or didn't exist.   Every Local Maximum\/Minimum Occurs at a Critical Point   Every local maximum or local minimum of occurs at a critical point of .  Another way of saying this is that if is a local maximum or local minimum of , then it must also be a critical point of .    WAIT! STOP! Before you move on, let's make sure we understand what this theorem is saying. Or maybe what this theorem is not saying.  Notice that we are not saying that every critical point is a local maximum or local minimum! This is a classic \"every square is a rectangle but not every rectangle is a square\" situation.  Every local maximum\/minimum occurs at a critical point, but not every critical point is a local maximum\/minimum.    Direction of a Function (and Where it Changes)  Let's build up a way of classifying critical points as local maximums, local minimums, or neither.   Comparing Critical Points   Let's think about four different functions:                      Our goal is to find the critical points on the interval and then to try to figure out if these critical points are local maximums or local minimums or just points that the function increases or decreases through.     To start, we're going to be finding critical points. Without looking at a picture of the graph of the function, find the derivative.  Are there any -values (in the domain of the function) where the derivative doesn't exist? We are normally looking for things like division by 0 here, but we could be finding more than that. Check out to remind yourself if needed.  Are there any -values (in the domain of the function) where the derivative is 0?      Now that we have the critical points for the function, let's think about where the derivative might be positive and negative. These will correspond to the direction of a function, based on .  Write out the intervals of -values around and between your list of critical points. For each interval, what is the sign of the derivative? What do these signs mean about the direction of your function?      Without looking at the graph of your function:   What changes about how your function increases up to or decreases down to a critical point based on whether the derivative was 0 or the derivative didn't exist?    Does your function change direction at a critical point? What will that look like, whether it does or does not change direction?         Give a basic sketch of your graph. It might be helpful to find the -values for any critical points you've got. Then you can sketch your function increasing\/decreasing in the intervals between these points.  In your sketch, include enough detail to tell whether the derivative is 0 or doesn't exist at each critical point.      Compare your sketch to the actual graph of the function (you can find all of the graphs in the hint).          A graph of f(x). It is a parabola that increases up to a horizontal tangent line a the point (3\/2, 25\/4), and then decreases away from it.    A graph of g(x). It increases to a vertical tangent line at (-1,0), and then continues increases from there.      A graph of h(x). It decreases down to a vertical tangent line at (4,0), and then increases away from it, forming a cusp or sharp corner.    A graph of j(x). It decreases down to a horizontal tangent line at (0,1), and then decreases away from it.          This is great, we have a nice strategy for thinking about critical points!  Something we can notice: in finding these critical points (as well as thinking about the domain of the function), we found all of the locations where the derivative is both not positive and not negative. This is a weird way of saying that all of the intervals in between the critical points we found and any breaks in the domain of the function (like if there were vertical asymptotes or holes or something) are places where the derivative is positive or negative.  Even more exciting: if the derivative function we found is continuous, then the says that it will only change signs at these critical points (or places like vertical asymptotes or holes). So this means that we can always construct a little chart or something, think about the -values around and at critical points or other breaks in the domain, and then look at what the derivative does as we move through those intervals and -values.  This will serve as a nice way of thinking about what's going on with our functions!   First Derivative Test   If is a critical point of and we can evaluate the derivative on either side of this point, then we can use the signs of the first derivative to classify the critical point:   If the sign of changes from positive to negative as passes through , then is a local maximum.    If the sign of changes from negative to positive as passes through , then is a local minimum.    If the sign of does not change as passes through , then the function increases or decreases (depending on whether or ) through .   We will often lay these results out in a chart or table, like the following:                             local max                               local min                                 increasing through                               decreasing through            Using the Graph of the First Derivative   First Derivative Test Graphically   Let's focus on looking at a picture of a derivative, , and trying to collect information about the function . This is what we've done already, except that we've done it by thinking about the representation of as a function rule written out with algebraic symbols. Here we'll focus on connecting all of that to the picture of the graphs.  For all of the following questions, refer to the plot below. You can add information with the hints whenever you need to. Don't reveal the picture of until you're really ready to check what you know.      Based on the graph of , estimate the interval(s) of -values where is increasing.      Based on the graph of , estimate the interval(s) of -values where is decreasing.      Find the -values of the critical points of . Once you've estimated these, classify them as local maximums, local minimums, or neither. Explain your reasoning.      What do you think the graph of looks like? Do your best to sketch it or explain it before revealing it!      Why could we estimate the -values of the critical numbers of , but not find the actual coordinates? How come we can't find the -value based on looking at the graph of ?     Reading the graphs of functions is, in general, an important skill. But it's an especially important idea to be able to read and understand the graph of a function like a derivative and then interpret what we are seeing into some other context.  So for us to really excel here, we'll want to focus on the fact that a first derivative tells about the slope or direction of a function. Whatever -values we find on the graph of a needs to be interpreted as a slope or rate of change of . Then we can string these slopes or rates of changes together to try to think about the behavior of by knowing how the -values are changing as we move along the curve of !    Strange Domains  We'll look at two more examples, both of them using functions whose domain is not  .     Consider the function . Find the domain of , the critical points of , and then the intervals where is increasing\/decreasing. Then, classify any critical points local maximums\/minimums if necessary.         The function has one critical point at . Why isn't there a critical point at ? What is happening there instead?                                        The domain of is due to the vertical asymptote at . The only critical point is at . The table below shows where is increasing and decreasing, as well as any local maximums or minimums.                                  decreasing  local min  increasing  asymptote  decreasing         Consider the function . Find the domain of , the critical points of , and then the intervals where is increasing\/decreasing. Then, classify any critical points local maximums\/minimums if necessary.         Notice that, by our definition of critical points, both and are critical points.                                     The domain of is . There are two critical points: one at and another at . The table below shows where is increasing and decreasing, as well as any local maximums or minimums.                 DNE               local max  decreasing  local min  increasing        So we have two things to notice:   When we have some gap or missing spot in the domain of a function, that can still divide up the intervals where our function is increasing or decreasing! We should notice, though, that since this isn't actually a point on the curve of our function, it won't be a critical point and so we have to interpret it differently: we can't use the !    An ending point of an interval is a location where the derivative cannot exist! We could define a one-sided derivative (similar to how we defined one-sided continuity in ), but for now we'll just say that the derivative doesn't exist, and call those ending points critical points. That means that depending on the direction that a function goes away (or leading up to) that ending point, we can classify it as a local maximum or minimum.   Lastly, just a couple of notes: in these little tables or charts (sometimes called sign charts , since they are showing the signs of the derivative), we'll use some shorthand notation. In , we used \"DNE\" to mean that a derivative \"does not exist\" at a point. Similarly, we used to represent the vertical asymptote at that -value (so that we didn't accidentally think it was a local maximum or minimum based on the signs of the derivative around it).  Moving forward, we'll use this same kind of analysis to think about how the derivative might be changing on these intervals. This rate of change of the slopes, the second derivative , will be a useful tool for gathering more information about how a function might be acting.   "
},
{
  "id": "act-FunctionDirection",
  "level": "2",
  "url": "sec-IncreasingDecreasing.html#act-FunctionDirection",
  "type": "Activity",
  "number": "4.2.1",
  "title": "How Should We Think About Direction?",
  "body": " How Should We Think About Direction?   Our goal in this activity is to motivate some new terminology and results that will help us talk about the \"direction\" of a function and some interesting points on a function (related to the direction of a function). For us to do this, we'll look at some different examples of functions and try to think about some unifying ideas.       A rational function that increases gently up to a point in the third quadrant, then decreases towards a vertical asymptote at x=0. In the first quadrant, the function decreases down to some point, and then gently increases.    A polynomial function that decreases down to a point, then increases, then decreases, then increases.      A kind of oscillating function that looks like it bounces off of the horizontal axis, creating sharp corners. It gently changes direction near the peak. The graph decreases, hits the axis and increases, then gently decreases towards the horizontal axis. It bounces one more time, and increases then decreases.    A bell curve, with horizontal asymptote at y=0. It increases up to a point on the top where it changes to decreasing towards the horizontal axis.      These examples do not cover all of the possibilities of how a function can act, but will hopefully provide us enough fertile ground to think about some different situations.     In each graph, find and identify:   The intervals where the function is increasing.    The intervals where the function is decreasing.    The points (or locations) around and between these intervals, the points where the function changes direction or the direction terminates.         Make a conjecture about the behavior of a function at any point where the function changes direction.    What do you think has to be true about the derivative at these points?      Look at the highest and lowest points on each function. You can even include the points that are highest and lowest just compared to the points around it. Make a conjecture about the behavior of the function at these points.    What do you think has to be true about the derivative at these points?    "
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
  "body": " Comparing Critical Points   Let's think about four different functions:                      Our goal is to find the critical points on the interval and then to try to figure out if these critical points are local maximums or local minimums or just points that the function increases or decreases through.     To start, we're going to be finding critical points. Without looking at a picture of the graph of the function, find the derivative.  Are there any -values (in the domain of the function) where the derivative doesn't exist? We are normally looking for things like division by 0 here, but we could be finding more than that. Check out to remind yourself if needed.  Are there any -values (in the domain of the function) where the derivative is 0?      Now that we have the critical points for the function, let's think about where the derivative might be positive and negative. These will correspond to the direction of a function, based on .  Write out the intervals of -values around and between your list of critical points. For each interval, what is the sign of the derivative? What do these signs mean about the direction of your function?      Without looking at the graph of your function:   What changes about how your function increases up to or decreases down to a critical point based on whether the derivative was 0 or the derivative didn't exist?    Does your function change direction at a critical point? What will that look like, whether it does or does not change direction?         Give a basic sketch of your graph. It might be helpful to find the -values for any critical points you've got. Then you can sketch your function increasing\/decreasing in the intervals between these points.  In your sketch, include enough detail to tell whether the derivative is 0 or doesn't exist at each critical point.      Compare your sketch to the actual graph of the function (you can find all of the graphs in the hint).          A graph of f(x). It is a parabola that increases up to a horizontal tangent line a the point (3\/2, 25\/4), and then decreases away from it.    A graph of g(x). It increases to a vertical tangent line at (-1,0), and then continues increases from there.      A graph of h(x). It decreases down to a vertical tangent line at (4,0), and then increases away from it, forming a cusp or sharp corner.    A graph of j(x). It decreases down to a horizontal tangent line at (0,1), and then decreases away from it.         "
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
  "body": " First Derivative Test Graphically   Let's focus on looking at a picture of a derivative, , and trying to collect information about the function . This is what we've done already, except that we've done it by thinking about the representation of as a function rule written out with algebraic symbols. Here we'll focus on connecting all of that to the picture of the graphs.  For all of the following questions, refer to the plot below. You can add information with the hints whenever you need to. Don't reveal the picture of until you're really ready to check what you know.      Based on the graph of , estimate the interval(s) of -values where is increasing.      Based on the graph of , estimate the interval(s) of -values where is decreasing.      Find the -values of the critical points of . Once you've estimated these, classify them as local maximums, local minimums, or neither. Explain your reasoning.      What do you think the graph of looks like? Do your best to sketch it or explain it before revealing it!      Why could we estimate the -values of the critical numbers of , but not find the actual coordinates? How come we can't find the -value based on looking at the graph of ?    "
},
{
  "id": "ex-StrangeDomains",
  "level": "2",
  "url": "sec-IncreasingDecreasing.html#ex-StrangeDomains",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": "   Consider the function . Find the domain of , the critical points of , and then the intervals where is increasing\/decreasing. Then, classify any critical points local maximums\/minimums if necessary.         The function has one critical point at . Why isn't there a critical point at ? What is happening there instead?                                        The domain of is due to the vertical asymptote at . The only critical point is at . The table below shows where is increasing and decreasing, as well as any local maximums or minimums.                                  decreasing  local min  increasing  asymptote  decreasing         Consider the function . Find the domain of , the critical points of , and then the intervals where is increasing\/decreasing. Then, classify any critical points local maximums\/minimums if necessary.         Notice that, by our definition of critical points, both and are critical points.                                     The domain of is . There are two critical points: one at and another at . The table below shows where is increasing and decreasing, as well as any local maximums or minimums.                 DNE               local max  decreasing  local min  increasing       "
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
  "body": " Concavity    Compare These Curves    Consider the two curves pictured below. Compare and contrast them. What characteristics of these functions are the same? What characteristics of these functions are different?       Explain the similarities you found by only talking about the slopes of each function (the values of and ).      Explain the differences you found by only talking about the slopes of each function (the values of and ).      Make a conjecture about the rate of change of both and . We'll call these things second derivative functions, and .       Defining the Curvature of a Curve   Concavity and Inflection Points   We say that a function if concave up on an interval if is increasing on the interval. If is decreasing on the interval, then we say that is concave down .  We say that a point is an inflection point if it is a point at which changes concavity (from concave up to concave down or vice versa).    Note that when we think about a function being concave up or down on some interval, we can think about this in different ways. Curvature can sometimes be hard to recognize visually, but one of the things we can see from the visual above is the interaction between the tangent line and the curve:   If the function is concave up on some interval, then the tangent line sits below the function at every point on that interval. The function curves upward away from the tangent line. Sometimes people will say that the curvature is concave \"up, like a cup.\"    If the function is concave down on some interval, then the tangent line sits above the function at every point on that interval. The function curves downward away from the tangent line. Sometimes people will say that the curvature is concave \"down, like a frown.\"   So we have some visual ways of thinking about these different types of curvature. Annoyingly, though, it is still relatively difficult to pinpoint the exact (or even close) location of an inflection point. We might be able to pretty easily point at the locations of local maximums and local minimums on a graph of a function, but it can be hard to see the exact point at which a graph of a function changes from concave up to down or vice versa. We'll focus on finding them algebraically first, but then we'll think a bit more about the graphs of functions later.   Finding a Function's Concavity   We're going to consider a pretty complicated function to work with, and employ a strategy similar to what we did with the first derivative:   Our goal is to find the sign of on different intervals and where that sign changes .    To do' this, we'll find the places that or where doesn't exist. These are the critical points of .    From there, we can build a little sign chart, where we split up the -values based on the domain of and the critical numbers of . Then we can attach each interval of -values with a sign of the second derivative, , on that interval.    We'll interpret these signs. For any intervals where , we know that must be increasing and so is concave up. Similarly, for any intervals where , we know that must be decreasing and so is concave down.   Let's consider the function .     Find the first derivative, , and use some algebra to confirm that it is really: . While we have this first derivative, we could find the critical points of and then classify those critical points using the .  For our goal of finding the intervals where is concave up and concave down, and then finding the inflection points of , let's move on.      Find the second derivative, , and confirm that this is really: .      Our goal is to find the -values where or where doesn't exist.  Note that in order to find where , we are really looking at the -values that make the numerator : . Then, to find where doesn't exist, we are finding the -values that make the denominator : . Solve these equations.    Here are two strategies for solving :   Write some sort of substitution where  Now solve this for using the quadratic formula. Note that in the end, the two values you get will be possibilities for . Make sure you get your answer to be in terms of !    A similar technique (really the same thing) is to \"complete the square\" and write your equation this way: . Now solve for in a natural way.  Something to note here is that , so (and notably not ).       You should get that the critical points of are at and .      You have two critical points of (let's just call them and ). These are possible inflection points of , but we need to check to see if the concavity changes at these points.  Fill in the following sign chart and interpret.                                                                                concave down  inflection point  concave up  inflection point  concave down        Let's confirm what we've just calculated graphically. Below, we have three graphs:                 Move the point on any graph and make sure the statements about signs, directions, and concavity match what you found! You should notice that signs of the first and second derivative change at the local maximums\/minimums and the inflection points that we found.     Let's circle back to the definition of and think about these from the perspective of .  We can notice that, by the definition, any inflection point is a point at which changes concavity, and so is a point where changes direction. That means we are looking at local maximums or local minimums of (as long as they're not at the end points of some domain)! Similarly, these are points at which changes sign, and so we are thinking about the -intercepts of these second derivatives (or other kinds of locations where the second derivative could change signs).    Let's look at a few more examples, but this time they can be ones with derivatives that are a bit easier to work with.     Consider the function . Find the intervals where is concave up, the intervals where it is concave down, and then find the locations of any inflection points.      Consider the function . Find the intervals where is concave up, the intervals where it is concave down, and then find the locations of any inflection points.     At this point, we have three different functions that we are juggling: a function (or whatever name we give it), the first derivative , and the second derivative . We'll want to keep in mind the role of each of these.    tells us the height, the -value, of the function at some point.     tells us the direction, the slope, of the function at some point.     tells us the curvature, the concavity, of the function at some point.   We can try to summarize this in a small table:                                      Notice that we could extend this table and think about any triplet of functions\/derivatives in a row: we just need to think about what is positive\/negative, what is increasing\/decreasing, and what is concave up\/down. If we wanted, we could try to define some adjective to describe what is happening to a function when is concave up\/down, but let's not. It's hard enough to visualize concavity, and it will be difficult to visualize rates of change of the concavity.    Interpreting the Concavity at Critical Points     Second Derivative Test for Local Maximums or Local Minimums   If is a critical point of with , then we can use the value of the second derivative at to classify the critical point:   If , then is concave up at and around , and so the function has a local minimum at .    If , then is concave down at and around , and so the function has a local maximum at .    If , then the Second Derivative Test is inconclusive.         Find any critical points of the following functions. For each, use the Second Derivative Test to classify the critical point. If the Second Derivative Test fails (we get that the second derivative evaluated at the critical point is 0, and so is inconclusive), then classify the critical point in some other way.      where the domain of is .       where the domain of is .     Let's leave this here, with a few questions for you to think about:   When, for you, do you think it would be reasonable to use the Second Derivative Test instead of the First Derivative Test? What goes into making this decision?    When, for you, do you think it would be reasonable to use the First Derivative Test instead of the Second Derivative Test? What does into making this decision?      "
},
{
  "id": "act-CompareCurves",
  "level": "2",
  "url": "sec-Concavity.html#act-CompareCurves",
  "type": "Activity",
  "number": "4.3.1",
  "title": "Compare These Curves.",
  "body": " Compare These Curves    Consider the two curves pictured below. Compare and contrast them. What characteristics of these functions are the same? What characteristics of these functions are different?       Explain the similarities you found by only talking about the slopes of each function (the values of and ).      Explain the differences you found by only talking about the slopes of each function (the values of and ).      Make a conjecture about the rate of change of both and . We'll call these things second derivative functions, and .    "
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
  "id": "act-FindingConcavity",
  "level": "2",
  "url": "sec-Concavity.html#act-FindingConcavity",
  "type": "Activity",
  "number": "4.3.2",
  "title": "Finding a Function’s Concavity.",
  "body": " Finding a Function's Concavity   We're going to consider a pretty complicated function to work with, and employ a strategy similar to what we did with the first derivative:   Our goal is to find the sign of on different intervals and where that sign changes .    To do' this, we'll find the places that or where doesn't exist. These are the critical points of .    From there, we can build a little sign chart, where we split up the -values based on the domain of and the critical numbers of . Then we can attach each interval of -values with a sign of the second derivative, , on that interval.    We'll interpret these signs. For any intervals where , we know that must be increasing and so is concave up. Similarly, for any intervals where , we know that must be decreasing and so is concave down.   Let's consider the function .     Find the first derivative, , and use some algebra to confirm that it is really: . While we have this first derivative, we could find the critical points of and then classify those critical points using the .  For our goal of finding the intervals where is concave up and concave down, and then finding the inflection points of , let's move on.      Find the second derivative, , and confirm that this is really: .      Our goal is to find the -values where or where doesn't exist.  Note that in order to find where , we are really looking at the -values that make the numerator : . Then, to find where doesn't exist, we are finding the -values that make the denominator : . Solve these equations.    Here are two strategies for solving :   Write some sort of substitution where  Now solve this for using the quadratic formula. Note that in the end, the two values you get will be possibilities for . Make sure you get your answer to be in terms of !    A similar technique (really the same thing) is to \"complete the square\" and write your equation this way: . Now solve for in a natural way.  Something to note here is that , so (and notably not ).       You should get that the critical points of are at and .      You have two critical points of (let's just call them and ). These are possible inflection points of , but we need to check to see if the concavity changes at these points.  Fill in the following sign chart and interpret.                                                                                concave down  inflection point  concave up  inflection point  concave down        Let's confirm what we've just calculated graphically. Below, we have three graphs:                 Move the point on any graph and make sure the statements about signs, directions, and concavity match what you found! You should notice that signs of the first and second derivative change at the local maximums\/minimums and the inflection points that we found.    "
},
{
  "id": "subsec-DefiningCurvature-7",
  "level": "2",
  "url": "sec-Concavity.html#subsec-DefiningCurvature-7",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "  Let's look at a few more examples, but this time they can be ones with derivatives that are a bit easier to work with.     Consider the function . Find the intervals where is concave up, the intervals where it is concave down, and then find the locations of any inflection points.      Consider the function . Find the intervals where is concave up, the intervals where it is concave down, and then find the locations of any inflection points.    "
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
  "body": "  Find any critical points of the following functions. For each, use the Second Derivative Test to classify the critical point. If the Second Derivative Test fails (we get that the second derivative evaluated at the critical point is 0, and so is inconclusive), then classify the critical point in some other way.      where the domain of is .       where the domain of is .    "
},
{
  "id": "sec-GlobalMaxMins",
  "level": "1",
  "url": "sec-GlobalMaxMins.html",
  "type": "Section",
  "number": "4.4",
  "title": "Global Maximums and Minimums",
  "body": " Global Maximums and Minimums   We need to start with a definition, and we can start with contrasting what we want the difference between a local maximum\/minimum and a global maximum\/minimum. Sometimes these are also called absolute maximum\/minimums.  What do you want the difference to be?  If we focus on the terms or the names we're giving, then the difference should be based on the distinction between the words \"local\" and \"global.\" In one, we're considering some confined and relatively arbitrary geographic area, just the things around or in the neighborhood. In the other, our context grows until we're considering the whole picture, the whole space that we're interested in!   Global Maximum and Global Minimum   A function has a global maximum value of if for all -values in the domain of .  A function has a global minimum value of if for all -values in the domain of .    Note that the difference between this definition and is the types of -values we're comparing to: in this new definition, we just use all of the -values in the domain. In the definition for a local max\/min, we had to construct some interval to intersect with the domain in order to just consider the \"local\" picture.   When Would We Not Have Maximums or Minimnums?   In this section, we're going to define these global maximums and then, most importantly, try to predict when these global maximums or global minimums might actually exist for a function.  To start, maybe we should come up with some examples of functions that do not have them!     Come up with some situations where a function does not have some combination of global maximum\/minimums. Sketch some graphs!      Come up with some examples of graphs of functions that are bounded (do not ever have -values that tend towards infinity in a limit) that do not have some combination of global maximum\/minimums.      For the examples of graphs that you have built or collected, features of the functions that allow for the examples you picked? If you could impose some requirements that would \"fix\" the examples you found (so that they had both a global maximum and a global minimum), what requirements could you use?       When Do We Guarantee Both a Global Maximum and a Global Minimum?   Extreme Value Theorem   If is a continuous function on a closed interval then must have both a global maximum and a global minimum on the interval.    The Extreme Value Theorem guarantees the existence of both the global maximums and minimums, but we actually get more than just this out of the Extreme Value Theorem. Once we know that both of the global maximums and minimums exist, we can find them pretty easily.  The global maximum of a function, if it exists for the function on the domain\/interval, is just the local maximum with the largest -value. Similarly, the global minimum, if it exists, is the local minimum with the lowest -value.  So once we know they both exist for a function on an interval, we can simply collect the critical points of the function (including the ending points of the domain) and compare the -value function outputs!    Check to see if each function (on the stated domain) satisfies the conditions of the Extreme Value Theorem, and then find any global maximums\/minimums of the function on the interval.      on        on        on        What about Domains of Functions that Aren't Closed?  Without the conditions that imply the Extreme Value Theorem, things become trickier. For instance, if the function is not continuous, then the function might have some unbounded behavior at a vertical asymptote. In this case, we might need to look at the one-sided limits around that asymptote, in order to see if our function tends towards positive or negative infinity on either side of the asymptote. This could tell us that the function doesn't have a global maximum, a global minimum, or that it doesn't have either.  Similarly, if the function is not defined on a closed interval, then we need to investigate what happens to the function's behavior as the function moves towards the \"ends\" of the interval (which could be a real number but something like positive or negative infinity). These end behavior limits could exist, in which case we need to compare these heights of horizontal asymptotes or open ends of an interval to the heights of any critical numbers.  But we might also find that the function tends towards infinity or negative infinity in the end behavior.  And there are other things to consider about discontinuity of a function (other than vertical asymptotes)!  All in all, it should be evident that if we remove one or both of the conditions on our function that guarantees the existence of a global maximum and a global minimum, it becomes much harder to find them, since we have so many different options to consider.  To simplify things, we will look at one case where things align in our favor: a continuous function that only has a single local maximum\/minimum on an interval.    If is a continuous function on some interval, and has only a single critical point (call it ) where the direction changes, then if that point is a local maximum of , then is the global maximum. Similarly, if is a local minimum, then is the global minimum of .    This is a great result to give us a path forward without having to check all of the edge cases and possibilities mentioned above. There are many functions that might have only a single critical point, or if it does have more than one critical point, only a single one of them acting as a local maximum\/minimum.  Note here that we do need to classify the critical point as a local maximum or minimum! We'll use the or the for this classification.    For each function, find any global maximums\/minimums that may exist.      and note that the domain of this function is        and note that the domain of this function is .      "
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
  "body": " When Would We Not Have Maximums or Minimnums?   In this section, we're going to define these global maximums and then, most importantly, try to predict when these global maximums or global minimums might actually exist for a function.  To start, maybe we should come up with some examples of functions that do not have them!     Come up with some situations where a function does not have some combination of global maximum\/minimums. Sketch some graphs!      Come up with some examples of graphs of functions that are bounded (do not ever have -values that tend towards infinity in a limit) that do not have some combination of global maximum\/minimums.      For the examples of graphs that you have built or collected, features of the functions that allow for the examples you picked? If you could impose some requirements that would \"fix\" the examples you found (so that they had both a global maximum and a global minimum), what requirements could you use?    "
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
  "body": "  Check to see if each function (on the stated domain) satisfies the conditions of the Extreme Value Theorem, and then find any global maximums\/minimums of the function on the interval.      on        on        on     "
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
  "body": "  For each function, find any global maximums\/minimums that may exist.      and note that the domain of this function is        and note that the domain of this function is .    "
},
{
  "id": "sec-Optimization",
  "level": "1",
  "url": "sec-Optimization.html",
  "type": "Section",
  "number": "4.5",
  "title": "Optimization",
  "body": " Optimization   How do we use calculus to make decisions? If we're trying to find the best allocation of time between different tasks, or if we're trying to construct some object with limited resources, or if we're trying to find some other solution to the question, \"How do we make the best\/most\/maximum\/minimum of...\" then we can think about translating these to a calculus context.  Optimization problems are some of the clearest application of calculus concepts to applied problems from any industry or field. While there certainly aren't teams of calculus experts in every office waiting for these kinds of problems to arrive, these problems are routinely solved using calculus, either done by computer software or coming from calculus experts who make sweeping recommendations across a whole field or some other source.    Optimization Framework  We'll start this discussion with a small example. This is not an example that shows up in \"real life,\" but will be helpful to build a strategy for approaching these problems.  Here's our problem:    Find two numbers that add to get 14 but give the largest possible product.  That's it. That's the problem. It's not super interesting, right? Let's think about how we'll solve it.    First, we want to think about our two numbers. We'll need variable names for these. You can use whatever letters you'd like here: I'm going to be boring and pick and as the names of my two numbers. What do we know about and ?  The first thing that we know is that . This isn't a huge amount of information, but it does provide us with a nice connection between our numbers. If we know what one number is, then we automatically know the second one: if one number is , then the other number is whatever we need to add to to get .  We also know that we're interesting in the product: . We don't, currently, know anything about this product other than the fact that we want it to be large. Ok so automatically, we know that both and need to be positive: if we had one number that was positive (like ) and one number that was negative (like ), then the product will be negative, and even though they add to , we are not going to get a big product.  So we know that for both of these numbers .  This doesn't seem like a lot of information, but we can put it all together really nicely. For instance, I can manipulate the fact that these two numbers add to get into an equation that tells me what the value of one number is based on the other: . I can also write my product as an actual function of a single variable: . Lastly, I actually know a domain for this function: we know that , but since , then . We can't have a number larger than , since the other number would be negative.   I just said that we can't have a negative product, but nothing in this problem says that. We just know that a negative product will be small. But we don't have to limit each number to be between 0 and 14. We could just allow them to be bigger than 14 (and thus also allowed to be smaller than 0) and we'll just get a bunch of negative products that aren't the maximum one. Oh well!  We are making a similar choice by including the pair and as a possibility. Do we really think that this could give us the biggest product? NO! The product is 0! But it's maybe convenient to have a closed interval as the domain of this function, so why not?  All along the way, we're making choices that guide how we think about this problem. In real life, we'll do the same thing. The only difference is that the choices that we make about what are reasonable values for our inputs to take on are more meaningful, since those inputs represent real things. We have to take these choices seriously.   Ok, so we have a function representing the product, and a domain for that function, , and we know we want to find the maximum for it. This is a calculus problem that we can actually do! Take a moment to do it.     Now we can find the critical points. We also know that the ending points at and are critical, since the derivative cannot exist.  There is a point on the product function when where we have a horizontal tangent line. Does this represent a maximum or a minimum? We have some options for how to do this:    FDT:                           increasing  local max  decreasing   Since this is the only turning point, it must be the global maximum!     SDT:  Since the function is concave down at this point, then we know that the function reaches a local maximum when . Since this is the only turning point, it must be the global maximum!     EVT:              global minimum      global maximum      global minimum      However we do this, we find that there is a maximum product when . What is the second number, ? Well we know that they add to 14, so: So our two numbers are and , and they multiply to get , the biggest possible product between two numbers that add to .    We have accomplished something, even if it's not much. Hurray, we solved a pretty unimportant problem about numbers!  More importantly, though, we set up a process for how we're going to approach optimization problems.   Optimization Process      Label variables. What are the quantities that we care about? What are the kinds of measurements that we're given or need to find information about? Label them!     Find a formula to optimize. What are we trying to find the maximum or minimum of? Is it a formula that we might already know, or is there some other way of constructing that formula? This might involve drawing some geometric shape to get a clue!     Find a constraint. The constraint is really just some other connection between variables that guides their relationship. If we know some of the variables, there might be a way to find another one, since it would then depend on that variable.     Find some domains. For your variables, what are the smallest and largest possible values that they can reasonably take on? Are there any?     Set up a calculus statement. A calculus statement is a sentence that includes:   A function you are optimizing. This should be a function with only one input, so we might need to use the constraint to re-write out formula from earlier in order for it to only have a single input variable.    A domain for that function. This should be the interval you found earlier that is relevant for your choice of input variables.    Some indication of whether you're finding a maximum or a minimum.   An example of a calculus statement might be something like: \"We want to find the maximum\/minimum of function on domain .\"     Do calculus. We want to find a global maximum or a minimum of a function...we know how to do that! We'll find critical points, and then use the , the , or the (and it's follow-up strategy) to find the global or absolute maximum\/minimum!      In our example, we did the following:    Label variables. Our two numbers were and .     Find a formula to optimize. We said that was the product.     Find a constraint. We knew that      Find some domains. We reasoned that and .     Set up a calculus statement. We wanted to find the maximum of on .     Do calculus. We showed how we could use three different techniques to solve this.       Balancing Volume and Surface Area  Let's use this new to solve a real problem. This one is a classic problem that (in my opinion) every student should try. I hope you'll see why.   Constructing a Can   A typical can of pop is 355 ml, and has around 15 ml of headspace (air). This results in a can that can hold approximately 23 cubic inches of volume.  Let's say we want to construct this can in the most efficient way, where we use the least amount of material. How could we do that? What are the dimensions of the can?     First, let's think of our can and try to translate this to some geometric shape with variable names. Collect as much information as we can about this setup! What is the shape? What are the names of the dimensions?    Our can is probably a cylinder! For a cylinder, we can define it based on a radius and height, and we normally call them and . Both of these will be measured in inches.      What is the actual measurement that we are trying to optimize? Are we finding a maximum or a minimum?    We're trying to minimize the amount of material used to create the can: this should match up with surface area!  The formula for the surface area of a cylinder is .      What other information about the can do we know? How do we translate this into a constraint, or a connection between our variables?    We're told that the volume is 23 cubic inches! The volume formula for a cylinder is , so we have a constraint: .      What kinds of values can our variables take on? Is there a smallest value for either? A largest? Are there other limitations to these?    It's hopefully obvious that we need positive dimensions to make sense: we can't have a can with a negative radius or a negative height.  Notice, also, that neither dimension can be equal to : if one of them were , then the volume would also be , which doesn't work with our constraint!  We can also notice that as one dimension gets close to 0, think about the radius for example, then the other dimension, the height in this case, would need to get really large to compensate and keep the volume fixed.  All of this to say that our intervals are:       Now we need to set up a calculus statement. This part mostly relies on us finding a way to build a single-variable function defining the surface area. Build that function, and then write down the calculus statement.    Can you solve the constraint, for one of the variables? Can you then use that replace or substitute out one of the variables in our surface area formula to create a function, or ?    We have two options here, depending on which variable you isolated in the constraint and then substituted. These are the two ways of isolating for a variable in the constraint:               We want to find the minimum of on .    We want to find the minimum of on    Personally, I think the first option is probably easier to work with.      Do some calculus to find the global maximum or minimum, and solve the optimization problem.    Find a derivative, then find critical points, and test them using with the or the . Make sure you find the other dimension after you've confirmed that you found the minimum of the function!    Let's look at the version with on . So we have a critical point on at . Now we need to test it to ensure that it is a minimum (since that's what we're trying to find). We have two options to do this: the First Derivative Test, or the Second Derivative Test.    FDT:                           decreasing  local min  increasing   Since this is the only turning point, then we know that there is a global minimum of at .     SDT:  Hang on one second: notice that no matter what, since , then we can see that . We don't even need to evaluate this second derivative at the critical point to know that the function is concave up here!  So then we have to have a local minimum, and since it's the only turning point, a global minimum of at .   So we found our minimum! Now we just need to find the other dimension, . This is a lot of algebra, when we could have just plopped these values into a calculator and noticed the same, interesting thing.      What is the relationship between and , here? How do they compare? What about the height and diameter of our can?  Is this relationship noticeable in a typical can of pop?    The height is twice the radius, or the height is equal to the diameter!  We might call this a \"square-cylinder\", since the \"width\" and the height of the cylinder are equal.  Do you ever see \"square-cylinder\" cans?     So why, then, do we never see cans that look like this? It is certainly worth thinking about how the setup and assumptions we made in this activity might not be the way things work in real life.  What are some reasons that we might not see these dimensions in a can of pop?   This question (why do the dimensions of cans not match what we found as the optimal solution?) is interesting, and sometime in the in the 1980's, a math professor felt strongly enough about it that they wrote a letter to Carnation, a brand of food products that produces canned goods, asking why reality doesn't match mathematics.  The professor received a response from the Assistant Product Manager of Friskies Buffet with 5 reasons for the non-square dimensions. The full text of the letter can be found here: .     What Other Examples Can We Do?  There's a really important point to make from the : in real life, our optimization problems are multi-variable problems. We're balancing many different aspects of a process or a problem to find an optimal solution. That's hard to do in a calculus course that focuses on single-variable functions!  So what kinds of problems can we actually do?  There are a bunch, but they don't really stand up to intense scrutiny: if we looked carefully at most of the \"classic\" optimization problems that we see in calculus texts, they'd fall apart just like the optimal can problem from .  That said, it's good to practice thinking about using constraints and translating physical situations into formulas and functions, so try the practice problems to get used to this part of the optimization process!   "
},
{
  "id": "ex-FirstOptimization",
  "level": "2",
  "url": "sec-Optimization.html#ex-FirstOptimization",
  "type": "Example",
  "number": "4.5.1",
  "title": "",
  "body": "  Find two numbers that add to get 14 but give the largest possible product.  That's it. That's the problem. It's not super interesting, right? Let's think about how we'll solve it.    First, we want to think about our two numbers. We'll need variable names for these. You can use whatever letters you'd like here: I'm going to be boring and pick and as the names of my two numbers. What do we know about and ?  The first thing that we know is that . This isn't a huge amount of information, but it does provide us with a nice connection between our numbers. If we know what one number is, then we automatically know the second one: if one number is , then the other number is whatever we need to add to to get .  We also know that we're interesting in the product: . We don't, currently, know anything about this product other than the fact that we want it to be large. Ok so automatically, we know that both and need to be positive: if we had one number that was positive (like ) and one number that was negative (like ), then the product will be negative, and even though they add to , we are not going to get a big product.  So we know that for both of these numbers .  This doesn't seem like a lot of information, but we can put it all together really nicely. For instance, I can manipulate the fact that these two numbers add to get into an equation that tells me what the value of one number is based on the other: . I can also write my product as an actual function of a single variable: . Lastly, I actually know a domain for this function: we know that , but since , then . We can't have a number larger than , since the other number would be negative.   I just said that we can't have a negative product, but nothing in this problem says that. We just know that a negative product will be small. But we don't have to limit each number to be between 0 and 14. We could just allow them to be bigger than 14 (and thus also allowed to be smaller than 0) and we'll just get a bunch of negative products that aren't the maximum one. Oh well!  We are making a similar choice by including the pair and as a possibility. Do we really think that this could give us the biggest product? NO! The product is 0! But it's maybe convenient to have a closed interval as the domain of this function, so why not?  All along the way, we're making choices that guide how we think about this problem. In real life, we'll do the same thing. The only difference is that the choices that we make about what are reasonable values for our inputs to take on are more meaningful, since those inputs represent real things. We have to take these choices seriously.   Ok, so we have a function representing the product, and a domain for that function, , and we know we want to find the maximum for it. This is a calculus problem that we can actually do! Take a moment to do it.     Now we can find the critical points. We also know that the ending points at and are critical, since the derivative cannot exist.  There is a point on the product function when where we have a horizontal tangent line. Does this represent a maximum or a minimum? We have some options for how to do this:    FDT:                           increasing  local max  decreasing   Since this is the only turning point, it must be the global maximum!     SDT:  Since the function is concave down at this point, then we know that the function reaches a local maximum when . Since this is the only turning point, it must be the global maximum!     EVT:              global minimum      global maximum      global minimum      However we do this, we find that there is a maximum product when . What is the second number, ? Well we know that they add to 14, so: So our two numbers are and , and they multiply to get , the biggest possible product between two numbers that add to .   "
},
{
  "id": "strat-Optimization-2",
  "level": "2",
  "url": "sec-Optimization.html#strat-Optimization-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constraint calculus statement "
},
{
  "id": "act-VolumeCan",
  "level": "2",
  "url": "sec-Optimization.html#act-VolumeCan",
  "type": "Activity",
  "number": "4.5.1",
  "title": "Constructing a Can.",
  "body": " Constructing a Can   A typical can of pop is 355 ml, and has around 15 ml of headspace (air). This results in a can that can hold approximately 23 cubic inches of volume.  Let's say we want to construct this can in the most efficient way, where we use the least amount of material. How could we do that? What are the dimensions of the can?     First, let's think of our can and try to translate this to some geometric shape with variable names. Collect as much information as we can about this setup! What is the shape? What are the names of the dimensions?    Our can is probably a cylinder! For a cylinder, we can define it based on a radius and height, and we normally call them and . Both of these will be measured in inches.      What is the actual measurement that we are trying to optimize? Are we finding a maximum or a minimum?    We're trying to minimize the amount of material used to create the can: this should match up with surface area!  The formula for the surface area of a cylinder is .      What other information about the can do we know? How do we translate this into a constraint, or a connection between our variables?    We're told that the volume is 23 cubic inches! The volume formula for a cylinder is , so we have a constraint: .      What kinds of values can our variables take on? Is there a smallest value for either? A largest? Are there other limitations to these?    It's hopefully obvious that we need positive dimensions to make sense: we can't have a can with a negative radius or a negative height.  Notice, also, that neither dimension can be equal to : if one of them were , then the volume would also be , which doesn't work with our constraint!  We can also notice that as one dimension gets close to 0, think about the radius for example, then the other dimension, the height in this case, would need to get really large to compensate and keep the volume fixed.  All of this to say that our intervals are:       Now we need to set up a calculus statement. This part mostly relies on us finding a way to build a single-variable function defining the surface area. Build that function, and then write down the calculus statement.    Can you solve the constraint, for one of the variables? Can you then use that replace or substitute out one of the variables in our surface area formula to create a function, or ?    We have two options here, depending on which variable you isolated in the constraint and then substituted. These are the two ways of isolating for a variable in the constraint:               We want to find the minimum of on .    We want to find the minimum of on    Personally, I think the first option is probably easier to work with.      Do some calculus to find the global maximum or minimum, and solve the optimization problem.    Find a derivative, then find critical points, and test them using with the or the . Make sure you find the other dimension after you've confirmed that you found the minimum of the function!    Let's look at the version with on . So we have a critical point on at . Now we need to test it to ensure that it is a minimum (since that's what we're trying to find). We have two options to do this: the First Derivative Test, or the Second Derivative Test.    FDT:                           decreasing  local min  increasing   Since this is the only turning point, then we know that there is a global minimum of at .     SDT:  Hang on one second: notice that no matter what, since , then we can see that . We don't even need to evaluate this second derivative at the critical point to know that the function is concave up here!  So then we have to have a local minimum, and since it's the only turning point, a global minimum of at .   So we found our minimum! Now we just need to find the other dimension, . This is a lot of algebra, when we could have just plopped these values into a calculator and noticed the same, interesting thing.      What is the relationship between and , here? How do they compare? What about the height and diameter of our can?  Is this relationship noticeable in a typical can of pop?    The height is twice the radius, or the height is equal to the diameter!  We might call this a \"square-cylinder\", since the \"width\" and the height of the cylinder are equal.  Do you ever see \"square-cylinder\" cans?    "
},
{
  "id": "subsec-VolumeAndSurfaceArea-6",
  "level": "2",
  "url": "sec-Optimization.html#subsec-VolumeAndSurfaceArea-6",
  "type": "Note",
  "number": "4.5.2",
  "title": "",
  "body": " This question (why do the dimensions of cans not match what we found as the optimal solution?) is interesting, and sometime in the in the 1980's, a math professor felt strongly enough about it that they wrote a letter to Carnation, a brand of food products that produces canned goods, asking why reality doesn't match mathematics.  The professor received a response from the Assistant Product Manager of Friskies Buffet with 5 reasons for the non-square dimensions. The full text of the letter can be found here: .  "
},
{
  "id": "sec-LinearApproximation",
  "level": "1",
  "url": "sec-LinearApproximation.html",
  "type": "Section",
  "number": "4.6",
  "title": "Linear Approximations",
  "body": " Linear Approximations   We're going to return to a pretty central idea here, one that we've been using and developing and really exploring. But let's think about the very basic version of what we've been looking at over this whole chapter (and more):   The derivative of a function tells us the slope of the line tangent to the function at a point.   But what we'll do is explore how this tangent line and the graph of our function interact and relate to each other. Let's start with just playing with a graph and seeing if we can discover some things to say about the relationship between a tangent line and the function it is lying tangent to!   The effect that we are seeing when we zoom in on a function is sometimes described as our function being locally linear . What do you think this means? Why is this a good description of what we're looking at, and how these differentiable functions are constructed?  Would this effect be noticeable for every function, even ones that are not differentiable at some points?  Convince yourself that a function will not look locally linear at a point where the function is not differentiable. You might want to remind yourself what it looks like, graphically, when a derivative doesn't exist:     Linearly Approximating a Function  The visual above should provide us with a nice framework to think about how we might approximate a function linearly, but we can recap some basic ideas:   When we say \"linear approximation,\" we're really just referring to the tangent line at some point.    Our functions only look \"locally linear\" when we zoom in around some single point. Another way of saying this is that our tangent line only matches the behavior of our function really close to the point where we built the tangent line.    We have a kind of vague or ambiguous idea of accuracy in approximation. While a tangent line follows the behavior of the function \"around\" that point where it was built, the actual rate at which it deviates from our function is different. If we move the point in the visual above, we'll see that at some locations, our function is pretty linear and doesn't move away from the tangent line very quickly. In other locations, the function turns quickly away from the tangent line!      Linear Approximation of a Function   If is differentiable at , then we say that a linear approximation of centered at is: . We know, then, that for -values \"close\" to the center, .  Note that the center is just the point at which we are building this linear approximation: the point at which we build the tangent line.    Let's see this in action!   Approximating an Exponential Function   Let's consider the function . We're going to build the linear approximation, , but we also want to focus on understanding what the \"center\" is, and how we think about accuracy of our estimations.     We first need to find a \"good\" center for our linear approximation. We have two real requirements here:   We need the center to be some -value that will be \"close\" to the inputs we're most interested in. We know that for -values \"near\" the center, so we should keep this in mind. We don't have a specific input that we're interested in (we are not specifically focused on estimating for instance), so we don't need to worry about this for now.    We are going to need to evaluate the function and its derivative at the center: we use to find the slope and to find a -value for a point on the line. We'd like to choose a center that will make evaluating these functions reasonable, if we can!   We are going to choose a center of 0: why?      Build a linear approximation of centered at .    Build a line with a slope of that goes through the point .      Use your linear approximation to estimate the value of .    Since for -values near 0, we can say that . So you can evaluate your linear approximation function at .      Let's visualize this approximation a bit:   Are you confident in your approximation of ? Would you be more or less confident in an approximation of ? Why?      Is your estimate of too big or too small? How can you tell, without even calculating the actual value of ?  How can you tell that every estimate that you get out of any linear approximation of (no matter what the center is) is going to be too small?    It might be helpful to think about how the function moves away from the tangent line: how do the slopes of change? Can you link this to ideas of concavity?     In this activity, we did not have to think much about an appropriate choice of center. We tried to justify our choice, but that's different than having to make a choice. Let's approach this a bit differently in our next examples.   Approximating some Values   Pick one of the following values to approximate:                      Throughout the rest of this activity, use your value to build a linear approximation of some relevant function and estimate the value you chose.     To build a linear approximation of some function at some center, we need two things:   A function.    A center.   What function will you be using for ? Why that one?    Your value should look like the output of some function after you plug in some -value. What function?      What center are you choosing? Why that one?    Remember that we want some input for your function that is both close to the input you'd like to estimate your function at and also a reasonable one to know the value of your function and its derivative.      Build your linear approximation at your center! You should end up with an actual linear function. It might be helpful to plot this linear function and your actual function to confirm that you have actually built a tangent line.      Use your linear approximation function to estimate your value! Report the estimate, and comment on the accuracy of your estimate. Without calculating the actual value, can you tell if this is close or not? Do you have an overestimate or underestimate?    Think about issues relating to the distance from the center, the concavity of the function, and even the rate at which the slopes change away as we move away from the center.     So far, we have been pretty limited in what we can actually do with these linear approximations. A function is only locally linear when we look at a very small interval of -values. Once we move away from the center far enough (and it's often not that far), then our function curves away from the tangent line and our linear approximation is not at all accurate.   If you want to see how we can make these linear approximations more accurate, then we can try to think about using a quadratic or cubic function instead: something with some curves built into it that can try to follow the function's behavior a bit! We'll cover that in .     Approximating Zeros of a Function  Let's look one really cool application of linear approximations before we finish things up in this section.  In approximately 60 AD, Heron of Alexandria presented a method for approximating square roots (probably...historians know very little about exactly when Heron was born and died, but they think he saw an eclipse that matched one from 62 AD, so it's a good guess). This algorithm was presented along with different formulas for volumes and surface areas of a mixture of objects.   You might know of Heron from Heron's formula for the area of a triangle!   Over 1000 years later, in the late 1660's, Isaac Newton was one of a long list of mathematicians to re-create this formula in a more general way, where we can use it to approximate roots of polynomials. This method was later extended by several different mathematicians, and is now known as the Newton-Raphson method , or sometimes more simply Newton's method .   Walking in the Footsteps of Ancient Mathematicians   Let's travel all the way back to the first (or maybe second) century AD and recreate Heron's method to approximate the value of . We'll develop this using modern calculus, and simple linear approximation.  We're going to re-frame the problem, and instead we're going to try to use a linear approximation of to approximate the -value where . We know enough about quadratic functions to know that there are two values: and .     We're going to build a linear approximation of , and we need a reasonable center. Honestly, any integer will work, since we can evaluate and really easily, but we want to find one that is close to . Let's center our approximation at .  Find , and then construct the linear approximation: .    Since , we have and . So then we end up with the following for our linear approximation: .      Now we know that for -values near our center, . What if we estimate the -value where by solving instead? Since , the -value where should make pretty close to 0 at least.  Solve .           Ok, this might be kind of close to the value of , right? Let's visualize this.  Hm...so this isn't that good of an approximation yet. We can check this by looking at the actual value of our function at and seeing if it's close to 0. This...isn't that close to 0.  So let's try this again. This time, though, let's center our new linear approximation at .           Now set this new linear approximation equal to 0 and solve to estimate the solution to .           We can keep repeating this process, and that's exactly what the mathematicians we talked about discovered.  Say we've build a linear approximation at some -value (we'll call it ). . Set this equal to 0 and solve.           Let's visualize these calculations.   Something kind of strange happens in the last two steps. Why does the value of our estimation not change? What happens to our estimate?      Newton's Method for Approximating Zeros of Functions   If is some initial estimation of a solution to , then we we can iteratively generate more estimations using the following formula: provided that exists and is non-zero.    A good question to ask is about when this process stops. If we want to estimate some -intercept of a function, like in , then how many steps is enough? There are a couple of ways we can approach this:   We can just state at the beginning how many iterations we're going to do. This is what happened in , since this activity was written to only make you calculate a specific number of these estimations. We could have started by saying that we'll calculate this 3 times, or maybe 100 times.    We can test to see what is, and then stop when it is within some pre-determined distance from 0. We also did this when we noticed that was not very close to 0 (after our first estimation), and so we should calculate this again. We could start by saying that we'll continue until we see a -value that is within 0.0001 of 0, or some other small distance.    We can test to see how close our approximations are to each other, and stop when they're close enough. We saw this happen in the visualization: the last two estimates were the same! They actually weren't, but since the applet only displayed 4 decimal places, the numbers appeared the same after rounding. Maybe we set some criteria there, or we look at the distance between and (two successive estimates) and stop when they are within some distance from each other.   In reality, we often choose a combination of these. Maybe we set distance threshold for stopping, but use a maximum of 10 iterations as a backup plan. This happens often when we code this algorithm and have a computer run it. It is possible for this code to never give us two successive estimates that are close enough to stop, and so the code would run forever unless we cut it off at 100 iterations or some other value.  A wonderful thing about this small process is that, while it is ancient (dating back to Heron in the first or second century), it is still used today. This is a powerful estimation method that can be used in a variety of areas including statistics and data science.   "
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
  "body": " Approximating an Exponential Function   Let's consider the function . We're going to build the linear approximation, , but we also want to focus on understanding what the \"center\" is, and how we think about accuracy of our estimations.     We first need to find a \"good\" center for our linear approximation. We have two real requirements here:   We need the center to be some -value that will be \"close\" to the inputs we're most interested in. We know that for -values \"near\" the center, so we should keep this in mind. We don't have a specific input that we're interested in (we are not specifically focused on estimating for instance), so we don't need to worry about this for now.    We are going to need to evaluate the function and its derivative at the center: we use to find the slope and to find a -value for a point on the line. We'd like to choose a center that will make evaluating these functions reasonable, if we can!   We are going to choose a center of 0: why?      Build a linear approximation of centered at .    Build a line with a slope of that goes through the point .      Use your linear approximation to estimate the value of .    Since for -values near 0, we can say that . So you can evaluate your linear approximation function at .      Let's visualize this approximation a bit:   Are you confident in your approximation of ? Would you be more or less confident in an approximation of ? Why?      Is your estimate of too big or too small? How can you tell, without even calculating the actual value of ?  How can you tell that every estimate that you get out of any linear approximation of (no matter what the center is) is going to be too small?    It might be helpful to think about how the function moves away from the tangent line: how do the slopes of change? Can you link this to ideas of concavity?    "
},
{
  "id": "act-LinearApproximations",
  "level": "2",
  "url": "sec-LinearApproximation.html#act-LinearApproximations",
  "type": "Activity",
  "number": "4.6.2",
  "title": "Approximating some Values.",
  "body": " Approximating some Values   Pick one of the following values to approximate:                      Throughout the rest of this activity, use your value to build a linear approximation of some relevant function and estimate the value you chose.     To build a linear approximation of some function at some center, we need two things:   A function.    A center.   What function will you be using for ? Why that one?    Your value should look like the output of some function after you plug in some -value. What function?      What center are you choosing? Why that one?    Remember that we want some input for your function that is both close to the input you'd like to estimate your function at and also a reasonable one to know the value of your function and its derivative.      Build your linear approximation at your center! You should end up with an actual linear function. It might be helpful to plot this linear function and your actual function to confirm that you have actually built a tangent line.      Use your linear approximation function to estimate your value! Report the estimate, and comment on the accuracy of your estimate. Without calculating the actual value, can you tell if this is close or not? Do you have an overestimate or underestimate?    Think about issues relating to the distance from the center, the concavity of the function, and even the rate at which the slopes change away as we move away from the center.    "
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
  "body": " Walking in the Footsteps of Ancient Mathematicians   Let's travel all the way back to the first (or maybe second) century AD and recreate Heron's method to approximate the value of . We'll develop this using modern calculus, and simple linear approximation.  We're going to re-frame the problem, and instead we're going to try to use a linear approximation of to approximate the -value where . We know enough about quadratic functions to know that there are two values: and .     We're going to build a linear approximation of , and we need a reasonable center. Honestly, any integer will work, since we can evaluate and really easily, but we want to find one that is close to . Let's center our approximation at .  Find , and then construct the linear approximation: .    Since , we have and . So then we end up with the following for our linear approximation: .      Now we know that for -values near our center, . What if we estimate the -value where by solving instead? Since , the -value where should make pretty close to 0 at least.  Solve .           Ok, this might be kind of close to the value of , right? Let's visualize this.  Hm...so this isn't that good of an approximation yet. We can check this by looking at the actual value of our function at and seeing if it's close to 0. This...isn't that close to 0.  So let's try this again. This time, though, let's center our new linear approximation at .           Now set this new linear approximation equal to 0 and solve to estimate the solution to .           We can keep repeating this process, and that's exactly what the mathematicians we talked about discovered.  Say we've build a linear approximation at some -value (we'll call it ). . Set this equal to 0 and solve.           Let's visualize these calculations.   Something kind of strange happens in the last two steps. Why does the value of our estimation not change? What happens to our estimate?    "
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
  "body": " L'Hôpital's Rule   We're going to re-visit limits, but with a slightly new problem-solving tool. Specifically, we'll be thinking about Indeterminate Forms. We noticed, back in , that we could evaluate limits for indeterminate forms by swapping out the function with another function that was mostly equivalent, only differing at the -value we were approaching in the limit ( ).  We ended that section by thinking about a limit where this was difficult, in .  We're now going to build a more systematic (and helpful) way of thinking about these limits using the ideas of Linear Approximation!    Indeterminate Forms  We have given a preliminary definition of Indeterminate Forms already ( ), but let's remember how these work.  We said that is an indeterminate form, since a limit whose numerator and denominator approach 0 can end up taking on different values or even not exist. For instance, we can notice that the definition of the is a limit with this indeterminate form. As long as is continuous (a necessity of it being differentiable) at , then: But we have seen so many different values that this limit can end up being! We have spent most of the past two chapters in this text playing with derivatives and evaluating them: all of those values come from this limit! We have also seen that, even for continuous functions, this limit may not exist. A function can be non-differentiable at .  We can show the same thing for a second indeterminate form: , which we will simplify by just using the symbol . For us to see that limits with this form can take on different values (or not exist), we just need to think about end behavior limits for rational functions ( ).  Let's think about the following limit: . As long as , then this limit looks like it's in the form of . Sure, the denominator is really approaching , but we really just mean that there is an infinite numerator and an infinite denominator, regardless of sign.  We also know that the actual limit depends on the degrees and ! Try to spend a couple of minutes confirming the next few claims:   If , then this limit is .    If , then this limit is .    If , then this limit doesn't exist.   All of this to show us that we have some forms of limits where we can't immediately tell what the actual value of the limit is (or if it even exists). L'Hôpital's Rule will be a way for us to navigate these limits a little easier than before, in some cases.    L'Hôpital's Rule   Building L'Hôpital's Rule   We're going to take a closer look at the indeterminate form, , and use our new ideas of linear approximation to think about how these types of things work.  We're going to be working with the following limit: where and are differentiable at (since we're going to want to build linear approximations of them).     Write out the linear approximations for both and , both centered at . We'll call them and .    We're just using the formula for , but with for one of them and in the other.      Describe how well or how poorly these linear approximations estimate the values from our functions and ? What happens to these approximations as we get close to the center ? What happens in the limit as ?    You can revisit the local linearity visualization from to see what happens, in general, with a linear approximation of a function as we zoom in on the center.      Let's re-write our limit. We can replace with our formula for its linear approximation, and replace with its linear approximation, :       Up until now, we have not thought about indeterminate forms at all. Let's start now.  If this limit is a indeterminate form, then that means that and .  Since our functions are, by definition, differentiable at , then they also have to be continuous at . What does this mean about the values of and ?    Take a look back at our definition of function being . How does the function value relate to the limit? What does that mean in our case?      Use this new information about the values of and to revisit the limit. We re-wrote by replacing each function with its linear approximation. What happens with the algebra when we know this information about and ?    We re-wrote and also know that in this case (due to the indeterminate form) that and .     So we have a really nice result here! In the indeterminate form, we can replace the ratio of the -values from our functions with the ratio of slopes (coming from the first derivatives) of our functions.  In general, we'll put a step in between, where we find and first before trying to evaluate these derivatives at .     L'Hôpital's Rule   If and are functions and is some real number with and both being differentiable at and and , then . Similarly, this holds if and .  If and are both differentiable as and either:    and      and    then .  This is also true as .     Some First Limits   Evaluate the following limits. You should first confirm that they are, actually, indeterminate forms!                                       There are more indeterminate forms than these two! In each of the following cases, we mean that a limit with this form can take on different values (or not exist). Other indeterminate forms that we can consider include:                           The issue with these, though, is that L'Hôpital's Rule only applies to quotients! We needed that quotient for the algebra to work out when we canceled things out to end up with the ratio of slopes.  So our strategies for these other indeterminate forms will all require us to manipulate the product, difference, or expeonential in order to force some division to show up somehow.    Forcing Division   Let's look at each new indeterminate form classified into groups based on the operation between the functions.    Products!  We can re-write as a quotient by dividing by a reciprocal. So either or . Our choice ends up being based on what is most helpful.    Evaluate the limit: Note that since and , this is a indeterminate form.    Re-write this limit as: . Note that this is not an indeterminate form, and we can use L'Hôpital's Rule.     So .      Differences!  We can re-write as a product by factoring something out of the difference. Then, if the product is a indeterminate form, we can divide by a reciprocal to turn it into a quotient.  Choosing what to factor out is sometimes very difficult. But we should note that this is the strategy we used to evaluate .    Evaluate the following limit: Note that since and , this is an indeterminate form.    Try to factor out . You won't be able to actual factor it nicely, but you'll end up with a fraction term that is an indeterminate form!     Let's focus on the limit , since it is in an indeterminate form. So then we can go back to our original limit:       Exponentials!  We can think about how we approached these types of functions raised to functions when we learned about .  We were able to use logarithms to re-write these types of exponentials as products. So we can say that: When we think about limits, the continuity of the exponential function allows us to just focus on the limit of the exponent, , which is likely an indeterminate form that we've seen!    Evaluate the following limit: Note that this is the indeterminate form.    We can re-write as which is the same as . Now we can evaluate the limit , and make sure to return the value into the exponent.    We know from that . So then: So .      "
},
{
  "id": "act-LHopitalsRule",
  "level": "2",
  "url": "sec-LHopitalsRule.html#act-LHopitalsRule",
  "type": "Activity",
  "number": "4.7.1",
  "title": "Building L’Hôpital’s Rule.",
  "body": " Building L'Hôpital's Rule   We're going to take a closer look at the indeterminate form, , and use our new ideas of linear approximation to think about how these types of things work.  We're going to be working with the following limit: where and are differentiable at (since we're going to want to build linear approximations of them).     Write out the linear approximations for both and , both centered at . We'll call them and .    We're just using the formula for , but with for one of them and in the other.      Describe how well or how poorly these linear approximations estimate the values from our functions and ? What happens to these approximations as we get close to the center ? What happens in the limit as ?    You can revisit the local linearity visualization from to see what happens, in general, with a linear approximation of a function as we zoom in on the center.      Let's re-write our limit. We can replace with our formula for its linear approximation, and replace with its linear approximation, :       Up until now, we have not thought about indeterminate forms at all. Let's start now.  If this limit is a indeterminate form, then that means that and .  Since our functions are, by definition, differentiable at , then they also have to be continuous at . What does this mean about the values of and ?    Take a look back at our definition of function being . How does the function value relate to the limit? What does that mean in our case?      Use this new information about the values of and to revisit the limit. We re-wrote by replacing each function with its linear approximation. What happens with the algebra when we know this information about and ?    We re-wrote and also know that in this case (due to the indeterminate form) that and .     So we have a really nice result here! In the indeterminate form, we can replace the ratio of the -values from our functions with the ratio of slopes (coming from the first derivatives) of our functions.  In general, we'll put a step in between, where we find and first before trying to evaluate these derivatives at .   "
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
  "body": " Some First Limits   Evaluate the following limits. You should first confirm that they are, actually, indeterminate forms!                                      "
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
  "body": " Antiderivatives and Indefinite Integrals   We've been spending a lot of time thinking about derivatives! We've done this in a couple of different ways:   We have thought carefully about what derivatives are, what they measure, and how to interpret them.    We have built up a whole list of tools that we can use to actually find or calculate these derivatives. We know how to differentiate most functions (and combinations of functions) that we can think of!    We've been able to apply these derivatives to some specific contexts to solve problems or analyze functions and mathematical models.   Let's think about derivatives in a slightly different way!   Find a Function Where...   For each of the following derivatives, find a function whose first (or second) derivative matches the listed derivative.                                        Go back through each of the above derivatives, and find a different option for that still works. Make sure that it is something completely unique, and not just an equivalent function that is written differently.  Why are able to find multiple answers in these questions, but not when we are given a function and need to find a derivative?     We've done two things here: thought about how we might \"undo\" differnentiation, and discovered a nice property about constants.  Note that we've already discovered this rule! We proved it, back when we were playing with the . We built a related theorem that showed that two functions can have the same derivative, and if they do then they are off by, at most, a constant: .  Let's visualize this phenomena!     Antiderivatives  We want to try to define and name these \"backwards derivatives.\" Instead of calling them the \"negative first\" derivative, we will name them as antiderivatives .   Antiderivative   For a function , we say that is an antiderivative of on an interval if on the interval.  We call the family of antiderivatives of , where represents any real number constant.      For each of the following functions, find the family of antiderivatives.          Do we know a function whose derivative is ?                We won't be undoing the Power Rule with either of these! We might try to think about functions whose derivatives are and .       We use absolute values in the logarithm because we want to find a functions whose derivative is on the whole interval that is defined. The log function is only defined for positive inputs, but we would like to be able put any non-zero input into our function (since that's the domain of ).           It might help to write the function as .            Initial Value Problems   A File Sorting Speed Test   A computer program is trying to sort a group of computer files based on their size. The program isn't very efficient, and the time that it takes to sort the files increases when it tries to sort more files.  The time that it takes, measured in seconds, based on the total, cumulative size of the files , measured in gigabytes, is modeled by a function . We don't know the function, but we do know that the time increases at an instantaneous rate of seconds when the total size, increases slightly.     We can build a function for . What is it?           Find all of the possibilities for the function modeling the time, , that it takes the computer program to sort files with a total size of .    We are looking for the family of antiderivatives of .      What does your constant represent, here? You can interpret it graphically, interpret it by thinking about derivatives, but you should also interpret it in terms of the time that it takes this program to sort these files by size.      Let's say that we feed some number of files totaling up to 1.4GB in size into this program. It takes 0.24 seconds to sort the files by size.  Find the function, , that models the how quickly this program sorts these files.     We call this type of problem an \"initial value problem.\" Here, we ended up solving for a family of antiderivatives, but then using some more information about that antiderivative (in this case, information about file size and time) to find the specific antiderivative function that was relevant.   Solving Initial Value Problems  For some function , if we want to find an antiderivative function and we know some \"initial value,\" , then we can find the exact antiderivative by:   Finding the family of antiderivatives: .    Using the initial value to solve for the constant , by evaluating at and solving the resulting equation.         For , find where .      For , find where and .       Indefinite Integrals  To finish this out, we'll just build some notation that represents these families of antiderivatives. We can use words to describe them, but it will be helpful to introduce some quick way of writing this using notation.   Indefinite Integral   An indefinite integral represents a family of antiderivatives: where    is a symbol directing us to find a family of antiderivatives (or integrate)     is called the integrand     is a differential, and represents both the \"end\" of the integral as well as an indicator of what the input variable of the integrand should be (or what variable we antidifferentiate \"with regard to\").     is an antiderivative of (where ).     is called the \"constant of integration\" and represents any real number         Find families of antiderivatives according to each of the following indefinite integrals.                 While we do not know how to antidifferentiate products of functions yet, we can just multiply the integrand function! Antidifferentiate this.           Similar to the previous problem, we do not know how to antidifferentiate quotients, but we can re-write this function before we antidifferentiate! Antidifferentiate this!     All we have left to do now is to just formalize the antiderivative rules we've been intuitively building and using.   Power Rule for Antiderivatives    for      Antiderivatives Related to the Exponential and Log Functions         Antiderivatives of Trigonometric Functions         Combinations of Indefinite Integrals       Sums:       Differences:       Coefficients:         These should all be very familiar, since they are really just restatements of the results from .  We should also be comfortable recognizing derivatives of functions that we know, in order to find more functions that we can antidifferentiate.    If we are following the path set out by us already when we learned about derivatives, then at some point we will need to think about how to interpret these antiderivatives. What does tell us about ?  What does tell us about ? We're probably so used to thinking about what tells us about that it might be hard to reverse the interpretation. And that's ok!  Instead of worrying about this, we can just present us with the answer, and then spend some time uncovering it more.  Over the next few sections, we'll discover that antiderivatives of are deeply connected to areas carved out by the graph of .   "
},
{
  "id": "act-FindFunction",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#act-FindFunction",
  "type": "Activity",
  "number": "5.1.1",
  "title": "Find a Function Where....",
  "body": " Find a Function Where...   For each of the following derivatives, find a function whose first (or second) derivative matches the listed derivative.                                        Go back through each of the above derivatives, and find a different option for that still works. Make sure that it is something completely unique, and not just an equivalent function that is written differently.  Why are able to find multiple answers in these questions, but not when we are given a function and need to find a derivative?    "
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
  "body": "  For each of the following functions, find the family of antiderivatives.          Do we know a function whose derivative is ?                We won't be undoing the Power Rule with either of these! We might try to think about functions whose derivatives are and .       We use absolute values in the logarithm because we want to find a functions whose derivative is on the whole interval that is defined. The log function is only defined for positive inputs, but we would like to be able put any non-zero input into our function (since that's the domain of ).           It might help to write the function as .         "
},
{
  "id": "act-InitialValueProblem",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#act-InitialValueProblem",
  "type": "Activity",
  "number": "5.1.2",
  "title": "A File Sorting Speed Test.",
  "body": " A File Sorting Speed Test   A computer program is trying to sort a group of computer files based on their size. The program isn't very efficient, and the time that it takes to sort the files increases when it tries to sort more files.  The time that it takes, measured in seconds, based on the total, cumulative size of the files , measured in gigabytes, is modeled by a function . We don't know the function, but we do know that the time increases at an instantaneous rate of seconds when the total size, increases slightly.     We can build a function for . What is it?           Find all of the possibilities for the function modeling the time, , that it takes the computer program to sort files with a total size of .    We are looking for the family of antiderivatives of .      What does your constant represent, here? You can interpret it graphically, interpret it by thinking about derivatives, but you should also interpret it in terms of the time that it takes this program to sort these files by size.      Let's say that we feed some number of files totaling up to 1.4GB in size into this program. It takes 0.24 seconds to sort the files by size.  Find the function, , that models the how quickly this program sorts these files.    "
},
{
  "id": "subsec-InitialValueProblems-5",
  "level": "2",
  "url": "sec-IndefiniteIntegrals.html#subsec-InitialValueProblems-5",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "   For , find where .      For , find where and .    "
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
  "body": "  Find families of antiderivatives according to each of the following indefinite integrals.                 While we do not know how to antidifferentiate products of functions yet, we can just multiply the integrand function! Antidifferentiate this.           Similar to the previous problem, we do not know how to antidifferentiate quotients, but we can re-write this function before we antidifferentiate! Antidifferentiate this!    "
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
  "body": " Riemann Sums and Area Approximations   One of the last things we said in was that antiderivatives will be connected to areas. We're going to eventually show this! For now, though, we want to focus on areas defined by curves.   Approximating Areas   We're going to consider two different functions, and some areas based on them. Let's think about two functions: and . For both of these functions, we'll focus on the interval . Instead of thinking about the function only, we'll be considering the two-dimensional region bounded between the graph of our function and the -axis between and .     Find the area of the region bounded between the graph of and the -axis between and .    A graph of the linear function f(x)=2x+1. The points (0,1) and (2,5) are marked, and there is a shaded in trapezoid shape under the line to the axis between these points.     How did you evaluate this area? What kind(s) of shape(s) did you think about?      Estimate the area of the region bounded between the graph of and the -axis between and .    A graph of the quadratic function g(x)=x^2+1. The points (0,1) and (2,5) are marked, and there is a shaded in shape under the line to the axis between these points.      Archimedes of Syracuse discovered how to calculate this area exactly, without estimation, around 300 BC, writing his results in the now-famous \"Quadrature of the Parabola.\" This is, notably, before the formalization of Calculus (during the 1600's). It might be unfair to say that Archimedes proved this \"without using calculus,\" though, since his technique, the \"Method of Exhaustion,\" is really a version of what we do in calculus, but without a formal framework of limits.   How did you estimate this area? What kind(s) of shape(s) did you think about?      Come up with an upper and lower bound for this area. In other words, give an underestimate and overestimate for the actual area we would like to know.  How did you come up with these estimates? How \"good\" do you think your estimates are? Can you come up with \"better\" (or closer) ones?     Hopefully we've had a chance to think about and compare a couple of different strategies for estimating this area. What we want to do, though, is build a systematic way of estimating this area. We'd like it to have a couple of features:   Easy area calculations. We don't want to have to spend a lot of time thinking about tricky area formulas, so simple shapes will be nicer to use.    Flexibility. We want to be able to apply our approach to an area defined by any curve.  This is the problem with Archimedes' method: it only worked for areas defined by parabolas. Once we change our function to something else, Archimedes would have to come up with a completely new area formula for calculation. The techniques we're looking at now have the advantage of flexibility!      Precision. We want to be able to make our estimates as precise as we'd like. It's fine to come up with rough estimates, but we would like a method that allows us to increase the accuracy in our estimations.       Rectangular Approximations  We're going to re-visit the same region as before, but this time we'll outline a process that should help us approximate the area with as much precision as we'd like.   Approximating the Area using Rectangles   We're going to stick with the function on the interval , and keep thinking about the area bounded by the curve and the -axis on this interval. We're going to approximate the area in a couple of different tries, each one more accurate than the one before. By the end of this activity, we'll have a pretty good process built!     Let's start with approximating this region with a single rectangle. We're going to define the rectangle by picking some -value in the interval . Then, we'll use the point at that -value to define the height of our rectangle.  Essentially, we are picking a single point on the our function on the interval and our approximation is pretending that the single point we picked is representative of the whole function on the interval.       Can you try re-picking an -value, and trying to find one that gets you an area approximation that is pretty good?      We're going to use more rectangles. Let's jump up to 3 rectangles. If we split up the interval between and into 3 rectangles, we can make them all the same width, and pick an -value that we can use to get a representative point for each of the 3 rectangles.  We'll need to pick 3 -values this time.       Can you try re-picking your -values, and trying to find one that gets you an area approximation that is pretty good?      Let's scale this up a bit. Pick a good number for your number of rectangles. We'll call this value .  (If you're working in a classroom, maybe it would be good to pick the number of groups or the number of students, or some other number between 10 and 20 or something like that.)  For your value , we're going to divide up the interval between and into pieces. These will be the intervals that we pick from to get our rectangles. What are the subintervals? What are the widths of each subinterval (and then the widths of the rectangles)? Call this with .      For each subinterval, pick an -value in the subinterval to represent it.      Evaluate the function at each of the -values you picked. These are the heights of your rectangles!      Find the areas of each rectangle by multiplying the height of each rectangle by , the width of each rectangle.      Add these areas up to get a total approximation of the actual area!  What do you think: is it worth fiddling with what -value to pick from each subinterval to try to get a better approximation? If is large, do you think it matters how we pick the -values from each subinterval?     This is our process! We'll refer to it often as the slice-and-sum process , since we are slicing out region into a bunch of pieces, approximating the area on each piece (by using one point to represent the whole slice), and then summing the areas back up.  More formally, we can call this the Riemann Sum process, because the sum of the areas is a special form of summation.   Riemann Sum   For a closed interval with a partition with , consider some , any -value in the interval and , the length of the interval . If is a function that is defined on the interval , then we call the sum a Riemann Sum for on .     In practice, we typically choose a Regular Partition , where each subinterval is equally-wide, and so for every . We then normally write our Riemann sum as where is the value of the widths of all of the equally-sized subintervals.     Selection Strategies  This is great! We have a scalable way to approximate areas, and it seems like we can pretty easily increase the precision of our approximations by increasing , the number of slices\/rectangles that we use. And the great thing about this is that when we do increase , we don't increase the complexity of our calculations!  Sure, it would be tedious to calculate and add 100 areas of rectangles by hand, but those area calculations don't get more difficult: there are just more of them.  The only real downside is that when we increase the number of slices\/rectangles, we are really increasing the number of decisions that we have to make: we have to choose an for each subinterval, and so while it isn't hard to just calculate a bunch of areas and add them up, it is difficult, on a human level, to make a bunch of decisions about which -value to choose from each subinterval. But this decision isn't even that important!  We use the \"star\" notation on the to represent the fact that it really doesn't matter which -value gets chosen from the subinterval: as long as we pick one, we get an approximation! And when increases, it matters less and less what the actual -value is: as long as our function is continuous, then there will be not much variation among the -value outputs for any -values in each (small) interval!  All of this to say: let's make a single decision about picking  -values from subintervals instead of having to make decisions (one for each -value).   Left, Right, and Midpoint Riemann Sums  When we build a Riemann sum, we can make a choice to systematically choose the values for (for ). There are many ways of doing this, but here are three:    Left Riemann Sum: We pick the left-most -value from each subinterval. That is, if the partition is , then we choose as our -values to evaluate at for the rectangle heights.  We refer to these as , a Left Riemann sum with rectangles.     Right Riemann Sum: We pick the right-most -value from each subinterval. That is, if the partition is , then we choose as our -values to evaluate at for the rectangle heights.  We refer to these as , a Right Riemann sum with rectangles.     Midpoint Riemann Sum: We pick the -value that is in the middle of each subinterval. That is, if the partition is , then we choose as our -values to evaluate at for the rectangle heights.  We refer to these as , a Midpoint Riemann sum with rectangles.      None of this is a requirement for a Riemann sum, but we will consistently find that when we limit the number of decisions that we have to make, the complexity of the calculation decreases.  Notice that we've already made a similar choice with how we calculate : it is not required that each rectangle have the same width, but it is very nice to not have to think about different widths!  Lastly, we'll finish with a nice interactive Riemann sum calculator. Feel free to explore some different graphs and see how the Riemann sums work when we change how we select the values for as well as when we change the number of rectangles, .    "
},
{
  "id": "act-ApproximatingArea",
  "level": "2",
  "url": "sec-RiemannSums.html#act-ApproximatingArea",
  "type": "Activity",
  "number": "5.2.1",
  "title": "Approximating Areas.",
  "body": " Approximating Areas   We're going to consider two different functions, and some areas based on them. Let's think about two functions: and . For both of these functions, we'll focus on the interval . Instead of thinking about the function only, we'll be considering the two-dimensional region bounded between the graph of our function and the -axis between and .     Find the area of the region bounded between the graph of and the -axis between and .    A graph of the linear function f(x)=2x+1. The points (0,1) and (2,5) are marked, and there is a shaded in trapezoid shape under the line to the axis between these points.     How did you evaluate this area? What kind(s) of shape(s) did you think about?      Estimate the area of the region bounded between the graph of and the -axis between and .    A graph of the quadratic function g(x)=x^2+1. The points (0,1) and (2,5) are marked, and there is a shaded in shape under the line to the axis between these points.      Archimedes of Syracuse discovered how to calculate this area exactly, without estimation, around 300 BC, writing his results in the now-famous \"Quadrature of the Parabola.\" This is, notably, before the formalization of Calculus (during the 1600's). It might be unfair to say that Archimedes proved this \"without using calculus,\" though, since his technique, the \"Method of Exhaustion,\" is really a version of what we do in calculus, but without a formal framework of limits.   How did you estimate this area? What kind(s) of shape(s) did you think about?      Come up with an upper and lower bound for this area. In other words, give an underestimate and overestimate for the actual area we would like to know.  How did you come up with these estimates? How \"good\" do you think your estimates are? Can you come up with \"better\" (or closer) ones?    "
},
{
  "id": "act-RectangularApproximation",
  "level": "2",
  "url": "sec-RiemannSums.html#act-RectangularApproximation",
  "type": "Activity",
  "number": "5.2.2",
  "title": "Approximating the Area using Rectangles.",
  "body": " Approximating the Area using Rectangles   We're going to stick with the function on the interval , and keep thinking about the area bounded by the curve and the -axis on this interval. We're going to approximate the area in a couple of different tries, each one more accurate than the one before. By the end of this activity, we'll have a pretty good process built!     Let's start with approximating this region with a single rectangle. We're going to define the rectangle by picking some -value in the interval . Then, we'll use the point at that -value to define the height of our rectangle.  Essentially, we are picking a single point on the our function on the interval and our approximation is pretending that the single point we picked is representative of the whole function on the interval.       Can you try re-picking an -value, and trying to find one that gets you an area approximation that is pretty good?      We're going to use more rectangles. Let's jump up to 3 rectangles. If we split up the interval between and into 3 rectangles, we can make them all the same width, and pick an -value that we can use to get a representative point for each of the 3 rectangles.  We'll need to pick 3 -values this time.       Can you try re-picking your -values, and trying to find one that gets you an area approximation that is pretty good?      Let's scale this up a bit. Pick a good number for your number of rectangles. We'll call this value .  (If you're working in a classroom, maybe it would be good to pick the number of groups or the number of students, or some other number between 10 and 20 or something like that.)  For your value , we're going to divide up the interval between and into pieces. These will be the intervals that we pick from to get our rectangles. What are the subintervals? What are the widths of each subinterval (and then the widths of the rectangles)? Call this with .      For each subinterval, pick an -value in the subinterval to represent it.      Evaluate the function at each of the -values you picked. These are the heights of your rectangles!      Find the areas of each rectangle by multiplying the height of each rectangle by , the width of each rectangle.      Add these areas up to get a total approximation of the actual area!  What do you think: is it worth fiddling with what -value to pick from each subinterval to try to get a better approximation? If is large, do you think it matters how we pick the -values from each subinterval?    "
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
  "body": " The Definite Integral   The big result from our last section on Riemann sums is not just that we can approximate areas by thinking about a bunch of small (thin) rectangles. The big result is that this strategy is scalable: we can increase , the number of slices\/rectangles, and essentially guarantee that, eventually, our approximations will be very accurate.  Now, we move from a concrete process for building rectangles to calculate areas to a more conceptual framework: what happens when ?    Evaluating Areas (Instead of Approximating Them)  Our goal is to move from approximating area to evaluating areas: calculating the real value of the area of these regions bounded between curves and the -axis. We have already decided (when we built the framework for Riemann sums and made scalability and precision in our estimates a focus) that the area we're interested in is the result of some limiting process: we increase the number of slices, , and in turn decrease the width of each slice, .   Definite Integral   If is some function defined on the interval and is a Riemann sum with slices and , then we say that the definite integral of from to is: if this limit exists. When this limit exists, we say that is integrable on the interval .  We call and the limits of integration for this definite integral, and we read as \"the integral from to of with regard to ,\" or sometimes we might just say \"of \" for short.     This is assuming we're using a Regular Partition ( ). If we are not, and each slice has its own width called , then the definition of a definite integral requires that as we see for all . Essentially, we need all of the widths to eventually get tiny: we can't let one slice take up half of the width and then let all of the other slices get tiny, since that would still be an approximation of the area we want.  We don't need to worry about this, though, since we'll always just choose to make all of the 's the same size: .   Let us make something very clear: we will absolutely not calculate these areas this way. Let's see why not.  Let's say we want to calculate . This is the area we were estimating in . How many slices did you pick at the end of this activity? How annoying was it to add up those areas?  Whatever you did, it's not enough: even if we decided to divide this region up into pieces, this is merely an approximation of the limit we want: There are some ways of evaluating this specific limit using some known formulas for sums of squares and end behavior limits of rational functions. But these techniques are extremely limited: we might get lucky being able to fiddle with this limit of this sum for this function, but we won't be so lucky in general.  Instead, let's just think about these areas, focus on what types of functions are integrable, and then build towards our end goal of connecting these areas to antiderivatives.    Signed Area  We're going to now deal with the consequences of our decisions. A truth about mathematics, sometimes not an obvious truth, is that every time we state a definition what we are actually doing is making a decision. We are deciding on some common way of classifying and describing an object. These classifications and descriptions are choices that we are making: choices to prioritize some property or aspect over a different one, choices to include or exclude a type of object into the group of things we're interested in, choices that come with downstream effects.  We chose to define the area bounded between a curve defined by the function and the -axis between and as: . We are going to stand by this definition. It's a good one, for the reasons we described at the beginning of .  But there are some weird things to notice. Let's notice them!   Weird Areas   Let's think about a simple linear function, . We'll both approximate and evaluate the area bounded between and the -axis from to :     A graph of the linear function f(x)=4-3x. The points (0,4) and (3,-5) are marked, and the region between the curve and the axis is shaded in. This shape makes two triangles, one above the axis and one below it, since the line crosses the x-axis.        Explain why we do not need to think about Riemann sums in order for us to calculate the shaded in area. How would you calculate this without using calculus?  Calculate the area!    Are there some shapes that you recognize? What are the dimensions of these shapes?      Let's approximate this area using a Riemann sum. Calculate , the Left Riemann sum with rectangles.    You're going to divide up the interval from to into 3 subintervals: , , and . Note that .  Then you're picking the left-most -value from each subinterval ( , , and ) to plug into in order to find the heights of your rectangles.      Let's approximate this area a second time, but with a different selection strategy for our -values. Calculate , the Right Riemann sum with rectangles.    You're still going to divide up the interval from to into 3 subintervals: , , and . We still have .  Then you're picking the right-most -value from each subinterval ( , , and ) to plug into in order to find the heights of your rectangles.      Compare your answers for and . They should be very different. Why? What is happening that makes specifically such a weird value?      Do you need to go back and re-calculate the area geometrically (from the first part of this activity)? Explain why your answer for  should be negative, based on the Riemann sums we calculated.    Did you account for \"negative\" area in the second trianglular region in this integral?      Find a value such that: .      Find a different value such that: . Is there a second way of making this area 0?    Depending on what you did earlier, you might have to find some ending -value that \"balances\" the area above and below the -axis. If you already did this, then you might have to find an ending -value that collapses this shape down to a 1-dimensional shape with no area.     Weird areas, right? Negative? That's not how we normally think about areas. So we have to be slightly careful with how we describe this new object, the definite integral, that we've built. We don't need to go back and change anything about the object itself: we just need to change how we talk about it.  It's common to think about as the \"area under the curve from to ,\" but we know that's not really true. Instead, we'll think about it as a signed area of the region bounded between the curve and the -axis from to . When we say \"signed area,\" we're just referring to the consequence of using -values to define \"heights\" of the rectangles: when the curve is under the -axis, we end up with negative values for heights, and so those rectangles have negative area.   Weird Areas - Part 2   We're going to think about the same region, kind of.     A graph of the linear function f(x)=4-3x. The points (0,4) and (3,-5) are marked, and the region between the curve and the axis is shaded in. This shape makes two triangles, one above the axis and one below it, since the line crosses the x-axis.    Let's think about the same linear function, , but this time we'll approximate and evaluate the area bounded between and the -axis from to :      Use geometry to calculate the area. Compare this to the result from .      Let's approximate this using a Riemann sum. Calculate , the Midpoint Riemann sum with rectangles.    You're going to divide up the interval from to into 3 subintervals: , , and .  Then you're picking the middle -value from each subinterval ( , , and ) to plug into in order to find the heights of your rectangles.  If and , , and , then what value do we use for the widths, ?      Do you need to go back and re-calculate the area geometrically (from the first part of this activity)? Explain why your answer for  should be positive, based on the Riemann sums we calculated.     Ok so we have some intuition about how the signs of these areas work, and we've also built up some nice properties that we can talk through. Let's finish this section by just summarizing some of the things we've done and thinking about what kinds of functions this works for!    Properties of Definite Integrals  First, this result should be reasonable: we can always calculate these areas for continuous functions!   Continuous Functions are Integrable   If is continuous on the interval , then is integrable on . That is, the limit exists and so we can evaluate the definite integral: .    We'll come back to this, but first, let's summarize some properties that we've discovered.   Properties of Definite Integrals   If . , and are real numbers and is a function that is continuous on the intervals and , then:   The signed area under a single point is 0:     We can cut a region into pieces and evaluate the areas separately:     When we integrate a function \"backwards\" through an interval, we an area with an opposite sign:          Ok, that's enough of this: let's get to the point and try to figure out how to actually calculate these areas without relying on our functions being \"nice\" enough that we can use geometry!   "
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
  "body": " Weird Areas   Let's think about a simple linear function, . We'll both approximate and evaluate the area bounded between and the -axis from to :     A graph of the linear function f(x)=4-3x. The points (0,4) and (3,-5) are marked, and the region between the curve and the axis is shaded in. This shape makes two triangles, one above the axis and one below it, since the line crosses the x-axis.        Explain why we do not need to think about Riemann sums in order for us to calculate the shaded in area. How would you calculate this without using calculus?  Calculate the area!    Are there some shapes that you recognize? What are the dimensions of these shapes?      Let's approximate this area using a Riemann sum. Calculate , the Left Riemann sum with rectangles.    You're going to divide up the interval from to into 3 subintervals: , , and . Note that .  Then you're picking the left-most -value from each subinterval ( , , and ) to plug into in order to find the heights of your rectangles.      Let's approximate this area a second time, but with a different selection strategy for our -values. Calculate , the Right Riemann sum with rectangles.    You're still going to divide up the interval from to into 3 subintervals: , , and . We still have .  Then you're picking the right-most -value from each subinterval ( , , and ) to plug into in order to find the heights of your rectangles.      Compare your answers for and . They should be very different. Why? What is happening that makes specifically such a weird value?      Do you need to go back and re-calculate the area geometrically (from the first part of this activity)? Explain why your answer for  should be negative, based on the Riemann sums we calculated.    Did you account for \"negative\" area in the second trianglular region in this integral?      Find a value such that: .      Find a different value such that: . Is there a second way of making this area 0?    Depending on what you did earlier, you might have to find some ending -value that \"balances\" the area above and below the -axis. If you already did this, then you might have to find an ending -value that collapses this shape down to a 1-dimensional shape with no area.    "
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
  "body": " Weird Areas - Part 2   We're going to think about the same region, kind of.     A graph of the linear function f(x)=4-3x. The points (0,4) and (3,-5) are marked, and the region between the curve and the axis is shaded in. This shape makes two triangles, one above the axis and one below it, since the line crosses the x-axis.    Let's think about the same linear function, , but this time we'll approximate and evaluate the area bounded between and the -axis from to :      Use geometry to calculate the area. Compare this to the result from .      Let's approximate this using a Riemann sum. Calculate , the Midpoint Riemann sum with rectangles.    You're going to divide up the interval from to into 3 subintervals: , , and .  Then you're picking the middle -value from each subinterval ( , , and ) to plug into in order to find the heights of your rectangles.  If and , , and , then what value do we use for the widths, ?      Do you need to go back and re-calculate the area geometrically (from the first part of this activity)? Explain why your answer for  should be positive, based on the Riemann sums we calculated.    "
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
  "body": " The Fundamental Theorem of Calculus   Let's remind ourselves of how we interpret derivatives. We are going to repeat a task that we did in . It should feel familiar, which is good! We're going to use the intuition to make the big connection we've been forecasting so far.   Interpreting the Graph of a Derivarive   Let's look at a picture of a graph of the first derivative, , and try to get some information about from it. Use the following graph of , the first derivative, to answer the questions about .   Since we don't have a huge amount of detail, you'll likely have to estimate the -values for intervals and points in the following questions, but that's ok! Estimate away! Just make sure you know what you're looking for in the graph of to answer these questions.     List the intervals on which is increasing. What about decreasing?      Find the -values of any local maximums and\/or local minimums of .      List the intervals on which is concave up. What about concave down?      Find the -values of any inflection points of .       Areas and Antiderivatives   Interpreting Area   First, we're going to define a bit of a weird function. Sometimes it's called the Area function : . This is a strange function, because we're defining the function as an integral of another function. Specifically, note that the input for our area function is the ending limit of integration: we're calculating the signed area \"under\" the curve of from up to some variable ending point .  We can visualize this function by looking at the areas we create as we change . For now, get used to just seeing the area \"under\" when we move the point around. The areas themselves are the outputs of the function .   Now we can think about this area function, and try to connect it to the graph of .     List the intervals on which is increasing. What about decreasing?      Find the -values of any local maximums and\/or local minimums of .      List the intervals on which is concave up. What about concave down?      Find the -values of any inflection points of .      Compare your answers here to your answers about the behavior of based on the (same) graph of in .  What does this mean about the connection between areas and derivatives, or areas and antiderivatives?     There it is! The way that we can interpret antiderivatives of functions! We found that the derivative of the function that tells us the signed area trapped between a curve and the -axis between a fixed starting point and a variable ending point is the curve itself.  Another way of saying this, though, is that the function that tells us the signed area trapped between a curve and the -axis between a fixed starting point and a variable ending point is an antiderivative of the curve itself! This is the Fundamental Theorem of Calculus, or at least half of it.   Fundamental Theorem of Calculus (Part 1)   For a function that is continuous on an interval , and a function defined for -values in , then . That is: .    The proof of this theorem is one of the most delightful proofs we'll see. This is a \"connector\" theorem: a theorem that brings together several big ideas or objects from one common area of math and links them together. Let's enjoy the proof together.  Let be a function that is continuous on the interval . Then, we'll define the area function as for . We are interested in .  From , we know: If we just focus on the numerator, , we have: Let's approximate this integral with a Riemann sum with rectangle.     Area shaded in under a curve from t=a to t=x, labeled A(x). After this there is a rectangle with width Delta x that touches the curve at some point (x*,f(x*)). The rectangle spans from t=x to t=x + Delta x.    The total width of our interval is , so we have that where is some -value in . Note that we don't have a sum, as we normally would, since we are only \"adding\" a single area of a single rectangle.  This is only an approximation of the difference , and so we can say, for small values of , All that is left to do is to convince ourselves of two facts:   This approximation gets better as gets smaller, and as we have .     Area shaded in under a curve from t=a to t=x, labeled A(x). After this there is a very thin rectangle that touches the curve at some point (x*,f(x*)). This point looks like it's essentially at the same point as t=x, and the rectangle spans from t=x to some other t value close by, with the label Delta x approaches 0.      As , the options for in reduce to just , since the interval collapses towards the single value. So as , we have .   To be convinced that , we just have to rely on the fact that, while our Riemann sum only has rectangle, as the width(s) of \"all\" of our rectangles (our only one) approach 0, and so we end up with the definition of a definite integral in the limit: Hopefully it is easy to see that , since collapses on .  Once we are convinced of these two facts, then it is clear that , since: This completes the proof! Most of the proofs that you might see for this theorem use the to help, since we can see a connection between the derivative and the average rate of change of the area function: The Mean Value Theorem really is behind many of the most important results in calculus!    This theorem is going to be the big result that we use to show how to actually evaluate an area, and so it is easy to think of it as purely support for a \"more important\" result coming next. But we should pause and think about what this result tells us.  What we've done here is come up with a way of:   Guaranteeing that every continuous function has an antiderivative family. We have found a function whose derivative is whatever continuous function we want!    Generating antiderivatives. Until now, we have had to rely on being able to recognize functions as derivatives of other things, or be able to \"undo\" derivative rules. And this will continue to be an important way for us to antidifferentiate functions. But now we have a way of constructing antiderivatives, albeit weird looking ones we are not yet used to thinking about a function that is defined as a definite integral with a variable ending point.   We will play with this idea more later (in ), and so for now we will push forward towards our goal of evaluating a definite integral without directly calculating a limit of Riemann sums.    Evaluating Definite Integrals   Evaluating Areas and Antiderivatives   In this short activity, we'll just collect information about antiderivatives and this new area function, for a function that is continuous on the interval .  For our purposes in this activity, let's say that .     From the , we know that is an antiderivative of , since .  Write out the function , and then name\/write out one other antiderivative of , some .     , and for you can use your antidifferentiation rules from .      We know that all of the antiderivatives of a function are connected to each other.  Describe the connection between and your .    This is the result that we proved in and used to define a family of antiderivatives in .      What is the value of ? What is the value of ? How are they different from each other?     For , you can evaluate your antiderivative at . The important part is thinking about how these two values are different from each other.      What is the value of ? What is the value of ? How are they different from each other?     For , you can evaluate your antiderivative at . The important part is thinking about how these two values are different from each other. Is the difference between these values the same, or different from the difference between and ?      What about the differences: compared to ?    It is worth noting that:       Fundamental Theorem of Calculus (Part 2)   For a function continuous on the closed interval and some , an antiderivative of , then . The vertical bar means \"evaluated,\" and is typically read as \" evaluated from to .\"    Phew, this was a lot! Let's sit back a bit and enjoy the fruits of all of this deep, mathematical thinking: we have a relatively straight-forward way of evaluating definite integrals!   Find an antiderivative of the integrand. (Any antiderivative will do, so we can just choose the one with 0 as the constant term!)    Evaluate that antiderivative at the end points of the interval we're integrating over, and subtract.       Evaluate the following definite integrals. Interpret the answers.           This is the area we were approximating in !            Why is this area 0? What does that mean about the region trapped between and the -axis between and ?            This value is . Why is this value negative? What does that mean about the region we're looking at, and the function we're looking at?      "
},
{
  "id": "act-InterpretDerivative",
  "level": "2",
  "url": "sec-FTOC.html#act-InterpretDerivative",
  "type": "Activity",
  "number": "5.4.1",
  "title": "Interpreting the Graph of a Derivarive.",
  "body": " Interpreting the Graph of a Derivarive   Let's look at a picture of a graph of the first derivative, , and try to get some information about from it. Use the following graph of , the first derivative, to answer the questions about .   Since we don't have a huge amount of detail, you'll likely have to estimate the -values for intervals and points in the following questions, but that's ok! Estimate away! Just make sure you know what you're looking for in the graph of to answer these questions.     List the intervals on which is increasing. What about decreasing?      Find the -values of any local maximums and\/or local minimums of .      List the intervals on which is concave up. What about concave down?      Find the -values of any inflection points of .    "
},
{
  "id": "act-FTOC1",
  "level": "2",
  "url": "sec-FTOC.html#act-FTOC1",
  "type": "Activity",
  "number": "5.4.2",
  "title": "Interpreting Area.",
  "body": " Interpreting Area   First, we're going to define a bit of a weird function. Sometimes it's called the Area function : . This is a strange function, because we're defining the function as an integral of another function. Specifically, note that the input for our area function is the ending limit of integration: we're calculating the signed area \"under\" the curve of from up to some variable ending point .  We can visualize this function by looking at the areas we create as we change . For now, get used to just seeing the area \"under\" when we move the point around. The areas themselves are the outputs of the function .   Now we can think about this area function, and try to connect it to the graph of .     List the intervals on which is increasing. What about decreasing?      Find the -values of any local maximums and\/or local minimums of .      List the intervals on which is concave up. What about concave down?      Find the -values of any inflection points of .      Compare your answers here to your answers about the behavior of based on the (same) graph of in .  What does this mean about the connection between areas and derivatives, or areas and antiderivatives?    "
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
  "body": " Evaluating Areas and Antiderivatives   In this short activity, we'll just collect information about antiderivatives and this new area function, for a function that is continuous on the interval .  For our purposes in this activity, let's say that .     From the , we know that is an antiderivative of , since .  Write out the function , and then name\/write out one other antiderivative of , some .     , and for you can use your antidifferentiation rules from .      We know that all of the antiderivatives of a function are connected to each other.  Describe the connection between and your .    This is the result that we proved in and used to define a family of antiderivatives in .      What is the value of ? What is the value of ? How are they different from each other?     For , you can evaluate your antiderivative at . The important part is thinking about how these two values are different from each other.      What is the value of ? What is the value of ? How are they different from each other?     For , you can evaluate your antiderivative at . The important part is thinking about how these two values are different from each other. Is the difference between these values the same, or different from the difference between and ?      What about the differences: compared to ?    It is worth noting that:     "
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
  "body": "  Evaluate the following definite integrals. Interpret the answers.           This is the area we were approximating in !            Why is this area 0? What does that mean about the region trapped between and the -axis between and ?            This value is . Why is this value negative? What does that mean about the region we're looking at, and the function we're looking at?    "
},
{
  "id": "sec-MoreDefiniteIntegral",
  "level": "1",
  "url": "sec-MoreDefiniteIntegral.html",
  "type": "Section",
  "number": "5.5",
  "title": "More Results about Definite Integrals",
  "body": " More Results about Definite Integrals   We'll end this chapter by looking a bit more closely at definite integrals and pulling a couple of small results out of our understanding of them, as well as some prior knowledge.    Symmetry   Symmetry in Functions and Integrals   First, let's take a moment to remind ourselves (or see for the first time) what two types of \"symmetry\" we'll be considering. We call them \"even\" and \"odd\" symmetry, but sometimes we think of them as a \"reflective\" symmetry and a \"rotational\" symmetry in the graphs of our functions.      Convince yourself that you know what we mean when we say that a function is even symmetric on an interval if on the interval.  Similarly, convince yourself that you know what we mean when we say that a function is odd symmetric on an interval if on the interval.    Look at the relationship between the points on the graphs when you select the different symmetries: How do their -values relate to each other? How do their -values relate to each other?      Now let's think about areas. Before we visualize too much, let's start with a small question: How does the height of a function impact the area defined by a definite integral? It should be helpful to think about Riemann sums and areas of rectangles here.  The important question then, is how does a function being even or odd symmetric tell us information about areas defined by definite integrals of that function?    If we know that for an even symmetric function, there are some heights\/ -values that are the same, then we know that there are some areas\/integrals that should also be the same. Which ones?  If we know that for an odd symmetric function, there are some heights\/ -values that are opposite, then we know that there are some areas\/integrals that should also be opposite. Which ones?      Definite Integrals of Symmetric Functions   If is a continuous function on for some real number , then:   If is even symmetric on , then: .    If is odd symmetric on , then: .        Connecting Symmetric Integrals   We're going to do some sketching here, and I want you to be clear about something: your sketches can be absolutely terrible. It's ok! They just need to embody the kind of symmetry we're talking about. You will probably sketch something and notice that your areas aren't to scale (or maybe even the wrong sign!), and that's fine.  It might be helpful to practice sketching graphs accurately, but don't worry if that part is a struggle.     Sketch a function with the following properties:    is even symmetric on the interval                    Find the values of the following integrals:                Since is even symmetric, what are the two other integrals that we know about? How can we use those to help us find these two?                      Sketch a function with the following properties:    is odd symmetric on the interval                    Find the values of the following integrals:                Since is even symmetric, what are the two other integrals that we know about? How can we use those to help us find these two?                       Average Value of a Function   Visualizing the Average Height of a Function   We are going to build a formula to find the \"average height\" or \"average value\" of a function on the interval . We're going to look at a function and try to find the average height. Along the way, we'll think a bit about areas!     Consider the following function. Find the average height of the function on the interval pictured!       How does the area \"under\" the curve on the interval compare to the area of the rectangle formed by the average height line?      How do you define the two areas?    One of these is the area under from to , which we can use calculus for!  The other is the area of a rectangle with a height (the average height of ) and a width (the width of the interval).      Set up an equation connecting the two areas, and solve for the average height of .    If , then doesn't it make sense that ? How, then, do we find average height by dividing an area and a width?      Average Value of a Function   If a function is continuous on the interval , then the average value of on is: .     "
},
{
  "id": "act-Symmetry",
  "level": "2",
  "url": "sec-MoreDefiniteIntegral.html#act-Symmetry",
  "type": "Activity",
  "number": "5.5.1",
  "title": "Symmetry in Functions and Integrals.",
  "body": " Symmetry in Functions and Integrals   First, let's take a moment to remind ourselves (or see for the first time) what two types of \"symmetry\" we'll be considering. We call them \"even\" and \"odd\" symmetry, but sometimes we think of them as a \"reflective\" symmetry and a \"rotational\" symmetry in the graphs of our functions.      Convince yourself that you know what we mean when we say that a function is even symmetric on an interval if on the interval.  Similarly, convince yourself that you know what we mean when we say that a function is odd symmetric on an interval if on the interval.    Look at the relationship between the points on the graphs when you select the different symmetries: How do their -values relate to each other? How do their -values relate to each other?      Now let's think about areas. Before we visualize too much, let's start with a small question: How does the height of a function impact the area defined by a definite integral? It should be helpful to think about Riemann sums and areas of rectangles here.  The important question then, is how does a function being even or odd symmetric tell us information about areas defined by definite integrals of that function?    If we know that for an even symmetric function, there are some heights\/ -values that are the same, then we know that there are some areas\/integrals that should also be the same. Which ones?  If we know that for an odd symmetric function, there are some heights\/ -values that are opposite, then we know that there are some areas\/integrals that should also be opposite. Which ones?    "
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
  "body": " Connecting Symmetric Integrals   We're going to do some sketching here, and I want you to be clear about something: your sketches can be absolutely terrible. It's ok! They just need to embody the kind of symmetry we're talking about. You will probably sketch something and notice that your areas aren't to scale (or maybe even the wrong sign!), and that's fine.  It might be helpful to practice sketching graphs accurately, but don't worry if that part is a struggle.     Sketch a function with the following properties:    is even symmetric on the interval                    Find the values of the following integrals:                Since is even symmetric, what are the two other integrals that we know about? How can we use those to help us find these two?                      Sketch a function with the following properties:    is odd symmetric on the interval                    Find the values of the following integrals:                Since is even symmetric, what are the two other integrals that we know about? How can we use those to help us find these two?                    "
},
{
  "id": "act-AvgValue",
  "level": "2",
  "url": "sec-MoreDefiniteIntegral.html#act-AvgValue",
  "type": "Activity",
  "number": "5.5.3",
  "title": "Visualizing the Average Height of a Function.",
  "body": " Visualizing the Average Height of a Function   We are going to build a formula to find the \"average height\" or \"average value\" of a function on the interval . We're going to look at a function and try to find the average height. Along the way, we'll think a bit about areas!     Consider the following function. Find the average height of the function on the interval pictured!       How does the area \"under\" the curve on the interval compare to the area of the rectangle formed by the average height line?      How do you define the two areas?    One of these is the area under from to , which we can use calculus for!  The other is the area of a rectangle with a height (the average height of ) and a width (the width of the interval).      Set up an equation connecting the two areas, and solve for the average height of .    If , then doesn't it make sense that ? How, then, do we find average height by dividing an area and a width?    "
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
  "title": "Introduction to <span class=\"process-math\">\\(u\\)<\/span>-Substitution",
  "body": " Introduction to -Substitution   We have spent some time thinking about integrals, both indefinite and definite integrals, and what they represent. Let's end this discussion of integration with some classifications of indefinite integrals.  This classification is completely unserious, but maybe helpful. Let's say that we had to classify each of the following integrals as Easy , Medium , or Hard . Again, these are completely ambiguous and not at all defined, but I hope that we can see the spirit of what we're thinking of. Here are the three integrals that we want to classify:             Which one could have the Easy ? What about a Medium difficulty integral? What makes this one a bit harder, but not so hard to be classified as Hard ? Can you even solve the Hard right now?  Let's think about a legitimately difficult integral, but one that we can actually think about.   A Hard Integral   We're going to be thinking about two integrals here, but before we do, we should remind ourselves about how we can \"re-phrase\" an integration question.  If we are asked to find , then we are really being asked to find some function whose derivative is . Of course, we're actually being asked to find all of the possible functions that fit this requirement, but we know that the constant of integration covers all of the differences.  This means that we can (and should?) check our answers pretty consistently: just find a derivative and check that it matches the integrand!     Find .    Find a function where .    If you're looking at the structure of , can you tell what kind of derivative rule we had to have used in order to get this derivative?  How do we use that to \"undo\" this differentiation?      Explain the role of in the integral. Explain why the positioning of matters.      Let's try another one.     Can you find the same kind of structure here? Is there a function-derivative pairing or composition here that signifies the end result of the Chain Rule?      How can you tell, in general, that the derivative you're looking at is one that was produced through the Chain Rule and not the Product Rule?       Undoing the Chain Rule  Let's try to formalize this process of \"undoing the Chain Rule\" that we noticed in . It might be helpful to, first, think about the Chain Rule and how the differentiation process works. Let's look at the differentiating using the Chain Rule.  The first thing we should do when finding is recognize and identify the composition. We might call the \"inside\" function, or re-label it as . Then we know that the Chain Rule will tell us to differentiate the \"outside\" function with regard to the \"inside\" function (or if we re-label things) and then multiply by the derivative of the inside function (or ). From here, we might re-write things to make it look nicer (coefficients look weird when they're not in the front 😭) and write:   When we work through this process backwards, we'll need to identify the \"inside\" function, but also find the derivative of that \"inside\" function, . This derivative gets introduced in the Chain Rule, and so it will have to be picked out when we undo the Chain Rule.  Let's build this process and go through the integral from .   Process for -Substitution     Identify an \"inside\" function and\/or a \"function-derivative pair.\" We'll label the \"inside\" function, or the \"function\" part of the \"function-derivative pair,\" as .   Example: In our integral we can see the \"inside\" function is , and also we have and as the function-derivative pair. Let .    Define the substitution for the differential, . We can think about this as a result from knowing that , or by thinking that a small change in corresponds with multiplied by a small change in .   Example: In our integral , we labeled . This means that , since this is the derivative of .    Substitute! Re-write the integral, replacing the parts that you've labeled as and .   Example: We can re-write our integral to make this a bit easier to see:     Antidifferentiate! We should have an integral that is \"written in terms of ,\" and so we can antidifferentiate the function as if was our input variable. Notice that what we've done with our substitution is to undo the \"multiply by the derivative of the inside function\" step of the Chain Rule. Now we can antidifferentiate the \"outside\" function!   Example:      Substitute \"back\" to have our antiderivative family written in terms of our original input variable, in this case. We'll replace with whatever we had defined our substitution to be in step 1.   Example: We defined , so:       Let's practice this with some more examples.   Picking the Pieces of a Substitution   We're going to look at three integrals. Instead of working through them one-at-a-time, we'll look at all three simultaneously, where we can practice identifying, substituting, and antidifferentiating all at the same time.     Let's consider these three integrals:                 For each of these integrals, identify the substitution: define as some function of .    Can you find the composition in each one? If you notice the function-derivative pairing instead, then you can think about making the \"function\" portion!       For , let .    For , let .    For , let .         For each substitution, define .       For , .    For , .    For , .         For each integral, use your substitution (for both and the differential ) to re-write the integral.                           Antidifferentiate each integral, and then use your substitution to write each integral back in terms of .                          Let's try to explain a little bit of what is happening. This style of problem solving is really useful in mathematics, and shows up in many places.   The first time I saw was in a Differential Equations class. We were learning about Laplace transformations, a technique that is very useful for solving a variety of problems in the field of differential equations. My professor was explaining why and how Laplace transformations were so powerful, and drew a version of the figure I've included to explain -substitution. It was so helpful for me to understand what was happening, but the most helpful thing was when the professor said, offhand, \"But that's exactly the same type of thing that -substitution does, too.\" So many things fell into place for me because of that comment! You are guaranteed to see different versions of this picture throughout this textbook, but you can also keep an eye out for this in different problem-solving techniques in mathematics.    General idea of how a variable substitution in an integral works.   Two rectangles, one labeled \"x Context\" and the other, beside it, labeled \"u Context.\" Inside the \"x Context\" rectangle is an integral of f(x) dx with an arrow pointing towards F(x)+C. Inside the \"u Context\" rectangle is an integral of g(u) du with an arrow pointing towards G(u)+C. There is an arrow connecting the integral of f(x) dx in the first rectangle to the integral of g(u) du labeled u = ... and du = u' dx. Then there is an arrow connecting G(u)+C to F(x)+C labeled u = ...     Let's explain what is happening in this picture. First, we typically are presented with integrals in some context. Our goal is to antidifferentiate. So for , we hope to antidifferentiate and end up with , the family of antiderivative of . These two things (the indefinite integral and the family of antiderivatives) exist in the same context (since they're defined with the same variable). We have spent some time moving directly from to . But now we're seeing that this isn't always as direct of a path as we might wish: some integrals are hard .  In this case, we can try to identify what the problem is (in this case, composition) and find some transformation to apply to our integral. We choose a variable substitution, and we translate our integral to a different context (in this case, by writing it in terms of a different variable). In order for us to do this, we ned to define some substitution , and then translate into using the relationship .  Once we have this new integral, of a different function in a different context with acting as the input, we try to antidifferentiate again. If we pick our substitution carefully and we know what kind of problem we're trying to fix (in this case, getting around the composition), then this new integral in the context could be \"easier\" to antidifferentiate. So our goal is to antidifferentiate the integral, but we can antidifferentiate it after translating it to a different context.  Once we have this antiderivative, we can translate that antiderivative family back to the original context (in this case, we write it in terms of ). We do this by utilizing the same translation or substitution that we defined earlier: we have something defined to link and . We can notice that, since the object we're translating is not an integral anymore, we do not have a differential to translate.  And there we have it: -substitution works by identifying a problem that makes our task hard, translating our object to a friendlier context based on what we know about our problem, solving the problem in this friendlier context, and then finally translating the solution back to our original context.   Doesn't this feel like what we do with ? Use logs to translate our function to a friendlier form, differentiate in the log-context, and then try to translate back by solving for ?   Let's practice this new strategy!   Compare Two Integrals   Let's compare two integrals, and use this to build a more general strategy for performing -substitution.     Consider the following integral: Select and justify a choice for .    Where is the composition? Do you see a function-derivative pair?      Perform the -substitution and antidifferentiate, and then substitute back to write your antiderivative in terms of .    We'll let , and so .       Compare that integral to this one: What is different about this new integral? What has remained the same? How does that impact your choice for , or does it impact your choice for ?    Notice that nothing has changed about the \"inside\" function!      Has that changed what should be?    Remember that . If we didn't change our selection of , then shouldn't remain the same as well?      Ok so we've noticed an issue here. There are plenty of good ways of solving this problem, where doesn't \"show up\" perfectly in our integral. In this case, we have that we're missing a necessary coefficient. We have the part, but we are missing the .  Try to re-write our integral with a coefficient in there. We'll do that by multiplying the integrand function by , disguised as or .           Now we can use the same -substitution as before, and integrate in a similar way! Notice, though, that we will retain the coefficient of .  (This should be reasonable: our integral is of the original one, since our coefficient was to the original's .)  Go ahead and integrate!          This gives us a general strategy that we can use: if we pick a -substitution, but we cannot find in our integral, we can try to manipulate the integrand function to find it! We normally do this by applying some operation and its inverse (like multiplying by and dividing by it as well, as in ).   Fixing Coefficients for  If we choose to perform a -substitution in the integral , but we require a coefficient in our definition of , we can \"fix\" the coefficient in our integral: This strategy works well for coefficients, since we can factor out the from the integral.     Substitution for Definite Integrals   How would we evaluate the following definite integral? We can think back to what the says about evaluating a definite integral. We need to do two things:   Find an antiderivative of our function, . Any antiderivative will do, and we often pick the one where the constant term is 0.    Evaluate the antiderivative at the end points of the interval and subtract: .   So for us to evaluate this definite integral, we can split the work into two parts.    Antidifferentiate, then Evaluate   Part 1: Antidifferentiation. We can think about the function and find the family of antiderivatives. Then, we can disregard the constant term (by selecting the antiderivative where the constant is 0 for convenience).  So we'll use -substitution on the integral .  We can use , which gives us or . So let's choose as the antiderivative we'll use.   Part 2: Evaluate at the End Points. For the integral , our ending points are and , so let's evaluate!   Great, so we have a way of evaluating this integral!     A More Wholistic Substitution  Hang on, wait.  When we substituted our integral, we were substituting the indefinite integral. What if we applied our substitution to the definite integral.  The only difference is the limits of integration (other than the interpretation of area vs. family of antiderivatives, of course). So let's substitute the limits of integration.  Consider the definite integral. Really think about it. Here, we label the limits of integration as -values: and .  Can't we use our substitution rule to find corresponding -values? What happens then? Let's approach this definite integral using the same substitution: we will think of again. But now we can find corresponding values of when and . All we need to do is evaluate the formula for at those -values! So notice that we end up with the same thing here...we can substitute the limits of integration, and this matches the same value that we would get when we evaluate our antiderivatives at the endpoints of the -interval.    We can amend our picture from to include definite integrals: in this case, we can evaluate the definite integral in either context, as long as we translate the limits of integration as well.   General idea of how a variable substitution in a definite integral works.   Two rectangles, one labeled \"x Context\" and the other, beside it, labeled \"u Context.\" Inside the \"x Context\" rectangle is an integral from x=a to x=b of f(x) dx with an arrow pointing towards F(x)+C and then an arrow continuing to F(b)-F(a). Inside the \"u Context\" rectangle is an integral from u=c to u=d of g(u) du with an arrow pointing towards G(u)+C and then an arrow continuing to G(d)-G(c). There is an arrow connecting the integral of f(x) dx in the first rectangle to the integral of g(u) du labeled u = ... and du = u' dx. Then there is an arrow connecting G(u)+C to F(x)+C labeled u = ... Then there is a double-sided arrow connecting F(b)-F(a) and G(d)-G(c) labeled \"equivalent.\"     To see a visualization of what is happening, we can look below: move the slider to see the continuous deformation of the integral as we apply the variable substitution:   Something we can say is that, since the area doesn't change when we do a variable substitution, then area is invariant under the transformation we're applying with that variable substitution.     More to Translate  There are more little tricks and nuances that we can think about with -substitution: in general, this is an extremely flexible integration technique that we'll use in a variety of ways. For now, let's leave things off with one more interesting example.  In this example, we'll see a similar kind of issue to the one we saw in : when we pick our substitution, there will be some issues \"finding\" .    Integrate the following, making sure to translate the whole integrand function to be written in terms of .     First, notice that is a great choice: we really want to focus on that composition. If this is the case, though, then .    We can write as , or if you really want to, we can write it as     Our -substitution formula can be written in a whole bunch of different ways! These are all equivalent, but the first two might be the most helpful:   Anywhere in our integral that we can see an , we can replace that with .    We can also replace any extra  pieces with !              We'll spend more time thinking about -substitution (as well as other variable substitutions) later on in . For now, this is a good stopping point, and should give us enough of a handle on -substitution to integrate some difficult integrals!   "
},
{
  "id": "act-UndoChainRule",
  "level": "2",
  "url": "sec-uSubstitution.html#act-UndoChainRule",
  "type": "Activity",
  "number": "5.6.1",
  "title": "A Hard Integral.",
  "body": " A Hard Integral   We're going to be thinking about two integrals here, but before we do, we should remind ourselves about how we can \"re-phrase\" an integration question.  If we are asked to find , then we are really being asked to find some function whose derivative is . Of course, we're actually being asked to find all of the possible functions that fit this requirement, but we know that the constant of integration covers all of the differences.  This means that we can (and should?) check our answers pretty consistently: just find a derivative and check that it matches the integrand!     Find .    Find a function where .    If you're looking at the structure of , can you tell what kind of derivative rule we had to have used in order to get this derivative?  How do we use that to \"undo\" this differentiation?      Explain the role of in the integral. Explain why the positioning of matters.      Let's try another one.     Can you find the same kind of structure here? Is there a function-derivative pairing or composition here that signifies the end result of the Chain Rule?      How can you tell, in general, that the derivative you're looking at is one that was produced through the Chain Rule and not the Product Rule?    "
},
{
  "id": "act-uSubPicking",
  "level": "2",
  "url": "sec-uSubstitution.html#act-uSubPicking",
  "type": "Activity",
  "number": "5.6.2",
  "title": "Picking the Pieces of a Substitution.",
  "body": " Picking the Pieces of a Substitution   We're going to look at three integrals. Instead of working through them one-at-a-time, we'll look at all three simultaneously, where we can practice identifying, substituting, and antidifferentiating all at the same time.     Let's consider these three integrals:                 For each of these integrals, identify the substitution: define as some function of .    Can you find the composition in each one? If you notice the function-derivative pairing instead, then you can think about making the \"function\" portion!       For , let .    For , let .    For , let .         For each substitution, define .       For , .    For , .    For , .         For each integral, use your substitution (for both and the differential ) to re-write the integral.                           Antidifferentiate each integral, and then use your substitution to write each integral back in terms of .                         "
},
{
  "id": "fig-uSub",
  "level": "2",
  "url": "sec-uSubstitution.html#fig-uSub",
  "type": "Figure",
  "number": "5.6.1",
  "title": "",
  "body": " General idea of how a variable substitution in an integral works.   Two rectangles, one labeled \"x Context\" and the other, beside it, labeled \"u Context.\" Inside the \"x Context\" rectangle is an integral of f(x) dx with an arrow pointing towards F(x)+C. Inside the \"u Context\" rectangle is an integral of g(u) du with an arrow pointing towards G(u)+C. There is an arrow connecting the integral of f(x) dx in the first rectangle to the integral of g(u) du labeled u = ... and du = u' dx. Then there is an arrow connecting G(u)+C to F(x)+C labeled u = ...    "
},
{
  "id": "act-duFixes",
  "level": "2",
  "url": "sec-uSubstitution.html#act-duFixes",
  "type": "Activity",
  "number": "5.6.3",
  "title": "Compare Two Integrals.",
  "body": " Compare Two Integrals   Let's compare two integrals, and use this to build a more general strategy for performing -substitution.     Consider the following integral: Select and justify a choice for .    Where is the composition? Do you see a function-derivative pair?      Perform the -substitution and antidifferentiate, and then substitute back to write your antiderivative in terms of .    We'll let , and so .       Compare that integral to this one: What is different about this new integral? What has remained the same? How does that impact your choice for , or does it impact your choice for ?    Notice that nothing has changed about the \"inside\" function!      Has that changed what should be?    Remember that . If we didn't change our selection of , then shouldn't remain the same as well?      Ok so we've noticed an issue here. There are plenty of good ways of solving this problem, where doesn't \"show up\" perfectly in our integral. In this case, we have that we're missing a necessary coefficient. We have the part, but we are missing the .  Try to re-write our integral with a coefficient in there. We'll do that by multiplying the integrand function by , disguised as or .           Now we can use the same -substitution as before, and integrate in a similar way! Notice, though, that we will retain the coefficient of .  (This should be reasonable: our integral is of the original one, since our coefficient was to the original's .)  Go ahead and integrate!         "
},
{
  "id": "fig-uSubDefinite",
  "level": "2",
  "url": "sec-uSubstitution.html#fig-uSubDefinite",
  "type": "Figure",
  "number": "5.6.2",
  "title": "",
  "body": " General idea of how a variable substitution in a definite integral works.   Two rectangles, one labeled \"x Context\" and the other, beside it, labeled \"u Context.\" Inside the \"x Context\" rectangle is an integral from x=a to x=b of f(x) dx with an arrow pointing towards F(x)+C and then an arrow continuing to F(b)-F(a). Inside the \"u Context\" rectangle is an integral from u=c to u=d of g(u) du with an arrow pointing towards G(u)+C and then an arrow continuing to G(d)-G(c). There is an arrow connecting the integral of f(x) dx in the first rectangle to the integral of g(u) du labeled u = ... and du = u' dx. Then there is an arrow connecting G(u)+C to F(x)+C labeled u = ... Then there is a double-sided arrow connecting F(b)-F(a) and G(d)-G(c) labeled \"equivalent.\"    "
},
{
  "id": "subsec-uSubDefiniteIntegrals-5-5",
  "level": "2",
  "url": "sec-uSubstitution.html#subsec-uSubDefiniteIntegrals-5-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invariant "
},
{
  "id": "ex-uSubTurn",
  "level": "2",
  "url": "sec-uSubstitution.html#ex-uSubTurn",
  "type": "Example",
  "number": "5.6.3",
  "title": "",
  "body": "  Integrate the following, making sure to translate the whole integrand function to be written in terms of .     First, notice that is a great choice: we really want to focus on that composition. If this is the case, though, then .    We can write as , or if you really want to, we can write it as     Our -substitution formula can be written in a whole bunch of different ways! These are all equivalent, but the first two might be the most helpful:   Anywhere in our integral that we can see an , we can replace that with .    We can also replace any extra  pieces with !           "
},
{
  "id": "sec-NetChange",
  "level": "1",
  "url": "sec-NetChange.html",
  "type": "Section",
  "number": "6.1",
  "title": "Integrals as Net Change",
  "body": " Integrals as Net Change   We have some rudimentary ideas of what an integral is, but we want to challenge and expand those ideas by examining the object at the root of the definition of the : a . We want to generalize a bit more our notion of what a Riemann sum is. So for now, let's think about how we can use a Riemann sum to think about a measurement that will not be an area. That's been our only real context so far, so let's try to stretch that thinking.    Estimating Movement   Estimating Movement   We're observing an object traveling back and forth in a straight line. Throughout a 5 minute interval, we get the following information about the velocity (in feet\/second) of the object.   Velocity of an Object        0  0    30  2    60  4.25    90  5.75    120  3.5    150  0.75    180  -1.25    210  -3.5    240  -2.75    270  -0.5    300  -0.25        Describe the motion of the object in general.    How do we interpret the different values of velocity? How do we interpret the sign of velocity? What about how velocity changes from one of the 30-second time points to the next?      When was the acceleration of the object the greatest? When was it the least?    You can decide how to interpret the \"least\" acceleration: it is either where the acceleration is closes to 0, or it is the most negative value of the acceleration. These are interpreted differently, but it's a bit ambiguous what we might mean when we say \"least acceleration.\"      Estimate the total displacement of the object over the 5 minute interval. What is the overall change in position from the start to the end?    How do we use velocity and some time interval to estimate the distance traveled? How do we estimate\/assume the velocity on each 30-second time interval?      Is this different than the total distance that the object traveled over the 5 minute interval? Why or why not?    How do we think about (or ignore) the direction of the object? Why is this important here?      If we know the initial position of the object, how could we find the position of the object at some time, , where is a multiple of 30 between 0 and 300?    Can we limit the time intervals that we use to calculate the object's displacement? How do we use displacement and a starting point to find an ending point?     So what are the big ideas in this short activity? There are a lot, and many of them are already things we know, at least to some level. So we are really focusing on adding depth to our understanding of these big ideas. Let's list them in the order that they showed up in this activity:   We interpret the velocity as the derivative of the position of the object. So when we interpret the value of the velocity of the object (large vs small, positive vs negative, etc.) we are interpreting these through the lens of a rate of change.    Acceleration is the derivative of the velocity function. While we don't have the full picture of the velocity function at any value of , we still were interested in the rates at which velocity changes with regard to time.    We can estimate the total displacement of the object by predicting how far it traveled in eahc 30-second time interval. We might pick the starting velocity for each 30-second interval and multiply that by 30 seconds. We could alternatively pick the ending velocity of each 30-second interval. Then we can add all of these products of velocity and time together to approximate a total change in position! Doesn't this feel like a Riemann sum?    When we calculate displacement, the negative velocities get multiplied out to get negative changes in position for the object -- that's because a negative velocity means that the object is moving backwards. If we wanted to calculate the distance traveled, then we need to not account for negative velocities. We can just disregard the sign of the velocity on each time interval and repeat the process above. So, another Riemann sum then?    In order to forecast some position at time , we just need to start with the initial position, and then calculate (or approximate) the displacement from to whatever time we care about, and then add the displacement to the intitial position.   Ok, now let's formalize those results!    Position, Velocity, and Acceleration  We know that the velocity of an object is really a rate of change of the position of that object with regard to time. Similarly, the acceleration of an object is the rate of change of the velocity of the object with regard to time. So we're really thinking about derivatives!   Position, Velocity, and Acceleration Functions   For an object moving along a straight line, if represents the position of that object at time , then the velocity of the object at time is and the acceleration of the object at time is .    Once we establish this relationship, we can answer questions about movement of an object using the same interpretations of derivatives that we practiced in Chapter 3 of this text.   A Friendly Jogger   Consider a jogger running along a straight-line path, where their velocity at hours is , and velocity is measured in miles per hour. We begin observing this jogger at and observe them over a course of 3 hours.     When is the jogger's acceleration equal to 0 mi\/hr ?    Solve .      Does this time represent a maximum or minimum velocity for the jogger?    You can use the First Derivative Test or the Second Derivative Test here!      When is the jogger's velocity equal to 0 mi\/hr?      Describe the motion of the jogger, including information about the direction that they travel and their top speeds.       Displacement, Distance, and Speed  Let's revisit . When we approximated the displacement of the object, we built a Riemann sum: We chose our as either the time at the beginning of each 30-second interval or the time atr the end of the 30-second interval, but that was only because of the limited information that we had about different values of . If we had information about the function at any values of ( ), then we could pick any time in each 30-second time interval for our Riemann sum! We might note, though, that if we did have this kind of information about the velocity at any time in the 5-minute interval, then we would also build a more precise approximation by subdividing the time interval into smaller\/shorter pieces. So maybe the Riemann sum (where we are dividing up the 5 minute interval into 100 3-second intervals) would do a better job! But why stop there? If we have the definition of the velocity function, and so we can truly obtain the velocity of the object at any time in the 5 minute interval, then we can use the definition of the definite integral as the limit of a Riemann sum: This should work out well with our first understanding of displacement: the displacement of an object is just the difference in position from the starting time to the ending time. So we could say that if is the position function, then we might expect to represent displacement from to as . But isn't this just the Fundamental Theorem of Calculus, since ?   Displacement of an Object   If an object is moving along a straight line with velocity and position , then the displacement of the object from time to is     Let's keep revisiting the same activity. We also noticed that when we looked at the distance compared to the displacement, the only difference was that we were integrating the absolute value of the velocity function, since we didn't care about the sign of the velocity (the direction that the object was traveling) on each interval.   Distance Traveled   If an object is moving along a straight line with velocity , then the distance traveled by the object from time to is: Here, we call the speed of the object (instead of the velocity).    We should note that we don't have any quick and easy ways of dealing with the integral of the absolute value of a function. So, in order for us to integrate , we need to think about where the velocity passes through 0, so that we can see where it might change from positive to negative.   Tracking our Jogger   Let's revisit our jogger from .     Calculate the total displacement of the jogger from to .    Set up and evaluate a definite integral here, using the velocity function.      Think back to our description of the jogger's movement: when is this jogger moving backwards? Split up the time interval from (the start of their run) to (where is the time that the jogger changed direction) to . Calculate the displacements on each of these two intervals.      Calculate the total distance that the jogger traveled in their 3 hour run.    Remember that we're really calculating:        Finding the Future Value of a Function  We can again think back to and build our last result of this section. Remember when we were looking to predict the location of our object at different times: we said it was reasonable to start at our initial position, and then add the displacement of the object from that initial time up to the time that we were interested in. So, to estimate the object's position after 150 seconds, we would calculate: . But we said we could do this to estimate the object's position at any value for time, .   Future Position of an Object   For some object moving along a straight line with velocity and an initial position of , the future position of the object at some time (with ) is: Note that we change the variable in the velocity function while we integrate: since we want our position function to be in terms of , the ending time point that we calculate the displacement up to, we need to choose a different variable to write velocity in terms of. Mechanically, there is no difference, since we're just swapping out the variables and naming them .    We can note that this relationship between velocity and position can exist in many other context: any pair of functions that are derivatives\/antiderivatives of each other can have this relationship!   Net Change and Future Value   Suppose the value changes over time at a known rate . Then the net change in between and is: . Similarly, given the initial value , the future value of at time is:         Explain the following terms in reference to an object moving along a straight path from time to time .      Position of the object at time .       Displacement of the object.       Distance traveled by the object.       Velocity of the object at time .       Speed of the object at time .       Consider the graph of a velocity function, , of some object moving along a line on the time interval .     A polynomial function that starts at (0,0), decreases down to some negative output around t=2, increases to (4,0) and then continues to some positive output before decreasing and ending at (7,0).       Do you expect the displacement of the object from to to be positive, negative, or 0?    Displacement will likely be negative, since it looks like the size of the integral between and is larger than the size of the integral from up to . Another way to say this is that there is more negative velocity accumulated than positive velocity.      Write two different expressions that represent the total displacement of the object from to .    There are plenty of ways to do this! Here are two:                  Do you expect the distance traveled by the object from to to be positive, negative, or 0?    Distance is always non-negative, and since the velocity was not just constant at 0 (with no movement), then we expect the distance to be positive. It is the integral of speed, which is , velocity without taking into account the direction.      Write two different expressions that represent the total distance traveled by the object from to .    There are plenty of ways to do this! Here are two:                   Let's consider an animal running along a straight path with the velocity function: on the time interval .     What is the total displacement of the animal on the time interval ?           What is the total displacement of the animal on the time interval ?           What is the total displacement of the animal on the time interval ?           What is the total displacement of the animal on the time interval ?    We can integrate from to , or just add up the previous displacements.       What is the total distance traveled by the animal on the time interval ?           Write a short summary of the animal's movement, including notes about direction, speed, and where the animal travels.    From to , the animal is moving backwards, slowly. It speeds up until around and then slows down until it stops and turns around at . From then until it moves forwards. It speeds up until around , and then slows down until it stops to turn back around at . Then, it speeds up quickly in the negative direction until when it begins to slow down to turn around at . It accelerates very quickly in the positive direction until .       Consider an object with velocity function on the interval with the initial position .     Determine the position function, , for using the .           Determine the position function, , for using the strategy.    We'll find the family of antiderivatives, of which is one. Now, is the antiderivative where . So .      Compare the results from both methods. Explain why these are equivalent.       Consider an object with an acceleration function for with .     Determine the velocity function, , for using the .           Determine the velocity function, , for using the strategy.     We know that is one of these antiderivatives, so we can use to solve for . So for .      Can you obtain the position function, ? Explain why or why not, based on the information given.    No, we cannot obtain the position function , since we do not know an initial (or any) position. We can only obtain the family of possible position functions.       During a brake test for a heavy truck, the truck decelerates from an initial velocity of 88 ft\/s with the acceleration function ft\/s². Assume that the initial position of the truck is .     Find the velocity function for the truck.           When does the truck stop? In this situation, the truck won't have a negative velocity (since it's just braking and not eventually going in reverse). What time interval is the velocity function relevant on?    The truck stops when : This means that the velocity function is only relevant on the interval .      What is the total displacement of the truck on this time interval?     So the truck moved approximately feet.      Safety standards say that for a truck like this, it needs to be able to stop (from a speed of 88ft\/s) in, at most, 200 feet.  Do we need to make changes to the braking mechanism, in order to have the acceleration function change? If so, what does the acceleration need to be (assuming it is constant and we are just replacing it with a new negative number)?    Note that for an acceleration function for some positive number , the velocity function is and the truck stops at .  Now we can set the displacement integral equal to 200 in order to solve for . So the truck needs to have an acceleration function of ft\/s or more negative for it to stop in time.      "
},
{
  "id": "act-EstimatingMovement",
  "level": "2",
  "url": "sec-NetChange.html#act-EstimatingMovement",
  "type": "Activity",
  "number": "6.1.1",
  "title": "Estimating Movement.",
  "body": " Estimating Movement   We're observing an object traveling back and forth in a straight line. Throughout a 5 minute interval, we get the following information about the velocity (in feet\/second) of the object.   Velocity of an Object        0  0    30  2    60  4.25    90  5.75    120  3.5    150  0.75    180  -1.25    210  -3.5    240  -2.75    270  -0.5    300  -0.25        Describe the motion of the object in general.    How do we interpret the different values of velocity? How do we interpret the sign of velocity? What about how velocity changes from one of the 30-second time points to the next?      When was the acceleration of the object the greatest? When was it the least?    You can decide how to interpret the \"least\" acceleration: it is either where the acceleration is closes to 0, or it is the most negative value of the acceleration. These are interpreted differently, but it's a bit ambiguous what we might mean when we say \"least acceleration.\"      Estimate the total displacement of the object over the 5 minute interval. What is the overall change in position from the start to the end?    How do we use velocity and some time interval to estimate the distance traveled? How do we estimate\/assume the velocity on each 30-second time interval?      Is this different than the total distance that the object traveled over the 5 minute interval? Why or why not?    How do we think about (or ignore) the direction of the object? Why is this important here?      If we know the initial position of the object, how could we find the position of the object at some time, , where is a multiple of 30 between 0 and 300?    Can we limit the time intervals that we use to calculate the object's displacement? How do we use displacement and a starting point to find an ending point?    "
},
{
  "id": "def-position-velocity-acceleration",
  "level": "2",
  "url": "sec-NetChange.html#def-position-velocity-acceleration",
  "type": "Definition",
  "number": "6.1.2",
  "title": "Position, Velocity, and Acceleration Functions.",
  "body": " Position, Velocity, and Acceleration Functions   For an object moving along a straight line, if represents the position of that object at time , then the velocity of the object at time is and the acceleration of the object at time is .   "
},
{
  "id": "act-Jogger",
  "level": "2",
  "url": "sec-NetChange.html#act-Jogger",
  "type": "Activity",
  "number": "6.1.2",
  "title": "A Friendly Jogger.",
  "body": " A Friendly Jogger   Consider a jogger running along a straight-line path, where their velocity at hours is , and velocity is measured in miles per hour. We begin observing this jogger at and observe them over a course of 3 hours.     When is the jogger's acceleration equal to 0 mi\/hr ?    Solve .      Does this time represent a maximum or minimum velocity for the jogger?    You can use the First Derivative Test or the Second Derivative Test here!      When is the jogger's velocity equal to 0 mi\/hr?      Describe the motion of the jogger, including information about the direction that they travel and their top speeds.    "
},
{
  "id": "def-displacement",
  "level": "2",
  "url": "sec-NetChange.html#def-displacement",
  "type": "Definition",
  "number": "6.1.3",
  "title": "Displacement of an Object.",
  "body": " Displacement of an Object   If an object is moving along a straight line with velocity and position , then the displacement of the object from time to is    "
},
{
  "id": "def-distance",
  "level": "2",
  "url": "sec-NetChange.html#def-distance",
  "type": "Definition",
  "number": "6.1.4",
  "title": "Distance Traveled.",
  "body": " Distance Traveled   If an object is moving along a straight line with velocity , then the distance traveled by the object from time to is: Here, we call the speed of the object (instead of the velocity).   "
},
{
  "id": "act-Jogger-2",
  "level": "2",
  "url": "sec-NetChange.html#act-Jogger-2",
  "type": "Activity",
  "number": "6.1.3",
  "title": "Tracking our Jogger.",
  "body": " Tracking our Jogger   Let's revisit our jogger from .     Calculate the total displacement of the jogger from to .    Set up and evaluate a definite integral here, using the velocity function.      Think back to our description of the jogger's movement: when is this jogger moving backwards? Split up the time interval from (the start of their run) to (where is the time that the jogger changed direction) to . Calculate the displacements on each of these two intervals.      Calculate the total distance that the jogger traveled in their 3 hour run.    Remember that we're really calculating:     "
},
{
  "id": "thm-FuturePosition",
  "level": "2",
  "url": "sec-NetChange.html#thm-FuturePosition",
  "type": "Theorem",
  "number": "6.1.5",
  "title": "Future Position of an Object.",
  "body": " Future Position of an Object   For some object moving along a straight line with velocity and an initial position of , the future position of the object at some time (with ) is: Note that we change the variable in the velocity function while we integrate: since we want our position function to be in terms of , the ending time point that we calculate the displacement up to, we need to choose a different variable to write velocity in terms of. Mechanically, there is no difference, since we're just swapping out the variables and naming them .   "
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
  "number": "1",
  "title": "",
  "body": "  Explain the following terms in reference to an object moving along a straight path from time to time .      Position of the object at time .       Displacement of the object.       Distance traveled by the object.       Velocity of the object at time .       Speed of the object at time .    "
},
{
  "id": "ex-NetChange-2",
  "level": "2",
  "url": "sec-NetChange.html#ex-NetChange-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Consider the graph of a velocity function, , of some object moving along a line on the time interval .     A polynomial function that starts at (0,0), decreases down to some negative output around t=2, increases to (4,0) and then continues to some positive output before decreasing and ending at (7,0).       Do you expect the displacement of the object from to to be positive, negative, or 0?    Displacement will likely be negative, since it looks like the size of the integral between and is larger than the size of the integral from up to . Another way to say this is that there is more negative velocity accumulated than positive velocity.      Write two different expressions that represent the total displacement of the object from to .    There are plenty of ways to do this! Here are two:                  Do you expect the distance traveled by the object from to to be positive, negative, or 0?    Distance is always non-negative, and since the velocity was not just constant at 0 (with no movement), then we expect the distance to be positive. It is the integral of speed, which is , velocity without taking into account the direction.      Write two different expressions that represent the total distance traveled by the object from to .    There are plenty of ways to do this! Here are two:                "
},
{
  "id": "ex-NetChange-3",
  "level": "2",
  "url": "sec-NetChange.html#ex-NetChange-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Let's consider an animal running along a straight path with the velocity function: on the time interval .     What is the total displacement of the animal on the time interval ?           What is the total displacement of the animal on the time interval ?           What is the total displacement of the animal on the time interval ?           What is the total displacement of the animal on the time interval ?    We can integrate from to , or just add up the previous displacements.       What is the total distance traveled by the animal on the time interval ?           Write a short summary of the animal's movement, including notes about direction, speed, and where the animal travels.    From to , the animal is moving backwards, slowly. It speeds up until around and then slows down until it stops and turns around at . From then until it moves forwards. It speeds up until around , and then slows down until it stops to turn back around at . Then, it speeds up quickly in the negative direction until when it begins to slow down to turn around at . It accelerates very quickly in the positive direction until .    "
},
{
  "id": "ex-NetChange-4",
  "level": "2",
  "url": "sec-NetChange.html#ex-NetChange-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Consider an object with velocity function on the interval with the initial position .     Determine the position function, , for using the .           Determine the position function, , for using the strategy.    We'll find the family of antiderivatives, of which is one. Now, is the antiderivative where . So .      Compare the results from both methods. Explain why these are equivalent.    "
},
{
  "id": "ex-NetChange-5",
  "level": "2",
  "url": "sec-NetChange.html#ex-NetChange-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Consider an object with an acceleration function for with .     Determine the velocity function, , for using the .           Determine the velocity function, , for using the strategy.     We know that is one of these antiderivatives, so we can use to solve for . So for .      Can you obtain the position function, ? Explain why or why not, based on the information given.    No, we cannot obtain the position function , since we do not know an initial (or any) position. We can only obtain the family of possible position functions.    "
},
{
  "id": "ex-NetChange-6",
  "level": "2",
  "url": "sec-NetChange.html#ex-NetChange-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  During a brake test for a heavy truck, the truck decelerates from an initial velocity of 88 ft\/s with the acceleration function ft\/s². Assume that the initial position of the truck is .     Find the velocity function for the truck.           When does the truck stop? In this situation, the truck won't have a negative velocity (since it's just braking and not eventually going in reverse). What time interval is the velocity function relevant on?    The truck stops when : This means that the velocity function is only relevant on the interval .      What is the total displacement of the truck on this time interval?     So the truck moved approximately feet.      Safety standards say that for a truck like this, it needs to be able to stop (from a speed of 88ft\/s) in, at most, 200 feet.  Do we need to make changes to the braking mechanism, in order to have the acceleration function change? If so, what does the acceleration need to be (assuming it is constant and we are just replacing it with a new negative number)?    Note that for an acceleration function for some positive number , the velocity function is and the truck stops at .  Now we can set the displacement integral equal to 200 in order to solve for . So the truck needs to have an acceleration function of ft\/s or more negative for it to stop in time.    "
},
{
  "id": "sec-AreaBetweenCurves",
  "level": "1",
  "url": "sec-AreaBetweenCurves.html",
  "type": "Section",
  "number": "6.2",
  "title": "Area Between Curves",
  "body": " Area Between Curves   We're going to stick with our theme of thinking about a , but this time we'll get back to thinking about area. First, we'll try to remind ourselves now just on what a Riemann sum is, but how we actually constructed it.    Remembering Riemann Sums   Remembering Riemann Sums   Let's start with the function on the interval with on the interval. We will construct a Riemman sum to approximate the area under the curve on this interval, and then build that into the integral formula.     A graph of a positive curve, labeled f(x), from x=a to x=b. The region between the curve and the x-axis is shaded.       Divide the interval into 4 equally-sized subintervals.      Pick an for , one for each subinterval. Then, plot the points , , , and .    These points are just general ones, and you don't have to come up with actual numbers for the -values or the corresponding -values. Instead, just draw them in on the curve, somewhere in each of the subintervals.      Use these 4 points to draw 4 rectangles. What are the dimensions of these rectangles (the height and width)?    You won't have any numbers to calculate here, really: instead, see if you can calculate the widths by thinking about the total width of your interval. Then calculate the heights by thinking about the points you created.      Find the area of each rectangle by multiplying the heights and widths for each rectangle.      Add up the areas to construct a Riemman sum. Is this sum very accurate? Why or why not?    Try to think about the accuracy of your area approximation by looking at it visually. Are there any places where your approximation looks far away from the actual area we're thinking about?      Now we will generalize a little more. Let's say we divide this up into equally-sized pieces (instead of 4). Instead of trying to pick an for the unknown number of subintervals (since we don't have a value for yet), let's just focus on one of these: the arbitrary th subinterval.     The same graph of a positive curve, labeled f(x), from x=a to x=b. Now, though, there is a single rectangle sitting on the x-axis and spanning up to f(x). It is delta-x wide, and the top of the rectangle touches the graph at the point (x_k, f(x_k)).    What are the dimensions of this th rectangle?    Height:   Width:       Find , the area of this th rectangle.           Add up the areas of for to approximate the total area,     You might want to use summation notation, starting with            Apply a limit as to this Riemann sum in order to construct the integral formula for the area under the curve from to .          Hopefully this is helpful. If you'd like more reminders on this, you can always revisit . For now, though, we mainly want to think about the general process we're using:   We slice the region from to into pieces, and, for convenience, we choose an equal width: .    From each of the slices, we select some -value (called from the th slice). We use that to evaluate the function on each slice: .    We multiply the function value, , with the width of the slice, , to get the measured area of each slice, .    We can estimate the total measured area of the region by adding all of the areas of the slices together: .    If we keep adding more and more slices (that keep getting thinner and thinner), then we eventually (in the limit) evaluate the area exactly: .   We're going to use this process (we'll call it the slice-and-sum process) for other measurements! Let's see how we can change this so slightly to measure a different area.    Building an Integral Formula for the Area Between Curves   Area Between Curves   Let's start with our same function on the same interval m but also add the function on the same interval, with on the interval. We will construct a Riemann sum to approximate the area between these two curves on this interval, and then build that into the integral formula.     A graph of a positive curve and a less positive curve, g(x), labeled f(x), from x=a to x=b. The space between these curves is shaded.       Divide the interval into 4 equally-sized subintervals.      Pick an for , one for each subinterval. Plot the points , , , and . Then plot the corresponding points on the function: , , , and .      Use these 8 points to draw 4 rectangles, with the points on the function defining the tops of the rectangles and the points on the function defining the bottoms of the rectangles. What are the dimensions of these rectangles (the height and width)?      Find the area of each rectangle by multiplying the heights and widths for each rectangle.      Add up the areas to construct a Riemman sum.      Now we will generalize a little more. Let's say we divide this up into equally-sized pieces (instead of 4). Instead of trying to pick an for the unknown number of subintervals (since we don't have a value for yet), let's just focus on one of these: the arbitrary th subinterval.     The same graph of the two curves f(x) and g(x) between x=a and x=b. Now, though, there is a single rectangle sitting on g(x) and spanning up to f(x). It is delta-x wide. The bottom of the rectangle touches the graph at the point (x_k, g(x_k)) and the top of the rectangle touches the graph at the point (x_k, f(x_k)).    What are the dimensions of this th rectangle?    Height:   Width:       Find , the area of this th rectangle.           Add up the areas of for to approximate the total area,     You might want to use summation notation, starting with            Apply a limit as to this Riemann sum in order to construct the integral formula for the area between the curves and from to .           Area Between Curves   If and are continuous functions with on the interval , then the area bounded between the curves  and between and is .    When we're applying this formula for the area between curves, we won't need to re-create the process from to create the integral formula. We can simply identify the functions bounding the region and the end points of the interval, and set up the integral.  We'll use the slice-and-sum process for two reasons:   To justify these formulas that we continue to build! While this one isn't that difficult (you could have just built the formula by thinking about the area between curves as a difference in areas under each curves), some of the formulas we play with in this chapter will not be as intuitive.    To help us understand what a Riemann sum actually is . It's a product of a function value from a subinterval multiplied by the width of that subinterval, summed up across some larger interval.       For each of the following regions, set up an integral expression representing the area of the region. We can also practice evaluating these integrals to actually calculate the areas.  For each of these described regions, the hint will reveal a visualization of the region (using desmos). Feel free to use that to set up the integral expression!     The region bounded between the graphs and from to .                The region bounded between the graphs and from to .         Notice that the boundary functions intersect at , and they switch order. We'll need to split this region into two different regions in order to identify the \"top\" and \"bottom\" boundary functions.       The region bounded between the curves and and the -axis.         On the interval , the region is bounded above by and below by the -axis ( ). On the interval , the region is bounded above by and below by .        Changing Perspective  This last example had two interesting regions: we had to split them into two pieces because the boundary functions changed order or, in the case of the last example, changed completely to different boundary functions.  We're going to re-do the last problem and work on trying to change our perspective a bit in order to get a single integral to evaluate the area.   Trying for a Single Integral   Let's consider the same setup as earlier: the region bounded between two curves, and , as well as the -axis (the line ). We'll need to name these functions, so let's call them and . But this time, we'll approach the region a bit differently: we're going to try to find the area of the region using only a single integral.     A graph of the two curves y=x+6 and y=x^3 as well as the line y=0. The region trapped inside is shaded, and the intersection points (-6,0) and (2,8) are labelled.       The range of -values in this region span from to . Divide this interval evenly into 4 equally sized-subintervals. What is the height of each subinterval? We'll call this .           Pick a -value from each sub-interval. You can call these , , , and .      Find the corresponding -values on the function for each of the -values you selected. These will be , , , and .    You're really just putting your -values into the equation and solving for . Or you can solve for in general, by solving for while leaving as a variable.      Do the same thing for the function. Now you have 8 points that you can plot: , , , and as well as , , , and . Plot them.      Use these points to draw 4 rectangles with points on and determining the left and right ends of the rectangle. What are the dimensions of these rectangles (height and width)?      Find the area of each rectangle by multiplying the height and widths for each rectangle.      Add up the areas to construct a Riemann sum.      Again, we'll generalize this and think about the th rectangle, pictured below.     The same region, but this time with a horizontal rectangle spanning across it, with the height labeled delta y. The curves are re-labeled x=y-6 and x = cuberoot(y).    Which variable defines the location of the th rectangle, here? That is, if you were to describe where in this graph the th rectangle is laying, would you describe it with an or variable? This will act as our general input variable for the integral we're ending with.      What are the dimensions of the th rectangle?    Height:   Width:       Find , the area of this th rectangle.           Add up the areas of for to approximate the total area,     You might want to use summation notation, starting with            Apply a limit as to this Riemann sum in order to construct the integral formula for the area between the curves and from to .           Now that you have an integral, evaluate it! Find the area of this region to compare with the work we did previously, where we used multiple integrals to measure the size of this same region.          We can re-write our definition of the area between curves ( ) to account for this change in perspective, by thinking about these same functions in terms of .   Area Between Curves (in terms of )   If and are continuous functions with on the interval of -values , then the area bounded between the curves  and from to is .    This strategy of inverting our functions to change the variable that we integrate with regard to is useful, but a tricky part of this is deciding when to change variables.  Something that we can look for is intersection points in the region we're working with. If, in our plan for setting up an integral, we would stack rectangles that would pass through an intersection point, then this indicates that we would need to split our region up to set up the integrals (since the boundary functions are changing). If we change the orientation of the rectangles, would they still pass through an intersection point? Are the functions that we're working with relatively easy to invert? Can we antidifferentiate these functions, or their inverted versions?  These are some of the things we'll consider as we make these decisions.    To finish things up, let's look at a nice little interactive graph that can help show the differences between finding area with regard to (using in our rectangles and in our integrals) and finding area with regard to (using in our rectangles and in our integrals).      Explain how we use the \"slice and sum\" method to build an integral formula for the area bounded between curves. Give some details, enough to make sure you understand how the Riemann sums are constructed and how they turn into our integral formula.    What are some changes\/considerations that we need to make when we decide to set up our integral in terms of instead of ?     Set up (and practice evaluating) an integral expression representing the area of each of the regions described below.  The hint for each problem will open a graph of the region.     The region bounded by the curves and between and .              The region bounded by the curves and between and               The region bounded by the curves and and the line .              The region bounded by the curves and .       This one has annoying limits of integration, and so evaluating the integral is more annoying than it is worth.        Set up and evaluate an integral representing the area of each of the regions described below. Explain whether you chose to integrate with respect to or , and why you made that choice.     The region bounded by the curves and and the line between and .        Or, alternatively: . Admittedly, it is annoying to evaluate this in terms of , even though it is satisfying to have only a single integral.  The area itself is .      The region bounded by the curves and and the line in the first quadrant.        Or alternatively: . In either case, the area is .      The region bounded by the curves and and the line in the third quadrant.        Or, alternatively: . In either case, the area is .      The region bounded by the curves , , and in the first quadrant with .        Or, alternatively: . In either case, the area is .      The region bounded by the curves , , and in the first quadrant.         The other region bounded by the curves , , and in the first quadrant.         The region bounded by the curves and .         The region(s) bounded by the curves and .         "
},
{
  "id": "act-RememberingRiemann",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#act-RememberingRiemann",
  "type": "Activity",
  "number": "6.2.1",
  "title": "Remembering Riemann Sums.",
  "body": " Remembering Riemann Sums   Let's start with the function on the interval with on the interval. We will construct a Riemman sum to approximate the area under the curve on this interval, and then build that into the integral formula.     A graph of a positive curve, labeled f(x), from x=a to x=b. The region between the curve and the x-axis is shaded.       Divide the interval into 4 equally-sized subintervals.      Pick an for , one for each subinterval. Then, plot the points , , , and .    These points are just general ones, and you don't have to come up with actual numbers for the -values or the corresponding -values. Instead, just draw them in on the curve, somewhere in each of the subintervals.      Use these 4 points to draw 4 rectangles. What are the dimensions of these rectangles (the height and width)?    You won't have any numbers to calculate here, really: instead, see if you can calculate the widths by thinking about the total width of your interval. Then calculate the heights by thinking about the points you created.      Find the area of each rectangle by multiplying the heights and widths for each rectangle.      Add up the areas to construct a Riemman sum. Is this sum very accurate? Why or why not?    Try to think about the accuracy of your area approximation by looking at it visually. Are there any places where your approximation looks far away from the actual area we're thinking about?      Now we will generalize a little more. Let's say we divide this up into equally-sized pieces (instead of 4). Instead of trying to pick an for the unknown number of subintervals (since we don't have a value for yet), let's just focus on one of these: the arbitrary th subinterval.     The same graph of a positive curve, labeled f(x), from x=a to x=b. Now, though, there is a single rectangle sitting on the x-axis and spanning up to f(x). It is delta-x wide, and the top of the rectangle touches the graph at the point (x_k, f(x_k)).    What are the dimensions of this th rectangle?    Height:   Width:       Find , the area of this th rectangle.           Add up the areas of for to approximate the total area,     You might want to use summation notation, starting with            Apply a limit as to this Riemann sum in order to construct the integral formula for the area under the curve from to .         "
},
{
  "id": "subsec-RememberingRiemannSums-3",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#subsec-RememberingRiemannSums-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slice-and-sum "
},
{
  "id": "act-AreaBetweenCurves",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#act-AreaBetweenCurves",
  "type": "Activity",
  "number": "6.2.2",
  "title": "Area Between Curves.",
  "body": " Area Between Curves   Let's start with our same function on the same interval m but also add the function on the same interval, with on the interval. We will construct a Riemann sum to approximate the area between these two curves on this interval, and then build that into the integral formula.     A graph of a positive curve and a less positive curve, g(x), labeled f(x), from x=a to x=b. The space between these curves is shaded.       Divide the interval into 4 equally-sized subintervals.      Pick an for , one for each subinterval. Plot the points , , , and . Then plot the corresponding points on the function: , , , and .      Use these 8 points to draw 4 rectangles, with the points on the function defining the tops of the rectangles and the points on the function defining the bottoms of the rectangles. What are the dimensions of these rectangles (the height and width)?      Find the area of each rectangle by multiplying the heights and widths for each rectangle.      Add up the areas to construct a Riemman sum.      Now we will generalize a little more. Let's say we divide this up into equally-sized pieces (instead of 4). Instead of trying to pick an for the unknown number of subintervals (since we don't have a value for yet), let's just focus on one of these: the arbitrary th subinterval.     The same graph of the two curves f(x) and g(x) between x=a and x=b. Now, though, there is a single rectangle sitting on g(x) and spanning up to f(x). It is delta-x wide. The bottom of the rectangle touches the graph at the point (x_k, g(x_k)) and the top of the rectangle touches the graph at the point (x_k, f(x_k)).    What are the dimensions of this th rectangle?    Height:   Width:       Find , the area of this th rectangle.           Add up the areas of for to approximate the total area,     You might want to use summation notation, starting with            Apply a limit as to this Riemann sum in order to construct the integral formula for the area between the curves and from to .         "
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
  "id": "subsec-AreaBetweenCurves-6",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#subsec-AreaBetweenCurves-6",
  "type": "Example",
  "number": "6.2.6",
  "title": "",
  "body": "  For each of the following regions, set up an integral expression representing the area of the region. We can also practice evaluating these integrals to actually calculate the areas.  For each of these described regions, the hint will reveal a visualization of the region (using desmos). Feel free to use that to set up the integral expression!     The region bounded between the graphs and from to .                The region bounded between the graphs and from to .         Notice that the boundary functions intersect at , and they switch order. We'll need to split this region into two different regions in order to identify the \"top\" and \"bottom\" boundary functions.       The region bounded between the curves and and the -axis.         On the interval , the region is bounded above by and below by the -axis ( ). On the interval , the region is bounded above by and below by .     "
},
{
  "id": "act-SingleIntegral",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#act-SingleIntegral",
  "type": "Activity",
  "number": "6.2.3",
  "title": "Trying for a Single Integral.",
  "body": " Trying for a Single Integral   Let's consider the same setup as earlier: the region bounded between two curves, and , as well as the -axis (the line ). We'll need to name these functions, so let's call them and . But this time, we'll approach the region a bit differently: we're going to try to find the area of the region using only a single integral.     A graph of the two curves y=x+6 and y=x^3 as well as the line y=0. The region trapped inside is shaded, and the intersection points (-6,0) and (2,8) are labelled.       The range of -values in this region span from to . Divide this interval evenly into 4 equally sized-subintervals. What is the height of each subinterval? We'll call this .           Pick a -value from each sub-interval. You can call these , , , and .      Find the corresponding -values on the function for each of the -values you selected. These will be , , , and .    You're really just putting your -values into the equation and solving for . Or you can solve for in general, by solving for while leaving as a variable.      Do the same thing for the function. Now you have 8 points that you can plot: , , , and as well as , , , and . Plot them.      Use these points to draw 4 rectangles with points on and determining the left and right ends of the rectangle. What are the dimensions of these rectangles (height and width)?      Find the area of each rectangle by multiplying the height and widths for each rectangle.      Add up the areas to construct a Riemann sum.      Again, we'll generalize this and think about the th rectangle, pictured below.     The same region, but this time with a horizontal rectangle spanning across it, with the height labeled delta y. The curves are re-labeled x=y-6 and x = cuberoot(y).    Which variable defines the location of the th rectangle, here? That is, if you were to describe where in this graph the th rectangle is laying, would you describe it with an or variable? This will act as our general input variable for the integral we're ending with.      What are the dimensions of the th rectangle?    Height:   Width:       Find , the area of this th rectangle.           Add up the areas of for to approximate the total area,     You might want to use summation notation, starting with            Apply a limit as to this Riemann sum in order to construct the integral formula for the area between the curves and from to .           Now that you have an integral, evaluate it! Find the area of this region to compare with the work we did previously, where we used multiple integrals to measure the size of this same region.         "
},
{
  "id": "def-AreaBetweenCurves-y",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#def-AreaBetweenCurves-y",
  "type": "Definition",
  "number": "6.2.9",
  "title": "Area Between Curves (in terms of <span class=\"process-math\">\\(y\\)<\/span>).",
  "body": " Area Between Curves (in terms of )   If and are continuous functions with on the interval of -values , then the area bounded between the curves  and from to is .   "
},
{
  "id": "ex-AreaBetweenCurves-1",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#ex-AreaBetweenCurves-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Explain how we use the \"slice and sum\" method to build an integral formula for the area bounded between curves. Give some details, enough to make sure you understand how the Riemann sums are constructed and how they turn into our integral formula.  "
},
{
  "id": "ex-AreaBetweenCurves-2",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#ex-AreaBetweenCurves-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " What are some changes\/considerations that we need to make when we decide to set up our integral in terms of instead of ?  "
},
{
  "id": "ex-AreaBetweenCurves-3",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#ex-AreaBetweenCurves-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Set up (and practice evaluating) an integral expression representing the area of each of the regions described below.  The hint for each problem will open a graph of the region.     The region bounded by the curves and between and .              The region bounded by the curves and between and               The region bounded by the curves and and the line .              The region bounded by the curves and .       This one has annoying limits of integration, and so evaluating the integral is more annoying than it is worth.     "
},
{
  "id": "ex-AreaBetweenCurves-4",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#ex-AreaBetweenCurves-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Set up and evaluate an integral representing the area of each of the regions described below. Explain whether you chose to integrate with respect to or , and why you made that choice.     The region bounded by the curves and and the line between and .        Or, alternatively: . Admittedly, it is annoying to evaluate this in terms of , even though it is satisfying to have only a single integral.  The area itself is .      The region bounded by the curves and and the line in the first quadrant.        Or alternatively: . In either case, the area is .      The region bounded by the curves and and the line in the third quadrant.        Or, alternatively: . In either case, the area is .      The region bounded by the curves , , and in the first quadrant with .        Or, alternatively: . In either case, the area is .      The region bounded by the curves , , and in the first quadrant.         The other region bounded by the curves , , and in the first quadrant.         The region bounded by the curves and .         The region(s) bounded by the curves and .       "
},
{
  "id": "sec-VolumesOfRevolution",
  "level": "1",
  "url": "sec-VolumesOfRevolution.html",
  "type": "Section",
  "number": "6.3",
  "title": "Volumes of Solids of Revolution",
  "body": " Volumes of Solids of Revolution   Hopefully by now we're feeling pretty comfortable with the use of a Riemann sum to create an integral formula. So far, these integral formulas have matched with our intuition somewhat. We can probably justify the integral formula for displacement of an object ( ) by thinking about the fact that position is an antiderivative of velocity. We can probably convince ourselves about the integral formula for the area between curves ( ) by thinking about subtracting areas, geometrically.  We're going to make a jump from a 2-dimensional measurement of size, area, to a 3-dimensional measurement of size, volume.    From Area To Volume  Here's the basic idea, in a broad overview: if we want to calculate a volume, then we are going to be working with a 3-dimensional solid. We'll use the slice-and-sum process:   Slice the object into uniformly thick slices along some axis.    For each slice, we'll approximate the volume. We can do this by thinking about the cross-sectional area. If we assume that the area is constant all the way through the slice (in the same way that we assumed earlier that the heights of our rectangles were constant), then we can simply multiply the cross-sectional area by the thickness to get the volume of each slice: .    Approximate the total volume of the solid by adding the volumes of the slices together: .    Apply a limit, where the number of slices gets infinitely big (and the thickness of each slice gets infinitely small): Here, and are the -values that define the interval we're slicing along and is a formula for the cross-sectional area of the object at .   The biggest issue here is going to be thinking about that formula for area. In order for us to do that, we're going to think about a specific type of 3-dimensional solid, built in a systematic way so that we can find the cross-sectional areas easily.    Solids of Revolution  A solid of revolution is a strange type of solid: we're going to define it based on a 2-dimensional region (we'll use functions in a normal -plane) that we then imagine revolving around a straight line axis. Maybe we define some region in the upper half of the plane, but then revolve it around the -axis. While we imagine this revolution, we want to think about the three dimensional solid that gets \"traced\" by the curve spinning around the axis. Let's dive into an example to see.  Let's visualize some function defined (and continuous) on the interval and with on that interval. We'll see why this is useful, but for now, we're just thinking of some function.     A graph of a red curve labeled f(x). The curve is above the x-axis and starts at the y-axis, and moves forward until it stops. There is are two points on the x-axis labeled x=a and x=b, representing the beginning and ending of the interval where this function is defined. The function looks like a sort of curvy polynomial, and the shape is unimportant.    We're going to revolve this curve (and the region bounded between it and the -axis) around the -axis. This will create the following shape.     The red curve, f(x), has been revolved around the x-axis. There is a reflection of this curve below the axis, and lines connecting the ends so that the shape looks like a vase on its side, where the outline of the vase is shaped like the graph f(x).    So our goal is to find the volume of this type of solid. The curve defining the edge of it can change, but the way that we create it will be systematic enough that we can build a formulaic integral expression for it.  As you would imagine, we'll start with a rectangle.     A graph of a red curve labeled f(x). The curve is above the x-axis and starts at the y-axis, and moves forward until it stops. There is are two points on the x-axis labeled x=a and x=b, representing the beginning and ending of the interval where this function is defined. The function looks like a sort of curvy polynomial, and the shape is unimportant. There is a red rectangle spanning from the x-axis to the curve, touching the curve at a point labeled (x_k^*, f(x_k^*)). The width of the rectangle is labeled Delta x.    This rectangle will represent a single, generic slice. We really want to imagine a slice of the 3-dimensional solid, though, and so we will revolve this rectangle around the -axis. This will create a slice of our solid of revolution. From there, we can think about the volume of this generic th slice, and fall into the rhythm of our slice-and-sum process.     The red curve, f(x), has been revolved around the x-axis. There is a reflection of this curve below the axis, and lines connecting the ends so that the shape looks like a vase on its side, where the outline of the vase is shaped like the graph f(x). Somewhere in the middle of the vase is a sliced region, looking like a small coin. This is the rectangle, revolved around the axis. The point on the curve is still labeled (x_k^*, f(x_k^*)) and the width of this slice is labeled Delta x.    We want to find the volume of this specific slice. To do this, we can remove this stubby cylinder from the solid and think about it directly. We can see the thickness of the slice is represented by , and so we need to think about the cross-sectional area of the \"face\" of this slice.     A circle where the radius is labeled r=f(x_k^*).    This is something we can easily find the area of! We know the formula for the area of a circle: . We'll notice that the radius of this circle is the distance from the center of our slice to the outer edge: this is the height of the rectangle in . So we can use , giving us the cross-sectional area of the th slice: . Now we can drop into our slice and sum process:   The volume of the th slice is:     We can approximate the volume by adding the slices: Sometimes this can be hard to visualize. We're approximating the solid in by thinking about a bunch of these circular disks stacked next to each other.     The 3-dimensional solid, but there are 10 grey circular disks stacked next to each other. The radius of each varies, matching with the curve outlining the vase-like image.      We can apply a limit to evaluate the actual volume of the solid and construct a definite integral.      This is great! We'll call this volume integral the Disk Method , since each cross section is a circular disk.  What happens if we add a second curve defining a lower boundary to the region, like we did in for areas?   Carving out a Hole in the Center   We're going to look at the same solid as in . But this time, when we define the 2-dimensional region that we're going to revolve around the -axis, we're going to add a lower boundary function, .     A graph of two functions. The upper function is red, labeled f(x), and is a wavy polynomial. It is above the second function, g(x), which is blue. It is less wavy. Both of them are above the x-axis, and go from a point labeled x=a to x=b where they both stop.    When we revolve this region around the -axis, we get the following 3-dimensional solid.     The region revolved around the x-axis. It creates a vase type shape where the outer edge is the red f(x) function on the top and reflected onto the bottom. The inner function, g(x), creates a kind of tunnel through the solid.       How is a single generic slice on this solid different than the one in ?    Here is the rectangle that will define that slice!     A graph of two functions. The upper function is red, labeled f(x), and is a wavy polynomial. It is above the second function, g(x), which is blue. It is less wavy. Both of them are above the x-axis, and go from a point labeled x=a to x=b where they both stop. A rectangle spans from the bottom g(x) function to the top f(x) function, with the point on the bottom labeled (x_k^*, g(x_k^*)) and the point on the top labeled (x_k^*, f(x_k^*)). The width of the rectangle is labeled Delta x.      Here is the slice formed when the rectangle revolves around the axis!     The region revolved around the x-axis. It creates a vase type shape where the outer edge is the red f(x) function on the top and reflected onto the bottom. The inner function, g(x), creates a kind of tunnel through the solid. There is a disk with a hole in it, sliced in the middle of the solid. The width is labeled Delta x. The outer edge of the disk matches the function f(x) and the hole is formed from g(x).        Find a formula for the area of the face of the cross-secional slice.    Here's a picture of the face of the slice!     A circle within a circle. The larger circle has a red radius, labeled r_1. The smaller circle has a blue radius, labeled r_2.             Use the slice-and-sum process to create an integral expression representing the volume of this solid.           Volume by Disks\/Washers   If and are continuous functions with on the interval , then the volume of the solid formed by revolving the region bounded between the curves and from to around the -axis is: . This is called the Washer Method . Note that if , then the resulting volume is: . This is called the Disk Method .    We'll walk through two examples where we construct these integral expressions before pretending to be too comfortable. Let's start with something similar to what we've just done.   Volumes by Disks\/Washers   Consider the region bounded between the curves and . Will will create a 3-dimensional solid by revolving this region around the -axis.     Graph of the region bounded between the parabola y=4+2x-x^2 and the curve y=4\/(x+1). The curves intersect at (0,4) and at (3,1), and the parabola defines the top of the region. The whole region is above the x-axis.       Visualize the solid you'll create when you revolve this region around the -axis.      Draw a single rectangle in your region, standing perpendicular to the -axis.      Let's use this rectangle to visualize the th slice of this 3-dimensional solid. What does the \"face\" of it look like?    It should be a circle within a circle like in , but can you be more detailed with labeling the radii?      Find the area of the face of the th slice.    Note that this is a 2-dimensional shape, and we're just finding the area of it.           Set up the integral representing the volume of the solid.    The sum is going to be adding up all of the areas multiplied by . What will that look like in the integral?           Can you describe how you would antidifferentiate and evaluate this integral?    What happens when you square these functions? What kinds of strategies will you use for the types of functions you're left with?    The first function, the quadratic, will be annoying to square. We'll end up with some big degree 4 polynomial, though, and antidifferentiating will be easy, since we can use the power rule.  The second function squared will give us . We can use a -substitution here with . Then we have a negative exponent and we can use more power rule!     Ok, so when we're creating these integrals, we are really focussing on using the rectangle we drew to show us which functions serve as the large radius compared to the small radius. In the next example, we'll see another key thing to notice from a single rectangle.   Another Volume   Now lets consider another region: this time, the one bounded between the curves and . We will, again, create a 3-dimensional solid by revolving this region around the -axis.     Graph of the region bounded between the root function y=3sqrt(x) and the line y=x. The curves intersect at (0,0) and at (9,9), and the root defines the top of the region. The whole region is above the x-axis.       Visualize the solid you'll create when you revolve this region around the -axis.      Draw a single rectangle in your region standing perpendicular to the -axis.    Notice that your rectangle is sitting on its side now! This will change some things for us in a familiar way!      Let's use this rectangle to visualize the th slice of this 3-dimensional solid. What does the \"face\" of it look like?    It should be a circle within a circle like in , but can you be more detailed with labeling the radii?      Find the area of the face of the th slice.    Note that this is a 2-dimensional shape, and we're just finding the area of it. You'll also notice that the radii are measuring a horizontal distance in terms of a differing height, so you'll want to express these as functions of .    The outer radius comes from the function , but we'll invert it to be .  The inner radius comes from the function , but we'll invert it be written as or .       Set up the integral representing the volume of this solid.          Notice that the rectangle was the clue that we were going to be using when we calculated volumes. This ended up being the reason that we integrated with regard to , since the in the integral.  A single rectangle, carefully drawn, can give us a large amount of information as we try to juggle these volumes!    Re-Orienting our Rectangles  We saw in that thinking about the single rectangle we draw can be helpful. We'll see that again in this next formula that we build.  Notice that, in all of the previous work we've done, we've drawn our rectangle so that it is standing perpendicular to the axis of revolution. This is the kind of rectangle that, when we revolve it, traces out the \"washer\" shape!  So what happens when we change the orientation of our rectangle? What happens when we draw a rectangle that is parallel to the axis of revolution? Let's consider the same region as before (the one we visualized in ) with the same rectangle as before (the one we visualized in ), but we'll revolve around the -axis.  When we revolve this region around the -axis, we end up with the following solid.     A cylindrical looking solid, where the top of the solid is formed by the red f(x) function and its reflection across the y-axis, while the bottom is formed by the blue g(x) and its reflection. Some circles are also marked, showing the shape of the top.    We want to focus on the single rectangle and the shape that it forms when we revolve it around the -axis. From there, we can fall into our slice and sum process by thinking about how we might calculate the volume of this single sliced piece and then adding them up.     A cylindrical looking solid, where the top of the solid is formed by the red f(x) function and its reflection across the y-axis, while the bottom is formed by the blue g(x) and its reflection. Some circles are also marked, showing the shape of the top. A single rectangle and the small cylinder it forms is highlighted.    For this rectangle, we can notice that when we revolve it around the -axis, we create a hollow cylinder. We'll focus more specifically on this cylinder.     The single highlighted cylinder, with labels for its radius and height, as well as the thickness Delta x.    Let's focus more on the cylinder. We'll need to find the volume of this cylinder. We can think of this volume as really the surface area of the cylinder multiplied by the thickness. Another way to visualize it is to think about cutting the cylinder open, and unfurling it to create a rectangular solid with some thickness.     The single highlighted cylinder in isolation with a cut across it. Underneath there is an arrow pointing towards the unfurled rectangle, where the width is labeled 2*pi*r and the height is labeled h, while the thickness is Delta x.    So we can see that to find , we're going to multiply and again, where is the area of the cross-sectional \"face.\" In this case, we can see how we'll construct this from the unfurled cylinder.    Volume by Shells   If and are continuous functions with on the interval (with ), then the volume of the solid formed when the region bounded between the curves and from to is revolved around the -axis is .    We can apply this formula in a familiar example, and also practice changing variables.   Volume by Shells   Let's consider the region bounded by the curves and as well as the line . You might remember this region from . This time, we'll create a 3-dimensional solid by revolving the region around the -axis     A graph of the two curves y=x+6 and y=x^3 as well as the line y=0. The region trapped inside is shaded, and the intersection points (-6,0) and (2,8) are labelled.       Sketch one or two rectangles that are perpendicular to the -axis. Then set up an integral expression to find the volume of the solid using them.    Note that in this context, we're actually using disks and washers. Also note that the bottom of the rectangles are bounded by from to and then switches to being bounded by from to .           Now draw a single rectangle in the region that is parallel to the axis of revolution. Use this rectangle to visualize the th slice of this 3-dimensional solid. What does that single rectangle create when it is revolved around the -axis?    This won't create a disk or washer! We'll have to change variables, and try to see how we can create a shell.      Set up the integral expression representing the volume of the solid.           Confirm that your volumes are the same, no matter your approach to setting it up.       To finish things up, let's look at another interactive graph (similar to how we ended ) that can help show the differences between finding volume with regard to (using in our rectangles and in our integrals) and finding volume with regard to (using in our rectangles and in our integrals), and how this choice changes our method from washers to shells depending on the axis of revolution.      We say that the volume of a solid can be thought of as where is a function describing the cross-sectional area of our solid at an -value between and . Explain how this integral formula gets built, referencing the slice-and-sum (Riemann sum) method.    Explain the differences and similarities between the disk and washer methods for finding volumes of solids of revolution.    When do we integrate with regard to (using a in our integral and writing our functions with -value inputs) and when do we integrate with regard to (using a in our integral and writing our functions with -value inputs) when we're finding volumes using disks and washers? How do we know?     For each of the solids described below, set up an integral using the disk\/washer method that describes the volume of the solid. It will be helpful to visualize the region, a rectangle on that region, as well as the rectangle revolved around the axis of revolution.     The region bounded by the curve and the lines and , revolved around the -axis.         The region bounded by the curve and the -axis between and , revolved around the -axis.         The region bounded by the curves and between and , revolved around the -axis.         The region bounded by the curves and between and , revolved around the -axis.         The region bounded by the curve , the -axis, and the line , revolved around the -axis.         The region bounded by the curve and the -axis between and , revolved around the -axis.         Explain where the pieces of the shell formula come from. How is this different than using disks\/washers?    Say we're revolving a region around the -axis to create a solid. Using the disk\/washer method, we will integrate with respect to . Using the shell method, we integrate with respect to . Explain the difference, and why this difference occurs.     For each of the solids described below, set up an integral using the shell method that describes the volume of the solid. It will be helpful to visualize the region, a rectangle on that region, as well as the rectangle revolved around the axis of revolution.     The region bounded by the curve and the lines and , revolved around the -axis.         The region bounded by the curve and the -axis between and , revolved around the -axis.         The region bounded by the curves and and the line revolved around the -axis.         The region bounded by the curves and from to , revolved around the -axis.         The region bounded by the curves and revolved around the -axis.         The region bounded by the curves and and the -axis between and , revolved around the -axis.         Pick at least 2 integrals from to re-write using shells instead. What about those regions did you look for to choose which ones to re-write and which ones to not?    Pick at least 2 integrals from to re-write using disks\/washers instead. What about those regions did you look for to choose which ones to re-write and which ones to not?     For each of the following solids, set up an integral expression using either the disk\/washer method or the shell method. You don't need to evaluate them, but you should do some careful thinking about how you set these up, especially as you choose between methods and what variable you are integrating with.     The region bounded by the curves and in the first quadrant, revolved around the -axis.         The region bounded by the curves and in the first quadrant, revolved around the -axis.         The region bounded by the curves and in the first quadrant, revolved around the -axis.         "
},
{
  "id": "subsec-SolidsOfRevolution-2",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#subsec-SolidsOfRevolution-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solid of revolution "
},
{
  "id": "fig-Disks-1",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#fig-Disks-1",
  "type": "Figure",
  "number": "6.3.1",
  "title": "",
  "body": "   A graph of a red curve labeled f(x). The curve is above the x-axis and starts at the y-axis, and moves forward until it stops. There is are two points on the x-axis labeled x=a and x=b, representing the beginning and ending of the interval where this function is defined. The function looks like a sort of curvy polynomial, and the shape is unimportant.   "
},
{
  "id": "fig-Disks-2",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#fig-Disks-2",
  "type": "Figure",
  "number": "6.3.2",
  "title": "",
  "body": "   The red curve, f(x), has been revolved around the x-axis. There is a reflection of this curve below the axis, and lines connecting the ends so that the shape looks like a vase on its side, where the outline of the vase is shaped like the graph f(x).   "
},
{
  "id": "fig-Disks-3",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#fig-Disks-3",
  "type": "Figure",
  "number": "6.3.3",
  "title": "",
  "body": "   A graph of a red curve labeled f(x). The curve is above the x-axis and starts at the y-axis, and moves forward until it stops. There is are two points on the x-axis labeled x=a and x=b, representing the beginning and ending of the interval where this function is defined. The function looks like a sort of curvy polynomial, and the shape is unimportant. There is a red rectangle spanning from the x-axis to the curve, touching the curve at a point labeled (x_k^*, f(x_k^*)). The width of the rectangle is labeled Delta x.   "
},
{
  "id": "fig-Disks-4",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#fig-Disks-4",
  "type": "Figure",
  "number": "6.3.4",
  "title": "",
  "body": "   The red curve, f(x), has been revolved around the x-axis. There is a reflection of this curve below the axis, and lines connecting the ends so that the shape looks like a vase on its side, where the outline of the vase is shaped like the graph f(x). Somewhere in the middle of the vase is a sliced region, looking like a small coin. This is the rectangle, revolved around the axis. The point on the curve is still labeled (x_k^*, f(x_k^*)) and the width of this slice is labeled Delta x.   "
},
{
  "id": "fig-Disks-6",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#fig-Disks-6",
  "type": "Figure",
  "number": "6.3.5",
  "title": "",
  "body": "   A circle where the radius is labeled r=f(x_k^*).   "
},
{
  "id": "fig-Disks-5",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#fig-Disks-5",
  "type": "Figure",
  "number": "6.3.6",
  "title": "",
  "body": "   The 3-dimensional solid, but there are 10 grey circular disks stacked next to each other. The radius of each varies, matching with the curve outlining the vase-like image.   "
},
{
  "id": "subsec-SolidsOfRevolution-15",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#subsec-SolidsOfRevolution-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Disk Method "
},
{
  "id": "act-Washer",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#act-Washer",
  "type": "Activity",
  "number": "6.3.1",
  "title": "Carving out a Hole in the Center.",
  "body": " Carving out a Hole in the Center   We're going to look at the same solid as in . But this time, when we define the 2-dimensional region that we're going to revolve around the -axis, we're going to add a lower boundary function, .     A graph of two functions. The upper function is red, labeled f(x), and is a wavy polynomial. It is above the second function, g(x), which is blue. It is less wavy. Both of them are above the x-axis, and go from a point labeled x=a to x=b where they both stop.    When we revolve this region around the -axis, we get the following 3-dimensional solid.     The region revolved around the x-axis. It creates a vase type shape where the outer edge is the red f(x) function on the top and reflected onto the bottom. The inner function, g(x), creates a kind of tunnel through the solid.       How is a single generic slice on this solid different than the one in ?    Here is the rectangle that will define that slice!     A graph of two functions. The upper function is red, labeled f(x), and is a wavy polynomial. It is above the second function, g(x), which is blue. It is less wavy. Both of them are above the x-axis, and go from a point labeled x=a to x=b where they both stop. A rectangle spans from the bottom g(x) function to the top f(x) function, with the point on the bottom labeled (x_k^*, g(x_k^*)) and the point on the top labeled (x_k^*, f(x_k^*)). The width of the rectangle is labeled Delta x.      Here is the slice formed when the rectangle revolves around the axis!     The region revolved around the x-axis. It creates a vase type shape where the outer edge is the red f(x) function on the top and reflected onto the bottom. The inner function, g(x), creates a kind of tunnel through the solid. There is a disk with a hole in it, sliced in the middle of the solid. The width is labeled Delta x. The outer edge of the disk matches the function f(x) and the hole is formed from g(x).        Find a formula for the area of the face of the cross-secional slice.    Here's a picture of the face of the slice!     A circle within a circle. The larger circle has a red radius, labeled r_1. The smaller circle has a blue radius, labeled r_2.             Use the slice-and-sum process to create an integral expression representing the volume of this solid.         "
},
{
  "id": "def-VolumesDisksWashers",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#def-VolumesDisksWashers",
  "type": "Definition",
  "number": "6.3.12",
  "title": "Volume by Disks\/Washers.",
  "body": " Volume by Disks\/Washers   If and are continuous functions with on the interval , then the volume of the solid formed by revolving the region bounded between the curves and from to around the -axis is: . This is called the Washer Method . Note that if , then the resulting volume is: . This is called the Disk Method .   "
},
{
  "id": "act-VolumesDisksWashers",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#act-VolumesDisksWashers",
  "type": "Activity",
  "number": "6.3.2",
  "title": "Volumes by Disks\/Washers.",
  "body": " Volumes by Disks\/Washers   Consider the region bounded between the curves and . Will will create a 3-dimensional solid by revolving this region around the -axis.     Graph of the region bounded between the parabola y=4+2x-x^2 and the curve y=4\/(x+1). The curves intersect at (0,4) and at (3,1), and the parabola defines the top of the region. The whole region is above the x-axis.       Visualize the solid you'll create when you revolve this region around the -axis.      Draw a single rectangle in your region, standing perpendicular to the -axis.      Let's use this rectangle to visualize the th slice of this 3-dimensional solid. What does the \"face\" of it look like?    It should be a circle within a circle like in , but can you be more detailed with labeling the radii?      Find the area of the face of the th slice.    Note that this is a 2-dimensional shape, and we're just finding the area of it.           Set up the integral representing the volume of the solid.    The sum is going to be adding up all of the areas multiplied by . What will that look like in the integral?           Can you describe how you would antidifferentiate and evaluate this integral?    What happens when you square these functions? What kinds of strategies will you use for the types of functions you're left with?    The first function, the quadratic, will be annoying to square. We'll end up with some big degree 4 polynomial, though, and antidifferentiating will be easy, since we can use the power rule.  The second function squared will give us . We can use a -substitution here with . Then we have a negative exponent and we can use more power rule!    "
},
{
  "id": "act-VolumesDisksWashers-y",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#act-VolumesDisksWashers-y",
  "type": "Activity",
  "number": "6.3.3",
  "title": "Another Volume.",
  "body": " Another Volume   Now lets consider another region: this time, the one bounded between the curves and . We will, again, create a 3-dimensional solid by revolving this region around the -axis.     Graph of the region bounded between the root function y=3sqrt(x) and the line y=x. The curves intersect at (0,0) and at (9,9), and the root defines the top of the region. The whole region is above the x-axis.       Visualize the solid you'll create when you revolve this region around the -axis.      Draw a single rectangle in your region standing perpendicular to the -axis.    Notice that your rectangle is sitting on its side now! This will change some things for us in a familiar way!      Let's use this rectangle to visualize the th slice of this 3-dimensional solid. What does the \"face\" of it look like?    It should be a circle within a circle like in , but can you be more detailed with labeling the radii?      Find the area of the face of the th slice.    Note that this is a 2-dimensional shape, and we're just finding the area of it. You'll also notice that the radii are measuring a horizontal distance in terms of a differing height, so you'll want to express these as functions of .    The outer radius comes from the function , but we'll invert it to be .  The inner radius comes from the function , but we'll invert it be written as or .       Set up the integral representing the volume of this solid.         "
},
{
  "id": "fig-Shells-1",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#fig-Shells-1",
  "type": "Figure",
  "number": "6.3.15",
  "title": "",
  "body": "   A cylindrical looking solid, where the top of the solid is formed by the red f(x) function and its reflection across the y-axis, while the bottom is formed by the blue g(x) and its reflection. Some circles are also marked, showing the shape of the top.   "
},
{
  "id": "fig-Shells-2",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#fig-Shells-2",
  "type": "Figure",
  "number": "6.3.16",
  "title": "",
  "body": "   A cylindrical looking solid, where the top of the solid is formed by the red f(x) function and its reflection across the y-axis, while the bottom is formed by the blue g(x) and its reflection. Some circles are also marked, showing the shape of the top. A single rectangle and the small cylinder it forms is highlighted.   "
},
{
  "id": "fig-Shells-3",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#fig-Shells-3",
  "type": "Figure",
  "number": "6.3.17",
  "title": "",
  "body": "   The single highlighted cylinder, with labels for its radius and height, as well as the thickness Delta x.   "
},
{
  "id": "fig-Shells-4",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#fig-Shells-4",
  "type": "Figure",
  "number": "6.3.18",
  "title": "",
  "body": "   The single highlighted cylinder in isolation with a cut across it. Underneath there is an arrow pointing towards the unfurled rectangle, where the width is labeled 2*pi*r and the height is labeled h, while the thickness is Delta x.   "
},
{
  "id": "def-VolumesShells",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#def-VolumesShells",
  "type": "Definition",
  "number": "6.3.19",
  "title": "Volume by Shells.",
  "body": " Volume by Shells   If and are continuous functions with on the interval (with ), then the volume of the solid formed when the region bounded between the curves and from to is revolved around the -axis is .   "
},
{
  "id": "act-VolumesShells",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#act-VolumesShells",
  "type": "Activity",
  "number": "6.3.4",
  "title": "Volume by Shells.",
  "body": " Volume by Shells   Let's consider the region bounded by the curves and as well as the line . You might remember this region from . This time, we'll create a 3-dimensional solid by revolving the region around the -axis     A graph of the two curves y=x+6 and y=x^3 as well as the line y=0. The region trapped inside is shaded, and the intersection points (-6,0) and (2,8) are labelled.       Sketch one or two rectangles that are perpendicular to the -axis. Then set up an integral expression to find the volume of the solid using them.    Note that in this context, we're actually using disks and washers. Also note that the bottom of the rectangles are bounded by from to and then switches to being bounded by from to .           Now draw a single rectangle in the region that is parallel to the axis of revolution. Use this rectangle to visualize the th slice of this 3-dimensional solid. What does that single rectangle create when it is revolved around the -axis?    This won't create a disk or washer! We'll have to change variables, and try to see how we can create a shell.      Set up the integral expression representing the volume of the solid.           Confirm that your volumes are the same, no matter your approach to setting it up.    "
},
{
  "id": "ex-Volumes-1",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " We say that the volume of a solid can be thought of as where is a function describing the cross-sectional area of our solid at an -value between and . Explain how this integral formula gets built, referencing the slice-and-sum (Riemann sum) method.  "
},
{
  "id": "ex-Volumes-2",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Explain the differences and similarities between the disk and washer methods for finding volumes of solids of revolution.  "
},
{
  "id": "ex-Volumes-3",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " When do we integrate with regard to (using a in our integral and writing our functions with -value inputs) and when do we integrate with regard to (using a in our integral and writing our functions with -value inputs) when we're finding volumes using disks and washers? How do we know?  "
},
{
  "id": "problem-Washers",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#problem-Washers",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  For each of the solids described below, set up an integral using the disk\/washer method that describes the volume of the solid. It will be helpful to visualize the region, a rectangle on that region, as well as the rectangle revolved around the axis of revolution.     The region bounded by the curve and the lines and , revolved around the -axis.         The region bounded by the curve and the -axis between and , revolved around the -axis.         The region bounded by the curves and between and , revolved around the -axis.         The region bounded by the curves and between and , revolved around the -axis.         The region bounded by the curve , the -axis, and the line , revolved around the -axis.         The region bounded by the curve and the -axis between and , revolved around the -axis.       "
},
{
  "id": "ex-Volumes-5",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " Explain where the pieces of the shell formula come from. How is this different than using disks\/washers?  "
},
{
  "id": "ex-Volumes-6",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Say we're revolving a region around the -axis to create a solid. Using the disk\/washer method, we will integrate with respect to . Using the shell method, we integrate with respect to . Explain the difference, and why this difference occurs.  "
},
{
  "id": "problem-Shells",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#problem-Shells",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  For each of the solids described below, set up an integral using the shell method that describes the volume of the solid. It will be helpful to visualize the region, a rectangle on that region, as well as the rectangle revolved around the axis of revolution.     The region bounded by the curve and the lines and , revolved around the -axis.         The region bounded by the curve and the -axis between and , revolved around the -axis.         The region bounded by the curves and and the line revolved around the -axis.         The region bounded by the curves and from to , revolved around the -axis.         The region bounded by the curves and revolved around the -axis.         The region bounded by the curves and and the -axis between and , revolved around the -axis.       "
},
{
  "id": "ex-Volumes-8",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " Pick at least 2 integrals from to re-write using shells instead. What about those regions did you look for to choose which ones to re-write and which ones to not?  "
},
{
  "id": "ex-Volumes-9",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": " Pick at least 2 integrals from to re-write using disks\/washers instead. What about those regions did you look for to choose which ones to re-write and which ones to not?  "
},
{
  "id": "ex-Volumes-10",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#ex-Volumes-10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  For each of the following solids, set up an integral expression using either the disk\/washer method or the shell method. You don't need to evaluate them, but you should do some careful thinking about how you set these up, especially as you choose between methods and what variable you are integrating with.     The region bounded by the curves and in the first quadrant, revolved around the -axis.         The region bounded by the curves and in the first quadrant, revolved around the -axis.         The region bounded by the curves and in the first quadrant, revolved around the -axis.       "
},
{
  "id": "sec-MoreVolumes",
  "level": "1",
  "url": "sec-MoreVolumes.html",
  "type": "Section",
  "number": "6.4",
  "title": "More Volumes: Shifting the Axis of Revolution",
  "body": " More Volumes: Shifting the Axis of Revolution   We have introduced some methods for creating and calculating the volume of different 3 dimensional solids of revolution.    What Changes?  Let's first consider a volume created using disks or washers.   What Changes (in the Washer Method) with a New Axis?   Let's revisit , and ask some more follow-up questions. First, we'll tinker with the solid we created: instead of revolving around the -axis, let's revolve the same solid around the horizontal line .     What changes, if anything, do you have to make to the rectangle you drew in ?      What changes, if anything, do you have to make to the area of the \"face\" th washer?      What changes, if anything, do you have to make to the eventual volume integral for this solid?     Now let's consider a volume created using shells.   What Changes (in the Shell Method) with a New Axis?   Let's revisit , and ask some more follow-up questions about the shell method. Again, we'll tinker with the solid we created: instead of revolving around the -axis, let's revolve the same solid around the horizontal line .     What changes, if anything, do you have to make to the rectangle you drew in ?      What changes, if anything, do you have to make to the area of the rectangle formed by \"unrolling\" up th cylinder?      What changes, if anything, do you have to make to the eventual volume integral for this solid?     In both of these cases, we can notice that the only changes we make are to the radii : we just need to re-measure the distance from axis of revolution to either the ends of the rectangle (in the washer method) or the side of the rectangle (in the shell method).    Formalizing These Changes in the Washers and Shells  We can look at yet another interactive graph (similar to how we ended and ). This time, we'll think about how our axis of revolution as well as our choice of rectangle orientation impacts how we construct the washers or shells.   Notice that in each case, we're re-measuring the radius! Whether we're measuring the radii of a washer by thinking about how far the function outputs are away from the axis of revolution or if we're measuring the radius of a shell by thinking about how far the input variable is away from the axis of revolution, we need to rethink this and do some subtraction.   More Shifted Axes   We're going to spend some time constructing several different volume integrals in this activity. We'll consider the same region each time, but make changes to the axis of revolution. For each, we'll want to think about what kind of method we're using (disks\/washers or shells) and how the different axis of revolution gets implemented into our volume integral formulas.  Let's consider the region bounded by the curves and between and .     Let's start with revolving this around the -axis and thinking about the solid formed. While you set up your volume integral, think carefully about which method you'll be using (disks\/washers or shells) as well as which variable you are integrating with regard to ( or ).    Note that in this region, we definitely want to use rectangles that stand up vertically. That means that they'll have a very small width, , and sit perpendicular to the axis of revolution.      Now let's create a different solid by revolving this region around the -axis. Set up a volume integral, and continue to think carefully about which method you'll be using (disks\/washers or shells) as well as which variable you are integrating with regard to ( or ).    We still will use the same tall rectangle with a small side length, but this time it will be parallel to our axis of revolution.      We'll start shifting our axis of revolution now. We'll revolve the same region around the horizontal line to create a solid. Set up an integral expression to calculate the volume.    Note that we're still using the same rectangle (perpendicular to this horizontal axis), and so still integrating with regard to , and using the washer method.    Since in the washer method our function outputs represent the radii, we need to re-measure the distance from our curves to the axis of revolution to find each circle's radius in the washer formula. For a -value on each curve, how do we find the vertical distance down to the line ?      Now revolve the region around the line to create a solid of revolution, and write down the integral representing the volume.    Note, now, that the -value of the axis of revolution is larger than all of the -values on the curves, meaning that to measure the distance from the axis of revolution to the curves, we might measure them in the opposite direction. Also, which curve is further away from the axis of revolution, representing the larger\/outer radius?      Let's change things up. Revolve the region around the vertical line to create a new solid. Set up an integral representing the volume of that solid.    Note that the same rectangle that we used before is standing parallel to our axis of revolution. We're going to change methodology, and use the shell method!    Normally we use the input variable ( in this case) to measure the radius from the rectangles at different -value to the axis of revolution, the -axis. Now, though, we're not looking at the distance from -values to . We're looking to find the radius, the distance from -values in this region to .      We'll do one more solid. Let's revolve this region around the line . Set up an integral representing the volume.    Note that this time, the axis of revolution's -value is larger than all of the -values in our region. So when we subtract to measure the radius, we need to subtract from down to the varying -values in the region.        Consider the integral formula for computing volumes of a solid of revolution using the disk\/washer method. What part of this integral formula represents the radius\/radii of any circle(s)? Why is the radius represented using the function output from the curve(s) defining the region?    Consider the integral formula for computing volumes of a solid of revolution using the shell method. What part of this integral formula represents the radius\/radii of any circle(s)? Why is the radius not represented using the function output from the curve(s) defining the region?     For each of the solids described below, set up an integral expression using disks\/washers representing the volume of the solid.     The region bounded by the curve in the first quadrant, revolved around .      The region bounded by the curve in the first quadrant, revolved around .      The region bounded by the curve in the first quadrant, revolved around .      The region bounded by the curve in the first quadrant, revolved around .       For each of the solids described below, set up an integral expression using shells representing the volume of the solid.     The region bounded by the curves and in the first quadrant, revolved around the line .      The region bounded by the curves and in the first quadrant, revolved around the line .      The region bounded by the curves and in the first quadrant, revolved around the line .      The region bounded by the curves and in the first quadrant, revolved around the line .      "
},
{
  "id": "act-VolumesWhatChanges-Washers",
  "level": "2",
  "url": "sec-MoreVolumes.html#act-VolumesWhatChanges-Washers",
  "type": "Activity",
  "number": "6.4.1",
  "title": "What Changes (in the Washer Method) with a New Axis?",
  "body": " What Changes (in the Washer Method) with a New Axis?   Let's revisit , and ask some more follow-up questions. First, we'll tinker with the solid we created: instead of revolving around the -axis, let's revolve the same solid around the horizontal line .     What changes, if anything, do you have to make to the rectangle you drew in ?      What changes, if anything, do you have to make to the area of the \"face\" th washer?      What changes, if anything, do you have to make to the eventual volume integral for this solid?    "
},
{
  "id": "act-VolumesWhatChanges-Shells",
  "level": "2",
  "url": "sec-MoreVolumes.html#act-VolumesWhatChanges-Shells",
  "type": "Activity",
  "number": "6.4.2",
  "title": "What Changes (in the Shell Method) with a New Axis?",
  "body": " What Changes (in the Shell Method) with a New Axis?   Let's revisit , and ask some more follow-up questions about the shell method. Again, we'll tinker with the solid we created: instead of revolving around the -axis, let's revolve the same solid around the horizontal line .     What changes, if anything, do you have to make to the rectangle you drew in ?      What changes, if anything, do you have to make to the area of the rectangle formed by \"unrolling\" up th cylinder?      What changes, if anything, do you have to make to the eventual volume integral for this solid?    "
},
{
  "id": "act-ShiftedAxes",
  "level": "2",
  "url": "sec-MoreVolumes.html#act-ShiftedAxes",
  "type": "Activity",
  "number": "6.4.3",
  "title": "More Shifted Axes.",
  "body": " More Shifted Axes   We're going to spend some time constructing several different volume integrals in this activity. We'll consider the same region each time, but make changes to the axis of revolution. For each, we'll want to think about what kind of method we're using (disks\/washers or shells) and how the different axis of revolution gets implemented into our volume integral formulas.  Let's consider the region bounded by the curves and between and .     Let's start with revolving this around the -axis and thinking about the solid formed. While you set up your volume integral, think carefully about which method you'll be using (disks\/washers or shells) as well as which variable you are integrating with regard to ( or ).    Note that in this region, we definitely want to use rectangles that stand up vertically. That means that they'll have a very small width, , and sit perpendicular to the axis of revolution.      Now let's create a different solid by revolving this region around the -axis. Set up a volume integral, and continue to think carefully about which method you'll be using (disks\/washers or shells) as well as which variable you are integrating with regard to ( or ).    We still will use the same tall rectangle with a small side length, but this time it will be parallel to our axis of revolution.      We'll start shifting our axis of revolution now. We'll revolve the same region around the horizontal line to create a solid. Set up an integral expression to calculate the volume.    Note that we're still using the same rectangle (perpendicular to this horizontal axis), and so still integrating with regard to , and using the washer method.    Since in the washer method our function outputs represent the radii, we need to re-measure the distance from our curves to the axis of revolution to find each circle's radius in the washer formula. For a -value on each curve, how do we find the vertical distance down to the line ?      Now revolve the region around the line to create a solid of revolution, and write down the integral representing the volume.    Note, now, that the -value of the axis of revolution is larger than all of the -values on the curves, meaning that to measure the distance from the axis of revolution to the curves, we might measure them in the opposite direction. Also, which curve is further away from the axis of revolution, representing the larger\/outer radius?      Let's change things up. Revolve the region around the vertical line to create a new solid. Set up an integral representing the volume of that solid.    Note that the same rectangle that we used before is standing parallel to our axis of revolution. We're going to change methodology, and use the shell method!    Normally we use the input variable ( in this case) to measure the radius from the rectangles at different -value to the axis of revolution, the -axis. Now, though, we're not looking at the distance from -values to . We're looking to find the radius, the distance from -values in this region to .      We'll do one more solid. Let's revolve this region around the line . Set up an integral representing the volume.    Note that this time, the axis of revolution's -value is larger than all of the -values in our region. So when we subtract to measure the radius, we need to subtract from down to the varying -values in the region.    "
},
{
  "id": "ex-MoreVolumes-1",
  "level": "2",
  "url": "sec-MoreVolumes.html#ex-MoreVolumes-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Consider the integral formula for computing volumes of a solid of revolution using the disk\/washer method. What part of this integral formula represents the radius\/radii of any circle(s)? Why is the radius represented using the function output from the curve(s) defining the region?  "
},
{
  "id": "ex-MoreVolumes-2",
  "level": "2",
  "url": "sec-MoreVolumes.html#ex-MoreVolumes-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Consider the integral formula for computing volumes of a solid of revolution using the shell method. What part of this integral formula represents the radius\/radii of any circle(s)? Why is the radius not represented using the function output from the curve(s) defining the region?  "
},
{
  "id": "ex-MoreVolumes-3",
  "level": "2",
  "url": "sec-MoreVolumes.html#ex-MoreVolumes-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  For each of the solids described below, set up an integral expression using disks\/washers representing the volume of the solid.     The region bounded by the curve in the first quadrant, revolved around .      The region bounded by the curve in the first quadrant, revolved around .      The region bounded by the curve in the first quadrant, revolved around .      The region bounded by the curve in the first quadrant, revolved around .    "
},
{
  "id": "ex-MoreVolumes-4",
  "level": "2",
  "url": "sec-MoreVolumes.html#ex-MoreVolumes-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  For each of the solids described below, set up an integral expression using shells representing the volume of the solid.     The region bounded by the curves and in the first quadrant, revolved around the line .      The region bounded by the curves and in the first quadrant, revolved around the line .      The region bounded by the curves and in the first quadrant, revolved around the line .      The region bounded by the curves and in the first quadrant, revolved around the line .    "
},
{
  "id": "sec-ArcLengthSurfaceArea",
  "level": "1",
  "url": "sec-ArcLengthSurfaceArea.html",
  "type": "Section",
  "number": "6.5",
  "title": "Arc Length and Surface Area",
  "body": " Arc Length and Surface Area   We're going to continue to think about different applications of definite integrals: what they can measure and how we can construct these integral formulas. In this section, we're going to add two more formulas for two more measurements. Before we get far into this discussion, we want to center the important parts of our discussion.  Sure, it is worth noting that, in this section, we'll add a 1-dimensional measurement of size to our list of things an integral can measure. We have talked about a 2-dimensional measure of size (area) and a 3-dimensional measure of size (volume), but we'll add length to the list now! We'll also add a 2-dimensional extension of perimeter to the list when we talk about surface area. That's cool!  But, more importantly, we're going to see how we can construct an integral formula from a Riemann sum, and we're going to get some experience constructing a Riemann sum to measure the thing we care about. In our study of integrals, it might not actually be that important to know how to calculate the specific kinds of volumes or lengths that we're talking about. But we can get some experience with using some formulas from a pretty comfortable field (geometry) to get some experience with the slice-and-sum process. And this process is a useful one to know! We want to see that a definite integral is more than just an area under a curve, and we want to be able to look at an integral formula for some measurement or calculation and see some of the parts of that formula that could be familiar.  Anyways, let's calculate some arc lengths.    Integrals for Evaluating the Length of a Curve  When we talk about arc length , we might think of the length of some portion of a circle. Here, we'll use it to refer to the length of some more general curve. We'll graph a function and think about how long the curve of the graph is from some point to another point.   Measuring Distance    Consider the following right-triangle with the normal names of side lengths.     A right triangle with the hypotenuse labeled c and the two other side lengths labeled a and b.    How do we use the Pythagorean Theorem to find the length of ?      Consider the two points and below.     Two points, (x_1, y_1) and (x_2, y_2), connected by a dashed line. The line is labeled d.    How do we use the distance formula to find the length of the line connecting the two point, ?      How are these two things the same? How are they different?     This might be a reminder of something we already knew, but let's make sure we are certain: when we calculate distances, we're really just using the Pythagorean Theorem! We can square the vertical distance between the points and the horizontal distance between the points, and then we the length of the straight line connecting two points is: . This will be a useful formula for us to find an integral expression for the length of a curve.  If we think about the slice-and-sum technique, then we'll want to visualize the th slice of whatever we're trying to measure. In this case, that means we'll divide the curve up into equally-wide slices and calculate the length of each subsection of the curve. We'll make a recognizable assumption: we'll assume that the curve is actually a straight line between the end points, and calculate that length.   We have made similar assumptions along the way!   When we calculated area, we assumed that the curve(s) defining our region were constant on each subinterval. This is what gave us rectangular slices, with flat tops and bottoms!    When we calculated volumes by disks and washers, we again assumed that the curve(s) were constant on each subinterval. This is what gave us constant radii on each disk\/washer!    When we calculated volumes by shells, this assumption of constant curves made the cylindrical shells have flat tops and bottoms!      Let's visualize the th slice.     A curvy, blue function labeled f(x) plotted from a starting point (at x=a) to some ending point (at x=b). Along the way, there are two more points forming an interval from x=x_k to x=x_(k+1). These two points are connected by a straight, dashed line labeled l_k.    In order to calculate , the straight-line length connecting the end points of the th subinterval, we can use the Pythagorean Theorem or distance formula (from ).     A curvy, blue function labeled f(x) plotted from a starting point (at x=a) to some ending point (at x=b). Along the way, there are two more points forming an interval from x=x_k to x=x_(k+1). These two points are connected by a straight, dashed line labeled l_k. There are vertical and horizontal lines forming a right triangle, with l_k being the hypotenuse. The vertical component is labeled Delta y_k while the horizontal component is labeled Delta x.    Let's start the slice-and-sum process. Two notes:   We're using to denote the vertical distance between the end points of the th subinterval because we expect these to differ for each subinterval. We don't need to do this for , since we've been slicing things into equally-wide subintervals this whole time.    This isn't a Riemann sum. This is much more important, and much more pressing.   Before we can do anything, we need to try to manipulate this sum so that it is in the form of a Riemann sum. What does this mean? What are the some of the things required for the Riemann sum structure that we don't have here? Feel free to look back at to remind yourself what elements are needed for a Riemann sum.  Notice, first, that we need a function evaluated at any single input on the subinterval: . In our version, we have a function evaluated twice at very specific inputs: . We'll need to re-think about how we represent this part in order to get a single function output.  We also need to have this function multiplied by . In our sum, we have as a part of the function itself, under the square root. We'll want to move this outside of the root. Let's start there.  We'll start by looking at the sum to approximate the length and factoring outside of the root. This looks better! We have floating around at the end of our sum, ready to turn into once we apply the limit as .  The inside of our root, though, is still a bit messed up. We would like a single function of , any -value from the th subinterval. Instead, we have a function involving the two -values of the end points and we still have involved in this part!  But we can notice something about : it really is the slope of the straight line! Can we use a function to represent this? We can absolutely approximate this slope using a function: the derivative!     A curvy, blue function labeled f(x) plotted from a starting point (at x=a) to some ending point (at x=b). Along the way, there are two more points forming an interval from x=x_k to x=x_(k+1). These two points are connected by a straight, dashed line labeled l_k. There is a green point on the subinterval labeled (x_k^*, f(x_k^*)) with a tangent line formed in green. It runs almost parallel to the dashed line.    If we pick some point, , on the th subinterval, then we can approximate with . This is a fine approximation of this slope (and the guarantees that there is a point on the subinterval where exactly), but the real magic will happen when . The definition of the will make sure that these slopes are equal in the limit!  Let's return to our slice-and-sum process. This is a Riemann sum! We can apply a limit and get an integral!    Length of a Curve   If is continuous on the interval and differentiable on , then the length of the curve from to is: .      Find an integral expression representing the length of the following curves.     The curve from to .    Since , then we can construct the following integral: Instead of worrying about actually evaluating this integral, we'll leave it like this.  If you do want to fiddle with this integral, than it might be helpful to note that we can re-write it:       The curve from to .    We know that , so we can construct the following integral: We can leave this integral like this for now.  Similar to the first example, though, we can re-write this if you'd like to explore it more!        Integrals for Evaluating the Surface Area of a Solid  Moving from the length of some curve towards calculating the surface area of some solid of revolution won't be hard: we'll use the length formula in our procedure!  Let's build this surface area formula. Consider some function, , on the interval from to .     A blue curve labeled f(x) spanning from a point at x=a to a point at x=b. The curve is above the x-axis.    Instead of forming a rectangle for the th slice, we'll do the same thing that we did for arc length: we'll connect the end points of the th subinterval. This will create a trapezoid.     The same blue curve f(x). There are two more points along the curve connected by a straight line, and a shaded in trapezoid spanning from the diagonal line to the x-axis. The diagonal line of the trapezoid is labeled l_k, while the bottom spans from x_k to x_(k+1) and is labeled Delta x.    We'll use to represent the diagonal length of the line connecting the endpoints. Notice that this is going to become the arc length.  When we revolve the curve around the -axis, we can see not just the solid created by the curve, but the solid representing this th slice.      A vase-like shape formed by the blue curve f(x) being revolved around the x-axis. The trapezoid is still pictured, and we can see the circular curves formed when it revolves around the x-axis. It creates a slice that looks like a trapezoidal-cylinder type shape.     The th frustum-shaped slice.   The kth slice, looking like a trapezoidal-cylinder type shape, with the radius on one side bigger than the other.     In order for us to find the surface area of this th slice, we'll think about how \"far\" the diagonal line revolves. This is based on the circumference of each circular end of our slice, which means we have two radii to consider: the function outputs at both endpoints of the th subinterval: This is going to become problematic, since we need only one function output evaluated at some on the th subinterval.  Instead, we can select some -value on the interval and use the function output at that point to represent the radius of our th slice.     The solid formed by f(x) being revolved around, and the kth slice visualized. There is also a green arrow pointing from the x-axis to a point on the kth interval labeled (x_k^*, f(x_k^*)) acting as a radius of the sliced solid.    Instead of averaging the large and small radii from the end-points, we'll just select the one function output to represent this \"average\" radius. In the limit as , things will work out, since this randomly selected radius will become exactly equal the average radius in the limit since .  Now we can slice and sum!    Surface Area   Let is continuous with on the interval and differentiable on . If the region bounded by and the -axis from to is revolved around the -axis, then the surface area of the resulting solid is: .        The formula for arc length of the function on the interval is . Explain how this definition is built, using the slice-and-sum method. Make sure to explain how we the Pythagorean Theorem is involved.      Why do we use in the formula for arc length?      For each of the following curves on intervals, evaluate the arc length.      on        on        on        For each of the following curves on intervals, set up an integral representing the arc length. Do not evaluate.      on        on        on        Why is the formula for arc length seemingly involved in the integral formula for surface area of a solid of revolution?      In the integral formula , what does represent? What about ?      For each of the following curves and intervals, find the surface area of the solid formed when the curve is revolved around the -axis.      on        on        on        For each of the following curves and intervals, set up the surface area of the solid formed when the curve is revolved around the -axis. Do not evaluate the integral.      on        on       "
},
{
  "id": "subsec-ArcLength-2",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#subsec-ArcLength-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arc length "
},
{
  "id": "act-MeasuringDistance",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#act-MeasuringDistance",
  "type": "Activity",
  "number": "6.5.1",
  "title": "Measuring Distance.",
  "body": " Measuring Distance    Consider the following right-triangle with the normal names of side lengths.     A right triangle with the hypotenuse labeled c and the two other side lengths labeled a and b.    How do we use the Pythagorean Theorem to find the length of ?      Consider the two points and below.     Two points, (x_1, y_1) and (x_2, y_2), connected by a dashed line. The line is labeled d.    How do we use the distance formula to find the length of the line connecting the two point, ?      How are these two things the same? How are they different?    "
},
{
  "id": "fig-ArcLength-1",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#fig-ArcLength-1",
  "type": "Figure",
  "number": "6.5.3",
  "title": "",
  "body": "   A curvy, blue function labeled f(x) plotted from a starting point (at x=a) to some ending point (at x=b). Along the way, there are two more points forming an interval from x=x_k to x=x_(k+1). These two points are connected by a straight, dashed line labeled l_k.   "
},
{
  "id": "fig-ArcLength-2",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#fig-ArcLength-2",
  "type": "Figure",
  "number": "6.5.4",
  "title": "",
  "body": "   A curvy, blue function labeled f(x) plotted from a starting point (at x=a) to some ending point (at x=b). Along the way, there are two more points forming an interval from x=x_k to x=x_(k+1). These two points are connected by a straight, dashed line labeled l_k. There are vertical and horizontal lines forming a right triangle, with l_k being the hypotenuse. The vertical component is labeled Delta y_k while the horizontal component is labeled Delta x.   "
},
{
  "id": "fig-ArcLength-3",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#fig-ArcLength-3",
  "type": "Figure",
  "number": "6.5.5",
  "title": "",
  "body": "   A curvy, blue function labeled f(x) plotted from a starting point (at x=a) to some ending point (at x=b). Along the way, there are two more points forming an interval from x=x_k to x=x_(k+1). These two points are connected by a straight, dashed line labeled l_k. There is a green point on the subinterval labeled (x_k^*, f(x_k^*)) with a tangent line formed in green. It runs almost parallel to the dashed line.   "
},
{
  "id": "def-ArcLength",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#def-ArcLength",
  "type": "Definition",
  "number": "6.5.6",
  "title": "Length of a Curve.",
  "body": " Length of a Curve   If is continuous on the interval and differentiable on , then the length of the curve from to is: .   "
},
{
  "id": "subsec-ArcLength-21",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#subsec-ArcLength-21",
  "type": "Example",
  "number": "6.5.7",
  "title": "",
  "body": "  Find an integral expression representing the length of the following curves.     The curve from to .    Since , then we can construct the following integral: Instead of worrying about actually evaluating this integral, we'll leave it like this.  If you do want to fiddle with this integral, than it might be helpful to note that we can re-write it:       The curve from to .    We know that , so we can construct the following integral: We can leave this integral like this for now.  Similar to the first example, though, we can re-write this if you'd like to explore it more!     "
},
{
  "id": "fig-SurfaceArea-1",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#fig-SurfaceArea-1",
  "type": "Figure",
  "number": "6.5.8",
  "title": "",
  "body": "   A blue curve labeled f(x) spanning from a point at x=a to a point at x=b. The curve is above the x-axis.   "
},
{
  "id": "fig-SurfaceArea-2",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#fig-SurfaceArea-2",
  "type": "Figure",
  "number": "6.5.9",
  "title": "",
  "body": "   The same blue curve f(x). There are two more points along the curve connected by a straight line, and a shaded in trapezoid spanning from the diagonal line to the x-axis. The diagonal line of the trapezoid is labeled l_k, while the bottom spans from x_k to x_(k+1) and is labeled Delta x.   "
},
{
  "id": "fig-SurfaceArea-3",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#fig-SurfaceArea-3",
  "type": "Figure",
  "number": "6.5.10",
  "title": "",
  "body": "   A vase-like shape formed by the blue curve f(x) being revolved around the x-axis. The trapezoid is still pictured, and we can see the circular curves formed when it revolves around the x-axis. It creates a slice that looks like a trapezoidal-cylinder type shape.   "
},
{
  "id": "fig-SurfaceArea-4",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#fig-SurfaceArea-4",
  "type": "Figure",
  "number": "6.5.11",
  "title": "",
  "body": " The th frustum-shaped slice.   The kth slice, looking like a trapezoidal-cylinder type shape, with the radius on one side bigger than the other.   "
},
{
  "id": "fig-SurfaceArea-5",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#fig-SurfaceArea-5",
  "type": "Figure",
  "number": "6.5.12",
  "title": "",
  "body": "   The solid formed by f(x) being revolved around, and the kth slice visualized. There is also a green arrow pointing from the x-axis to a point on the kth interval labeled (x_k^*, f(x_k^*)) acting as a radius of the sliced solid.   "
},
{
  "id": "def-SurfaceArea",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#def-SurfaceArea",
  "type": "Definition",
  "number": "6.5.13",
  "title": "Surface Area.",
  "body": " Surface Area   Let is continuous with on the interval and differentiable on . If the region bounded by and the -axis from to is revolved around the -axis, then the surface area of the resulting solid is: .   "
},
{
  "id": "ex-ArcLengthSurfaceArea-1",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#ex-ArcLengthSurfaceArea-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  The formula for arc length of the function on the interval is . Explain how this definition is built, using the slice-and-sum method. Make sure to explain how we the Pythagorean Theorem is involved.   "
},
{
  "id": "ex-ArcLengthSurfaceArea-2",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#ex-ArcLengthSurfaceArea-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Why do we use in the formula for arc length?   "
},
{
  "id": "ex-ArcLengthSurfaceArea-3",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#ex-ArcLengthSurfaceArea-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  For each of the following curves on intervals, evaluate the arc length.      on        on        on     "
},
{
  "id": "ex-ArcLengthSurfaceArea-4",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#ex-ArcLengthSurfaceArea-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  For each of the following curves on intervals, set up an integral representing the arc length. Do not evaluate.      on        on        on     "
},
{
  "id": "ex-ArcLengthSurfaceArea-5",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#ex-ArcLengthSurfaceArea-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Why is the formula for arc length seemingly involved in the integral formula for surface area of a solid of revolution?   "
},
{
  "id": "ex-ArcLengthSurfaceArea-6",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#ex-ArcLengthSurfaceArea-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  In the integral formula , what does represent? What about ?   "
},
{
  "id": "ex-ArcLengthSurfaceArea-7",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#ex-ArcLengthSurfaceArea-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  For each of the following curves and intervals, find the surface area of the solid formed when the curve is revolved around the -axis.      on        on        on     "
},
{
  "id": "ex-ArcLengthSurfaceArea-8",
  "level": "2",
  "url": "sec-ArcLengthSurfaceArea.html#ex-ArcLengthSurfaceArea-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  For each of the following curves and intervals, set up the surface area of the solid formed when the curve is revolved around the -axis. Do not evaluate the integral.      on        on     "
},
{
  "id": "sec-OtherApplications",
  "level": "1",
  "url": "sec-OtherApplications.html",
  "type": "Section",
  "number": "6.6",
  "title": "Other Applications of Integrals",
  "body": " Other Applications of Integrals   We should pause and think (even briefly) about the whole point of this chapter.  Do you think you will need to know how to calculate the volume of a solid of revolution?  Is being able to think about the surface area of a solid of revolution important?  Are you going to need to calculate a bunch of arc lengths constantly in your other classes, jobs, or spare time?  No. Probably not. It's fun to think about this stuff, but the goal is not really the formulas: it's the construction.  What we really should be leaving this chapter with is a renewed view of what a definite integral is . After , we probably thought about a definite integral as a measurement of the (signed) area under the curve (bounded between the curve and the -axis). Hopefully now, though, we have a deeper view of the definite integral through this slice-and-sum process.  A definite integral is an accumulation of some function outputs multiplied by the space between the inputs.  So when we do move past these topics into other classes, jobs, or your spare time, then you will run into formulas involving definite integrals. Hopefully, based on this chapter, we have the tools to deconstruct those formulas to find out what they are measuring and how they are measuring it.  To end the chapter, let's look at some applications of definite integrals into formulas from other academic fields.    Physics Application: Mass  Let's consider some object made out of a material with a constant density. To calculate the mass of the object, we need to know the size (the volume of the object) and the density, and then we can multiply: . We've seen how we can use the slice-and-sum formula to calculate volumes by slicing the object into thin pieces and approximating the volume by multiplying the cross-sectional area by the thickness of the slice: . We can easily construct an integral formula for the mass of an object now! We just need to find some measurement of the mass of a single slice of an object, and then start summing until we end up with a definite integral! So, for an object spanning from to with density, , we have: This is great! We can easily extend this to other situations, as well.  Imagine if the density of our object isn't constant. Maybe we have some metal alloy, where the mixture of the metal changes as we traverse through the object. This variable density can be represented, then, as . We can replace the constant with and then eventually to get: .   Mass of an Object   For some solid spanning from to where is the cross-sectional area of the object at and is the density of the object at , then the total mass of the object is: .    For very thin objects, like wires, we can not consider the cross-sectional area and simply use what we call the linear density : measures the amount of mass per unit length (instead of mass per cubic unit of volume). In this case, our formula changes.   Mass of a Thin Wire   For some thin object (like a wire) spanning from to , then if measures the mass per unit of length ( is a linear density function), then the mass of the object is: .      For each of the following objects, set up an integral expression to calculate the mass. Evaluate the integrals!     A thin wire that is cm long with a density function , where measures the density of the wire at in g\/cm.     The mass of the wire is g.      A thin wire that is cm long, with an unknown density. We assume that the density changes linearly from one end to the other, with the measured density at both ends being g\/cm and g\/cm.    Construct the density function using two points: and . You could switch the orders and use and as well. What is the linear function connecting these points?    We'll use the points and to construct . Now we can integrate: So the mass of the wire is g.       Physics Application: Work   Another example of a measurement found in physics contexts is Work. Work is, generally, the amount energy transferred to (or from, depending on perspective) an object by some force across some distance or displacement. In general, we can use the slice-and-sum process when the force applied to our object is some function of the position:    Work Required   If is a function measuring the force applied to an object at some -value in the interval , then the work done to move the object across the interval is: .    In many contexts, we can notice that the force being applied to the object is dependent on the position of the object along its path. For instance, in the 1600's, British physicist Robert Hooke claimed (and proved) that the force required to stretch or compress a spring is directly proportional to the distance that it is away from equilibrium (the position the spring naturally rests in).    Work: Springs  We'll first look at the springs, since the force functions are relatively simple. Robert Hooke's claim (Hooke's Law) says that the force function for a spring is always in the form where is just some constant proportion connecting distance to the force required for that particular spring.    Calculate the work required to stretch or compress the following springs.     A spring stretched to 0.1 m past its equilibrium position, where a Force of is applied, measured in N.     So the work required to stretch the spring is 0.9 J.      A force of 81 N was applied to a spring to stretch it 0.8 m from its equilibrium position. Calculate the work required to stretch it 0.2 m further.     So the work required to stretch the spring is 18.225 J.       Work: Pumping Problems  We can explore another class of examples with some more complications in the setup. We still will be thinking about force and distance, but we can re-frame them with a new example.  What if we pump liquid out of the top of a tank? How does that work? There are some fun things to think about. Let's visualize this tank below, and then talk through the construction of the formula.   Diagram of a pumping problem.   (for accessibility)    We can see a couple of notable things here:   We're going to slice up the liquid. So from , the bottom of the tank, up to , the height at the top of the volume of liquid, we will create slices (each at some  -value) with representing the thickness of the slice.    The distance portion of the formula is not represented by the width of a subinterval from the whole distance. Instead, we'll note that liquid at the top of the tank needs to be pumped a shorter distance than the liquid near the bottom of the tank. The distance part, then, is a function based on the -value. So, if is the height of the tank, then is the distance that the liquid in the th slice will move.    To calculate the force required to pump the liquid in the th slice, we need to know the mass of the liquid and the acceleration needed to pump the liquid out of the tank. The acceleration will be whatever the acceleration needed to overcome gravity: we'll use , the positive gravitational constant. For the mass, we'll think about the density of the liquid (a constant, ) and the volume of the th slice.    To find the volume of the th slice, we'll think about the cross-sectional area of the slice at (we'll call it ) multiplied by the thickness, .   This gives us the following in the slice-and-sum process: So, when we consider these pumping problems, we really need to take note of only a few things:   What are the limits of integration? Where is the liquid we're pumping (based on -value heights)?    What is the geometry of our tank? When we consider a single slice of the liquid, what kind of shape will we have, and how do we calculate the cross-sectional area?       For each of the following tanks, calculate the work required to empty the liquid from the tank by pumping it through the top of the tank.     Consider a cylindrical tank, similar to the one in . The radius of the tank is 0.5 m, and the height is 2 m. The tank is half full of some liquid with density .    The cross sectional area is: Then the limits of integration will be from to , since the height is 2 m and the liquid, then, reaches to 1 m.       Now box-shaped tank, where the base of the tank is 1 meters by 3 meters and the height is 2 meter. The tank is filled all the way to the top with some liquid with density .    The cross sectional area is: Then the limits of integration will be from to , since the height is 2 m and the liquid, then, reaches to the top.       Consider a conical tank, where the radius of the base is 3 meters and the cone is 2 meters tall. The liquid is filled up to the 1.5 meter mark.    Finding the cross-sectional area function will be a bit harder. It is the area of a circle, but the radius changes based on the -value. At , we have . At , we have . So the rate of change of the radius is -1.5 meters per meter of height. The limits of integration are from to :           Consider a thin wire whose density is variable and is written as on some interval. For each of the following density functions (and their intervals), build and evaluate an integral representing the mass of the wire.      on        on        Consider a spring that requires 100 N of force to stretch the spring 0.3 m from its equilibrium position.     Using Hooke's Law, find the spring constant such that .      How much work is required to stretch the spring 0.4 m from its equilibrium position?      How much work is required to stretch the spring another 0.1 m after this?       Consider a spring that is stretched 0.1 m from its equilibrium position. It requires 10 N to stretch it an additional 0.2 m.     Using Hooke's Law, find the spring constant such that .      How much work is required to stretch the spring 1 m from its equilibrium position?      How much work is required to compress the spring 0.2 m from is equilibrium position?       For each tank, assume the density of the liquid is , and set up and evaluate the integral representing the work required to pump the liquid out of the top of the tank.     A square-based tank that is 2 meters tall with a 0.5 m 0.5 m base, full of liquid.      A cylindrical tank where the base has a radius of 1 m and the height is 3 m, half-full of liquid.      A frustum-shaped tank where the bottom radius is 4 m, the top radius is 1 m, the height is 2 m, and the tank is filled to a height of m.      "
},
{
  "id": "thm-MassOfObject",
  "level": "2",
  "url": "sec-OtherApplications.html#thm-MassOfObject",
  "type": "Theorem",
  "number": "6.6.1",
  "title": "Mass of an Object.",
  "body": " Mass of an Object   For some solid spanning from to where is the cross-sectional area of the object at and is the density of the object at , then the total mass of the object is: .   "
},
{
  "id": "subsec-Mass-5",
  "level": "2",
  "url": "sec-OtherApplications.html#subsec-Mass-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear density "
},
{
  "id": "thm-MassOfThinWire",
  "level": "2",
  "url": "sec-OtherApplications.html#thm-MassOfThinWire",
  "type": "Theorem",
  "number": "6.6.2",
  "title": "Mass of a Thin Wire.",
  "body": " Mass of a Thin Wire   For some thin object (like a wire) spanning from to , then if measures the mass per unit of length ( is a linear density function), then the mass of the object is: .   "
},
{
  "id": "subsec-Mass-7",
  "level": "2",
  "url": "sec-OtherApplications.html#subsec-Mass-7",
  "type": "Example",
  "number": "6.6.3",
  "title": "",
  "body": "  For each of the following objects, set up an integral expression to calculate the mass. Evaluate the integrals!     A thin wire that is cm long with a density function , where measures the density of the wire at in g\/cm.     The mass of the wire is g.      A thin wire that is cm long, with an unknown density. We assume that the density changes linearly from one end to the other, with the measured density at both ends being g\/cm and g\/cm.    Construct the density function using two points: and . You could switch the orders and use and as well. What is the linear function connecting these points?    We'll use the points and to construct . Now we can integrate: So the mass of the wire is g.    "
},
{
  "id": "thm-Work",
  "level": "2",
  "url": "sec-OtherApplications.html#thm-Work",
  "type": "Theorem",
  "number": "6.6.4",
  "title": "Work Required.",
  "body": " Work Required   If is a function measuring the force applied to an object at some -value in the interval , then the work done to move the object across the interval is: .   "
},
{
  "id": "subsubsec-Springs-3",
  "level": "2",
  "url": "sec-OtherApplications.html#subsubsec-Springs-3",
  "type": "Example",
  "number": "6.6.5",
  "title": "",
  "body": "  Calculate the work required to stretch or compress the following springs.     A spring stretched to 0.1 m past its equilibrium position, where a Force of is applied, measured in N.     So the work required to stretch the spring is 0.9 J.      A force of 81 N was applied to a spring to stretch it 0.8 m from its equilibrium position. Calculate the work required to stretch it 0.2 m further.     So the work required to stretch the spring is 18.225 J.    "
},
{
  "id": "fig-Pump",
  "level": "2",
  "url": "sec-OtherApplications.html#fig-Pump",
  "type": "Figure",
  "number": "6.6.6",
  "title": "",
  "body": " Diagram of a pumping problem.   (for accessibility)   "
},
{
  "id": "subsubsec-Pumping-6",
  "level": "2",
  "url": "sec-OtherApplications.html#subsubsec-Pumping-6",
  "type": "Example",
  "number": "6.6.7",
  "title": "",
  "body": "  For each of the following tanks, calculate the work required to empty the liquid from the tank by pumping it through the top of the tank.     Consider a cylindrical tank, similar to the one in . The radius of the tank is 0.5 m, and the height is 2 m. The tank is half full of some liquid with density .    The cross sectional area is: Then the limits of integration will be from to , since the height is 2 m and the liquid, then, reaches to 1 m.       Now box-shaped tank, where the base of the tank is 1 meters by 3 meters and the height is 2 meter. The tank is filled all the way to the top with some liquid with density .    The cross sectional area is: Then the limits of integration will be from to , since the height is 2 m and the liquid, then, reaches to the top.       Consider a conical tank, where the radius of the base is 3 meters and the cone is 2 meters tall. The liquid is filled up to the 1.5 meter mark.    Finding the cross-sectional area function will be a bit harder. It is the area of a circle, but the radius changes based on the -value. At , we have . At , we have . So the rate of change of the radius is -1.5 meters per meter of height. The limits of integration are from to :     "
},
{
  "id": "ex-OtherApplications-1",
  "level": "2",
  "url": "sec-OtherApplications.html#ex-OtherApplications-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Consider a thin wire whose density is variable and is written as on some interval. For each of the following density functions (and their intervals), build and evaluate an integral representing the mass of the wire.      on        on     "
},
{
  "id": "ex-OtherApplications-2",
  "level": "2",
  "url": "sec-OtherApplications.html#ex-OtherApplications-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Consider a spring that requires 100 N of force to stretch the spring 0.3 m from its equilibrium position.     Using Hooke's Law, find the spring constant such that .      How much work is required to stretch the spring 0.4 m from its equilibrium position?      How much work is required to stretch the spring another 0.1 m after this?    "
},
{
  "id": "ex-OtherApplications-3",
  "level": "2",
  "url": "sec-OtherApplications.html#ex-OtherApplications-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Consider a spring that is stretched 0.1 m from its equilibrium position. It requires 10 N to stretch it an additional 0.2 m.     Using Hooke's Law, find the spring constant such that .      How much work is required to stretch the spring 1 m from its equilibrium position?      How much work is required to compress the spring 0.2 m from is equilibrium position?    "
},
{
  "id": "ex-OtherApplications-4",
  "level": "2",
  "url": "sec-OtherApplications.html#ex-OtherApplications-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  For each tank, assume the density of the liquid is , and set up and evaluate the integral representing the work required to pump the liquid out of the top of the tank.     A square-based tank that is 2 meters tall with a 0.5 m 0.5 m base, full of liquid.      A cylindrical tank where the base has a radius of 1 m and the height is 3 m, half-full of liquid.      A frustum-shaped tank where the bottom radius is 4 m, the top radius is 1 m, the height is 2 m, and the tank is filled to a height of m.    "
},
{
  "id": "sec-ImproperIntegrals",
  "level": "1",
  "url": "sec-ImproperIntegrals.html",
  "type": "Section",
  "number": "7.1",
  "title": "Improper Integrals",
  "body": " Improper Integrals   We're going to think a bit about integration with a twist: what happens when our \"definite\" integrals can't actually be evaluated? First, let's try to sink ourselves back into the context we've been in for a while now: what kinds of problems have we encountered so far, and how do we use our calculus intuition to get around those problems?   Remembering a Theme so Far    Let's say that we want to find what the -values of some function are when the -values are \"infinitely close to\" some value, . Since there is no single -value that is \"infinitely close to\" that we can evaluate at, we need to do something else. How do we do this?      Let's say that we want to find the rate of change of some function instantaneously at a point with . We can't find a rate of change unless we have two points, since we need to find some differences in the outputs and inputs. How do we do this?      Suppose you want to find the total area, covered by an infinite number of infinitely thin rectangles. You have a formula for finding the dimensions and areas for some finite number of rectangles, but how do we get an infinite number of them?      Can you find the common calculus theme in each of these scenarios?     So moving forward, we want to remember how we typically have solved these problems. Now, let's try to identify the types of problems with integrals that we need to figure our way around.   Remembering the Fundamental Theorem of Calculus   We want to think about generalizing our notion of integrals a bit. So in this activity, section, we're going to think about some of the requirements for the Fundamental Theorem of Calculus and try to loosen them up a bit to see what happens. We'll try to construct meaningful approaches to these situations that fit our overall goals of calculating area under a curve.  This practice, in general, is a really good and common mathematical process: taking some result and playing with the requirements or assumptions to see what else can happen. So it might feel like we're just fiddling with the \"What if?\" questions, but what we're actually doing is good mathematics!     What does the Fundamental Theorem of Calculus say about evaluating the definite integral ?      What do we need to be true about our setup, our function, etc. for us to be able to apply this technique to evaluate ?     We are going to introduce the idea of \"Improper Integrals\" as kind-of-but-not-quite definite integrals that we can evaluate. They are going to violate the requirements for the Fundamental Theorem of Calculus, but we'll work to salvage them in meaningful ways.    This should build a pretty good idea of a new \"class\" of integrals: ones that aren't quite definite integrals that we can evaluate with the Fundamental Theorem of Calculus, but ones that we can use limits to get at.    Improprt Integrals   Improper Integral   An integral is an improper integral if it is an extension of a definite integral whose integrand or limits of integration violate a requirement in one of two ways:   The interval that we integrate the function over is unbounded in width, or infinitely wide.    The integrand is unbounded in height, or infinitely tall, somewhere on the interval that we integrate over.       With this definition, we can think about the strategies that we got from : we're going to identify the problems in our integral (infinite width of the interval or infinite height of the integrand function) and use a limit!  Before we formalize that, though, let's try to think about how this works by being really explicit about what this limit is actually doing.   Approximating Improper Integrals   In this activity, we're going to look at two improper integrals:                 First, let's just clarify to ourselves what it means for an integral to be improper. Why are each of these integrals improper? Be specific!      Let's focus on first. We're going to look at the slightly different integral: . As long as is some real number with , then our function is continuous and bounded on , and so we can evaluate this integral: where is an antiderivative of .  Find and antiderivative, .    You'll need to use -substitution, with and .    You should be thinking about finding an antiderivative using an indefinite integral: .      Now we're going to evaluate some areas for different values of . Use your antiderivative from above!   Let's start with making . So we're going to evaluate:     Now let . Evaluate:     Now let . Evaluate:          Based on what you found, what do you think is happening when to the definite integral ?      Ok, we're going to switch our focus to the other improper integral, . again, we'll look at a slightly different integral: . As long as is some real number with , then our function is continuous and bounded on , and so we can evaluate this integral: where is an antiderivative of . We can just use the same antiderivative as before!  We're going to evaluate this intergal for different values of again, but this time we'll use values that are close to , but slightly bigger, since we want to be in the interval .   Let's start with making . So we're going to evaluate:     Now let . Evaluate:     Now let . Evaluate:          Based on what you found, what do you think is happening when to the definite integral ?     We can think about putting this a bit more generally into limit notation, but we'll get to this later.    Ok, let's formalize these limits with some strategies for evaluating improper integrals!    Strategies for Evaluating Improper Integrals   Evaluating Improper Integrals (Infinite Width)  For a function that is continuous on , we can evaluate the improper integral : .  If is continuous on , we can evaluate the improper integral : .  Finally, if is continuous on and is some real number, then we can evaluate the improper integral :      Evaluate the improper integral by evaluating the limit: . Try to interpret this limit. What does it mean if this limit doesn't exist? What does it mean if the limit does exist? What does the actual number represent?     Evaluating Improper Integrals (Infinite Height)  For a function that has an unbounded discontinuity (a vertical asymptote) at with , but is otherwise continuous on , then we can evaluate the improper integrals:      Evaluate the improper integral by evaluating the limit: . Try to interpret this limit. What does it mean if this limit doesn't exist? What does it mean if the limit does exist? What does the actual number represent?    Ok, let's note that we can classify these improper integrals into two categories. We have already classified them based on the reason that they're improper. But now we can also classify them based on the outcome of the limit:   Improper integrals (of any type) whose limit exists.    Improper integrals (of any type) where the limit doesn't exist.   Let's define a term for this, so that our classification isn't so wordy.    Convergence and Divergence of an Improper Integral   Convergence of an Improper Integral   We say that an improper integral converges if the limit of the appropriate definite integral exists. If the limit does not exist, then we say that the improper integral diverges .    All we've done here is added some language: we'll say that an improper integral diverges if the limit doesn't exist. And if the limit exists, we'll say that the improper integral \"converges to .\"     Explain what it means for an integral to be improper. What kinds of issues are we looking at?    Give an example of an integral that is improper due to an unbounded or infinite interval of integration (infinite width).    Give an example of an integral that is improper due to an unbounded integrand (infinite height).    What does it mean for an improper integral to \"converge?\" How does this connect with limits?    What does it mean for an improper integral to \"diverge?\" How does this connect with limits?    Why do we need to use limits to evaluate improper integrals?     For each of the following improper integrals:   Explain why the integral is improper. Be specific, and point out the issues in detail.    Set up the integral using the correct limit notation.    Antidifferentiate and evaluate the limit.    Explain whether the integral converges or diverges.                                                  One of the big ideas in probability is that for a curve that defines a probability density function, the area under the curve needs to be 1. What value of makes the function a valid probability distribution on the interval ?     Let's consider the integral . This is a difficult integral to evaluate!     First, compare to using an inequality: which one is bigger?      Second, use this inequality to compare the function to for : which one is bigger? Again, use your inequality from above to help!      Now compare to . Which one is bigger?      Explain how we can use this result to make a conclusion about whether our integral, converges or diverges.      "
},
{
  "id": "act-RememberingTheme",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#act-RememberingTheme",
  "type": "Activity",
  "number": "7.1.1",
  "title": "Remembering a Theme so Far.",
  "body": " Remembering a Theme so Far    Let's say that we want to find what the -values of some function are when the -values are \"infinitely close to\" some value, . Since there is no single -value that is \"infinitely close to\" that we can evaluate at, we need to do something else. How do we do this?      Let's say that we want to find the rate of change of some function instantaneously at a point with . We can't find a rate of change unless we have two points, since we need to find some differences in the outputs and inputs. How do we do this?      Suppose you want to find the total area, covered by an infinite number of infinitely thin rectangles. You have a formula for finding the dimensions and areas for some finite number of rectangles, but how do we get an infinite number of them?      Can you find the common calculus theme in each of these scenarios?    "
},
{
  "id": "act-RememberingFTOC",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#act-RememberingFTOC",
  "type": "Activity",
  "number": "7.1.2",
  "title": "Remembering the Fundamental Theorem of Calculus.",
  "body": " Remembering the Fundamental Theorem of Calculus   We want to think about generalizing our notion of integrals a bit. So in this activity, section, we're going to think about some of the requirements for the Fundamental Theorem of Calculus and try to loosen them up a bit to see what happens. We'll try to construct meaningful approaches to these situations that fit our overall goals of calculating area under a curve.  This practice, in general, is a really good and common mathematical process: taking some result and playing with the requirements or assumptions to see what else can happen. So it might feel like we're just fiddling with the \"What if?\" questions, but what we're actually doing is good mathematics!     What does the Fundamental Theorem of Calculus say about evaluating the definite integral ?      What do we need to be true about our setup, our function, etc. for us to be able to apply this technique to evaluate ?     We are going to introduce the idea of \"Improper Integrals\" as kind-of-but-not-quite definite integrals that we can evaluate. They are going to violate the requirements for the Fundamental Theorem of Calculus, but we'll work to salvage them in meaningful ways.   "
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
  "id": "Act-ApproximateImproperIntegrals",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#Act-ApproximateImproperIntegrals",
  "type": "Activity",
  "number": "7.1.3",
  "title": "Approximating Improper Integrals.",
  "body": " Approximating Improper Integrals   In this activity, we're going to look at two improper integrals:                 First, let's just clarify to ourselves what it means for an integral to be improper. Why are each of these integrals improper? Be specific!      Let's focus on first. We're going to look at the slightly different integral: . As long as is some real number with , then our function is continuous and bounded on , and so we can evaluate this integral: where is an antiderivative of .  Find and antiderivative, .    You'll need to use -substitution, with and .    You should be thinking about finding an antiderivative using an indefinite integral: .      Now we're going to evaluate some areas for different values of . Use your antiderivative from above!   Let's start with making . So we're going to evaluate:     Now let . Evaluate:     Now let . Evaluate:          Based on what you found, what do you think is happening when to the definite integral ?      Ok, we're going to switch our focus to the other improper integral, . again, we'll look at a slightly different integral: . As long as is some real number with , then our function is continuous and bounded on , and so we can evaluate this integral: where is an antiderivative of . We can just use the same antiderivative as before!  We're going to evaluate this intergal for different values of again, but this time we'll use values that are close to , but slightly bigger, since we want to be in the interval .   Let's start with making . So we're going to evaluate:     Now let . Evaluate:     Now let . Evaluate:          Based on what you found, what do you think is happening when to the definite integral ?     We can think about putting this a bit more generally into limit notation, but we'll get to this later.   "
},
{
  "id": "subsec-ImproperIntegralStrategies-3",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#subsec-ImproperIntegralStrategies-3",
  "type": "Example",
  "number": "7.1.2",
  "title": "",
  "body": "  Evaluate the improper integral by evaluating the limit: . Try to interpret this limit. What does it mean if this limit doesn't exist? What does it mean if the limit does exist? What does the actual number represent?   "
},
{
  "id": "subsec-ImproperIntegralStrategies-5",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#subsec-ImproperIntegralStrategies-5",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "  Evaluate the improper integral by evaluating the limit: . Try to interpret this limit. What does it mean if this limit doesn't exist? What does it mean if the limit does exist? What does the actual number represent?   "
},
{
  "id": "def-ConvergenceImproperIntegral",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#def-ConvergenceImproperIntegral",
  "type": "Definition",
  "number": "7.1.4",
  "title": "Convergence of an Improper Integral.",
  "body": " Convergence of an Improper Integral   We say that an improper integral converges if the limit of the appropriate definite integral exists. If the limit does not exist, then we say that the improper integral diverges .   "
},
{
  "id": "ex-ImproperIntegrals-1",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Explain what it means for an integral to be improper. What kinds of issues are we looking at?  "
},
{
  "id": "ex-ImproperIntegrals-2",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Give an example of an integral that is improper due to an unbounded or infinite interval of integration (infinite width).  "
},
{
  "id": "ex-ImproperIntegrals-3",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Give an example of an integral that is improper due to an unbounded integrand (infinite height).  "
},
{
  "id": "ex-ImproperIntegrals-4",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " What does it mean for an improper integral to \"converge?\" How does this connect with limits?  "
},
{
  "id": "ex-ImproperIntegrals-5",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": " What does it mean for an improper integral to \"diverge?\" How does this connect with limits?  "
},
{
  "id": "ex-ImproperIntegrals-6",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " Why do we need to use limits to evaluate improper integrals?  "
},
{
  "id": "ex-ImproperIntegrals-7",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  For each of the following improper integrals:   Explain why the integral is improper. Be specific, and point out the issues in detail.    Set up the integral using the correct limit notation.    Antidifferentiate and evaluate the limit.    Explain whether the integral converges or diverges.                                                "
},
{
  "id": "ex-ImproperIntegrals-8",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": " One of the big ideas in probability is that for a curve that defines a probability density function, the area under the curve needs to be 1. What value of makes the function a valid probability distribution on the interval ?  "
},
{
  "id": "ex-ImproperIntegrals-9",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#ex-ImproperIntegrals-9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Let's consider the integral . This is a difficult integral to evaluate!     First, compare to using an inequality: which one is bigger?      Second, use this inequality to compare the function to for : which one is bigger? Again, use your inequality from above to help!      Now compare to . Which one is bigger?      Explain how we can use this result to make a conclusion about whether our integral, converges or diverges.    "
},
{
  "id": "sec-MoreuSubstitution",
  "level": "1",
  "url": "sec-MoreuSubstitution.html",
  "type": "Section",
  "number": "7.2",
  "title": "More on <span class=\"process-math\">\\(u\\)<\/span>-Substitution",
  "body": " More on -Substitution   We're going to do some more thinking about an integration topic that we've technically already introduced in . We're going to do a bit more with it now, and try to build some more flexibility, so definitely review that introduction section if you'd like!  Before moving on, we should work through these few examples, just to make sure we remember what we're up to.   Recapping -Substitution   We're going to consider a few integrals, and work through each of the questions for all integrals.                           For each integral, explain why -substitution is a good choice. How can you tell, just by looking at the integral, that this strategy will be a reasonable thing to try?      For each integral, explain your choice of , what that means for how we define .      For each integral, is your definition of present in the integrand function? How do you go about making this substitution when the integrand function isn't set up perfectly?      Finish the substitution and integration, and substitute back to the original variable.       Variable Substitution in Integrals  In -substitution, we focus a lot on one specific kind of structure: composition in our integrand function and\/or some function-derivative pairing present. We do this because we're undo-ing the . Variable substitutions can be much more general in their goal, but this is a good one to focus on because it solves a specific problem that we might run into while integrating.   Strategy for -Substitution   Goal: undo the Chain Rule, or antidifferentiate functions with composition.   Process: We'll translate to by labeling some \"inside\" function as , and substituting its derivative, .   But we can use -substitution more generally as a kind of grouping mechanism.   Turn Around Problems   The two integrals that we're going to look at are \"just\" some -substitution problems, but I like to call integrals like these turn-around problems. We'll see why!     Consider the integral: . First, explain why -substitution is reasonable here.    Do you see composition? A function inside of something?      Identify for your chosen -substitution. When you substitute, you should notice that there are some extra bits in this integrand function that have not been assigned to be translated over to be written in terms of . Which parts?    If we let , then .       We need to think about how to write in terms of . Luckily, we already have everything we need! We have defined a link between the variable and the variable. We defined it as being written as some function of , but can we \"turn around\" that link to write in terms of ?    We let . Solve this for       Substitute the integral to be fully written in terms of .           Before antidifferentiating, compare this integral with the original one. Specifically thinking about how we might multiply, describe the differences between the integrals with regard to composition and re-writing our integrand.  Then, go ahead and use this nicely re-written version to antidifferentiate and substitute back to .           Apply this same strategy to the following integral: . This integral might be a bit trickier to find the composition in order to identify the -substitution! Give some things a try!     Since this antiderivative has an extra constant (the being added to ), we can write a smaller version of this by combining the with the constant of integration: .      Compare your integral in terms of with the substituted version, in terms of . Why was the second one so much easier to think about or re-write?     In both of these examples, we got around not being able to multiply (using the distributive property) or divide (by splitting up our fraction into two with common denominators) by grouping some terms together with our substitution. Once we wrote as in both of these, we were able to distribute across the two other terms, and we were able to divide by through splitting the single fraction into two fractions.  The term turn-around problem is a good one because we're turning around two things:   The substitution itself, by solving for instead of .    The structure of the integral, by grouping into one term, and expanding into two terms, . This allowed us to change how the algebra would work, making it much friendlier!       Find the following indefinite integral:     Try letting so that . Then we can say that .     There are some ways of re-writing this antiderivative family: we could try to group up all of the constant terms by multiplying everything out. Feel free to do this, but it is completely unnecessary.    This specific example is an interesting one, because we actually have a couple of different options with how we approach it. This is true in a lot of cases: there is very rarely only a single approach to an integral that will eventually work out. Sometimes there are approaches or more techniques that are more obvious to some people, and sometimes there are approaches that seem more easy\/difficult for some people. But even still, we are often presented with many choices we could make in how we approach our integration.  Moving forward in this chapter, we'll present a whole host of strategies for how we might integrate different types of functions and how we might approach different structures that we see in the integrals we'll look at. We'll try to balance a difficult duality:   There is rarely no single \"right\" way to do things! We can't summarize things with strongly worded rules like \"if you function looks like this, then you have to do this to antidifferentiate.\"    We would like to build some good intuition, and so having some tried-and-true strategies to fall back on will help! We can try to identify some intuitive strategies, even if they're not the only ones that will work.     All of this to simply say: we are going to present a lot of problems with a lot of solutions, and there simply isn't enough space to write out alternative approaches for each one. We will try to re-visit some integrals to think about alternative strategies when we are able to, though!   "
},
{
  "id": "act-uSubRecap",
  "level": "2",
  "url": "sec-MoreuSubstitution.html#act-uSubRecap",
  "type": "Activity",
  "number": "7.2.1",
  "title": "Recapping <span class=\"process-math\">\\(u\\)<\/span>-Substitution.",
  "body": " Recapping -Substitution   We're going to consider a few integrals, and work through each of the questions for all integrals.                           For each integral, explain why -substitution is a good choice. How can you tell, just by looking at the integral, that this strategy will be a reasonable thing to try?      For each integral, explain your choice of , what that means for how we define .      For each integral, is your definition of present in the integrand function? How do you go about making this substitution when the integrand function isn't set up perfectly?      Finish the substitution and integration, and substitute back to the original variable.    "
},
{
  "id": "act-TurnAround",
  "level": "2",
  "url": "sec-MoreuSubstitution.html#act-TurnAround",
  "type": "Activity",
  "number": "7.2.2",
  "title": "Turn Around Problems.",
  "body": " Turn Around Problems   The two integrals that we're going to look at are \"just\" some -substitution problems, but I like to call integrals like these turn-around problems. We'll see why!     Consider the integral: . First, explain why -substitution is reasonable here.    Do you see composition? A function inside of something?      Identify for your chosen -substitution. When you substitute, you should notice that there are some extra bits in this integrand function that have not been assigned to be translated over to be written in terms of . Which parts?    If we let , then .       We need to think about how to write in terms of . Luckily, we already have everything we need! We have defined a link between the variable and the variable. We defined it as being written as some function of , but can we \"turn around\" that link to write in terms of ?    We let . Solve this for       Substitute the integral to be fully written in terms of .           Before antidifferentiating, compare this integral with the original one. Specifically thinking about how we might multiply, describe the differences between the integrals with regard to composition and re-writing our integrand.  Then, go ahead and use this nicely re-written version to antidifferentiate and substitute back to .           Apply this same strategy to the following integral: . This integral might be a bit trickier to find the composition in order to identify the -substitution! Give some things a try!     Since this antiderivative has an extra constant (the being added to ), we can write a smaller version of this by combining the with the constant of integration: .      Compare your integral in terms of with the substituted version, in terms of . Why was the second one so much easier to think about or re-write?    "
},
{
  "id": "subsec-VariableSubstitution-7",
  "level": "2",
  "url": "sec-MoreuSubstitution.html#subsec-VariableSubstitution-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "turn-around "
},
{
  "id": "ex-TurnAround",
  "level": "2",
  "url": "sec-MoreuSubstitution.html#ex-TurnAround",
  "type": "Example",
  "number": "7.2.1",
  "title": "",
  "body": "  Find the following indefinite integral:     Try letting so that . Then we can say that .     There are some ways of re-writing this antiderivative family: we could try to group up all of the constant terms by multiplying everything out. Feel free to do this, but it is completely unnecessary.   "
},
{
  "id": "sec-AlgebraicManipulations",
  "level": "1",
  "url": "sec-AlgebraicManipulations.html",
  "type": "Section",
  "number": "7.3",
  "title": "Manipulating Integrands",
  "body": " Manipulating Integrands   We've looked at how to use a variable substitution to antidifferentiate composite functions. We've already seen, though, that sometimes identifying and actually using a helpful substitution can be difficult to do. In this section, we want to introduce some different strategies for noticing and setting up useful substitutions in some specific instances.    Rewriting the Integrand  We're going to look at a few different examples or strategies that revolve around the same idea: we're going to reveal a reasonable function to antidifferentiate, whether its through finding a substitution or putting our function into some other recognizeable form.    For each of the following integrals, re-write the integrand function using some algebraic manipulation, trigonometric identity, or some other strategy. Then, once the integrand function is in a friendlier form, antidifferentiate.          Can you think of a trigonometric identity that can help translate the squared tangent function into some other squared trigonometric function that we recognize as the derivative of something?           Try some factoring! Can you factor and cancel?           Split this fraction into . Then, can you write these two terms as power functions?           This is a hard one an annoying one, and we'll revisit it later with a better strategy, but for now you can notice something nice happen when you multiply the numerator and denominator by : . This strategy is not intuitive, in my opinion: the nice thing to multiply seemingly comes out of nowehere!     Let's look at one more type of example, just to re-iterate what we're thinking about with these re-written functions.   A Negative Exponent   Let's think about this integral: .     Is there any composition in this integral? Pick it out, and either explain or show that using this to guide your substitution will not be helpful.    Notice that is composed inside of the exponential function. Try a substitution with .      What does mean? What does mean?      Re-write the integral, specifically focusing on the negative exponent. You should find that the function looks worse! How can you clean that up?    Re-write as , giving you: .    Either add the fractions in the denominator or multiply the whole fraction by .    You should have an integral that looks like: .      Why is this new integral set up so much better for the purpose of -substitution? How could we tell this just by looking at the initial integral?       Re-write the integrand function for , and then integrate using an appropriate substitution.    Try to re-write this integral by noticing that . Then try to make the resulting fraction a bit nicer to look at, since it has a fraction inside of the denominator of another fraction.         This last example is a good one to help us transition into thinking about a whole class of functions: rational functions! As a reminder, these are just polynomials divided by polynomials.    Antidifferentiating Rational Functions  Strategies for antidifferentiating rational functions are just that: strategies. There isn't one consistent rule to use to antidifferentiate these (like there is with derivatives and the Quotient Rule), but we'll find some common tactics to apply and try to build our intuition for noticing the different kinds of structure we can have in these rational functions. All of these strategies are based around cleverly re-writing our rational functions (using some algebraic manipulations) to reveal some structure. We'll try to notice the structure, so that we know what we're trying to reveal.   Integrating a Rational Function Three Ways   We're going to think about the integral: . Let's find 3 different ways of integrating this. This is kind of misleading, since we're actually going to look at 2, since we've already used -substitution to integrate this in .     Let's just notice some things about this rational function.   Are there any vertical asymptotes? How do you know where to find them?    Are there any horizontal asymptotes? How do you know that there aren't ?    When you zoom really far out on the graph of this function, it looks like a different kind of function. What kind of function? Why is that?          There's a vertical asymptote at , since that's where we'd find a limit with the form , like in .    There aren't any horizontal asymptotes! We know that because the degree is larger in the numerator, like in .    This graph looks linear:   This is because the numerator is one degree larger than the denominator. When we divide these two functions, we expect to end up with some sort of linear function and a remainder that approachs 0 as .         Now we're going to re-write the function itself: means we're dividing by . So let's do the division!                                                                 Re-write your integral using this new version of the function. Notice that we haven't done any calculus or antidifferentiating yet. Explain why this new version of this integrand function is easier to antidifferentiate. What do you get?           Let's approach this integral differently. We said earlier that this function is really an \"almost\" linear function in disguise: when we divide the quadratic numerator by a linear denominator, we expect a linear function to be left over. In the long division, we saw this happen! We ended with a linear function and some remainder.  Let's try to uncover this linear function. If we're looking to find what linear functions multiply together to get , then we can try factoring! In order for this factoring to be useful, we want to be able to \"cancel\" out the factor in the denominator. We're really only interested in what linear factor will multiply by to get .   First, explain why there is no linear function factor that accomplishes this.      What if were able to \"almost\" factor this?  If there was a linear factor that multiplied by to get , then the linear portions would multiply together to get . What does this mean about the first linear term of our factor?    We need since .      What does the constant term of our missing factor need to be? We are hoping that whatever it is can multiply by (from ) and combine with the (from the constant multiplied by in our missing factor) to match the in .  What is it?    We need to find where when we multiply we end up with . It should be clear that .  Our missing factor is .      Note that we have not factored ! We almost did: we found two factors: .  How far off is the actual polynomial that we are working with, ?  Write as your two factors plus or minus some remainder.    Find the constant term where: .    Since , we need to add to get .       You should get the same thing that we got from using long division! Great! The rest of the integral will work the same.  Before we end, though, compare this antiderivative to the one we got in . It's different. Why? Is this a problem?    It's only off by a constant! Show this by expanding all of the multiplication in .     This gives us a good approach for whenever division will help us rewrite our rational function as some polynomial and a remainder.  Let's look at two more rational functions: these ones won't be good candidates to use long division, but we'll try to build some intuition for why we will need to re-write one of them to get a substitution that works.   Comparing Two Very Similar Integrals   We're going to compare these two integrals:             Describe why is such a useful choice for the first integral, but not for the second. How do the differences in these two integrals influence this substitution, even though the denominators are the same?    If , then for both integrals. Why is this good for one integral but not the other?      Why would it be useful to have a linear substitution rule (instead of the quadratic one that we picked) for the second integral? Why would that match the structure of the numerator better?  Go ahead and integrate the first integral.           We're going to write the denominator, in a different way, in order to get a linear function composed into something familiar.   Complete the square for this polynomial: that is, find some linear factor and a real number such that . This should feel familiar, since we have already tried to force polynomials to factor cleverly in .    We want to find a constant term so that gives us . Then we can compare the quadratic to to see how far off it is!    We can use since . Then we can write: .      There is an intuitive substitution to pick, since we now have more obvious composition. Pick it. What kind of integral do we end up with and how do we antidifferentiate? Complete this problem!          Going forward, when you see a quadratic denominator in a rational function, what are some things you can think about and strategies you can use, based on what the rest of the function looks like? We want to summarize this a bit!   Integrating Rational Functions  If where is a degree polynomial and is a degree polynomial, then we can think about how we might integrate based on degrees.   If (the degree in the numerator is at least the degree in the denominator), then we can use long division to write as some polynomial with degree and some remainder.    If (the degree of the numerator is one less than the degree of the denominator), then we can try a -substitution where , since the derivative of is a polynomial of degree . If this substitution works, we can antidifferentiate to get some sort of logarithm.  This is not guaranteed to work, but for now (without other strategies), this is something we can think about.    If we can reduce (through some transformation or substitution) to a rational function that is a constant term divided by quadratic function (or if it already is), then we can complete the square in the denominator to get to a form that can be antidifferentiated to an inverse tangent function.      In the last point, we are referencing the strategy we found in . We have a bit more of a general version of this strategy.   Generalized Inverse Tangent Forms        This is really just based on a clever substitution. Once we see this specific constant over a sum of squares, we can factor out a convenient coefficient to force the denominator to look like a sum of something squared and 1. Now we can let and . This strategy can also be used for other inverse trigonometric derivatives. But we will use the inverse tangent form most of all, and thus we want to outline it fully.      We have much more to talk about with integration. From here, we can move on to more systematic strategies ones that have some goals based on familiar things like operations that we might notice or specific variable substitutions that can be useful.      Use polynomial division or some clever factoring to re-write and find the following indefinite integrals or evaluate the following definite integrals.                                         Complete the square in order to find the following indefinite integrals.                           Find the following indefinite integrals.                                               "
},
{
  "id": "subsec-Rewriting-3",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#subsec-Rewriting-3",
  "type": "Example",
  "number": "7.3.1",
  "title": "",
  "body": "  For each of the following integrals, re-write the integrand function using some algebraic manipulation, trigonometric identity, or some other strategy. Then, once the integrand function is in a friendlier form, antidifferentiate.          Can you think of a trigonometric identity that can help translate the squared tangent function into some other squared trigonometric function that we recognize as the derivative of something?           Try some factoring! Can you factor and cancel?           Split this fraction into . Then, can you write these two terms as power functions?           This is a hard one an annoying one, and we'll revisit it later with a better strategy, but for now you can notice something nice happen when you multiply the numerator and denominator by : . This strategy is not intuitive, in my opinion: the nice thing to multiply seemingly comes out of nowehere!    "
},
{
  "id": "act-NegativeExponent",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#act-NegativeExponent",
  "type": "Activity",
  "number": "7.3.1",
  "title": "A Negative Exponent.",
  "body": " A Negative Exponent   Let's think about this integral: .     Is there any composition in this integral? Pick it out, and either explain or show that using this to guide your substitution will not be helpful.    Notice that is composed inside of the exponential function. Try a substitution with .      What does mean? What does mean?      Re-write the integral, specifically focusing on the negative exponent. You should find that the function looks worse! How can you clean that up?    Re-write as , giving you: .    Either add the fractions in the denominator or multiply the whole fraction by .    You should have an integral that looks like: .      Why is this new integral set up so much better for the purpose of -substitution? How could we tell this just by looking at the initial integral?    "
},
{
  "id": "subsec-Rewriting-6",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#subsec-Rewriting-6",
  "type": "Example",
  "number": "7.3.2",
  "title": "",
  "body": "  Re-write the integrand function for , and then integrate using an appropriate substitution.    Try to re-write this integral by noticing that . Then try to make the resulting fraction a bit nicer to look at, since it has a fraction inside of the denominator of another fraction.        "
},
{
  "id": "act-Division",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#act-Division",
  "type": "Activity",
  "number": "7.3.2",
  "title": "Integrating a Rational Function Three Ways.",
  "body": " Integrating a Rational Function Three Ways   We're going to think about the integral: . Let's find 3 different ways of integrating this. This is kind of misleading, since we're actually going to look at 2, since we've already used -substitution to integrate this in .     Let's just notice some things about this rational function.   Are there any vertical asymptotes? How do you know where to find them?    Are there any horizontal asymptotes? How do you know that there aren't ?    When you zoom really far out on the graph of this function, it looks like a different kind of function. What kind of function? Why is that?          There's a vertical asymptote at , since that's where we'd find a limit with the form , like in .    There aren't any horizontal asymptotes! We know that because the degree is larger in the numerator, like in .    This graph looks linear:   This is because the numerator is one degree larger than the denominator. When we divide these two functions, we expect to end up with some sort of linear function and a remainder that approachs 0 as .         Now we're going to re-write the function itself: means we're dividing by . So let's do the division!                                                                 Re-write your integral using this new version of the function. Notice that we haven't done any calculus or antidifferentiating yet. Explain why this new version of this integrand function is easier to antidifferentiate. What do you get?           Let's approach this integral differently. We said earlier that this function is really an \"almost\" linear function in disguise: when we divide the quadratic numerator by a linear denominator, we expect a linear function to be left over. In the long division, we saw this happen! We ended with a linear function and some remainder.  Let's try to uncover this linear function. If we're looking to find what linear functions multiply together to get , then we can try factoring! In order for this factoring to be useful, we want to be able to \"cancel\" out the factor in the denominator. We're really only interested in what linear factor will multiply by to get .   First, explain why there is no linear function factor that accomplishes this.      What if were able to \"almost\" factor this?  If there was a linear factor that multiplied by to get , then the linear portions would multiply together to get . What does this mean about the first linear term of our factor?    We need since .      What does the constant term of our missing factor need to be? We are hoping that whatever it is can multiply by (from ) and combine with the (from the constant multiplied by in our missing factor) to match the in .  What is it?    We need to find where when we multiply we end up with . It should be clear that .  Our missing factor is .      Note that we have not factored ! We almost did: we found two factors: .  How far off is the actual polynomial that we are working with, ?  Write as your two factors plus or minus some remainder.    Find the constant term where: .    Since , we need to add to get .       You should get the same thing that we got from using long division! Great! The rest of the integral will work the same.  Before we end, though, compare this antiderivative to the one we got in . It's different. Why? Is this a problem?    It's only off by a constant! Show this by expanding all of the multiplication in .    "
},
{
  "id": "act-LogVsInvTan",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#act-LogVsInvTan",
  "type": "Activity",
  "number": "7.3.3",
  "title": "Comparing Two Very Similar Integrals.",
  "body": " Comparing Two Very Similar Integrals   We're going to compare these two integrals:             Describe why is such a useful choice for the first integral, but not for the second. How do the differences in these two integrals influence this substitution, even though the denominators are the same?    If , then for both integrals. Why is this good for one integral but not the other?      Why would it be useful to have a linear substitution rule (instead of the quadratic one that we picked) for the second integral? Why would that match the structure of the numerator better?  Go ahead and integrate the first integral.           We're going to write the denominator, in a different way, in order to get a linear function composed into something familiar.   Complete the square for this polynomial: that is, find some linear factor and a real number such that . This should feel familiar, since we have already tried to force polynomials to factor cleverly in .    We want to find a constant term so that gives us . Then we can compare the quadratic to to see how far off it is!    We can use since . Then we can write: .      There is an intuitive substitution to pick, since we now have more obvious composition. Pick it. What kind of integral do we end up with and how do we antidifferentiate? Complete this problem!         "
},
{
  "id": "thm-GeneralizedInvTan",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#thm-GeneralizedInvTan",
  "type": "Theorem",
  "number": "7.3.3",
  "title": "Generalized Inverse Tangent Forms.",
  "body": " Generalized Inverse Tangent Forms        This is really just based on a clever substitution. Once we see this specific constant over a sum of squares, we can factor out a convenient coefficient to force the denominator to look like a sum of something squared and 1. Now we can let and . This strategy can also be used for other inverse trigonometric derivatives. But we will use the inverse tangent form most of all, and thus we want to outline it fully.   "
},
{
  "id": "ex-AlgebraicManipulations-1",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#ex-AlgebraicManipulations-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Use polynomial division or some clever factoring to re-write and find the following indefinite integrals or evaluate the following definite integrals.                                      "
},
{
  "id": "problem-CompleteTheSquare",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#problem-CompleteTheSquare",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Complete the square in order to find the following indefinite integrals.                        "
},
{
  "id": "ex-AlgebraicManipulations-3",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#ex-AlgebraicManipulations-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Find the following indefinite integrals.                                             "
},
{
  "id": "sec-IntegrationByParts",
  "level": "1",
  "url": "sec-IntegrationByParts.html",
  "type": "Section",
  "number": "7.4",
  "title": "Integration By Parts",
  "body": " Integration By Parts   We've seen now that is a useful technique for undo-ing . We set up the variable substitution with the specific goal of going backwards through the Chain Rule and antidifferentiating some composition of functions.  A reasonable next step is to ask: What other derivative rules can we \"undo?\" What other operations between functions should we think about? This brings us to Integration by Parts, the integration technique specifically for undo-ing .    Discovering the Integration by Parts Formula   Discovering the Integration by Parts Formula   The product rule for derivatives says that: . We know that we intend to \"undo\" the product rule, so let's try to re-frame the product rule from a rule about derivatives to a rule about antiderivatives.     Antidifferentiate the product rule by antidifferentiating each side of the equation.     Note that on the left side of this equation you're antidifferentiating a derivative. What will that give you? Then, on the right side, we're just splitting up the terms of the product rule into two different integrals.      On the right side, we have two integrals. Since each of them has a product of functions (one function and a derivative of another), we can isolate one of them in this equation and create a formula for how to antidifferentiate a product of functions! Solve for .      Look back at this formula for . Explain how this is really the product rule for derivatives (without just undo-ing all of the steps we have just done).     What made it so useful to pick instead of in this case? Since we know that we are going to get another integral, one that specifically has the new derivative and new antiderivative that we find from the parts we picked, we noticed that differentiating the function was much nicer than antidifferentiating it: we get a constant that we multiply by the trig function in this new integral, instead of a power function with an even bigger exponent. We can also notice that when it comes to the trig function, it doesn't really matter if we differentiate it or antidifferentiate it. In both cases, we get a in our new integral, with the only difference being whether it is positive or negative.    We typically use the substitutions and to re-write the integrals.   Integration by Parts  Suppose and are both differentiable functions. Then: .   When we select the parts for our integral, we are selecting a function to be labeled and a function to be labeled as . We begin with one of the pieces of the product rule, a function multiplied by some other function's derivative. It is important to recognize that we do different things to these functions: for one of them, , we need to find the derivative, . For the other, , we need to find an antiderivative, . Because of these differences, it is important to build some good intuition for how to select the parts.    Intuition for Selecting the Parts   Picking the Parts for Integration by Parts   Let's consider the integral: . We'll investigate how to set up the integration by parts formula with the different choices for the parts.     We'll start with selecting and . Fill in the following with the rest of the pieces:       Now set up the integration by parts formula using your labeled pieces. Notice that the integration by parts formula gives us another integral. Don't worry about antidifferentiating this yet, let's just set the pieces up.           Let's swap the pieces and try the setup with and . Fill in the following with the rest of the pieces:       Now set up the integration by parts formula using this setup.           Compare the two results we have. Which setup do you think will be easier to move forward with? Why?    When we say we need to keep moving forward with our setup, what we mean is that we have another integral to antidifferentiate. Which one will be easier to work with: or ?      Finalize your work with the setup you have chosen to find .     What made things so much better when we chose compared to ? We know that the new integral from our integration by parts formula will be built from the new pieces, the derivative we find from and the antiderivative we pick from . So when we differentiate , we get a constant, compared to antidifferentiating and getting another power function, but with a larger exponent. We know this will be combined with a function no matter what (since the derivative and antiderivatives of will only differ in their sign). So picking the version that gets that second integral to be built from a trig function and a constant is going to be much nicer than a trig function and a power function. It was nice to pick to be the piece that we found the derivative of!    Let's practice this comparison with another example in order to build our intuition for picking the parts in our integration by parts formula.   Picking the Parts for Integration by Parts   This time we'll look at a very similar integral: . Again, we'll set this up two different ways and compsare them.     We'll start with selecting and . Fill in the following with the rest of the pieces:     You're not forgetting how to antidifferentiate . This is just something we don't know yet!      Ok, so here we have to swap the pieces and try the setup with and , since we only know how to differentiate . Fill in the following with the rest of the pieces:       Now set up the integration by parts formula using this setup.           Why was it fine for us to antidifferentiate in this example, but not in ?      Finish this work to find .    Notice that .     So here, we didn't actually get much choice. We couldn't pick in order to differentiate it (and get a constant to multiply into our second integral) since we don't know how to antidifferentiate (yet: once we know how, it might be fun to come back to this problem and try it again with the parts flipped). But we can also notice that it ended up being fine to antidifferentiate : the increased power from our power rule didn't really matter much when we combined it with the derivative of the logarithm, since the derivative of the log is also a power function ! So we were able to combine those easily and actually integrate that second integral.     It is common for students to want to place functions into sort of hierarchy or classification guidelines for choosing the parts. Some students have found that the acronym LIPET (logs, inverse trig, power functions, exponentials, and trig functions) can be a useful tool for selecting the parts. When you have two different types of functions, it might help to select to be whichever function shows up first in that list.     Integrate the following:          It doesn't matter whether we differentiate or antidifferentiate , since we'll get the same thing. Let's pick so that we can differentiate it.      We need to do more integration by parts!             We don't know how to antidifferentiate , but we do know how to differentiate it!             Some Flexible Choices for Parts  We're going to look at a couple of examples where we can showcase some of the flexibility we have with our choices of parts. First, we'll revisit .In this example, when we got to that second integral, we noticed that for the fraction , we could either do some long division (since the degrees in the numerator and denominator are the same) or do some clever re-writing of the numerator. Either way, we know that this fraction is almost 1...It's really some bit (in this case, the extra bit was a fraction ).  What if we chose our parts differently? Not the and parts, though, since we still haven't figured out how to antidifferentiate . But we get one more choice!  Once we choose , we don't really get a separate choice for : it's simply the derivative of with regard to multiplied by the differential . But consider our choice of , and the subsequent process of finding . Yes, there's only one possible answer, but in a much more real sense, there isn't just one possible answer. There are an infinite number of them! We know, due to the and then later due to , that there are an infinite number of antiderivatives, all differing by at most a constant term. So let's pick a more appropriate antiderivative!    Integrate , this time making a more intentional choice for .    Note that if we pick , then the second integral will be just delightful.          So we get the same thing, but didn't have to think through the long division or the forced factoring. But the trade off here is that we almost have to see this coming to notice it. This flexibility doesn't always come into play for us. But we can look at a different kind of flexibility.  We've looked at integrals with both and . For these, and for other inverse functions specifically, we pick them to be the part in our integration by parts problems because we don't know how do antidifferentiate them.  So let's look at , and we'll solve this integral by, specifically, differentiating instead of antidifferentiating it.   Antidifferentiating the Log Function   Integrate .    Pick , since we can differentiate it. What does that leave for ?          An alternate approach is to use a substitution first. We're going to be using a lot of different variable names here, so let's use a -substitution. Let so that . In order to induce this derivative of the log, let's multiply by inside the integral: This integral can be done using the standard integration by parts! Now we can substitute back to : .    We can use this same strategy to find antiderivatives of , , and eventually .   For , we'll need to use this same tactic of setting and , but then later on we'll need to use a technique called to finish the problem.   Now that we know the antiderivative family for , we can revisit the problem in , , and try to work through the integration by parts when and .    Integrate .      Note that this last integral is really recognizable: it's the one we started with! Let's \"solve\" this equation for that integral by adding it to both sides of our equation.       Solving for the Integral  In this last example, we ended up seeing the original integral repeated when we did integration by parts. This is a useful technique, especially when we deal with functions that have a kind of \"repeating\" structure to their derivatives or antiderivatives. We'll look at a couple of classic integrals where we see this kind of technique employed. Let's have you explore this idea.   Squared Trig Functions   Let's look at two integrals. We'll talk about both at the same time, since they're similar.             What does it mean to \"square\" a trig function? Write these integrals in a different way, where the meaning of the \"squared\" exponent is more clear. What do you notice about the structure of these integrals, the operation in the integrand function? What does this mean about our choice of integration technique?           If you were to use integration by parts on these integrals, does your choice of and even matter here? Why not?    Is there a difference in the two functions being multiplied?      Apply the integration by parts formula to each. What do you notice?    For the integral :   For the integral :       Instead of applying another round of integration by parts to the resulting integral, use the Pythagorean identities to re-write these integrals:       You should notice that in your equation for the integration of , you have another copy of . Similarly, in your equation for the integration of , you have another copy of .  Replace these integrals with a variable, like (for \"integral\"). Can you \"solve\" for this variable (integral)?    For : So we end up with: .  For : So we end up with: .     This \"solving for the integral\" approach works well, but works best when we can see it coming. Notice that it happened here due to the repeating structure of the derivatives of the sine and cosine functions, as well as the Pythagorean identities. We can see some more examples of this in play with similar functions!    For each of the following integrals, use integration by parts to solve.          This one is pretty straight forward, since it doesn't really matter what we select as our parts. Notice, though, that this isn't the only way we can approach this! We can use -substitution, or even re-write this using a trigonometric identity.                          Notice that we can come up with a bunch of different examples that are similar to . If we put trigonometric functions inside our integral, we'll have some options with how we approach them! We can use -substitution, since the derivatives of trigonometric functions are other trigonometric functions. In , for instance, we could write and , or even chose and .  The real issues will come when our integrand is not just a product of two trigonometric functions, but when they are products of trigonometric functions raised to exponents. We'll have some combinations of these products (which maybe makes us think about integration by parts) and composition (which points towards -substitution). In the next section, we'll develop some strategies to deal with these kinds of integrals.     Explain how we build the Integration by Parts formula, as well as what the purpose of this integration strategy is.    How do you choose options for and ? What are some good strategies to think about?    Let's say that you make a choice for and and begin working through the Integration by Parts strategy. How can you tell if you've made a poor choice for your parts? Can you always tell?     Integrate the following.                                                                            Evaluate the following definite integrals.                           In this problem, we'll consider the integral . We'll integrate this in two different ways!     We know that: . Use the Integration by Parts strategy, and especially note that you can solve for the integral ( ).      We can use a trigonometric identity to re-write the integral: . So we have: . Use -substitution.      Were your answers the same or different? Should they be the same? Why or why not? Are they connected somehow?    They might be different, but they should only be different by at most a constant.       For these next problems, we'll use and to substitute into the integral as written. Then use Integration by Parts.                   "
},
{
  "id": "act-IntegrationByParts",
  "level": "2",
  "url": "sec-IntegrationByParts.html#act-IntegrationByParts",
  "type": "Activity",
  "number": "7.4.1",
  "title": "Discovering the Integration by Parts Formula.",
  "body": " Discovering the Integration by Parts Formula   The product rule for derivatives says that: . We know that we intend to \"undo\" the product rule, so let's try to re-frame the product rule from a rule about derivatives to a rule about antiderivatives.     Antidifferentiate the product rule by antidifferentiating each side of the equation.     Note that on the left side of this equation you're antidifferentiating a derivative. What will that give you? Then, on the right side, we're just splitting up the terms of the product rule into two different integrals.      On the right side, we have two integrals. Since each of them has a product of functions (one function and a derivative of another), we can isolate one of them in this equation and create a formula for how to antidifferentiate a product of functions! Solve for .      Look back at this formula for . Explain how this is really the product rule for derivatives (without just undo-ing all of the steps we have just done).     What made it so useful to pick instead of in this case? Since we know that we are going to get another integral, one that specifically has the new derivative and new antiderivative that we find from the parts we picked, we noticed that differentiating the function was much nicer than antidifferentiating it: we get a constant that we multiply by the trig function in this new integral, instead of a power function with an even bigger exponent. We can also notice that when it comes to the trig function, it doesn't really matter if we differentiate it or antidifferentiate it. In both cases, we get a in our new integral, with the only difference being whether it is positive or negative.   "
},
{
  "id": "act-PickingParts-1",
  "level": "2",
  "url": "sec-IntegrationByParts.html#act-PickingParts-1",
  "type": "Activity",
  "number": "7.4.2",
  "title": "Picking the Parts for Integration by Parts.",
  "body": " Picking the Parts for Integration by Parts   Let's consider the integral: . We'll investigate how to set up the integration by parts formula with the different choices for the parts.     We'll start with selecting and . Fill in the following with the rest of the pieces:       Now set up the integration by parts formula using your labeled pieces. Notice that the integration by parts formula gives us another integral. Don't worry about antidifferentiating this yet, let's just set the pieces up.           Let's swap the pieces and try the setup with and . Fill in the following with the rest of the pieces:       Now set up the integration by parts formula using this setup.           Compare the two results we have. Which setup do you think will be easier to move forward with? Why?    When we say we need to keep moving forward with our setup, what we mean is that we have another integral to antidifferentiate. Which one will be easier to work with: or ?      Finalize your work with the setup you have chosen to find .     What made things so much better when we chose compared to ? We know that the new integral from our integration by parts formula will be built from the new pieces, the derivative we find from and the antiderivative we pick from . So when we differentiate , we get a constant, compared to antidifferentiating and getting another power function, but with a larger exponent. We know this will be combined with a function no matter what (since the derivative and antiderivatives of will only differ in their sign). So picking the version that gets that second integral to be built from a trig function and a constant is going to be much nicer than a trig function and a power function. It was nice to pick to be the piece that we found the derivative of!   "
},
{
  "id": "act-PickingParts-2",
  "level": "2",
  "url": "sec-IntegrationByParts.html#act-PickingParts-2",
  "type": "Activity",
  "number": "7.4.3",
  "title": "Picking the Parts for Integration by Parts.",
  "body": " Picking the Parts for Integration by Parts   This time we'll look at a very similar integral: . Again, we'll set this up two different ways and compsare them.     We'll start with selecting and . Fill in the following with the rest of the pieces:     You're not forgetting how to antidifferentiate . This is just something we don't know yet!      Ok, so here we have to swap the pieces and try the setup with and , since we only know how to differentiate . Fill in the following with the rest of the pieces:       Now set up the integration by parts formula using this setup.           Why was it fine for us to antidifferentiate in this example, but not in ?      Finish this work to find .    Notice that .     So here, we didn't actually get much choice. We couldn't pick in order to differentiate it (and get a constant to multiply into our second integral) since we don't know how to antidifferentiate (yet: once we know how, it might be fun to come back to this problem and try it again with the parts flipped). But we can also notice that it ended up being fine to antidifferentiate : the increased power from our power rule didn't really matter much when we combined it with the derivative of the logarithm, since the derivative of the log is also a power function ! So we were able to combine those easily and actually integrate that second integral.   "
},
{
  "id": "ex-2xarctan",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-2xarctan",
  "type": "Example",
  "number": "7.4.1",
  "title": "",
  "body": "  Integrate the following:          It doesn't matter whether we differentiate or antidifferentiate , since we'll get the same thing. Let's pick so that we can differentiate it.      We need to do more integration by parts!             We don't know how to antidifferentiate , but we do know how to differentiate it!          "
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
  "body": " Antidifferentiating the Log Function   Integrate .    Pick , since we can differentiate it. What does that leave for ?          An alternate approach is to use a substitution first. We're going to be using a lot of different variable names here, so let's use a -substitution. Let so that . In order to induce this derivative of the log, let's multiply by inside the integral: This integral can be done using the standard integration by parts! Now we can substitute back to : .   "
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
  "id": "act-SolveIntegral",
  "level": "2",
  "url": "sec-IntegrationByParts.html#act-SolveIntegral",
  "type": "Activity",
  "number": "7.4.4",
  "title": "Squared Trig Functions.",
  "body": " Squared Trig Functions   Let's look at two integrals. We'll talk about both at the same time, since they're similar.             What does it mean to \"square\" a trig function? Write these integrals in a different way, where the meaning of the \"squared\" exponent is more clear. What do you notice about the structure of these integrals, the operation in the integrand function? What does this mean about our choice of integration technique?           If you were to use integration by parts on these integrals, does your choice of and even matter here? Why not?    Is there a difference in the two functions being multiplied?      Apply the integration by parts formula to each. What do you notice?    For the integral :   For the integral :       Instead of applying another round of integration by parts to the resulting integral, use the Pythagorean identities to re-write these integrals:       You should notice that in your equation for the integration of , you have another copy of . Similarly, in your equation for the integration of , you have another copy of .  Replace these integrals with a variable, like (for \"integral\"). Can you \"solve\" for this variable (integral)?    For : So we end up with: .  For : So we end up with: .    "
},
{
  "id": "ex-sincos",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-sincos",
  "type": "Example",
  "number": "7.4.5",
  "title": "",
  "body": "  For each of the following integrals, use integration by parts to solve.          This one is pretty straight forward, since it doesn't really matter what we select as our parts. Notice, though, that this isn't the only way we can approach this! We can use -substitution, or even re-write this using a trigonometric identity.                         "
},
{
  "id": "ex-ByParts-1",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Explain how we build the Integration by Parts formula, as well as what the purpose of this integration strategy is.  "
},
{
  "id": "ex-ByParts-2",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " How do you choose options for and ? What are some good strategies to think about?  "
},
{
  "id": "ex-ByParts-3",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let's say that you make a choice for and and begin working through the Integration by Parts strategy. How can you tell if you've made a poor choice for your parts? Can you always tell?  "
},
{
  "id": "ex-ByParts-4",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Integrate the following.                                                                         "
},
{
  "id": "ex-ByParts-5",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Evaluate the following definite integrals.                        "
},
{
  "id": "ex-ByParts-6",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  In this problem, we'll consider the integral . We'll integrate this in two different ways!     We know that: . Use the Integration by Parts strategy, and especially note that you can solve for the integral ( ).      We can use a trigonometric identity to re-write the integral: . So we have: . Use -substitution.      Were your answers the same or different? Should they be the same? Why or why not? Are they connected somehow?    They might be different, but they should only be different by at most a constant.    "
},
{
  "id": "ex-ByParts-7",
  "level": "2",
  "url": "sec-IntegrationByParts.html#ex-ByParts-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  For these next problems, we'll use and to substitute into the integral as written. Then use Integration by Parts.                 "
},
{
  "id": "sec-PowersOfTrig",
  "level": "1",
  "url": "sec-PowersOfTrig.html",
  "type": "Section",
  "number": "7.5",
  "title": "Integrating Powers of Trigonometric Functions",
  "body": " Integrating Powers of Trigonometric Functions   Let's remind ourselves of two example problems that we've done in the past.  In , we performed a -substitution, but needed to work to re-write our whole integrand in terms of . Specifically, we found that in the numerator, there was an , but . We were substituting out a linear function of in the numerator, but the actual function was cubic. This wasn't a problem: we re-wrote , and noticed that the extra was able to be substituted, since we could re-write out subsitution rule: we noted that is equivalent to . This meant that even though we had an extra factor of \"in\" the part that we were using for substituting in the differential , we were still able to translate the whole function to be written in terms of .  Then, more recently, in , we noted that we could use a mix of methods to integrate this: .  One on hand, we can look at the structure of the integrand and notice that we have a product of two functions! Integration by parts was a fine strategy to employ, and that's what we did in the example. On the other hand, we noticed that since we have this function-derivative pairing, a -substitution was also appropriate.  In this section, we'll explore more combinations of trigonometric functions and build a strategy for antidifferentiating them that includes some ideas from both of these previous examples.    Building a Strategy for Powers of Sines and Cosines   Compare and Contrast   Let's do a quick comparison of two integrals, keeping the above examples in mind. Consider these two integrals:             Consider the first integral, . Think about and set up a good technique for antidifferentiating. Without actually solving the integral, explain why this technique will work.    It might be helpful to notice that can be re-written as . Does this help reveal something important about the structure of this integrand?      Now consider the second integral, . Does the same integration strategy work here? What happens when you apply the same thing?    Let again, and . What happens with the cosine functions? How many are \"left\" after applying our substitution?      We know that and are related to each other through derivatives (each is the derivative of the other, up to a negative). Is there some other connection that we have between these functions? We might especially notice that we have a left over in our integral. Can we write this in terms of , so that we can write it in terms of ?    We have a trigonometric identity (the Pythagorean Identity): .      Why would this strategy not have worked if we were looking at the integrals or ? What, specifically, did we need in order to use this combination of substitution and trigonometric identity to solve the integral?      Integrating Powers of Sine and Cosine  For integrals in the form where and are real number exponents:   If , the exponent on is odd, we should use and . Then we can apply the Pythagorean Identity .    If , the exponent on is odd, we should use and . Then we can apply the Pythagorean Identity .    If both and are even, we can either use or use the following power-reducing trigonometric identities:       A strange note, here, is that we typically pick our -substitution based on looking to see a suitable candidate for : we look for functions that are composed \"inside\" of other functions or we look for a function whose derivative is in the integral (the \"function-derivative pair\" that we talk about in ). Here, though, we're selecting our substitution based on : we're looking to see which function we can set aside one copy of for the differential, and then have an even power left over so that we can apply the Pythagorean Identity to translate the rest.    For each of the following, identify an appropriate substitution, make a note of which trigonometric identity you'll use, and then integrate.          Notice that the exponent on is odd: if you let , you'll end up with left over in your integral, and you can write it as .           This one seems scary at first, because of the fraction exponent. Notice, though, that you have no hope of converting fractional exponents of sine functions into cosine functions easily. So pick and try to convert any remaining cosines using .           You get a choice here! Both exponents are odd, so picking either function as will leave you with an even exponent on the other function to use the Pythagorean Identity on. Is there a choice of that will be easier than the other choice?       Building a Strategy for Powers of Secants and Tangents   Compare and Contrast (Again)   We're going to do another Compare and Contrast, but this time we're only going to consider one integral: . We're going to employ another strategy, similar to the one for .     Before you start thinking about this integral, let's build the relevant version of the Pythagorean Identity that we'll use. Our standard version of this is: . Since we want a version that connects , which is also written as , with , or , let's divide everything in the Pythagorean Identity by :            Now start with the integral. We're going to use two different processes here, two different -substitutions. First, set . Complete the substitution and solve the integral.    Here, . We'll also use .           Now try the integral again, this time using as your substitution.    Now , and we'll use the same Pythagorean identity, just re-written as .           For each of these integrals, why were the exponents set up just right for -substitution each time? How does the structure of the derivatives of each function play into this?    Notice we had an even exponent on the function, but an odd exponent on the function.      Which substitution would be best for the integral . Why?      Which substitution would be best for the integral . Why?      Integrating Powers of Secant and Tangent  For integrals in the form where and are real number exponents:   If , the exponent on , is odd, we can use and . Then we can apply the Pythagorean Identity .    If , the exponent on , is even, we can use and . Then we can apply the Pythagorean Identity .    If is odd and is even, we can use .        For each of the following, identify an appropriate substitution, make a note of which trigonometric identity you'll use, and then integrate.          You have some choices here! If you use , then you'll end up with a remaining to convert using a Pythagorean identity. Alternatively, if you use , you'll end up needing to convert the remaining .      \\displaystyle \\int \\tan^{-5\/2}(x)\\sec^6(x)\\;dx    Another fraction exponent that is pushing us towards using . There will still be a to convert after substituting in .           The odd exponent on tangent is fine, since we can use to leave us with a to convert.        For an integral , how do you know whether to use or as the substitution?    For an integral , how do you know whether to use or as the substitution?     Integrate the following.                                                Integrate the following.                                  Consider the integral .     Use the trigonometric identity: to integrate.      Use integration by parts to integrate.    Check out       Which of these techniques do you think was easier to implement and use? Why is that?       Consider the integral .     Use the trigonometric identity: to integrate.      Use integration by parts to integrate.    Try picking and .      Which of these techniques did you prefer? Why?       Integrate the following integrals.          Use a Pythagorean Identity to convert this to be written in terms of secant functions.           Integration by parts works well here, and it's helpful to know the derivative of and an antiderivative of .           You can technically use either or here.             "
},
{
  "id": "act-CompareContrast",
  "level": "2",
  "url": "sec-PowersOfTrig.html#act-CompareContrast",
  "type": "Activity",
  "number": "7.5.1",
  "title": "Compare and Contrast.",
  "body": " Compare and Contrast   Let's do a quick comparison of two integrals, keeping the above examples in mind. Consider these two integrals:             Consider the first integral, . Think about and set up a good technique for antidifferentiating. Without actually solving the integral, explain why this technique will work.    It might be helpful to notice that can be re-written as . Does this help reveal something important about the structure of this integrand?      Now consider the second integral, . Does the same integration strategy work here? What happens when you apply the same thing?    Let again, and . What happens with the cosine functions? How many are \"left\" after applying our substitution?      We know that and are related to each other through derivatives (each is the derivative of the other, up to a negative). Is there some other connection that we have between these functions? We might especially notice that we have a left over in our integral. Can we write this in terms of , so that we can write it in terms of ?    We have a trigonometric identity (the Pythagorean Identity): .      Why would this strategy not have worked if we were looking at the integrals or ? What, specifically, did we need in order to use this combination of substitution and trigonometric identity to solve the integral?    "
},
{
  "id": "subsec-StrategySinesCosines-5",
  "level": "2",
  "url": "sec-PowersOfTrig.html#subsec-StrategySinesCosines-5",
  "type": "Example",
  "number": "7.5.1",
  "title": "",
  "body": "  For each of the following, identify an appropriate substitution, make a note of which trigonometric identity you'll use, and then integrate.          Notice that the exponent on is odd: if you let , you'll end up with left over in your integral, and you can write it as .           This one seems scary at first, because of the fraction exponent. Notice, though, that you have no hope of converting fractional exponents of sine functions into cosine functions easily. So pick and try to convert any remaining cosines using .           You get a choice here! Both exponents are odd, so picking either function as will leave you with an even exponent on the other function to use the Pythagorean Identity on. Is there a choice of that will be easier than the other choice?    "
},
{
  "id": "act-SecTan",
  "level": "2",
  "url": "sec-PowersOfTrig.html#act-SecTan",
  "type": "Activity",
  "number": "7.5.2",
  "title": "Compare and Contrast (Again).",
  "body": " Compare and Contrast (Again)   We're going to do another Compare and Contrast, but this time we're only going to consider one integral: . We're going to employ another strategy, similar to the one for .     Before you start thinking about this integral, let's build the relevant version of the Pythagorean Identity that we'll use. Our standard version of this is: . Since we want a version that connects , which is also written as , with , or , let's divide everything in the Pythagorean Identity by :            Now start with the integral. We're going to use two different processes here, two different -substitutions. First, set . Complete the substitution and solve the integral.    Here, . We'll also use .           Now try the integral again, this time using as your substitution.    Now , and we'll use the same Pythagorean identity, just re-written as .           For each of these integrals, why were the exponents set up just right for -substitution each time? How does the structure of the derivatives of each function play into this?    Notice we had an even exponent on the function, but an odd exponent on the function.      Which substitution would be best for the integral . Why?      Which substitution would be best for the integral . Why?    "
},
{
  "id": "subsec-StrategySecantsTangents-4",
  "level": "2",
  "url": "sec-PowersOfTrig.html#subsec-StrategySecantsTangents-4",
  "type": "Example",
  "number": "7.5.2",
  "title": "",
  "body": "  For each of the following, identify an appropriate substitution, make a note of which trigonometric identity you'll use, and then integrate.          You have some choices here! If you use , then you'll end up with a remaining to convert using a Pythagorean identity. Alternatively, if you use , you'll end up needing to convert the remaining .      \\displaystyle \\int \\tan^{-5\/2}(x)\\sec^6(x)\\;dx    Another fraction exponent that is pushing us towards using . There will still be a to convert after substituting in .           The odd exponent on tangent is fine, since we can use to leave us with a to convert.    "
},
{
  "id": "ex-PowersOfTrig-1",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " For an integral , how do you know whether to use or as the substitution?  "
},
{
  "id": "ex-PowersOfTrig-2",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " For an integral , how do you know whether to use or as the substitution?  "
},
{
  "id": "ex-PowersOfTrig-3",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Integrate the following.                                             "
},
{
  "id": "ex-PowersOfTrig-4",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Integrate the following.                               "
},
{
  "id": "ex-PowersOfTrig-5",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Consider the integral .     Use the trigonometric identity: to integrate.      Use integration by parts to integrate.    Check out       Which of these techniques do you think was easier to implement and use? Why is that?    "
},
{
  "id": "ex-PowersOfTrig-6",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Consider the integral .     Use the trigonometric identity: to integrate.      Use integration by parts to integrate.    Try picking and .      Which of these techniques did you prefer? Why?    "
},
{
  "id": "ex-PowersOfTrig-7",
  "level": "2",
  "url": "sec-PowersOfTrig.html#ex-PowersOfTrig-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Integrate the following integrals.          Use a Pythagorean Identity to convert this to be written in terms of secant functions.           Integration by parts works well here, and it's helpful to know the derivative of and an antiderivative of .           You can technically use either or here.           "
},
{
  "id": "sec-TrigSub",
  "level": "1",
  "url": "sec-TrigSub.html",
  "type": "Section",
  "number": "7.6",
  "title": "Trigonometric Substitution",
  "body": " Trigonometric Substitution   We're going to look at an integral that requires a variable substitution, but our goal for the substitution will be a bit different. We're going to focus on the structure of our integrand function, but we won't be focusing on composition. Instead, we're going to focus on some trigonometric identities that we've used already:    Difference of Squares   Consider the integral: .     First, convince yourself that a normal -substitution will not be an effective strategy for integration in this case. Why not?    There is composition in this integrand function, but what part of our -substitution is missing?      Second, convince yourself that . Why can we not distribute roots across sums and differences like this? When can we \"distribute\" roots across multiple things?    A root is really an exponent: why can't we distribute exponents across sums and differences? Try this with , and convince yourself that this isn't .  Notice, though, that something like , and could act similarly.      Our goal, then, is to utilize a substitution (using trigonometric functions) to somehow transform this difference of squared terms under the square root into a single product of squared things under the square root.  Which trigonometric identities from our list of them above utilize differences of thing squared, and equate them to a single term?  Can you use the order of the subtraction to help guide which substitution we should use?    We want to pick some trigonometric function so that when we let , we end up with one of the Pythagorean identities above. Is there something we can put in for such that becomes in a convenient way?      When we do a variable substitution in an integral, we are not only finding a way of transforming to be in terms of some other variable (in this case, ). We also need to transform the differential, . Based on your substitution of , what is ?    We'll use . What is for you?      Perform your substitution! Use your substitution and . Note that we have picked this substitution with a very specific goal: we are hoping to notice a Pythagorean identity.  After you have performed your substitution, apply the relevant Pythagorean identity to the radicand : the bit of our function underneath the radical or root. What integral are we left with (in terms of )?    Since we are using , we should notice underneath the square root.          This new integral is something we can antidifferentiate now! We have already done this one in . So we can end up with: It is up to us, now, to translate this antiderivative family to be written in terms of . We can utilize our substitution to do this, but let's first think about how this variable substitution works a bit more.      Another Type of Variable Substitution  We're going to employ another variable substitution, in the same way that we use -substitution. The main difference is the goal: we're going to select our substitution not based on uncovering the composition in our function (like in -substitution). Instead, we'll focus on selecting a trigonometric function in order to utilize the relevant Pythagorean identity to re-write our sum or difference of squares.   General idea of how this variable substitution works.   Two rectangles, one labeled \"x Context\" and the other, beside it, labeled \"theta Context.\" Inside the \"x Context\" rectangle is an integral of f(x) dx with an arrow pointing towards F(x)+C. Inside the \"theta Context\" rectangle is an integral of g(theta) d theta with an arrow pointing towards G(theta)+C. There is an arrow connecting the integral of f(x) dx in the first rectangle to the integral of g(theta) d theta labeled x=T(theta) and dx = T'(theta) d theta. Then there is an arrow connecting G(theta)+C to F(x)+C labeled x = T(theta)     Ok, but how do we choose which trigonometric function to use in our substitution? Since we're focussing on sums or differences of squared terms, we can think of the different arrangements of terms, connect them with different Pythagorean identities, and set up some strategies for picking a trigonometric substitution. We can note that the sum is commutative, so we can treat the same that we treat .  We'll also notice that the constant term can differ: we can scale our Pythagorean identities by some constant easily to make sure that they match.   This can be confusing, and we want to keep thinking about how we might recognize these structures to pick a substitution. Yes, we can recognize these Pythagorean identities. We can rely on the order of subtraction or noticing addition. But we can also think about this geometrically. The Pythagorean identities come from the Pythagorean Theorem, relating the squared lengths of the sides of a right triangle together. Let's visualize our substitutions geometrically.  We'll consider three triangles, each with side lengths of and . The third side length will vary between , , and (or the equivalent ) based on which length is representing the hypotenuse.   Trig Substitution Geoemtry   We're going to consider three triangles, and we're going to fill in side lengths. In each of these, we'll assume that the lengths and are real numbers and are positive.  Three triangles to guide our trigonometric substitutions.    Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the hypotenuse is labeled a.     Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the side adjacent to theta is labeled a.     Right triangle with one of the acute angles labeled as theta. The side adjacent to theta is labeled a, and the hypotenuse is labeled x.          Use the Pythagorean theorem to label the missing side length in each of the three triangles.      For each triangle, explain how you can tell which side length represents the hypotenuse when you see the lengths , , and then the missing lengths you found above: , , or .    We know that the hypotenuse is the longest side length in a triangle. Just based on the square root length, how can you tell which length is longest?    If one of the side lengths is , then we know that (otherwise the square root is a non-real number). We also know that (because ). This means that is the length of the hypotenuse.  If one of the side lengths is , then we know that (otherwise the square root is a non-real number). We also know that (because ). This means that is the length of the hypotenuse.  If one of the side lengths is , then we know that and (because ). This means that is the length of the hypotenuse.      For each triangle, find a trigonometric function of that connects lengths and to each other.  Solve each for to reveal the relevant substitution.      For each substitution, find the corresponding substitution for the differential, .     This gives us a nice strategy for substitution!   Trigonometric Substitution  We have three (typical) ways of using trigonometric substitution to transform a sum or difference of squared terms into a product of squares.   For an integral containing , we can use the following triangle to build our substitution:     Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the hypotenuse is labeled a, and the remaining side length is labeled sqrt(a^2-x^2).     This results in using the following substitution and identity.     For an integral containing , we can use the following triangle to build our substitution:     Right triangle with one of the acute angles labeled as theta. The side adjacent to theta is labeled a, and the hypotenuse is labeled x, and the remaining side length is labeled sqrt(x^2-a^2).     This results in using the following substitution and identity.     For an integral containing , we can use the following triangle to build our substitution:     Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the side adjacent to theta is labeled a. The hypotenuse is labeled sqrt(x^2+a^2).     This results in using the following substitution and identity.       Two things to note before we move on:   There are really 6 main trigonometric substitutions. If you go back to and place the angle in the opposite corner of the triangle, the substitutions you build will all be using the \"co-functions\": cosine, cosecant, and cotangent. Each of these has a very similar structure with regard to derivatives (for the differential substitution) and Pythagorean identities. Each is equivalent to the respective sine, secant, and tangent substitutions. We often choose to use sine, secant, and tangent just due to familiarity.    We can use the triangle as a kind of key for our substitution! After antidifferentiating, we have some antiderivative family written in terms of an angle : we can use the triangle to substitution trigonometric functions of to be written in terms of .       We can finish the substitution we started in . We used the substitution , but we can now construct the relevant triangle.  Since we were hoping so use a substitution to re-write the difference of squares, , we had the following triangle:   Substitution used in .   Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the hypotenuse is labeled 1, and the remaining side length is labeled sqrt(1-x^2).     We can see that or , which was our substitution.  But we were also left with the following antiderivative: Now we can substitute that antiderivative! We can see from our triangle that , (this was also our original substitution anyways), and we also can invert our substitution to get .      Practicing Trigonometric Substitution   Let's look at three integrals, and practice the kind of thinking we'll need to use to apply trigonometric substitution to them.                 For each integral, do the following:     Identify the term (or terms) that signify that trigonometric substitution might be a reasonable strategy.    In each case, you're looking for some sum or difference of squared terms, normally (but not always) nested inside of some square root. It also might be nice to re-write the second integral in order to notice the root: .      Use that portion of the integral to compare three side lengths of a triangle. Which one is the largest (and so must represent the length of the hypotenuse)?       For the side lengths , , and , which must be the largest? Think about and what we can learn from it.    For the side lengths , , and , which must be the largest? Think about and what we can learn from it.    For the side lengths , , and , which must be the largest? Think about and what we can learn from it.          We know that , since . Similarly, we know that . So has to be the length of the hypotenuse.    We know that , since . Similarly, we know that . So has to be the length of the hypotenuse.    We know that , since we are adding to under the square root. This is also the reason that (we are adding under the root). So has to be the length of the hypotenuse.         Construct the triangle, label an angle , and use a trigonometric function to connect the two single-term side lengths. (Feel free to change the angle you label in order to use the sine, secant, or tangent functions instead of their co-functions).       For the integral , we have the following triangle.     Right triangle with one of the acute angles labeled as theta. The side adjacent to theta is labeled 3, and the hypotenuse is labeled x, and the remaining side length is labeled sqrt(x^2-9).     This gives us or, equivalently, .    For the integral , we have the following triangle.     Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the hypotenuse is labeled 2, and the remaining side length is labeled sqrt(4-x^2).     This gives us .    For the integral , we have the following triangle.     Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the side adjacent to theta is labeled 1. The hypotenuse is labeled sqrt(x^2+1).     This gives us or, equivalently, .         Define your substitution (for both and the differential ), and identify the Pythagorean identity that will be relevant for the integral.       We will use and .  Then, we can expect to find the Pythagorean identity .    We will use and .  Then, we can expect to find the Pythagorean identity .    We will use and .  Then, we can expect to find the Pythagorean identity .         Substitute and antidifferentiate!          Also note that .       Also note that .       Also note that .          Using , we get:     Using , we get:     Using , we get:          Use your triangle to substitute your antiderivative back in terms of .       From the triangle, we get . Then, since , we can use . This gives us:     From the triangle, we get . This gives us:     From the triangle, we get . This gives us:         Trigonometric substitution is pretty involved technique! Setting up the substitution is definitely not trivial. Because our substitution involves trigonometric functions, we end up with integrals of trigonometric functions that we then have to work to antidifferentiate. And substituting back to relies on us having set up a robust substitution strategy from the beginning.  It can sometimes seem like this strategy is barely relevant: the goal of it is so focussed on the specific structure of the Pythagorean identities, and these might not feel very present.  A friend of mine, though, says that once we start recognizing sums and differences of squares as being connected to Pythagoras, it's hard to not see them.  For instance, we can go back to and see the sum of squares in the denominator. Instead of doing any tricky factoring to get the -substitution to work, we could instead try a trigonometric substitution and get the same thing!  Another friend of mine says that trigonometric substitution only exists so that we can evaluate arc length integrals ( ).  Whatever the case, this new substitution strategy should, at the very least, generalize the concept of a variable substitution in an integral to show that we can define these for a variety of purposes, all based on the kinds of structures that we're seeing in the integrand function itself.     Explain how trigonometric substitution helps to convert sums or differences of squares to products of squares. Why is this helpful? When is it helpful?    Draw a right triangle with as one of the non-hypotenuse side lengths. What is the length of the hypotenuse? What about the other side length? What would be an appropriate substitution for an integral containing ?    Draw a right triangle with as one of the non-hypotenuse side lengths. What is the length of the hypotenuse? What about the other side length? What would be an appropriate substitution for an integral containing ?    Draw a right triangle with as one of the hypotenuse. What are the lengths of the other two sides? What would be an appropriate substitution for an integral containing ?     Integrate the following using an appropriate trigonometric substitution.                                         (for )                     Complete the square and then integrate.                   "
},
{
  "id": "act-DifferenceOfSquares",
  "level": "2",
  "url": "sec-TrigSub.html#act-DifferenceOfSquares",
  "type": "Activity",
  "number": "7.6.1",
  "title": "Difference of Squares.",
  "body": " Difference of Squares   Consider the integral: .     First, convince yourself that a normal -substitution will not be an effective strategy for integration in this case. Why not?    There is composition in this integrand function, but what part of our -substitution is missing?      Second, convince yourself that . Why can we not distribute roots across sums and differences like this? When can we \"distribute\" roots across multiple things?    A root is really an exponent: why can't we distribute exponents across sums and differences? Try this with , and convince yourself that this isn't .  Notice, though, that something like , and could act similarly.      Our goal, then, is to utilize a substitution (using trigonometric functions) to somehow transform this difference of squared terms under the square root into a single product of squared things under the square root.  Which trigonometric identities from our list of them above utilize differences of thing squared, and equate them to a single term?  Can you use the order of the subtraction to help guide which substitution we should use?    We want to pick some trigonometric function so that when we let , we end up with one of the Pythagorean identities above. Is there something we can put in for such that becomes in a convenient way?      When we do a variable substitution in an integral, we are not only finding a way of transforming to be in terms of some other variable (in this case, ). We also need to transform the differential, . Based on your substitution of , what is ?    We'll use . What is for you?      Perform your substitution! Use your substitution and . Note that we have picked this substitution with a very specific goal: we are hoping to notice a Pythagorean identity.  After you have performed your substitution, apply the relevant Pythagorean identity to the radicand : the bit of our function underneath the radical or root. What integral are we left with (in terms of )?    Since we are using , we should notice underneath the square root.          This new integral is something we can antidifferentiate now! We have already done this one in . So we can end up with: It is up to us, now, to translate this antiderivative family to be written in terms of . We can utilize our substitution to do this, but let's first think about how this variable substitution works a bit more.   "
},
{
  "id": "fig-TrigSub",
  "level": "2",
  "url": "sec-TrigSub.html#fig-TrigSub",
  "type": "Figure",
  "number": "7.6.1",
  "title": "",
  "body": " General idea of how this variable substitution works.   Two rectangles, one labeled \"x Context\" and the other, beside it, labeled \"theta Context.\" Inside the \"x Context\" rectangle is an integral of f(x) dx with an arrow pointing towards F(x)+C. Inside the \"theta Context\" rectangle is an integral of g(theta) d theta with an arrow pointing towards G(theta)+C. There is an arrow connecting the integral of f(x) dx in the first rectangle to the integral of g(theta) d theta labeled x=T(theta) and dx = T'(theta) d theta. Then there is an arrow connecting G(theta)+C to F(x)+C labeled x = T(theta)    "
},
{
  "id": "act-TrigSubTriangles",
  "level": "2",
  "url": "sec-TrigSub.html#act-TrigSubTriangles",
  "type": "Activity",
  "number": "7.6.2",
  "title": "Trig Substitution Geoemtry.",
  "body": " Trig Substitution Geoemtry   We're going to consider three triangles, and we're going to fill in side lengths. In each of these, we'll assume that the lengths and are real numbers and are positive.  Three triangles to guide our trigonometric substitutions.    Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the hypotenuse is labeled a.     Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the side adjacent to theta is labeled a.     Right triangle with one of the acute angles labeled as theta. The side adjacent to theta is labeled a, and the hypotenuse is labeled x.          Use the Pythagorean theorem to label the missing side length in each of the three triangles.      For each triangle, explain how you can tell which side length represents the hypotenuse when you see the lengths , , and then the missing lengths you found above: , , or .    We know that the hypotenuse is the longest side length in a triangle. Just based on the square root length, how can you tell which length is longest?    If one of the side lengths is , then we know that (otherwise the square root is a non-real number). We also know that (because ). This means that is the length of the hypotenuse.  If one of the side lengths is , then we know that (otherwise the square root is a non-real number). We also know that (because ). This means that is the length of the hypotenuse.  If one of the side lengths is , then we know that and (because ). This means that is the length of the hypotenuse.      For each triangle, find a trigonometric function of that connects lengths and to each other.  Solve each for to reveal the relevant substitution.      For each substitution, find the corresponding substitution for the differential, .    "
},
{
  "id": "fig-TrigSubSine",
  "level": "2",
  "url": "sec-TrigSub.html#fig-TrigSubSine",
  "type": "Figure",
  "number": "7.6.3",
  "title": "",
  "body": "   Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the hypotenuse is labeled a, and the remaining side length is labeled sqrt(a^2-x^2).    "
},
{
  "id": "fig-TrigSubSecant",
  "level": "2",
  "url": "sec-TrigSub.html#fig-TrigSubSecant",
  "type": "Figure",
  "number": "7.6.4",
  "title": "",
  "body": "   Right triangle with one of the acute angles labeled as theta. The side adjacent to theta is labeled a, and the hypotenuse is labeled x, and the remaining side length is labeled sqrt(x^2-a^2).    "
},
{
  "id": "fig-TrigSubTan",
  "level": "2",
  "url": "sec-TrigSub.html#fig-TrigSubTan",
  "type": "Figure",
  "number": "7.6.5",
  "title": "",
  "body": "   Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the side adjacent to theta is labeled a. The hypotenuse is labeled sqrt(x^2+a^2).    "
},
{
  "id": "subsec-AnotherVariableSubstitution-12",
  "level": "2",
  "url": "sec-TrigSub.html#subsec-AnotherVariableSubstitution-12",
  "type": "Example",
  "number": "7.6.6",
  "title": "",
  "body": "  We can finish the substitution we started in . We used the substitution , but we can now construct the relevant triangle.  Since we were hoping so use a substitution to re-write the difference of squares, , we had the following triangle:   Substitution used in .   Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the hypotenuse is labeled 1, and the remaining side length is labeled sqrt(1-x^2).     We can see that or , which was our substitution.  But we were also left with the following antiderivative: Now we can substitute that antiderivative! We can see from our triangle that , (this was also our original substitution anyways), and we also can invert our substitution to get .    "
},
{
  "id": "act-TrigSubPractice",
  "level": "2",
  "url": "sec-TrigSub.html#act-TrigSubPractice",
  "type": "Activity",
  "number": "7.6.3",
  "title": "Practicing Trigonometric Substitution.",
  "body": " Practicing Trigonometric Substitution   Let's look at three integrals, and practice the kind of thinking we'll need to use to apply trigonometric substitution to them.                 For each integral, do the following:     Identify the term (or terms) that signify that trigonometric substitution might be a reasonable strategy.    In each case, you're looking for some sum or difference of squared terms, normally (but not always) nested inside of some square root. It also might be nice to re-write the second integral in order to notice the root: .      Use that portion of the integral to compare three side lengths of a triangle. Which one is the largest (and so must represent the length of the hypotenuse)?       For the side lengths , , and , which must be the largest? Think about and what we can learn from it.    For the side lengths , , and , which must be the largest? Think about and what we can learn from it.    For the side lengths , , and , which must be the largest? Think about and what we can learn from it.          We know that , since . Similarly, we know that . So has to be the length of the hypotenuse.    We know that , since . Similarly, we know that . So has to be the length of the hypotenuse.    We know that , since we are adding to under the square root. This is also the reason that (we are adding under the root). So has to be the length of the hypotenuse.         Construct the triangle, label an angle , and use a trigonometric function to connect the two single-term side lengths. (Feel free to change the angle you label in order to use the sine, secant, or tangent functions instead of their co-functions).       For the integral , we have the following triangle.     Right triangle with one of the acute angles labeled as theta. The side adjacent to theta is labeled 3, and the hypotenuse is labeled x, and the remaining side length is labeled sqrt(x^2-9).     This gives us or, equivalently, .    For the integral , we have the following triangle.     Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the hypotenuse is labeled 2, and the remaining side length is labeled sqrt(4-x^2).     This gives us .    For the integral , we have the following triangle.     Right triangle with one of the acute angles labeled as theta. The side opposite theta is labeled x, and the side adjacent to theta is labeled 1. The hypotenuse is labeled sqrt(x^2+1).     This gives us or, equivalently, .         Define your substitution (for both and the differential ), and identify the Pythagorean identity that will be relevant for the integral.       We will use and .  Then, we can expect to find the Pythagorean identity .    We will use and .  Then, we can expect to find the Pythagorean identity .    We will use and .  Then, we can expect to find the Pythagorean identity .         Substitute and antidifferentiate!          Also note that .       Also note that .       Also note that .          Using , we get:     Using , we get:     Using , we get:          Use your triangle to substitute your antiderivative back in terms of .       From the triangle, we get . Then, since , we can use . This gives us:     From the triangle, we get . This gives us:     From the triangle, we get . This gives us:        "
},
{
  "id": "ex-TrigSub-1",
  "level": "2",
  "url": "sec-TrigSub.html#ex-TrigSub-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Explain how trigonometric substitution helps to convert sums or differences of squares to products of squares. Why is this helpful? When is it helpful?  "
},
{
  "id": "ex-TrigSub-2",
  "level": "2",
  "url": "sec-TrigSub.html#ex-TrigSub-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Draw a right triangle with as one of the non-hypotenuse side lengths. What is the length of the hypotenuse? What about the other side length? What would be an appropriate substitution for an integral containing ?  "
},
{
  "id": "ex-TrigSub-3",
  "level": "2",
  "url": "sec-TrigSub.html#ex-TrigSub-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Draw a right triangle with as one of the non-hypotenuse side lengths. What is the length of the hypotenuse? What about the other side length? What would be an appropriate substitution for an integral containing ?  "
},
{
  "id": "ex-TrigSub-4",
  "level": "2",
  "url": "sec-TrigSub.html#ex-TrigSub-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Draw a right triangle with as one of the hypotenuse. What are the lengths of the other two sides? What would be an appropriate substitution for an integral containing ?  "
},
{
  "id": "ex-TrigSub-5",
  "level": "2",
  "url": "sec-TrigSub.html#ex-TrigSub-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Integrate the following using an appropriate trigonometric substitution.                                         (for )                  "
},
{
  "id": "ex-TrigSub-6",
  "level": "2",
  "url": "sec-TrigSub.html#ex-TrigSub-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Complete the square and then integrate.                 "
},
{
  "id": "sec-PartialFractions",
  "level": "1",
  "url": "sec-PartialFractions.html",
  "type": "Section",
  "number": "7.7",
  "title": "Partial Fractions",
  "body": " Partial Fractions   In this last integration technique, we'll consider more rational functions. We've already thought about rational functions a bit ( ), but here we'll add some more detail to a special type of rational function. Let's not spoil anything. Instead, we'll just jump into a quick comparison.   Comparing Rational Integrands   We're going to compare three integrals:        Start with the first integral: . How would you approach integrating this?    This is a constant over a quadratic: can you complete the square, and then connect the result to an inverse tangent function?      Try the same tactic on the second integral: . You don't need to complete this integral, but think about how you might proceed.    Check the structure of the denominator when you complete the square: since you don't end up with a sum of squares, you can't use the inverse tangent setup. You'll need to do a trig substitution instead...      Think about the third integral: . How would you integrate this?      The third integral is unique from the other two in that is has two terms. Let's combine them together to see how we could write this integral to compare it more closely to the other two.  Subtract using common denominators and compare your re-written integral to the other two.      Which of these integrals and\/or representations of an integral is easiest to work with? Which one is most annoying to work with? Why?     We're going to try to take advantage of the re-written structure in : when we can decompose a \"large\" rational function into a sum of \"smaller\" rational functions, we'll be more likely to be able to antidifferentiate the \"smaller\" pieces.  The real trick, here, is going to be recognizing when we can do this and building a process for how we do this.    When?  In order to recognize when we will employ this strategy, we should think about what we're doing: We are attempting to write one fraction as a sum or difference of others. We're \"undo-ing\" fraction addition, here. We can remember that when we add (or subtract) fractions, we need to find a common denominator and re-write our fraction terms as equivalent versions with this same denominator. This is typically done by just \"scaling\" the numerator and denominator of a fraction by a factor (often then other denominator). For instance: This same thing happens when we think about rational functions:   Now, we can notice something about these (common) denominators: since we scaled each fraction before adding\/subtracting them, the denominator is a product of factors.  So right away we know that this method will only work well when we can factor the denominator of a rational integrand.  We also know (from ) that once the degree of the numerator is at least the same (or larger) than the degree of the denominator, we can re-write things using division.  So, we will use this strategy of re-writing rational function integrands as sums or differences of \"smaller\" rational functions when:   The denominator can be factored.    The degree of the denominator is larger than the degree of the numerator.       How?  The actual process for finding the smaller \"partial\" fractions is not complicated. Once we have the denominator of our rational function factored, we can see what the possible denominators that had to \"combine\" to make a \"common\" denominator were.  Our general process will be simple: set up these possible rational functions and put unknown placeholder numerators in place, making sure that the degree is smaller than the degree of the denominator. Then, we add these possible rational functions up and compare the numerator (with the unknown placeholders) to the numerator that we want (from our actual function that we're integrating).  There are more tricks along the way, but this process is simple to think about. What we'll find, though, is that the process is full of algebra, which can be tedious.  Let's look at two small examples to see how this could work.   First Examples of Partial Fractions    Consider the integral: . First, confirm that this would be very annoying to try to use -substitution on, even though we have a linear numerator and quadratic denominator.      Notice that the denominator can be factored: . If this integrand function were a sum of two \"smaller\" rational functions, what would their denominators be? What do we know about their numerators?    The denominators would need to multiply to get , and each numerator would have to have a degree smaller than its respective denominator.    We might have something like , where the numerators are constant terms (since their degree must be smaller than 1).      Use some variables (it's typical to use capital letters like , , , etc.) to represent the numerators, and then add the partial fractions together. What do you get? How does this rational function compare to ?    We want to try to add up and compare the result to .     When we compare this to , we can see that the denominators are the same, and so, if these are equal to each other, the numerators must be as well.      Set up an equation connecting the numerators, and solve for your unknown variables. What are the two fractions that added together to get ?     This means that and . There are a variety of ways to solve this, but we can say that , and so then Since , we have .         Antidifferentiate to solve the integral .           Let's do the same thing with a new integral: . What are the partial fraction forms? What kinds of numerators should we expect to see? Use variables to represent these.    We expect to see partial fractions and . We know the numerator over needs to be constant, but we could have a linear numerator over . So our partial fractions are: .      Add the partial fractions together and set up an equation for the numerators to solve. What are the two partial fractions after you solve for the unknown coefficients?    We want to find values for , , and where . Use common denominators to add and then set the resulting numerator equal to and try to solve.     Then we can set the numerators equal to get: So now we can see that since , we have . We can also look at the constant terms and see that . Now we know that , but since we have .  So we have .      Antidifferentiate and solve the integral .          So we can see the basics of how this will work:   Figure out the denominators of the fractions we could add to get the function we're integrating.    Construct the partial fractions using placeholders for the numerators (making sure to keep the degree of the numerators smaller than the degree of the denominators).    Add these placeholder fractions up, and see what the coefficients would have to be in order to make them add to the function we're integrating.    Antidifferentiate the smaller rational functions.       More Specific Strategies   We're going to investigate these partial fractions a bit more, and focus on two cases: linear denominators, and quadratic denominators. This will limit the scope of our work enough that this doesn't get too wild, and also works well with the kinds of things we know how to antidifferentiate: we can antidifferentiate any rational function with a linear denominator and we know how to antidifferentiate many rational functions with quadratic denominators.    Partial Fraction Type: Simple Linear Factors  For rational functions where the denominator has some linear factor like , we can set up a partial fraction with just a constant coefficient in the numerator: . We have outlined a pretty reasonable approach for these in when we worked on the integral . We can make note of something useful, though. At one point during the process, we had set up the two partial fractions, added them together, and then we said that we wanted to find the values of and that made the general partial fraction forms we had set up match with the actual function we were hoping to integrate. What this meant for us was that we can set the numerators equal to each other and solve for and : . Let's pause here.  We are hoping to find the values of and that will make this equation work out for all values of . But we can also make use of the fact that this equation will be true for some specific values of . For instance, we can evaluate this equation at : This just generates another equation connecting and that we could use like we did in in .  But is there a nicer, more convenient -value to use? Can we force this to generate a nicer equation involving our unknown coefficients? Can we find some -values that will make the factors and go to 0, for instance? Let's try it! These are the same values we had in ! This strategy works well for any simple linear factors, and definitely helps to reduce the amount of algebra required.   Simple Linear Factors  If a rational function has a simple linear factor in the denominator in the form , then the corresponding partial fraction is where is a real number constant with .  When we antidifferentiate these, we will end up with a logarithmic function.     Partial Fraction Type: Irreducible Quadratic Factors  So what about our other example in ? We had a quadratic factor (that couldn't be factored nicely). We'll call these irreducible quadratic factors. The real difference was just the structure of the numerator, where we accounted for the option of the numerator being some linear function, .  There isn't much more to say here, since the algebra can be frustrating to deal with. It can be helpful to save some of these coefficients for last: that way, we can find some of the \"easier\" ones (from the cases) first, and hopefully the remaining coefficients won't be too difficult to find.   Irreducible Quadratic Factors  If a rational function has an irreducible quadratic factor in the denominator in the form , then the corresponding partial fraction is where and are real number constants, and and cannot both be . That is, if one of or is , then the other cannot be.  When we antidifferentiate these, we can expect a logarithmic function, an inverse tangent function, or some combination of the two. We can get other antiderivatives, but those will be beyond the scope of this introductory text.     Partial Fraction Type: Repeated Linear Factors  Let's look at one last case. It's a bit of a weird one, so we'll explore it in its own example.   Fiddling with Repeated Factors   Let's sit with the following integral: . Before we start, we can think about how annoying it would be to try to start with a -substitution where .     Factor the denominator! What's different about the factors in this denominator compared to the ones in ?           Why can't we use these two factors to create two partial fractions with ?      Ok, instead, we're going to do some algebra that is reminiscent of what we have done before in .  Can you write the numerator, , as some coefficient on the factor with some constant \"remainder?\"            Why is this re-forming of the numerator useful? What does that do, when we write it over the factored denominator? Why did we choose as the factor to use for our re-writing?  Feel free to show why this is helpful!    Split the fraction up across the sum in the numerator!           Integrate using your clever re-writing. Explain why this is a friendlier form.    We'll use our re-written integral: . Now, we can split this into two integrals to deal with separately. For both, we can use the -substitution .      This is something we can do, algebraically, for every fraction with a \"repeated\" factor like this. But, more importantly, we can incorporate this idea into how we think about partial fractions.     Repeated Linear Factors  If a rational function has a repeated linear factor in the denominator in the form , where m is some integer greater than 1, then the corresponding partial fractions are where are real numbers and .  When we antidifferentiate these, we can expect to use the rule and maybe find a logarithm function.      At this point, we can spend our time going through one or two examples where we put this all together.    For each of the following integrals, set up the relevant partial fraction forms, solve for the unknown coefficients, and then antidifferentiate.          Your partial fraction forms will look like this: .    You can find the values for and pretty easily by thinking about convenient -values, like we talked about in .    We'll re-write our integral using the partial fraction forms: . When we combine these fractions to compare the numerators, we end up with the following equation: We can evaluate this at and to reveal the values of and : Now that we know and , we can put those into our equation connecting the numerators, and solve for and . If we just consider the cubic terms, then on the left side of the equation we have , and there are no cubic terms on the right side. This means that and so .  Similarly, we can consider just the constant terms of the (updated) equation: We can see that on the left side, we'll have and on the right side, the constant term is .   Finally, we have our new, re-written, integral. We can antidifferentiate.            Your partial fraction forms will look like this: .    You'll be able to easily find by thinking about convenient -values, but not or .    Let's, again, re-write our integral using the partial fraction forms we set up: Our equation for the combined numerator is: . We can find be evaluating at . Now, knowing that , we can re-write our equation to solve for and . We can collect the quadratic terms, and see the following equation: So .  Similarly, we can collect the constant terms: . It is easy to see that . So we have our newly re-written integral: The first term is pretty straight-forward to integrate: we'll get a log. The second one, though, will take some work. Let's consider it by itself: . We can start with a -substitution of , giving us . Let's re-write the numerator as in order to make this work: Now, the first of these will work with our stated substitution. The second one, though, will require a different strategy. Let's complete the square to get the inverse tangent form ( ). For all three integrals, then, we get:      There are more things that we can think about, but it really ends up being just extensions of what we've done. For instance, we could think about repeated quadratic factors or irreducible polynomials that have larger degrees, but the general principles are the same: we set up a placeholder numerator that has a degree less than the denominator and try to solve for the unknown coefficients.  There are really only two limitations for us:   As we increase the number of coefficients, it becomes very tedious to solve for them. It isn't difficult , really: just a lot of algebra.    As we increase the degree of the kinds of denominators we see, we run out of approaches for antidifferentiation. We could spend much more time talking about integrating more rational functions or dive into the much of irrational coefficients (or even non-real ones), but this serves as a good stopping point for our purposes.        Why do we use partial fraction decomposition on some integrals of rational functions? Give an example and explain why it is helpful in your example.     For each rational function described, write out the corresponding partial fraction forms.      where is some polynomial with degree less than 3.       where is some polynomial with degree less than 5.       where is some polynomial with degree less than 4.       where is some polynomial with degree less than 4.    There's some factoring to be done here! Note that and then we can factor .       Consider the following integral, with the partial fraction forms written out: .     Write an equation connecting the numerators.      Find (and use) a specific -value to input into the equation to solve for .    Use , and notice what happens to the rest of the terms.      Find (and use) a specific -value to input into the equation to solve for .    Use , and notice what happens to the rest of the terms.      Why can you not use this strategy to solve for coefficients or ?      Find the cubic terms (you will need to do some multiplication) on both sides of your equation. Use these to solve for .      Find the constant terms (you will need to do some multiplication) on both sides of your equation. Use these to solve for .      Integrate!       Explain why partial fractions is not an appropriate technique for the following integral: . How should we approach this integral, instead?    Note the degree in the numerator compared to the denominator!      Integrate the following.                                               In the problems we are looking at in this section, we're limiting ourselves to, at most, irreducible quadratic factors in the denominator. In problems with simple linear factors, repeated linear factors, or irreducible quadratic factors, what types of antiderivative functions do you expect to see? Explain.     For each of the following integrals, we will do some preliminary work before using partial fractions to integrate. Really, we'll perform a specific -substitution that will give us some resulting integral to use partial fractions on.      where we use .    If then and our resulting integral looks like: .       where we use .    If then and the resulting integral is: .       where we use .    If then and the resulting integral is: .      "
},
{
  "id": "act-PartialFractionCompare",
  "level": "2",
  "url": "sec-PartialFractions.html#act-PartialFractionCompare",
  "type": "Activity",
  "number": "7.7.1",
  "title": "Comparing Rational Integrands.",
  "body": " Comparing Rational Integrands   We're going to compare three integrals:        Start with the first integral: . How would you approach integrating this?    This is a constant over a quadratic: can you complete the square, and then connect the result to an inverse tangent function?      Try the same tactic on the second integral: . You don't need to complete this integral, but think about how you might proceed.    Check the structure of the denominator when you complete the square: since you don't end up with a sum of squares, you can't use the inverse tangent setup. You'll need to do a trig substitution instead...      Think about the third integral: . How would you integrate this?      The third integral is unique from the other two in that is has two terms. Let's combine them together to see how we could write this integral to compare it more closely to the other two.  Subtract using common denominators and compare your re-written integral to the other two.      Which of these integrals and\/or representations of an integral is easiest to work with? Which one is most annoying to work with? Why?    "
},
{
  "id": "act-PartialFractionsFirstExamples",
  "level": "2",
  "url": "sec-PartialFractions.html#act-PartialFractionsFirstExamples",
  "type": "Activity",
  "number": "7.7.2",
  "title": "First Examples of Partial Fractions.",
  "body": " First Examples of Partial Fractions    Consider the integral: . First, confirm that this would be very annoying to try to use -substitution on, even though we have a linear numerator and quadratic denominator.      Notice that the denominator can be factored: . If this integrand function were a sum of two \"smaller\" rational functions, what would their denominators be? What do we know about their numerators?    The denominators would need to multiply to get , and each numerator would have to have a degree smaller than its respective denominator.    We might have something like , where the numerators are constant terms (since their degree must be smaller than 1).      Use some variables (it's typical to use capital letters like , , , etc.) to represent the numerators, and then add the partial fractions together. What do you get? How does this rational function compare to ?    We want to try to add up and compare the result to .     When we compare this to , we can see that the denominators are the same, and so, if these are equal to each other, the numerators must be as well.      Set up an equation connecting the numerators, and solve for your unknown variables. What are the two fractions that added together to get ?     This means that and . There are a variety of ways to solve this, but we can say that , and so then Since , we have .         Antidifferentiate to solve the integral .           Let's do the same thing with a new integral: . What are the partial fraction forms? What kinds of numerators should we expect to see? Use variables to represent these.    We expect to see partial fractions and . We know the numerator over needs to be constant, but we could have a linear numerator over . So our partial fractions are: .      Add the partial fractions together and set up an equation for the numerators to solve. What are the two partial fractions after you solve for the unknown coefficients?    We want to find values for , , and where . Use common denominators to add and then set the resulting numerator equal to and try to solve.     Then we can set the numerators equal to get: So now we can see that since , we have . We can also look at the constant terms and see that . Now we know that , but since we have .  So we have .      Antidifferentiate and solve the integral .         "
},
{
  "id": "subsubsec-IrreducibleQuadratics-2",
  "level": "2",
  "url": "sec-PartialFractions.html#subsubsec-IrreducibleQuadratics-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "irreducible quadratic "
},
{
  "id": "act-RepeatedLinear",
  "level": "2",
  "url": "sec-PartialFractions.html#act-RepeatedLinear",
  "type": "Activity",
  "number": "7.7.3",
  "title": "Fiddling with Repeated Factors.",
  "body": " Fiddling with Repeated Factors   Let's sit with the following integral: . Before we start, we can think about how annoying it would be to try to start with a -substitution where .     Factor the denominator! What's different about the factors in this denominator compared to the ones in ?           Why can't we use these two factors to create two partial fractions with ?      Ok, instead, we're going to do some algebra that is reminiscent of what we have done before in .  Can you write the numerator, , as some coefficient on the factor with some constant \"remainder?\"            Why is this re-forming of the numerator useful? What does that do, when we write it over the factored denominator? Why did we choose as the factor to use for our re-writing?  Feel free to show why this is helpful!    Split the fraction up across the sum in the numerator!           Integrate using your clever re-writing. Explain why this is a friendlier form.    We'll use our re-written integral: . Now, we can split this into two integrals to deal with separately. For both, we can use the -substitution .      This is something we can do, algebraically, for every fraction with a \"repeated\" factor like this. But, more importantly, we can incorporate this idea into how we think about partial fractions.   "
},
{
  "id": "sec-PartialFractions-6-2",
  "level": "2",
  "url": "sec-PartialFractions.html#sec-PartialFractions-6-2",
  "type": "Example",
  "number": "7.7.1",
  "title": "",
  "body": "  For each of the following integrals, set up the relevant partial fraction forms, solve for the unknown coefficients, and then antidifferentiate.          Your partial fraction forms will look like this: .    You can find the values for and pretty easily by thinking about convenient -values, like we talked about in .    We'll re-write our integral using the partial fraction forms: . When we combine these fractions to compare the numerators, we end up with the following equation: We can evaluate this at and to reveal the values of and : Now that we know and , we can put those into our equation connecting the numerators, and solve for and . If we just consider the cubic terms, then on the left side of the equation we have , and there are no cubic terms on the right side. This means that and so .  Similarly, we can consider just the constant terms of the (updated) equation: We can see that on the left side, we'll have and on the right side, the constant term is .   Finally, we have our new, re-written, integral. We can antidifferentiate.            Your partial fraction forms will look like this: .    You'll be able to easily find by thinking about convenient -values, but not or .    Let's, again, re-write our integral using the partial fraction forms we set up: Our equation for the combined numerator is: . We can find be evaluating at . Now, knowing that , we can re-write our equation to solve for and . We can collect the quadratic terms, and see the following equation: So .  Similarly, we can collect the constant terms: . It is easy to see that . So we have our newly re-written integral: The first term is pretty straight-forward to integrate: we'll get a log. The second one, though, will take some work. Let's consider it by itself: . We can start with a -substitution of , giving us . Let's re-write the numerator as in order to make this work: Now, the first of these will work with our stated substitution. The second one, though, will require a different strategy. Let's complete the square to get the inverse tangent form ( ). For all three integrals, then, we get:     "
},
{
  "id": "ex-PartialFractions-1",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " Why do we use partial fraction decomposition on some integrals of rational functions? Give an example and explain why it is helpful in your example.  "
},
{
  "id": "ex-PartialFractions-2",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  For each rational function described, write out the corresponding partial fraction forms.      where is some polynomial with degree less than 3.       where is some polynomial with degree less than 5.       where is some polynomial with degree less than 4.       where is some polynomial with degree less than 4.    There's some factoring to be done here! Note that and then we can factor .    "
},
{
  "id": "ex-PartialFractions-3",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Consider the following integral, with the partial fraction forms written out: .     Write an equation connecting the numerators.      Find (and use) a specific -value to input into the equation to solve for .    Use , and notice what happens to the rest of the terms.      Find (and use) a specific -value to input into the equation to solve for .    Use , and notice what happens to the rest of the terms.      Why can you not use this strategy to solve for coefficients or ?      Find the cubic terms (you will need to do some multiplication) on both sides of your equation. Use these to solve for .      Find the constant terms (you will need to do some multiplication) on both sides of your equation. Use these to solve for .      Integrate!    "
},
{
  "id": "ex-PartialFractions-4",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Explain why partial fractions is not an appropriate technique for the following integral: . How should we approach this integral, instead?    Note the degree in the numerator compared to the denominator!   "
},
{
  "id": "ex-PartialFractions-5",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Integrate the following.                                             "
},
{
  "id": "ex-PartialFractions-6",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": " In the problems we are looking at in this section, we're limiting ourselves to, at most, irreducible quadratic factors in the denominator. In problems with simple linear factors, repeated linear factors, or irreducible quadratic factors, what types of antiderivative functions do you expect to see? Explain.  "
},
{
  "id": "ex-PartialFractions-7",
  "level": "2",
  "url": "sec-PartialFractions.html#ex-PartialFractions-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  For each of the following integrals, we will do some preliminary work before using partial fractions to integrate. Really, we'll perform a specific -substitution that will give us some resulting integral to use partial fractions on.      where we use .    If then and our resulting integral looks like: .       where we use .    If then and the resulting integral is: .       where we use .    If then and the resulting integral is: .    "
},
{
  "id": "sec-IntroSequences",
  "level": "1",
  "url": "sec-IntroSequences.html",
  "type": "Section",
  "number": "8.1",
  "title": "Introduction to Infinite Sequences",
  "body": " Introduction to Infinite Sequences   Sequences as Functions  Before we move on to our actual goal of analyzing infinite series, we will construct infinite sequences. The big thing to remember here is that, when we build and analyze these sequences, we are are really building and analyzing functions. We want to keep this idea of sequences as functions in the forefront, since it will help us as we think about accumulating these function values into infinite series.   Building our First Sequences   We might already have some familiarity with sequences. Here, we'll focus less on some of the detailed mechanics and just think about these sequences as functions.     Describe a sequence of numbers where you use a consistent rule\/function to build each term (each number) based only on the previous term in the sequence. You will need to decide on some first term to start your sequence.      Describe a different sequence of numbers using the same rule to generate new terms\/numbers from the previous one. What do you need to do to make these two sequences different from each other?      Describe a new sequence of numbers where you use a consistent rule\/function to build each term based on its position in the sequence (i.e. the first term will be some rule\/function based on the input 1, the second will be based on 2, you'll use 3 to get the third term, etc.). We will call the position of each term in the sequence the index .      Describe another, new, sequence of numbers where you use a consistent rule\/function to build each term based on its index. This time, make the terms get smaller in size as the index increases.      Explicit Formula   An infinite sequence defined using an explicit formula is one where the th term of the sequence is defined as a function output of , the term's index.  Using notation, we might say that where:    is the ``name'' of the sequence (similar to how and are common names of functions).     is the index of the term, typically a non-negative integer.     is the function that we use to generate the terms.        Recursion Relation   A sequence is defined using a recursion relation is one where the th term of the sequence is defined as a function output of the previous term, the st term. The sequence also needs some initial term to base the subsequent terms from.  Using notation, we might say that .    These definitions are relatively limited. You might, for instance, know of a very famous sequence that is defined recursively by having each term being the sum of the two previous terms. Our study of sequences will be brief and all pointing towards infinite series, so there are a lot of nuances about sequences that we will skip.   Returning to our First Sequences   Let's return back to the four sequences we created in .     For each of the sequences, how are we going to define them? Explicit formulas? Recursion relations? How do you know?      Now, for each sequence, define the sequence formally using either an explicit formula or recursion relation, whichever matches with how you described the sequence in .      Practice Writing some Terms   For each of the following sequences, write out the first handful of terms. There isn't a set amount, but you should write out enough to get a feel for the sequence structure and how the different ways of defining the sequences work. In each, you can start the index at 1 and count upwards ( ).      and                            Describing These Sequences   Let's look at the sequences from . Go through the following tasks for each sequence.     What do you think each sequence is \"counting towards\" (if anything)?    If you're not sure, maybe you need to write out a few more terms! You can also change how you write the numbers themselves: in some cases, fractions might be helpful, but in others it might be useful to write the numbers in decimal form. Maybe you'll approximate values of the sine or exponential functions, or maybe you'll leave them as or .      Can you show that the sequence is counting towards what you think it is with a limit (or show that it's not counting towards anything)?    Some of these limits, as , will be tricky to work with! When might you want to use ? When might you want to use ?      Write the Sequence Rules   We'll look at some sequences by writing out the first handful of terms. From there, our goal is to write out more terms and eventually define each sequence fully.  For each sequence, write an explicit formula and a recursion relation to define the sequence. You can choose whether to start your index at or .          It might be helpful to write these numbers using a common denominator! Or at least some of the numbers. Alternatively, you can try a common numerator (which is very fun to do, since we normally don't do that).    If you are recursively multiplying by a number each time, what will that look like in the explicit formula? How do we represent repeated multiplication?           You can re-write these fractions! Have any of them been \"reduced?\"    Re-write and by scaling the numerator and denominator by 2. Can you find a formula for the numerator and denominator separately? This one is very difficult to find a recursion relation for, so feel free to only write it explicitly!           This one will definitely be helpful to re-write so that all fractions have a common denominator.    If you are recursively adding something, how does that show up in the explicit formula? How do we repeatedly add?      What kinds of connections do you notice between the explicit formulas and the recursion relations for these sequences?     Before moving on, we should think about a couple of notes:   When we add something recursively (where we add the same thing repetitively to get from the th term to the st term), this is the same thing as multiplication in an explicit formula!     Similarly, when we multiply something recursively, we can think about this as an exponential in the explicit formula!     In general, it can be pretty difficult to find either of these formulas for a given sequence of numbers. In fact, in any sequence where only the first few terms are given, we can find an infinite number of formulas that provide those first few terms and then deviate on to any other numbers. We cannot easily extrapolate onto only one \"pattern\" or formula. Because of this, we'll try to limit our work as much as we can to situations where we have the formula defining the sequences.       Graphing Sequences  We have tried introducing and talking about sequences as special types of functions, mapping natural number inputs to real number outputs. If we are committed to thinking about sequences as functions, with maybe some special context, then we should really investigate how one of our primary representations of functions (graphs) manifests itself in this new context.  There really is not too much to think about here! We can focus on the domain of these functions. If we define a sequence explicitly, then we have some function , and we can plot this sequence function in the same way that we normally would any other function . We will use the horizontal axis for the inputs and the vertical axis to represent the outputs, and try to visualize the graph as the set of all of the pairs of inputs with their (single) corresponding output.  The only new feature, then, is that these functions have only non-negative integer inputs. So when we plot the points, we do not get some nice curve acting as a visual representation of the function: we get discrete points floating on the 2-dimensional plane, each with some consistent horizontal spacing between them.  Consider, for example the following function and sequence: and We can graph the curve in the normal way, as a smooth curve starting at the point at .   The function plotted on the interval .   A green curve, starting at (0,0) and increasing until a point at y=1 and then decreasing towards the x-axis asymptotically.    When we plot the sequence , though, we will visualize just the points on at non-negative integer inputs.   The sequence for   A barely visible plot of the same green curve, but with points at x=0, x=1, ..., x=10 highlighted.    We will typically not plot these with the smooth curve of the corresponding continuous function plotted, but in this first example it is useful to highlight how we think about this sequence as a function.  Let's continue to think about these sequences as just functions in a special kind of context. How does this discrete context change how we talk about functions and what kinds of terminology we use?    Sequence Terminology  If a sequence is a function (and we're saying in this introductory section that it is), then we can think of all of the different terminology and adjectives that we use to describe functions. How many of them are relevant to sequences?   Continuous?    Differentiable?    Integrable?    Increasing?    Decreasing?   For now, we'll talk about sequences in two ways: their direction and the size of their terms.   Direction of a Sequence   We say that a sequence is increasing if, for all , . If for all then we say that is non-decreasing .  We say that a sequence is decreasing if, for all , . If for all then we say that is non-increasing .  We say that is constant if , but this is a very boring sequence and we will likely not think terribly hard about these kinds of sequences.  Sometimes we might say that a sequence is eventually non-increasing if there is some , and the sequence is non-increasing for , and similarly for eventually non-decreasing .    A good example of a sequence that is eventually decreasing is the one we plotted in . We can see that the sequence increases from to (since ), but then decreases after that.  We could think about the corresponding continuous function (the one plotted in ) and find the point at which our function starts decreasing: we just need to refer back to to find the interval(s) for which decreases.   Monotonic Sequences   For the sequence , we say that it is monotonic if the sequence is either non-increasing or non-decreasing.    We can, again, include a little modifier to talk about a sequence being eventually monotonic .   Bounded Sequences   We say that a sequence is bounded below if there is some real number such that for all .  Similarly we say that a sequence is bounded above if there is some real number such that for all .  If a sequence has both an upper bound and a lower bound, then we often just say that the sequence is bounded .    Lastly, we'll focus on the end-behavior of a sequence. We'll think about convergence of a sequence in the same way that we did for : does the limit exist?   Sequence Convergence   For the sequence , if is some real number and , the we say that the sequence  converges to . If this limit does not exist, we say that the sequence  diverges .     Monotone Convergence Theorem   If is a sequence that is both monotonic and bounded, then it must converge.    This theorem seems to be a bit obvious to many students: why would we care about this, when we can just find a limit of the explicit formula for a sequence? We'll see throughout the rest of this chapter that this theorem is one of the most important and most useful results in our study of infinite sequences and infinite series. For now, though, let's use it to find the limits of some recursively defined sequences.    Some Cool Recursive Examples  Let's re-visit one of the recursively defined sequences that we've seen already and then think about a couple of other interesting ones. Before we do that, though, we should recognize why we need to treat recursively defined sequences a bit differently than ones defined explicitly.  In an explicit formula, the terms themselves are a function of , the index. This means that we can simply apply a limit as to understand whether or not the sequence converges and what it might converge to. These limits could be tricky, but we have the tools to evaluate them! In a recursion relation, though, each term is not a function of the index, which means we can't easily apply a limit as to the term definition.  We'll be able to apply a limit, but it will feel a bit different: we're going to go into the limit work under the assumption that the limit exists. Let's see how it goes.    Let's re-visit the first sequence from : where and .     Let's start by assuming that the sequence converges. That means that there exists some real number such that .  What would this be, if it exists? A key thing to note is that if exists (and we have a symbol, , for it) then we can say that . Whether or not this is obvious to you is not a mark of your understanding, but we need to make sure that this ends up being obvious to you. If it's not, that's ok! But it is an indicator that you should take a couple of minutes to think about this. Once you are convinced that these two limits are the same thing, move on to the next part.      Let's now apply a limit to the sequence definition: And so we have two solutions to this equation: and . This is strange: how can a sequence have more than one value that it converges to?  It's because we have yet to take into account the initial term, ! Depending on this value, the sequence might converge or not, and if it does converge, then there are two options for what the sequence can converge to, based on the value of .      You can do the next part on your own, but I want you to pick different numbers for and write out some terms of the resulting sequence. You should find that some of them look like they're converging to , one of them will converge to (it's a fun hunt to find which one), and some will diverge.    You should find that if , then the sequence is constant and converges to . If then the sequence seems like it'll converge to . And if , then it looks like the sequence diverges.      Now it is up to us to show that this sequence, with , does converge. Sure, we have some evidence and a good conjecture that it converges to , but that is just our good guess based on what we have seen in the first handful of numbers.  We will attempt to convince ourselves that this sequence is both monotonic and bounded. We'll begin with boundedness.  It should be clear that , since as long as , then . Since we start with , we are guaranteed to get non-zero values from the formula for a new term! Great news, we have a lower bound.  Let's show that is an upper bound: when   Since , we know that each successive term will also be less than . So we have an upper bound!  So the sequence is bounded. Now we just need to convince ourselves that this sequence is monotonic. We know that our terms are bounded above by , and I hope that this means we can convince ourselves that since our terms are smaller than this, which would produce a constant sequence, then all of our terms are probably decreasing.  Let's show this by showing that : We can solve for when this is negative! It shouldn't be hard to show that when . And we've already shown this is true in our case!  So is bounded and monotonic and must therefore converge because of the . Because , we know that this sequence doesn't converge to , and so must converge to the only other option: 0.     There are some other fun ways of doing this same thing for other recursive examples. The argument above is relatively bulky to use, and so we understandably will not think about recursively defined sequences very much: we'll leave that topic for another course where we have more time to really explore them. If you are interested in trying this same argument with other sequences though, we'll end this section with two more fun examples.     Consider the sequence defined by with . Does this sequence converge? To what?     Write out some terms to get a feel for things! Then, assuming that the sequence converges to some real number, , think about what happens when you apply a limit as : we should get the equation .      Consider the sequence defined by with . Does this sequence converge? To what?     Write out some terms to get a feel for things! Then, assuming that the sequence converges to some real number, , think about what happens when you apply a limit as : we should get the equation .      "
},
{
  "id": "act-FirstSequences",
  "level": "2",
  "url": "sec-IntroSequences.html#act-FirstSequences",
  "type": "Activity",
  "number": "8.1.1",
  "title": "Building our First Sequences.",
  "body": " Building our First Sequences   We might already have some familiarity with sequences. Here, we'll focus less on some of the detailed mechanics and just think about these sequences as functions.     Describe a sequence of numbers where you use a consistent rule\/function to build each term (each number) based only on the previous term in the sequence. You will need to decide on some first term to start your sequence.      Describe a different sequence of numbers using the same rule to generate new terms\/numbers from the previous one. What do you need to do to make these two sequences different from each other?      Describe a new sequence of numbers where you use a consistent rule\/function to build each term based on its position in the sequence (i.e. the first term will be some rule\/function based on the input 1, the second will be based on 2, you'll use 3 to get the third term, etc.). We will call the position of each term in the sequence the index .      Describe another, new, sequence of numbers where you use a consistent rule\/function to build each term based on its index. This time, make the terms get smaller in size as the index increases.    "
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
  "body": " Returning to our First Sequences   Let's return back to the four sequences we created in .     For each of the sequences, how are we going to define them? Explicit formulas? Recursion relations? How do you know?      Now, for each sequence, define the sequence formally using either an explicit formula or recursion relation, whichever matches with how you described the sequence in .    "
},
{
  "id": "ex-PracticeWritingTerms",
  "level": "2",
  "url": "sec-IntroSequences.html#ex-PracticeWritingTerms",
  "type": "Example",
  "number": "8.1.3",
  "title": "Practice Writing some Terms.",
  "body": " Practice Writing some Terms   For each of the following sequences, write out the first handful of terms. There isn't a set amount, but you should write out enough to get a feel for the sequence structure and how the different ways of defining the sequences work. In each, you can start the index at 1 and count upwards ( ).      and                          "
},
{
  "id": "act-DescribingSequences",
  "level": "2",
  "url": "sec-IntroSequences.html#act-DescribingSequences",
  "type": "Activity",
  "number": "8.1.3",
  "title": "Describing These Sequences.",
  "body": " Describing These Sequences   Let's look at the sequences from . Go through the following tasks for each sequence.     What do you think each sequence is \"counting towards\" (if anything)?    If you're not sure, maybe you need to write out a few more terms! You can also change how you write the numbers themselves: in some cases, fractions might be helpful, but in others it might be useful to write the numbers in decimal form. Maybe you'll approximate values of the sine or exponential functions, or maybe you'll leave them as or .      Can you show that the sequence is counting towards what you think it is with a limit (or show that it's not counting towards anything)?    Some of these limits, as , will be tricky to work with! When might you want to use ? When might you want to use ?    "
},
{
  "id": "act-WriteSequences",
  "level": "2",
  "url": "sec-IntroSequences.html#act-WriteSequences",
  "type": "Activity",
  "number": "8.1.4",
  "title": "Write the Sequence Rules.",
  "body": " Write the Sequence Rules   We'll look at some sequences by writing out the first handful of terms. From there, our goal is to write out more terms and eventually define each sequence fully.  For each sequence, write an explicit formula and a recursion relation to define the sequence. You can choose whether to start your index at or .          It might be helpful to write these numbers using a common denominator! Or at least some of the numbers. Alternatively, you can try a common numerator (which is very fun to do, since we normally don't do that).    If you are recursively multiplying by a number each time, what will that look like in the explicit formula? How do we represent repeated multiplication?           You can re-write these fractions! Have any of them been \"reduced?\"    Re-write and by scaling the numerator and denominator by 2. Can you find a formula for the numerator and denominator separately? This one is very difficult to find a recursion relation for, so feel free to only write it explicitly!           This one will definitely be helpful to re-write so that all fractions have a common denominator.    If you are recursively adding something, how does that show up in the explicit formula? How do we repeatedly add?      What kinds of connections do you notice between the explicit formulas and the recursion relations for these sequences?    "
},
{
  "id": "fig-FunctionSequence-1",
  "level": "2",
  "url": "sec-IntroSequences.html#fig-FunctionSequence-1",
  "type": "Figure",
  "number": "8.1.4",
  "title": "",
  "body": " The function plotted on the interval .   A green curve, starting at (0,0) and increasing until a point at y=1 and then decreasing towards the x-axis asymptotically.   "
},
{
  "id": "fig-FunctionSequence-2",
  "level": "2",
  "url": "sec-IntroSequences.html#fig-FunctionSequence-2",
  "type": "Figure",
  "number": "8.1.5",
  "title": "",
  "body": " The sequence for   A barely visible plot of the same green curve, but with points at x=0, x=1, ..., x=10 highlighted.   "
},
{
  "id": "def-SequenceDirection",
  "level": "2",
  "url": "sec-IntroSequences.html#def-SequenceDirection",
  "type": "Definition",
  "number": "8.1.6",
  "title": "Direction of a Sequence.",
  "body": " Direction of a Sequence   We say that a sequence is increasing if, for all , . If for all then we say that is non-decreasing .  We say that a sequence is decreasing if, for all , . If for all then we say that is non-increasing .  We say that is constant if , but this is a very boring sequence and we will likely not think terribly hard about these kinds of sequences.  Sometimes we might say that a sequence is eventually non-increasing if there is some , and the sequence is non-increasing for , and similarly for eventually non-decreasing .   "
},
{
  "id": "def-Monotonic",
  "level": "2",
  "url": "sec-IntroSequences.html#def-Monotonic",
  "type": "Definition",
  "number": "8.1.7",
  "title": "Monotonic Sequences.",
  "body": " Monotonic Sequences   For the sequence , we say that it is monotonic if the sequence is either non-increasing or non-decreasing.   "
},
{
  "id": "subsec-SequenceTerminology-7",
  "level": "2",
  "url": "sec-IntroSequences.html#subsec-SequenceTerminology-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eventually monotonic "
},
{
  "id": "def-Bounded",
  "level": "2",
  "url": "sec-IntroSequences.html#def-Bounded",
  "type": "Definition",
  "number": "8.1.8",
  "title": "Bounded Sequences.",
  "body": " Bounded Sequences   We say that a sequence is bounded below if there is some real number such that for all .  Similarly we say that a sequence is bounded above if there is some real number such that for all .  If a sequence has both an upper bound and a lower bound, then we often just say that the sequence is bounded .   "
},
{
  "id": "def-SequenceConvergence",
  "level": "2",
  "url": "sec-IntroSequences.html#def-SequenceConvergence",
  "type": "Definition",
  "number": "8.1.9",
  "title": "Sequence Convergence.",
  "body": " Sequence Convergence   For the sequence , if is some real number and , the we say that the sequence  converges to . If this limit does not exist, we say that the sequence  diverges .   "
},
{
  "id": "thm-MonotoneConvergence",
  "level": "2",
  "url": "sec-IntroSequences.html#thm-MonotoneConvergence",
  "type": "Theorem",
  "number": "8.1.10",
  "title": "Monotone Convergence Theorem.",
  "body": " Monotone Convergence Theorem   If is a sequence that is both monotonic and bounded, then it must converge.   "
},
{
  "id": "ex-FirstRecursiveSequence",
  "level": "2",
  "url": "sec-IntroSequences.html#ex-FirstRecursiveSequence",
  "type": "Example",
  "number": "8.1.11",
  "title": "",
  "body": "  Let's re-visit the first sequence from : where and .     Let's start by assuming that the sequence converges. That means that there exists some real number such that .  What would this be, if it exists? A key thing to note is that if exists (and we have a symbol, , for it) then we can say that . Whether or not this is obvious to you is not a mark of your understanding, but we need to make sure that this ends up being obvious to you. If it's not, that's ok! But it is an indicator that you should take a couple of minutes to think about this. Once you are convinced that these two limits are the same thing, move on to the next part.      Let's now apply a limit to the sequence definition: And so we have two solutions to this equation: and . This is strange: how can a sequence have more than one value that it converges to?  It's because we have yet to take into account the initial term, ! Depending on this value, the sequence might converge or not, and if it does converge, then there are two options for what the sequence can converge to, based on the value of .      You can do the next part on your own, but I want you to pick different numbers for and write out some terms of the resulting sequence. You should find that some of them look like they're converging to , one of them will converge to (it's a fun hunt to find which one), and some will diverge.    You should find that if , then the sequence is constant and converges to . If then the sequence seems like it'll converge to . And if , then it looks like the sequence diverges.      Now it is up to us to show that this sequence, with , does converge. Sure, we have some evidence and a good conjecture that it converges to , but that is just our good guess based on what we have seen in the first handful of numbers.  We will attempt to convince ourselves that this sequence is both monotonic and bounded. We'll begin with boundedness.  It should be clear that , since as long as , then . Since we start with , we are guaranteed to get non-zero values from the formula for a new term! Great news, we have a lower bound.  Let's show that is an upper bound: when   Since , we know that each successive term will also be less than . So we have an upper bound!  So the sequence is bounded. Now we just need to convince ourselves that this sequence is monotonic. We know that our terms are bounded above by , and I hope that this means we can convince ourselves that since our terms are smaller than this, which would produce a constant sequence, then all of our terms are probably decreasing.  Let's show this by showing that : We can solve for when this is negative! It shouldn't be hard to show that when . And we've already shown this is true in our case!  So is bounded and monotonic and must therefore converge because of the . Because , we know that this sequence doesn't converge to , and so must converge to the only other option: 0.    "
},
{
  "id": "ex-FunRecursive",
  "level": "2",
  "url": "sec-IntroSequences.html#ex-FunRecursive",
  "type": "Example",
  "number": "8.1.12",
  "title": "",
  "body": "   Consider the sequence defined by with . Does this sequence converge? To what?     Write out some terms to get a feel for things! Then, assuming that the sequence converges to some real number, , think about what happens when you apply a limit as : we should get the equation .      Consider the sequence defined by with . Does this sequence converge? To what?     Write out some terms to get a feel for things! Then, assuming that the sequence converges to some real number, , think about what happens when you apply a limit as : we should get the equation .    "
},
{
  "id": "sec-IntroSeries",
  "level": "1",
  "url": "sec-IntroSeries.html",
  "type": "Section",
  "number": "8.2",
  "title": "Introduction to Infinite Series",
  "body": " Introduction to Infinite Series   Let's try to introduce the idea of an infinite series using a framework that we know and are (maybe) comfortable with: integrals!  With an integral, we have a nice way of evaluating integrals of nicely behaved functions with finite limits of integration ( ).  Then, when we talked about improper integrals, we built a nice way to think about evaluating integrals with unbounded limits of integration ( ). How will we use this to think about infinite series, a sum of the infinitely many terms from an infinite sequence?    Partial Sums  If we approach infinite series in a manner similar to improper integrals, then we will need to do a couple of things.   Truncate the infinite series at some finite ending point. This is what we did with the integral, when we replaced the infinity with some real number variable . We might use for the series \"ending index.\"    Find a formula for this truncated\/finite version. For the integrals, we could use the for this! For series, we'll need to do something else.    Apply a limit as (or in the case of infinite series) goes off to infinity!      How Do We Think About Infinite Series?   Let's consider the following sequence:      White out the first 5 terms of the sequence.      What does this sequence converge to? Show this with a limit!      Now we'll construct a new sequence, this time by adding things up. We're going to be working with the sequence where . Write out the first five terms of this sequence: .      Can you come up with an explicit formula for ?      Does converge or diverge? Use a limit to find what it converges to!      What do you think this means for the infinite series ? Does the infinite series converge or diverge?     This is hopefully a nice little introduction to how we'll think about infinite series: we'll consider, instead, the sequence of sums where we add up more and more terms. This is also a nice first example, because we really just showed that since .  But more importantly, we now have a good strategy for thinking about infinite series as sequences of partial sums .     Partial Sum   For an infinite series , we call the th Partial Sum of the infinite series.     Series Convergence   We say that the infinite series  converges to the real number if the sequence converges to (where ), where is the th partial sum of the infinite series.  If the sequence of partial sums diverges (the limit does not exist), then we say that the infinite series  diverges .      Visualizing the Sequence of Partial Sums  Since we'll think about an infinite series as the sequence of its partial sums, , then we can think about visualizing an infinite series as really the same thing as visualizing a sequence in general ( ).  Let's consider, as a first (visual) example, the infinite series: . We can think about the two important sequences that we'll consider:   We can plot the sequence of terms, , and visualize the limit . This sequence of terms converges to 0.   , the sequence of terms in the series.   Green points on a plot. The points descend (since the sequence is monotonically decreasing) towards a horizontal asymptote at 0. The horizontal axis of the plot is labeled n and the vertical axis is labeled a_n.    Then, we can compare this with the plot of the partial sums, where: .   , the sequence of partial sums for the series.   Red points on a plot. The points ascend (the sequence is monotonically increasing). The horizontal axis of the plot is labeled n and the vertical axis is labeled S_n.    This image is fine, but not very good at showing how the sequence of terms and the sequence of partial sums are related to each other. We should note that each point in is the accumulation of the heights of the preceding points in . We can visualize this to make it easier by overlaying some information onto the plot of partial sums in .   and visualized together.   The red plot of partial sums. Between each point is a green vertical line going from the height of the previous point to the height of the next point. These are labeled a_0, a_1, a_2, a_3, and then are unlableled afterwards. On the vertical axis, there are vertical positions representing the heights of each of the red points labeled S_0, S_1, S_2, S_3, ...    Hopefully this does a good job of illustrating the connections between the two:    Finding Explicit Formulas  We had noted earlier (in ) that it was hard to find explicit formulas (or recursion relations) for sequences where we had the first few terms.  This remains true when we think about finding formulas for the sequences of partial sums. Notice that it is easy to find the location of the horizontal asymptote in (by evaluating ), but that we did not attempt to find one to for the partial sums in or .  If you'd like to try this, then we need to find a formula for . Try to find the first several partial sums by adding up terms in the series. Then try to find a formula to predict the next partial sum. This will definitely not be easy!  Ok, actually, this will be an impossible task. There is no closed-form formula for this. We cannot simply find in the way that we've found the limit of the sequence of terms.     Special Series  Let's look at three examples where we can think about partial sums and play with our new idea of series convergence.    For each of the following series, write out a few of the terms of the series. Then write out the corresponding partial sums. Use these to find a formula for , the th partial sum. Then make a claim about whether or not the series converges and what it converges to.           The series converges to 2.            So the series diverges.           This one is tricky! It's hard to notice anything unless we write out the series term formula a bit differently. Use to re-write as .           These examples are a bit misleading: we often won't be able to do this kind of thing! For most infinite series, we will struggle to find an explicit formula for the th partial sum. In these examples, though, we took advantage of some specific structure.  In this first example (as well as the example in ), we noticed that because of the exponential function defining the terms, we were able to find some nice patterns in the partial sums. We'll explore this a bit more later in .  Then in these other two examples, we noticed that once we could write each term as really a difference of two fractions that have a really similar structure, we got these \"repeat\" values from term to term where the opposite signs made things add up to 0. These are called \"telescoping series,\" and they're mostly fun examples to think about partial sum formulas. We'll see some pop up later though, and Partial Fraction Decomposition is a nice trick to keep in mind for these kinds of things.   "
},
{
  "id": "act-IntroSeries",
  "level": "2",
  "url": "sec-IntroSeries.html#act-IntroSeries",
  "type": "Activity",
  "number": "8.2.1",
  "title": "How Do We Think About Infinite Series?",
  "body": " How Do We Think About Infinite Series?   Let's consider the following sequence:      White out the first 5 terms of the sequence.      What does this sequence converge to? Show this with a limit!      Now we'll construct a new sequence, this time by adding things up. We're going to be working with the sequence where . Write out the first five terms of this sequence: .      Can you come up with an explicit formula for ?      Does converge or diverge? Use a limit to find what it converges to!      What do you think this means for the infinite series ? Does the infinite series converge or diverge?     This is hopefully a nice little introduction to how we'll think about infinite series: we'll consider, instead, the sequence of sums where we add up more and more terms. This is also a nice first example, because we really just showed that since .  But more importantly, we now have a good strategy for thinking about infinite series as sequences of partial sums .   "
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
  "body": " Series Convergence   We say that the infinite series  converges to the real number if the sequence converges to (where ), where is the th partial sum of the infinite series.  If the sequence of partial sums diverges (the limit does not exist), then we say that the infinite series  diverges .   "
},
{
  "id": "fig-PartialSum-1",
  "level": "2",
  "url": "sec-IntroSeries.html#fig-PartialSum-1",
  "type": "Figure",
  "number": "8.2.3",
  "title": "",
  "body": " , the sequence of terms in the series.   Green points on a plot. The points descend (since the sequence is monotonically decreasing) towards a horizontal asymptote at 0. The horizontal axis of the plot is labeled n and the vertical axis is labeled a_n.   "
},
{
  "id": "fig-PartialSum-2",
  "level": "2",
  "url": "sec-IntroSeries.html#fig-PartialSum-2",
  "type": "Figure",
  "number": "8.2.4",
  "title": "",
  "body": " , the sequence of partial sums for the series.   Red points on a plot. The points ascend (the sequence is monotonically increasing). The horizontal axis of the plot is labeled n and the vertical axis is labeled S_n.   "
},
{
  "id": "fig-PartialSum-3",
  "level": "2",
  "url": "sec-IntroSeries.html#fig-PartialSum-3",
  "type": "Figure",
  "number": "8.2.5",
  "title": "",
  "body": " and visualized together.   The red plot of partial sums. Between each point is a green vertical line going from the height of the previous point to the height of the next point. These are labeled a_0, a_1, a_2, a_3, and then are unlableled afterwards. On the vertical axis, there are vertical positions representing the heights of each of the red points labeled S_0, S_1, S_2, S_3, ...   "
},
{
  "id": "note-ExplicitFormulaPartialSums",
  "level": "2",
  "url": "sec-IntroSeries.html#note-ExplicitFormulaPartialSums",
  "type": "Note",
  "number": "8.2.6",
  "title": "Finding Explicit Formulas.",
  "body": " Finding Explicit Formulas  We had noted earlier (in ) that it was hard to find explicit formulas (or recursion relations) for sequences where we had the first few terms.  This remains true when we think about finding formulas for the sequences of partial sums. Notice that it is easy to find the location of the horizontal asymptote in (by evaluating ), but that we did not attempt to find one to for the partial sums in or .  If you'd like to try this, then we need to find a formula for . Try to find the first several partial sums by adding up terms in the series. Then try to find a formula to predict the next partial sum. This will definitely not be easy!  Ok, actually, this will be an impossible task. There is no closed-form formula for this. We cannot simply find in the way that we've found the limit of the sequence of terms.  "
},
{
  "id": "ex-geometric",
  "level": "2",
  "url": "sec-IntroSeries.html#ex-geometric",
  "type": "Example",
  "number": "8.2.7",
  "title": "",
  "body": "  For each of the following series, write out a few of the terms of the series. Then write out the corresponding partial sums. Use these to find a formula for , the th partial sum. Then make a claim about whether or not the series converges and what it converges to.           The series converges to 2.            So the series diverges.           This one is tricky! It's hard to notice anything unless we write out the series term formula a bit differently. Use to re-write as .          "
},
{
  "id": "sec-DivergenceTest",
  "level": "1",
  "url": "sec-DivergenceTest.html",
  "type": "Section",
  "number": "8.3",
  "title": "The Divergence Test and the Harmonic Series",
  "body": " The Divergence Test and the Harmonic Series   The Relationship Between a Sequence and Series  We have looked at both infinite sequences and infinite series so far, and, to make things complicated, we're really thinking about an infinite series (of terms from an infinite sequence) as an infinite sequence (of partial sums of the series). We've looked at how to visualize these (in both and ).  Let's first start with defining a new series. This is a relatively important one by itself (it does have its own name), but it's mostly an important series because it leads us into some new and interesting ways of thinking about series in general.   Harmonic Series   We call the series the Harmonic Series .    You might not recognize this, but we've worked with a version of this before. The example series that we plotted in was . We can notice that if we re-index this by starting at instead of , we were really just looking at a scaled version of the harmonic series.    Investigating the Harmonic Series    Write out the first several terms of the harmonic series, terms from . Write however many you need to get a feel for how the terms work.      Can you find out how many terms you would have to go \"into\" the series before the term was less than 0.00000001?    When is ?      Can you do this same kind of thing, no matter how small? For instance, how many terms would you have to go into the series before the term was less than some real number where ?    When is ?      Remind\/explain\/convince yourself that what we've really done is show that . This isn't a new or terribly interesting fact, but make sure that you understand why the argument above shows this.      Let's do something very similar, but with , the sequence of partial sums, instead. Write out the first few partial sums. There's no specific number that you need to write, but make sure to write enough partial sums to get a feel for how the partial sums work.      Can you find out how many terms you need to add up until the partial sum is larger than 1?    Find a value for to give .      Can you find out how many terms you need to add up until the partial sum is larger than 5?    Find a value for to give .     This is the first partial sum greater than 5.      Can you find out how many terms you need to add up until the partial sum is larger than 10?    Find a value for to give . This will be absolutely awful to try calculating by hand! Use some piece of technology!     This is the first partial sum greater than 10.      Do you think that for any positive number , we can always find some partial sum ? What do you think this would mean about ?     To actually show that for any we could always find an where is an extremely difficult task! We will show that the Harmonic Series diverges in a different way, but for now I want us to notice these contradictory results: we have a series whose terms get small, but whose partial sums do not seem to converge.  We have but it seems like does not exist. Is this behavior special to the Harmonic Series? Is this something we should make note of? Is there some other connection between the terms of a series and the behavior of the partial sums of the series that we need to note?    Let's continue to think about this strange series, but actually prove that the series itself diverges.   The Harmonic Series Diverges   The Harmonic Series , , diverges.    Let's assume, for the sake of eventual contradiction, that the harmonic series converges. Our goal in this proof is to show that this assumption (convergence) logically leads to an internal contradiction. This would mean that the assumption (convergence) cannot be true.  So, let's assume that the harmonic series converges.  Based on our definition of series convergence ( ), there exists some real number such that: . We're going to think about this number, , and show that there cannot be such a number.  First, let's write out what is: We're now going to systematically change the numbers being added together in order to create some number that is smaller than : we're going to take all of the odd terms and make them as small as the next term after it: Note, though, that we can group together these duplicate terms and add them. Let's do that! But we should recognize this new series that is smaller than ...it's the harmonic series! Which, by our initial assumption, is also !  Ok, so what we have shown is that if the harmonic series converges, then it converges to some number that has the contradictory property of being smaller than itself.  There is no such number.  This is a contradiction, then, and so the harmonic series must diverge.    This is a strange result, and one that has been brought up again and again by mathematicians throughout history. We'll see that this series is notable because of its use later on in this chapter, but for now we can simply note that it is strange to see a series of terms that get so small (and so quickly) and yet the sum of those terms diverges.  The connection between the terms of a series and the behavior of the infinite series itself is maybe more mysterious than we initially thought. Since we will likely not have \"access\" to the formula for the partial sums ( ), we will want to explore these kinds of connections as much as we can. They will be the things to help us analyze an infinite series.    The Divergence Test   Divergence Test   For an infinite series , if the infinite series converges then . This is equivalent to saying that if then the infinite series diverges.    We will prove the claim that if an infinite series converges, then its sequence of terms must converge to .  This result will fall out of a simple exploration of what partial sums are. We noted in that we can write any partial sum as the sum of the previous partial sum and the next term: Let's now say that the series we are dealing with converges. This means that for some real number .  What, then, would the limit of be as ?  It has to also be ! If the partial sums converge, then these two partial sums must converge to each other increases: .  So, since , we can investigate the limit of : So of course the th term has to converge to 0 in the limit!      Apply the Divergence Test to the following series and interpret the results.          We can do a couple of things here! There is a nice result about limits of polynomials that we can use in the numerator ( ). We could also get this same result using some other techniques, like what we use to prove that theorem. Then we can use to evaluate the limit, since we have a indeterminate form.           These terms are strange! The part really just impacts the sign of the terms, since it is either or depending on if is even or odd.  We can consider only one sign (maybe the positive), and then try to make a conclusion about the alternating terms. Do they go to 0?           This is similar: focus on only the positive terms for now. But that denominator is also strange! If you want to focus only on the denominator, you can use the following friendly rearrangement: Now you can use to evaluate this part!      "
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
  "body": " Investigating the Harmonic Series    Write out the first several terms of the harmonic series, terms from . Write however many you need to get a feel for how the terms work.      Can you find out how many terms you would have to go \"into\" the series before the term was less than 0.00000001?    When is ?      Can you do this same kind of thing, no matter how small? For instance, how many terms would you have to go into the series before the term was less than some real number where ?    When is ?      Remind\/explain\/convince yourself that what we've really done is show that . This isn't a new or terribly interesting fact, but make sure that you understand why the argument above shows this.      Let's do something very similar, but with , the sequence of partial sums, instead. Write out the first few partial sums. There's no specific number that you need to write, but make sure to write enough partial sums to get a feel for how the partial sums work.      Can you find out how many terms you need to add up until the partial sum is larger than 1?    Find a value for to give .      Can you find out how many terms you need to add up until the partial sum is larger than 5?    Find a value for to give .     This is the first partial sum greater than 5.      Can you find out how many terms you need to add up until the partial sum is larger than 10?    Find a value for to give . This will be absolutely awful to try calculating by hand! Use some piece of technology!     This is the first partial sum greater than 10.      Do you think that for any positive number , we can always find some partial sum ? What do you think this would mean about ?     To actually show that for any we could always find an where is an extremely difficult task! We will show that the Harmonic Series diverges in a different way, but for now I want us to notice these contradictory results: we have a series whose terms get small, but whose partial sums do not seem to converge.  We have but it seems like does not exist. Is this behavior special to the Harmonic Series? Is this something we should make note of? Is there some other connection between the terms of a series and the behavior of the partial sums of the series that we need to note?   "
},
{
  "id": "thm-HarmonicSeriesDiverges",
  "level": "2",
  "url": "sec-DivergenceTest.html#thm-HarmonicSeriesDiverges",
  "type": "Theorem",
  "number": "8.3.2",
  "title": "The Harmonic Series Diverges.",
  "body": " The Harmonic Series Diverges   The Harmonic Series , , diverges.    Let's assume, for the sake of eventual contradiction, that the harmonic series converges. Our goal in this proof is to show that this assumption (convergence) logically leads to an internal contradiction. This would mean that the assumption (convergence) cannot be true.  So, let's assume that the harmonic series converges.  Based on our definition of series convergence ( ), there exists some real number such that: . We're going to think about this number, , and show that there cannot be such a number.  First, let's write out what is: We're now going to systematically change the numbers being added together in order to create some number that is smaller than : we're going to take all of the odd terms and make them as small as the next term after it: Note, though, that we can group together these duplicate terms and add them. Let's do that! But we should recognize this new series that is smaller than ...it's the harmonic series! Which, by our initial assumption, is also !  Ok, so what we have shown is that if the harmonic series converges, then it converges to some number that has the contradictory property of being smaller than itself.  There is no such number.  This is a contradiction, then, and so the harmonic series must diverge.   "
},
{
  "id": "thm-DivergenceTest",
  "level": "2",
  "url": "sec-DivergenceTest.html#thm-DivergenceTest",
  "type": "Theorem",
  "number": "8.3.3",
  "title": "Divergence Test.",
  "body": " Divergence Test   For an infinite series , if the infinite series converges then . This is equivalent to saying that if then the infinite series diverges.    We will prove the claim that if an infinite series converges, then its sequence of terms must converge to .  This result will fall out of a simple exploration of what partial sums are. We noted in that we can write any partial sum as the sum of the previous partial sum and the next term: Let's now say that the series we are dealing with converges. This means that for some real number .  What, then, would the limit of be as ?  It has to also be ! If the partial sums converge, then these two partial sums must converge to each other increases: .  So, since , we can investigate the limit of : So of course the th term has to converge to 0 in the limit!   "
},
{
  "id": "subsec-DivergenceTest-3",
  "level": "2",
  "url": "sec-DivergenceTest.html#subsec-DivergenceTest-3",
  "type": "Example",
  "number": "8.3.4",
  "title": "",
  "body": "  Apply the Divergence Test to the following series and interpret the results.          We can do a couple of things here! There is a nice result about limits of polynomials that we can use in the numerator ( ). We could also get this same result using some other techniques, like what we use to prove that theorem. Then we can use to evaluate the limit, since we have a indeterminate form.           These terms are strange! The part really just impacts the sign of the terms, since it is either or depending on if is even or odd.  We can consider only one sign (maybe the positive), and then try to make a conclusion about the alternating terms. Do they go to 0?           This is similar: focus on only the positive terms for now. But that denominator is also strange! If you want to focus only on the denominator, you can use the following friendly rearrangement: Now you can use to evaluate this part!    "
},
{
  "id": "sec-IntegralTest",
  "level": "1",
  "url": "sec-IntegralTest.html",
  "type": "Section",
  "number": "8.4",
  "title": "The Integral Test",
  "body": " The Integral Test   Infinite Series As a Kind of Integral  Let's start here with a connection between objects. We've already thought about the connection between an infinite series and the sequence of terms of the series ( ). Now we'll think about the connections between two objects that are similar to each other in that they both represent an accumulation of function values.  Earlier (in ) we tried to describe sequences as just a special kind of function: the domain is the set of non-negative integer (or positive integers, depending on whether we start our index at or ) and we map these inputs to real number outputs. And now we want to think about what it might mean to accumulate the values of these kinds of functions.  Function value accumulation is what we've been looking at lately! That's what integration is! We are trying to accumulate all of the function values and weigh them based on their \"width.\" In the context of continuous functions, that means we start approximating this accumulation by looking at some finite number of function values that we pick, and we give them some width between them. That's our Riemann sum: And from there, we work on making that space between function values get smaller (as the number of function values we use gets higher). So when is the number of function values, we can let and correspondingly we get , the differential in our integral: .  And this is how we've talked about infinite series so far, even adopting the same notions of convergence and thinking about how we extend a familiar idea (in this case adding numbers, compared to integrating a function) out to infinity: we just keep walking our (finite) ending point out to infinity using a limit!  So this brings us to this comparison of the same types of objects across these two different contexts.   Comparisons of Calculus Objects in Continuous and Discrete Contexts    Object  Continuous Context  Discrete Context    Function      Graph      Finite Accumulation  Definite Integral  Partial Sum         Infinite Accumulation  Improper Integral  Infinite Series          So in this section, we'll investigate this link between infinite series and improper integrals as the same kind of object occurring in different contexts. Intuitively, then, they'll be related to each other, under the right conditions.    The Integral Test  The Integral Test is really about connecting the behavior of an integral and a series, and the way that we'll do it is by trying to visualize what an infinite series is (a sum of function values, where the function inputs are spaced apart by 1) and linking that to a Riemann sum. From there, we'll use the on the sequence of partial sums to show that the series converges.   Integrals and Infinite Series   We're going to work with a graph of a continuous function, and we're going to start with a couple of conditions:   Our function will be continuous wherever it's defined.    Our function will be decreasing on its domain.    All of the function outputs will be positive.   Let's not worry about picking a specific function for this, but we will visualize a graph of one that meets these three requirements.     A blue curve labeled f(x). The curve is positive, decreasing, and continuous. It is defined on [0,infinity) with, seemingly, a horizontal asymptote at the x-axis.    We can then visualize the sequence of terms, for .     A blue curve labeled f(x). The curve is positive, decreasing, and continuous. It is defined on [0,infinity) with, seemingly, a horizontal asymptote at the x-axis. On the plot there are red points, labeled a_0, a_1, a_2, ..., a_n.       How does the partial sum, compare to the Riemann sum for from to with rectangles?    It might help to visualize the Left Riemann sum!    Hopefully we can see that the partial sum, is the exact same thing as the left Riemann sum!      We're going to visualize the accumulation of from to by thinking about the integral: .     The blue curve, with the area shaded from x=0 to x=n. The area is labeled with the definite integral.    How does this area compare to the Riemann sum you thought of above? Compare them with an inequality and make sure you can explain why this has to be true.    Here's a picture of the left Riemann sum!     The left Riemann sum formed at each red point.      Since is a left Riemann sum for , and since is decreasing, then we know that each rectangle is formed from the highest point on each subinterval. That means that each rectangle's area overestimates the area under the curve on that subinterval. Note, also, that since this is a left Riemann sum, the th rectangle is hanging past the end of the definite integral. This means that: .      Remove the first term of the series, , and instead think of the sum . Can you still think of this as a Riemann sum to approximate the area from the integral ?  How does this new Riemann sum compare to the area formed by the integral? Compare them with an inequality and make sure you can explain why this has to be true.    Notice, now, that we need to be the representative height for the first rectangle. How does that change the formation of the rectangles?    We can form a Right Riemann sum! Note that we don't \"overhang\" the interval anymore.     The right Riemann sum formed at each red point, other than the first one.    Note, now, that we are using the lowest point on each subinterval to form the rectangle. This means that: .      We have thought about two sums, and we can connect them: . Use the sums to bound the integral:            Similarly, use the integral to bound the sum:           These bounds are going to be super useful! Discovering them is the main task for finding the connections between improper integrals and infinite series. These inequalities might seem kind of strange at first, but we're going to apply a limit to everything as , and then think about our definitions of convergence ( and ).     Integral Test   If is an infinite series with for all and is a continuous and decreasing function with for all , then we can compare the behaviors of and : the integral and the series are guaranteed to either both diverge or both converge.    The proof of this will come in two parts. First, we'll prove that converges when converges.  Then, we'll prove that diverges when diverges.     Let's start with the assumption that converges. We know, based on , that this means that exists. We also know, since , that . This means: This means that the partial sum, has an upper bound.  We also know that, since for all , then . This means that the sequence of partial sums, is both monotonic and bounded, and therefore must converge (by the ).  Thus, converges.    Now, we can start with the assumption that the integral diverges. Since we know that is positive, then we know that . We can re-consider the inequalities from : So then must also diverge.   This is everything we need to prove! Note that we could replicate this proof by swapping the role of the series and the integral to get the same conclusion.    So now we have a more formal link between these two objects. We have some intuition from that these are pretty similar objects: one of them is an accumulation of function values in a continuous context, while the other is an accumulation of function values in a discrete context.  We can think about this even more formally! We reminded ourselves at the beginning of this section that, when we think about the limit of a Riemann sum (in the continuous context ) that as , we get , where is essentially the distance between inputs. This produces our integral.  But now, in the discrete context , we have something different. Without being too formal, we can think about the corresponding limit of as we slice this up further. Because our functions are in the discrete context, our inputs have a minimum distance between each other: they're all 1 unit apart! So here, in the limit where we expect , we get . And similarly, in a typical definite integral, we are adding up an infinite number of function outputs between some starting input and stopping input. Now in the discrete context, we don't get that! We get our normal partial sum: . So the is pretty obvious, really: these corresponding objects retain the same type of behavior when we translate them back and forth between the continuous context and the discrete context.  Great! Let's apply this, now.    For each of the following infinite series, decide whether it is possible (and reasonable) to use the Integral Test. If it is, apply the test and interpret the conclusions.          This would connect with the integral . Does the function, , meet the requirements of the Integral Test? Does it look like something you could antidifferentiate?    This is a fine opportunity to apply the Integral Test. The Integral Test says that we can link the behavior of the integral and the series: . Let's think about the integral! This integral converges.   Conclusion: Since the integral converges, we know that the infinite series also converges.           We can re-write to , and so we're thinking about the integral . Does this function meet the conditions of the Integral Test? Can we antidifferentiate?    Unfortunately, this integral is going to be very difficult for us! The function has an antiderivative on the interval (it's a continuous function, and so it is integrable according to the ).  This function, though, doesn't have what we call an elementary antiderivative : any antideriative of can't be written as a combination of our basic function types.  This means that we're unable to integrate this using our typical techniques, and (for now), we don't know if the integral converges or not.   Conclusion: We won't apply the Integral Test, and so we don't know whether the series converges or not.           The Integral Test would connect this series to . Does the function meet the requirements of the Integral Test? Could we antidifferentiate?    Let's apply the Integral Test. we'll connect the behavior of the integral and the series: . We'll consider the integral, and use a -substitution where and . This integral converges.   Conclusion: The integral converges, and so we know that the infinite series also converges.           We're considering the function and the integral . Does this work for the Integral Test?    If we apply the Integral Test, we're connecting the following series and integral: . We'll consider the integral and use the substitution so that . This integral diverges.   Conclusion: We found that the integral diverges, which means that the series also diverges.     As we develop more strategies and tests for series convergence, we should pause and summarize our test.   Integral Test Strategy  We want to use this for functions that are relatively easy to antidifferentiate. Looking for -substitution is a good idea, and sometimes we can straightforwardly apply integration by parts.  We'll find, though, that this test will mostly be used to introduce a family of infinite series and build up our intuition about partial sums (since we're really using the integrals to find a bound on our monotonic sequence of partial sums).     Why Do We Need These Conditions?  Before we wrap things up, let's just add some commentary on the conditions or requirements of the Integral Test. This is really a part of a broader discussion on conditions\/requirements in mathematical results in general, but we'll limit ourselves to just this specific test. There are three conditions that we can consider: positive, decreasing, and continuous.    Positive: We need and to be positive in order for us to get monotonic sequences. Since we know that , we guarantee ourselves that , since we're really adding another positive term. The same thing is true for the integrals, where we guarantee that .     Decreasing: This one serves two purposes. First, we use the direction of the function to get some ideas on how the Left and Right Riemann sum compare to the areas: with a decreasing function, the Left sum will always overestimate the integral while the Right sum will underestimate it.  We could have just required our function to be monotonic , though, since that would guarantee that one of those Riemann sums overestimated the integral while the other underestimated it: we really don't care about the order. So why would we need it, specifically, to be decreasing? Easy: if is positive and increasing , then , and we can just apply the .     Continuous: This one is pretty simple. Continuity guarantees that an antiderivative of our function exists on the interval we're looking at. We might not be able to actually find it easily, but at least we know there is one! Without continuity, we can't antidifferentiate easily and it doesn't make sense to think about the integral.     We talked about why it's nice to have a monotonic sequence of terms, but what happens when they aren't? Briefly, we can say that there are plenty of examples where the series and the integral may not behave similarly. For an easy to see example, let's consider the following series: . If we try to think about the corresponding integral, we're considering: . Can you see what the problem is? The issue becomes evident when we plot the sequence of terms and the continuous function on the same axes.     An oscillating, periodic, and positive green function labeled f(x) that touches the x-axis at every integer. These points are red, labeled a_0, a_1, a_2, ...    We can see that if we define the sequence of terms using , then for . This means that . Meanwhile, we can see that the integral will diverge to , since every oscillation adds the same positive area over and over. The limit will not exist!  In the Integral Test, and in general, we want to (and need to) be careful about the conditions we apply: we want them to be general enough that we can actually use the test, but specific enough to protect against strange counter-examples.   "
},
{
  "id": "tbl-IntegralSeries",
  "level": "2",
  "url": "sec-IntegralTest.html#tbl-IntegralSeries",
  "type": "Table",
  "number": "8.4.1",
  "title": "Comparisons of Calculus Objects in Continuous and Discrete Contexts",
  "body": " Comparisons of Calculus Objects in Continuous and Discrete Contexts    Object  Continuous Context  Discrete Context    Function      Graph      Finite Accumulation  Definite Integral  Partial Sum         Infinite Accumulation  Improper Integral  Infinite Series         "
},
{
  "id": "act-IntegralTest",
  "level": "2",
  "url": "sec-IntegralTest.html#act-IntegralTest",
  "type": "Activity",
  "number": "8.4.1",
  "title": "Integrals and Infinite Series.",
  "body": " Integrals and Infinite Series   We're going to work with a graph of a continuous function, and we're going to start with a couple of conditions:   Our function will be continuous wherever it's defined.    Our function will be decreasing on its domain.    All of the function outputs will be positive.   Let's not worry about picking a specific function for this, but we will visualize a graph of one that meets these three requirements.     A blue curve labeled f(x). The curve is positive, decreasing, and continuous. It is defined on [0,infinity) with, seemingly, a horizontal asymptote at the x-axis.    We can then visualize the sequence of terms, for .     A blue curve labeled f(x). The curve is positive, decreasing, and continuous. It is defined on [0,infinity) with, seemingly, a horizontal asymptote at the x-axis. On the plot there are red points, labeled a_0, a_1, a_2, ..., a_n.       How does the partial sum, compare to the Riemann sum for from to with rectangles?    It might help to visualize the Left Riemann sum!    Hopefully we can see that the partial sum, is the exact same thing as the left Riemann sum!      We're going to visualize the accumulation of from to by thinking about the integral: .     The blue curve, with the area shaded from x=0 to x=n. The area is labeled with the definite integral.    How does this area compare to the Riemann sum you thought of above? Compare them with an inequality and make sure you can explain why this has to be true.    Here's a picture of the left Riemann sum!     The left Riemann sum formed at each red point.      Since is a left Riemann sum for , and since is decreasing, then we know that each rectangle is formed from the highest point on each subinterval. That means that each rectangle's area overestimates the area under the curve on that subinterval. Note, also, that since this is a left Riemann sum, the th rectangle is hanging past the end of the definite integral. This means that: .      Remove the first term of the series, , and instead think of the sum . Can you still think of this as a Riemann sum to approximate the area from the integral ?  How does this new Riemann sum compare to the area formed by the integral? Compare them with an inequality and make sure you can explain why this has to be true.    Notice, now, that we need to be the representative height for the first rectangle. How does that change the formation of the rectangles?    We can form a Right Riemann sum! Note that we don't \"overhang\" the interval anymore.     The right Riemann sum formed at each red point, other than the first one.    Note, now, that we are using the lowest point on each subinterval to form the rectangle. This means that: .      We have thought about two sums, and we can connect them: . Use the sums to bound the integral:            Similarly, use the integral to bound the sum:           These bounds are going to be super useful! Discovering them is the main task for finding the connections between improper integrals and infinite series. These inequalities might seem kind of strange at first, but we're going to apply a limit to everything as , and then think about our definitions of convergence ( and ).   "
},
{
  "id": "thm-IntegralTest",
  "level": "2",
  "url": "sec-IntegralTest.html#thm-IntegralTest",
  "type": "Theorem",
  "number": "8.4.7",
  "title": "Integral Test.",
  "body": " Integral Test   If is an infinite series with for all and is a continuous and decreasing function with for all , then we can compare the behaviors of and : the integral and the series are guaranteed to either both diverge or both converge.    The proof of this will come in two parts. First, we'll prove that converges when converges.  Then, we'll prove that diverges when diverges.     Let's start with the assumption that converges. We know, based on , that this means that exists. We also know, since , that . This means: This means that the partial sum, has an upper bound.  We also know that, since for all , then . This means that the sequence of partial sums, is both monotonic and bounded, and therefore must converge (by the ).  Thus, converges.    Now, we can start with the assumption that the integral diverges. Since we know that is positive, then we know that . We can re-consider the inequalities from : So then must also diverge.   This is everything we need to prove! Note that we could replicate this proof by swapping the role of the series and the integral to get the same conclusion.   "
},
{
  "id": "ex-InvTanSeries",
  "level": "2",
  "url": "sec-IntegralTest.html#ex-InvTanSeries",
  "type": "Example",
  "number": "8.4.8",
  "title": "",
  "body": "  For each of the following infinite series, decide whether it is possible (and reasonable) to use the Integral Test. If it is, apply the test and interpret the conclusions.          This would connect with the integral . Does the function, , meet the requirements of the Integral Test? Does it look like something you could antidifferentiate?    This is a fine opportunity to apply the Integral Test. The Integral Test says that we can link the behavior of the integral and the series: . Let's think about the integral! This integral converges.   Conclusion: Since the integral converges, we know that the infinite series also converges.           We can re-write to , and so we're thinking about the integral . Does this function meet the conditions of the Integral Test? Can we antidifferentiate?    Unfortunately, this integral is going to be very difficult for us! The function has an antiderivative on the interval (it's a continuous function, and so it is integrable according to the ).  This function, though, doesn't have what we call an elementary antiderivative : any antideriative of can't be written as a combination of our basic function types.  This means that we're unable to integrate this using our typical techniques, and (for now), we don't know if the integral converges or not.   Conclusion: We won't apply the Integral Test, and so we don't know whether the series converges or not.           The Integral Test would connect this series to . Does the function meet the requirements of the Integral Test? Could we antidifferentiate?    Let's apply the Integral Test. we'll connect the behavior of the integral and the series: . We'll consider the integral, and use a -substitution where and . This integral converges.   Conclusion: The integral converges, and so we know that the infinite series also converges.           We're considering the function and the integral . Does this work for the Integral Test?    If we apply the Integral Test, we're connecting the following series and integral: . We'll consider the integral and use the substitution so that . This integral diverges.   Conclusion: We found that the integral diverges, which means that the series also diverges.    "
},
{
  "id": "subsec-WhyConditions-2",
  "level": "2",
  "url": "sec-IntegralTest.html#subsec-WhyConditions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "monotonic "
},
{
  "id": "fig-OscillatingIntegralTest",
  "level": "2",
  "url": "sec-IntegralTest.html#fig-OscillatingIntegralTest",
  "type": "Figure",
  "number": "8.4.9",
  "title": "",
  "body": "   An oscillating, periodic, and positive green function labeled f(x) that touches the x-axis at every integer. These points are red, labeled a_0, a_1, a_2, ...   "
},
{
  "id": "sec-AlternatingSeries",
  "level": "1",
  "url": "sec-AlternatingSeries.html",
  "type": "Section",
  "number": "8.5",
  "title": "Alternating Series and Conditional Convergence",
  "body": " Alternating Series and Conditional Convergence   Before we move too far forward, let's circle back to a point made in . In the , we required the terms of our series (and the continuous function we connected it with) to be positive. This was really just a mechanism that allowed us to say, in our proof, that the sequence of partial sums was monotonic. When we accumulate more of a positive thing, the total gets bigger. This is half of what we needed for us to employ the . And because this is such a useful tool, we'll see more of this \"positive term series\" condition showing up in the tools we use to see if a series converges.  But that makes this a perfect time to stop and ask a hallowed mathematical question: What happens if that property isn't there? What happens when our series does not only have positive terms?  We definitely have fewer tools to use, since we don't get anything that relies on applying the to partial sums. So instead, we'll take a brief detour into something we call Alternating Series (a series whose terms alternate in sign).   Which is More Likely to Converge?   We're going to try to think about what might be different when we analyze an alternating series compared to a series with only positive (or non-negative) terms.  Let's say that is some sequence of positive real numbers. Now let's consider the two series:      Let's first consider the sequences of terms: compared with . Is either of these more or less likely to converge? Does this tell us anything about whether or not the corresponding series converges?    Try thinking about how we might find , especially using the .    What does the say? Is either of these sequences more or less likely to converge to 0 (or not)?      Now let's think of the partial sums: Is either of these sequences more or less likely to converge? Does this tell us anything about whether or not the corresponding series converges?    It might be helpful to plot these partial sums! Referencing a picture like and think about how this will change the plot of partial sums for terms that alternate in sign.      Now make a conjecture about which infinite series is more likely to converge: Remember that for , so the only differences are the changes in sign.    Remember that series convergence is defined by the behavior of the sequence of partial sums!       Defining Alternating Series, and the Main Result  Ok so hopefully we have convinced ourselves that a series that has terms that alternate in sign might have an \"easier\" time converging than a series with only positive terms. Let's start with a definition (so that we can continue to refer to these types of series easily), and then move towards the main result.   Alternating Series   An infinite series is called an Alternating Series when or for all . That is, the sign of the terms alternates:     So this is the type of series we're thinking of: the terms perfectly alternate in sign.   At the beginning of this section, we talked about removing conditions and seeing what happens. We are not fully generalizing to terms that are just different in sign, since we still have a specific format that the terms need to hold to: switching between positive, negative, positive negative, etc. Series that have a less consistent pattern between positive and negative signs are harder to think about, and so we will have to be satisfied with loosening the restrictions on signs of the terms without fully removing any conditions.   Now, we will bring into focus one of the main results about alternating series before investigating these types of series (and how they converge) further.  To lead into this new result, let's remind ourselves of a few things:   Remember the . We, specifically, want to remember that, in general, we don't know anything about a series if .    We have typically been looking at infinite series where we impose a further restriction on the terms: we looked at infinite series with only positive terms. We can get a lot more information about these series!    Now we are looking at infinite series with a different kind of structure on their terms: the signs alternate. So it won't be a surprise when we get to add information about them!     The big idea that we'll use the extra information about these alternating series (based on how we defined them) to get more information from the limit of the terms. Normally we don't get any information when : the series of those terms could converge or diverge, and we can't tell! But with this new structure of the terms (the alternating signs), we'll actually be able to tell something from the limit of the terms being 0.  Let's look at it! We're going to think about visualizing the partial sums.  In , we looked at the partial sums of an infinite series and saw how the terms made up the differences between those partial sums. We're going to think about this same picture, but think about it through the lense of:   an alternating series (with terms that alternate in sign) where...    the terms of the alternating series approach 0 in the limit: . Note that this means that the size of the terms must go to 0 in the limit, .      Partial sums of an alternating series.   Red points on a plot. They are labeled S_0, S_1, S_2, S_3, S_4, S_5, S_6, ... S_n, S_(n+1). The points bounce up and down, where the even indexed points are above. The vertical distance between each point is green and is labeled a_0, a_1, a_2, a_3, a_4, a_5, a_6, ... a_n, a_(n+1). These are getting smaller as we move from point to point.    Let's note a couple of things:   All of the \"even-indexed\" terms ( , , , etc.) are positive, while all of the \"odd-indexed\" terms ( , , , etc.) are negative.    This means that all of the \"even-indexed\" partial sums are big, while all of the \"odd-indexed partial sums\" are small. Our sequence of partial sums bounces up to an even-index and bounces down to an odd-index.  As long as the size of the terms (the size of the differences between partial sums) is decreasing like we have pictured, then each \"next\" even-indexed partial sum is a bit smaller than the \"previous\" even-indexed partial sum. The same thing is true for the odd-indexed partial sums.    The terms themselves represent the distance between these successive partial sums: the difference between and is the term .   So, as long as the sizes of the terms are decreasing (or, as long as the distance between partial sums is decreasing consistently), then what happens when the terms (the distance between partial sums) goes to 0?  The even-indexed partial sums and the odd-indexed partial sums approach each other!   Alternating Series Test   If is an alternating series and the size of the terms is decreasing, then if then converges.    This proof will follow the discussion before the statement of the theorem. Mostly, we will just fill in some details and provide some further justification for why what we were noticing must be true.  Let's start with the conditions of the test:   We are considering an , . For our purposes, we'll assume that we have something like where the even-indexed terms are the positive ones. This could be flipped and it wouldn't make a difference.    The size of the terms are decreasing. That is, for all     The limit . Note that this also means that .     We're going to show that, under these conditions, the alternating series we're considering must converge. The way that we'll do this is, no surprise, by invoking . We're going to do it by considering the partial sums in halves: the even-indexed ones and the odd-indexed ones.  First, consider the sequence . The difference between successive terms in this sequence (successive even-indexed partial sums) is: . Since the terms of the alternating series are decreasing in size, we know that , which means that , and so .  All of this which is to say, is a decreasing sequence.  We can apply the same reasoning to the sequence . We know the differences between successive odd-indexed partial sums is: . This time, though, and so the difference is positive: which means that . The sequence is an increasing sequence.  We're getting close! We have monotonic sequences. Now we just need to show bounds, and then we'll show that each of these sequences converges. Then, we'll show that they converge to the same thing.  Getting an upper bound on the odd-indexed partial sums and a lower bound on the even-indexed partial sums is pretty easy. Let's consider subsequent partial sums, and . Ok so this is easy: we can just pick any odd-indexed partial sum to be the lower bound on the even-indexed partial sums, and vice versa.  So is an upper bound on , since every other is less than , and all of partial sums are less than : Similarly, we can say the same thing about being a lower bound for the even-indexed partial sums:   So we have shown that the sequences and are both monotonic and bounded and so both of these sequences must converge.  Now we can show that they converge to the same thing.  Since converges, let's say that there is some number where . Similarly, there is a number where . Now we can use the fact that the limit of the terms is 0: So the numbers that these two sequences of partial sums converge to are actually equal to each other.  So, finally, we know that under the conditions we started with, the alternating series must converge.    We can actually get another result really easily from this one! It's about how we might approximate the value that an infinite series converges to.  We know that if a series converges, it's because the limit of the partial sums exists. So we \"just\" need to find what the real number, , is when . We said earlier, though, that this is pretty hard to do! We can always approximate this limit, though, by looking at a big partial sum: if the limit exists, then probably adding up the first 10,000 terms will be a pretty good approximation (since we don't expect the partial sums to change, much, as gets bigger). But how many terms is enough to give us a good enough approximation?  That's a hard question to answer, until we think about alternating series.   Approximating an Alternating Series   Let's look, again, at the picture of the partial sums of an alternating series in . We're going to assume that the series converges, which means that:    exists.     .   Let's add to our figure.     Red points on a plot. They are labeled S_0, S_1, S_2, S_3, S_4, S_5, S_6, ... S_n, S_(n+1). The points bounce up and down, where the even indexed points are above. The vertical distance between each point is green and is labeled a_0, a_1, a_2, a_3, a_4, a_5, a_6, ... a_n, a_(n+1). These are getting smaller as we move from point to point. This means that the red points are getting closer to a grey dashed line that cuts through the points labeled lim_(n to infinity) S_n.       Why are the even-indexed partial sums sitting above the odd-indexed partial sums?    We started, in this case, with a positive term , and then the rest of the signs alternate. How does this change the partial values of partial sums?      Why are the even-indexed partial sums sitting above the horizontal line, ?    We know that the sizes of the terms, , decreases. This means that the sequence is decreasing.  What does that mean about how these partial sums relate to the limit of partial sums?      Why are the odd-indexed partial sums sitting below the horizontal line, ?    We know that the sizes of the terms, , decreases. This means that the sequence is increasing.  What does that mean about how these partial sums relate to the limit of partial sums?      If we were trying to approximate the value of , how can we use the partial sums to build an interval that approximates the value?    Since all of the even-indexed partial sums are upper bounds of any approximation and the odd-indexed partial sums are lower bounds.  This means that any pair of partial sums serves as an approximation:       Approximations of Alternating Series   If is a converging alternating series, then the value that the series converges to is bound between consecutive partial sums.  Another way of saying this is that the partial sum approximates the actual value of with a maximum error of .      Convergence, More Carefully  Let's circle back to an important point from : an alternating series is more likely to converge than its positive-term counterpart.  Let's look at a classic example of this: the alternating harmonic series.   The Alternating Harmonic Series Converges             Let's look at another \"version\" of this \"same\" series. You'll notice that we're using scare-quotes on \"version\" and \"same,\" and that's what we're going to investigate.   The Alternating Harmonic Series Converges (Again)             This is strange! We have two series that seem to be the same thing (one is just a re-arranged version of the other) that both converge, but they converge to different things!  This doesn't seem to follow the normal rules of addition: we lose the normal associative property of addition, where the order or the way that we group terms to add typically doesn't matter. Here it does!  It turns out (and we won't prove this) that this type of convergence happens only for alternating series, and further it only happens for alternating series whose positive-term counterpart diverges.   Conditional (and Absolute) Convergence   If is a converging alternating series, then we say that the alternating series  converges conditionally if diverges.  If, instead, the positive-term series converges as well, then we say that the alternating series  converges absolutely .      So now, for a series whose terms alternate in size, we can:   Classify whether the series converges or not ( ).    Further classify any converging alternating series to see whether the value it converges to is invariant to re-arrangement. ( ).    Approximate the value that the series converges to using the th partial sum, and also include an error bound on that approximation using the ( ).      "
},
{
  "id": "sec-AlternatingSeries-2-3",
  "level": "2",
  "url": "sec-AlternatingSeries.html#sec-AlternatingSeries-2-3",
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
  "body": " Which is More Likely to Converge?   We're going to try to think about what might be different when we analyze an alternating series compared to a series with only positive (or non-negative) terms.  Let's say that is some sequence of positive real numbers. Now let's consider the two series:      Let's first consider the sequences of terms: compared with . Is either of these more or less likely to converge? Does this tell us anything about whether or not the corresponding series converges?    Try thinking about how we might find , especially using the .    What does the say? Is either of these sequences more or less likely to converge to 0 (or not)?      Now let's think of the partial sums: Is either of these sequences more or less likely to converge? Does this tell us anything about whether or not the corresponding series converges?    It might be helpful to plot these partial sums! Referencing a picture like and think about how this will change the plot of partial sums for terms that alternate in sign.      Now make a conjecture about which infinite series is more likely to converge: Remember that for , so the only differences are the changes in sign.    Remember that series convergence is defined by the behavior of the sequence of partial sums!    "
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
  "id": "fig-AlternatingPartial-1",
  "level": "2",
  "url": "sec-AlternatingSeries.html#fig-AlternatingPartial-1",
  "type": "Figure",
  "number": "8.5.2",
  "title": "",
  "body": " Partial sums of an alternating series.   Red points on a plot. They are labeled S_0, S_1, S_2, S_3, S_4, S_5, S_6, ... S_n, S_(n+1). The points bounce up and down, where the even indexed points are above. The vertical distance between each point is green and is labeled a_0, a_1, a_2, a_3, a_4, a_5, a_6, ... a_n, a_(n+1). These are getting smaller as we move from point to point.   "
},
{
  "id": "thm-AlternatingSeriesTest",
  "level": "2",
  "url": "sec-AlternatingSeries.html#thm-AlternatingSeriesTest",
  "type": "Theorem",
  "number": "8.5.3",
  "title": "Alternating Series Test.",
  "body": " Alternating Series Test   If is an alternating series and the size of the terms is decreasing, then if then converges.    This proof will follow the discussion before the statement of the theorem. Mostly, we will just fill in some details and provide some further justification for why what we were noticing must be true.  Let's start with the conditions of the test:   We are considering an , . For our purposes, we'll assume that we have something like where the even-indexed terms are the positive ones. This could be flipped and it wouldn't make a difference.    The size of the terms are decreasing. That is, for all     The limit . Note that this also means that .     We're going to show that, under these conditions, the alternating series we're considering must converge. The way that we'll do this is, no surprise, by invoking . We're going to do it by considering the partial sums in halves: the even-indexed ones and the odd-indexed ones.  First, consider the sequence . The difference between successive terms in this sequence (successive even-indexed partial sums) is: . Since the terms of the alternating series are decreasing in size, we know that , which means that , and so .  All of this which is to say, is a decreasing sequence.  We can apply the same reasoning to the sequence . We know the differences between successive odd-indexed partial sums is: . This time, though, and so the difference is positive: which means that . The sequence is an increasing sequence.  We're getting close! We have monotonic sequences. Now we just need to show bounds, and then we'll show that each of these sequences converges. Then, we'll show that they converge to the same thing.  Getting an upper bound on the odd-indexed partial sums and a lower bound on the even-indexed partial sums is pretty easy. Let's consider subsequent partial sums, and . Ok so this is easy: we can just pick any odd-indexed partial sum to be the lower bound on the even-indexed partial sums, and vice versa.  So is an upper bound on , since every other is less than , and all of partial sums are less than : Similarly, we can say the same thing about being a lower bound for the even-indexed partial sums:   So we have shown that the sequences and are both monotonic and bounded and so both of these sequences must converge.  Now we can show that they converge to the same thing.  Since converges, let's say that there is some number where . Similarly, there is a number where . Now we can use the fact that the limit of the terms is 0: So the numbers that these two sequences of partial sums converge to are actually equal to each other.  So, finally, we know that under the conditions we started with, the alternating series must converge.   "
},
{
  "id": "act-ApproximatingAlternating",
  "level": "2",
  "url": "sec-AlternatingSeries.html#act-ApproximatingAlternating",
  "type": "Activity",
  "number": "8.5.2",
  "title": "Approximating an Alternating Series.",
  "body": " Approximating an Alternating Series   Let's look, again, at the picture of the partial sums of an alternating series in . We're going to assume that the series converges, which means that:    exists.     .   Let's add to our figure.     Red points on a plot. They are labeled S_0, S_1, S_2, S_3, S_4, S_5, S_6, ... S_n, S_(n+1). The points bounce up and down, where the even indexed points are above. The vertical distance between each point is green and is labeled a_0, a_1, a_2, a_3, a_4, a_5, a_6, ... a_n, a_(n+1). These are getting smaller as we move from point to point. This means that the red points are getting closer to a grey dashed line that cuts through the points labeled lim_(n to infinity) S_n.       Why are the even-indexed partial sums sitting above the odd-indexed partial sums?    We started, in this case, with a positive term , and then the rest of the signs alternate. How does this change the partial values of partial sums?      Why are the even-indexed partial sums sitting above the horizontal line, ?    We know that the sizes of the terms, , decreases. This means that the sequence is decreasing.  What does that mean about how these partial sums relate to the limit of partial sums?      Why are the odd-indexed partial sums sitting below the horizontal line, ?    We know that the sizes of the terms, , decreases. This means that the sequence is increasing.  What does that mean about how these partial sums relate to the limit of partial sums?      If we were trying to approximate the value of , how can we use the partial sums to build an interval that approximates the value?    Since all of the even-indexed partial sums are upper bounds of any approximation and the odd-indexed partial sums are lower bounds.  This means that any pair of partial sums serves as an approximation:     "
},
{
  "id": "thm-ApproximatingAlternating",
  "level": "2",
  "url": "sec-AlternatingSeries.html#thm-ApproximatingAlternating",
  "type": "Theorem",
  "number": "8.5.5",
  "title": "Approximations of Alternating Series.",
  "body": " Approximations of Alternating Series   If is a converging alternating series, then the value that the series converges to is bound between consecutive partial sums.  Another way of saying this is that the partial sum approximates the actual value of with a maximum error of .   "
},
{
  "id": "act-AlternatingHarmonicSeries",
  "level": "2",
  "url": "sec-AlternatingSeries.html#act-AlternatingHarmonicSeries",
  "type": "Activity",
  "number": "8.5.3",
  "title": "The Alternating Harmonic Series Converges.",
  "body": " The Alternating Harmonic Series Converges            "
},
{
  "id": "act-RearrangedAlternatingHarmonicSeries",
  "level": "2",
  "url": "sec-AlternatingSeries.html#act-RearrangedAlternatingHarmonicSeries",
  "type": "Activity",
  "number": "8.5.4",
  "title": "The Alternating Harmonic Series Converges (Again).",
  "body": " The Alternating Harmonic Series Converges (Again)            "
},
{
  "id": "def-ConditionalConvergence",
  "level": "2",
  "url": "sec-AlternatingSeries.html#def-ConditionalConvergence",
  "type": "Definition",
  "number": "8.5.6",
  "title": "Conditional (and Absolute) Convergence.",
  "body": " Conditional (and Absolute) Convergence   If is a converging alternating series, then we say that the alternating series  converges conditionally if diverges.  If, instead, the positive-term series converges as well, then we say that the alternating series  converges absolutely .   "
},
{
  "id": "sec-CommonSeries",
  "level": "1",
  "url": "sec-CommonSeries.html",
  "type": "Section",
  "number": "8.6",
  "title": "Common Series Types",
  "body": " Common Series Types   In this section, we'll stop and recap some of the common series types that we should recognize moving forward. We'll look at the structure of these series (mainly the functions defining the terms of the series) as well as the convergence criteria for them.  Look back to . We noticed that we were able to find an explicit formula for the th partial sum, which allowed us to evaluate . We noticed this again in .  But there are some differences between why we were able to find formulas for the th partial sum in each of these examples. Let's first focus on the infinite series with terms defined by exponential functions.    Geometric Series  We're going to name these series and define them explicitly. The name, geometric , comes from the idea of a geometric mean : each term in the series is the geometric mean of the term before it and after it.   The geometric mean is a way of finding a kind of average. Instead of adding up the values and dividing by the number of values, we multiply the values and then take an th root, where is the number of things averaged.  For instance, a geometric mean of the numbers 1, 4, and 5 is: This is approximately 2.714. We can compare that to the arithmetic mean: . These are just different kinds of measures of \"center\" of a list of values, although you might be most familiar with the arithmetic mean.    Geometric Series   For real numbers and with , we say that the series is a geometric series . We call the constant ratio and the initial term .    We noticed in that these kinds of series, with their exponential structure in the terms, make it relatively easy to find patterns or explicit formulas for the partial sums. Since we can find a formula for based on , we can find . This was something we noted then, and said that it was a pretty rare property.  Let's generalize this a bit, and come up with a general formula for these partial sums. Once we have that, we will be able to find out what any geometric series converges to (if it does converge).   Geometric Series Convergence Criteria   A geometric series converges to when and diverges if .      -Series  Another type of structure that we can take advantage of is power functions. This way, we can leverage the (since antidifferentiating using the will be easy) to classify whether or not these series converge.  Let's start by naming these. We'll focus on power functions with negative exponents, or reciprocal power functions.   -Series   For a real number , we say that the series is a -series . We mostly will be concerned about the case where , making the terms of the series be reciprocal power functions.    Now, we just need to think about integration, and the convergence classification comes quickly from there.   -Series Convergence Criteria   A -series converges when and diverges when .    Let's divide this into four cases: when , when , when , and when .  Case 1:  Note that for with , we can write this as . Now we can consider the limit of the terms, in order to use the . Since this limit is non-zero (since it is either or 1, depending on whether or not), the series diverges by the Divergence Test.   Case 2:   When , we can apply the to the series. It is worth showing that the conditions of the test are met, but this is left up to the reader.  So now we will consider the integral as a way of seeing whether the series converges or diverges. We can note that since , that . This means that when , as well. This integral diverges, and so then does the series.   Case 3:   This is the ! This series diverges ( ).   Case 4:   We can repeat the proof from Case 2 , but we will end with a different conclusion based on the sign of the exponent! Let us, again, apply the Integral Test.  Consider the integral as a way of seeing whether the series converges or diverges. Now, though, we have which means that . This means that . So now we will consider the limit, and note that as , we get . This integral converges, and so then does the series. We remember, though, that the series converges to something different than the integral, and so we do not know what the series converges to.      Recapping Our Mathematical Objects  It's a good idea to pause and try to make sure we understand what these infinite series are. We have talked a lot about a whole bunch of objects in this chapter so far: infinite sequences, partial sums, sequences of partial sums, infinite series, integrals, limits, etc. We want to make sure that we can keep track of the ways in which we use these and talk about them. The following activity is brief, but can help make sure we understand some of the interactions we've talked about so far.   (Im)Possible Combinations   When we have thought about infinite series, we have thought about three different mathematical objects: the sequence of terms of the series, the sequence of partial sums of the series, and the infinite series itself. As a reminder, if we had an infinite series we can say that:    is the sequence of terms of the series     is a partial sum and is the sequence of partial sums of the series   For each of these three objects the terms, the partial sums, and the series we have some notion of what it means for that object to converge or diverge.  Consider the following table of all of the different combinations of convergence and divergence of the three objects. For each combination, decide whether this combination is possible or impossible. If it is possible, give an example of an infinite series whose terms, partial sums, and the series itself converge\/diverge appropriately. If it is impossible, give an explanation of why.   (Im)Possible Combinations       (Im)Possible?  Example or Explanation    Converges  Converges  Converges      Converges  Converges  Diverges      Converges  Diverges  Converges      Converges  Diverges  Diverges      Diverges  Converges  Converges      Diverges  Converges  Diverges      Diverges  Diverges  Converges      Diverges  Diverges  Diverges         We can think back to some results or definitions that connect pairs of these objects. Can you think of any result or definition that connects an infinite series and a sequence of partial sums? What about a result or definition that connects the sequence of terms with the infinite series?    Look back at and .     (Im)Possible Combinations    (Im)Possible?  Example or Explanation    Possible  Any converging series serves as an example.    Impossible  The sequence of partial sums and the infinite series are the same object, and so must behave in the same way.    Impossible  The sequence of partial sums and the infinite series are the same object, and so must behave in the same way.    Possible     Impossible  If the infinite series converges, then the sequence of terms must converge to 0.    Impossible  The sequence of partial sums and the infinite series are the same object, and so must behave in the same way.    Impossible  Both of the reasons, and apply here!    Possible          Moving forward, we'll want to commit these families of series to memory, as well as their convergence criteria.  Here's some justification: for an infinite series like , we previously (in ) compared this series to the integral . This worked well, since we could pretty easily antidifferentiate and conclude that the integral converged.  Now, though, we have another connection to make: doesn't this series almost look like a ? It's very close to a reciprocal power function, where the only thing that's \"off\" is the \" \" in the denominator.  We can hopefully think about changing this example slightly: what about the series ? This one could still be compared to the integral , but this integral will be harder for us to integrate. But if we think about this as almost a , then we might still be able to have some intuition about it's behavior: it looks kind of like a converging -series, so shouldn't it also converge?  Our next section will develop this kind of comparison, where instead of comparing an \"integral\" in the discrete context to one in the continuous context (like we do in the ), we can compare an \"integral\" in the discrete context to a similar one in a similar context.   "
},
{
  "id": "subsec-GeometricSeries-2",
  "level": "2",
  "url": "sec-CommonSeries.html#subsec-GeometricSeries-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric geometric mean "
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
  "body": " (Im)Possible Combinations   When we have thought about infinite series, we have thought about three different mathematical objects: the sequence of terms of the series, the sequence of partial sums of the series, and the infinite series itself. As a reminder, if we had an infinite series we can say that:    is the sequence of terms of the series     is a partial sum and is the sequence of partial sums of the series   For each of these three objects the terms, the partial sums, and the series we have some notion of what it means for that object to converge or diverge.  Consider the following table of all of the different combinations of convergence and divergence of the three objects. For each combination, decide whether this combination is possible or impossible. If it is possible, give an example of an infinite series whose terms, partial sums, and the series itself converge\/diverge appropriately. If it is impossible, give an explanation of why.   (Im)Possible Combinations       (Im)Possible?  Example or Explanation    Converges  Converges  Converges      Converges  Converges  Diverges      Converges  Diverges  Converges      Converges  Diverges  Diverges      Diverges  Converges  Converges      Diverges  Converges  Diverges      Diverges  Diverges  Converges      Diverges  Diverges  Diverges         We can think back to some results or definitions that connect pairs of these objects. Can you think of any result or definition that connects an infinite series and a sequence of partial sums? What about a result or definition that connects the sequence of terms with the infinite series?    Look back at and .     (Im)Possible Combinations    (Im)Possible?  Example or Explanation    Possible  Any converging series serves as an example.    Impossible  The sequence of partial sums and the infinite series are the same object, and so must behave in the same way.    Impossible  The sequence of partial sums and the infinite series are the same object, and so must behave in the same way.    Possible     Impossible  If the infinite series converges, then the sequence of terms must converge to 0.    Impossible  The sequence of partial sums and the infinite series are the same object, and so must behave in the same way.    Impossible  Both of the reasons, and apply here!    Possible       "
},
{
  "id": "sec-ComparisonTests",
  "level": "1",
  "url": "sec-ComparisonTests.html",
  "type": "Section",
  "number": "8.7",
  "title": "Comparison Tests",
  "body": " Comparison Tests   So far, our strategies for thinking about infinite series have been focused around drawing a connection between the infinite series we care about and some other mathematical object:   The draws a connection (even thought it's a limited one) between the terms of the series and the series itself.    The draws a (stronger) connection between the terms of, specifically, an and the series itself.    The draws a connection between the series and a corresponding integral.   Now we'll work on building the most important series convergence test mechanism: we'll draw a link between the series we care about and some other series that we already know about.  This is helpful for three reasons:   We already have a couple of types of series that we know about ( ), and we can keep adding to that list.    We can take advantage of similar structure or common term formulas when we see them to essentially say, \"This series kind of looks like one that I recognize. I wonder if they act the same?\"    We don't always have to integrate things using the Integral Test! Integrating can be hard!       Comparing Partial Sums  We're going to start by trying to do the same thing we did when we build the : show that the partial sums are monotonic and bounded and then make use of the .   Comparisons to Bound Partial Sums   This activity is mostly going to be thinking about proof mechanisms, and so it might be helpful to review . If you want to see more, then the proof of will provide some further details on why the inequalities we built were useful.     In the Integral Test, how did we guarantee that our sequence of partial sums was monotonic?      How did we know that, as long as the corresponding integral converged, then our sequence of partial sums was bounded?      How did we know that, as long as our integral diverged, then our sequence of partial sums had to diverge as well?      What happens if we swap out the integral we're connecting our series to with a different series?  For these inequalities to be useful, what do we need to be true?    For our sequence of partial sums to be bounded, we originally had that our partial sums were smaller than an expression involving an integral. Then, those integrals eventually converged to something, and so our sequence of partial sums was bounded by a value.  Can we swap out an integral for a different partial sum? What has to happen in the limit to guarantee that our series converges?    Similarly, when we showed that our partial sums were always greater than something involving an integral, then we were able to show that if that integral diverged, then our partial sums had no choice but to diverge to infinity as well.  What kind of partial sum do you need to change out the integral for?     This is it! We have everything we need to construct another link: this time between the infinite series we care about and another infinite series that we think acts the same.  To illustrate what we've done, let's think about two sequences of terms: and where for . We can think of the graphs, pictured below.   The \"smaller\" sequence of terms graphed alongside the \"bigger\" sequence of terms .   A sequence of green dots, labeled {b_k}, decreasing to the horizontal axis. There is a second sequence of red dots, labeled {a_k}, also decreasing to the horizontal axis. At some point, the green dots look like they're on top of the red ones.    Now we can think about the graphs of these partial sums. Let's first think about what might happen if the series converges. We'll plot the partial sums, and the sequence of partial sums has to converge to something. But then we can think about the sequence of partial sums from the terms: the smaller terms, of course, will build smaller partial sums.   Comparison of partial sums when converges.   A sequence of green dots, labeled {partial sum of b_k}, increasing to a horizontal line. The line is labeled as the limit of the partial sums of b_k. There is a second sequence of red dots, labeled {partial sums of a_k}, also increasing but below the green dots.    So we can pretty easily use as an upper bound on the sequence ! And now we can say that the sequence of partial sums for is monotonic and bounded, and so it must converge.  Then we can ask about the diverging case. This time, we'll say that the smaller series, diverges.   Comparison of partial sums when diverges.   A sequence of green dots, labeled {partial sum of b_k}, increasing to seemingly infinity. There is a second sequence of red dots, labeled {partial sums of a_k}, also increasing to seemingly infinity, but below the green dots.    We can think that this \"smaller\" sequence of partial sums is \"pushing\" the \"larger\" sequence of partial sums up to infinity with it.  These two cases make up our first comparison mechanic between two infinite series.   Direct Comparison Test   If and are infinite series with positive terms ( and for ) with the ordering for , then:   If diverges, then also diverges.    If converges, then also converges.       At the end of , we referenced the series: . Let's use our new test!    Does the series converge or diverge? How do you know?    If we're going to use our new , we need to identify two things:   Some intuition on whether we think our series converges or not.    An appropriate series to compare to. Likely, this will be either a or a , since we have clear convergence criteria for each of those.   We can do this in any order: sometimes we might use the structure of the series we're looking at to give us a good candidate to compare to, and that might tell us the behavior we think we're looking for. Other times we might have good intuition about convergence\/divergence of the series which will tell us whether we need to find a series that is smaller or larger to compare to.  What do you think? Do we have a suitable comparison?    Compare to the  . Here, . Based on this, do we need to show that is greater than or less than ?  Show this!  Does the change in the starting index matter?    Let's compare our series to the converging -series with : . We want to show that for .  Let's start with comparing the denominators, and move from there. Now we can think about reciprocals: . This means that, since converges, then must also converge.  We can just add the term where to get So then we know that our series, must converge.    A quick note: in this example, we thought about building the link and then arguing that changing the index to start at by adding in a single term wouldn't change the behavior of the infinite series.  In general, we don't need to add in that last argument. We can assume from here on out that changing our starting index won't impact the behavior of the series (as long as we're avoiding things like division by 0 and such). So showing that for is enough for us!    (Un)Helpful Comparisons   (Un)Helpful Comparisons   We're going to consider a handful of infinite series, here:                 Pick a series that is reasonable to use as a comparison for each of the series listed. Remember, we want:   A series that is recognizable (probably a or a ), so that we know the behavior of it: we need to know whether the series we're comparing to converges or diverges!    A series that is similar enough to the series we're working with that we can construct an inequality comparing the term structure. It can be hard to compare functions that are seemingly unrelated to each other!    A series that has terms that are either larger or smaller than our series, depending on whether we are trying to show that our series converges or diverges.       It can be useful to think about what the dominating pieces of each term structure are. What parts of the function will be most important, especially as the index, , gets larger?       In the denominator, think about contrasted with . Which of these will be more influential in determining the value of the term when gets large?    In the numerator, think about contrasted with under the square root. Which of these will be more influential? In the denominator, contrast and . Which of these will be more influential? What does this fraction look like when we just consider the numerator and denominator's most dominant pieces?          Let's link the following two series using a comparison: . We can notice that is a geometric series with and . It converges!  (Specifically, this series converges to 1.)    Let's link the following two series using a comparison: . Note that is a diverging -series, since .         Build the comparison from the series we start with to the one you picked. What kinds of conclusions can you make?       When we compare with , we can start with the denominator. What does multiplying by do to the value of ? It might help to write some of the values out for     When we compare with , we can think of the numerator and denominator separately. What does adding 1 under the square root do to the value of ? What does subtracting 2 in the denominator do to ? How do these impact the fraction?          Since , we can say that This means that since a big denominator leads to a small fraction. Then, we can scale both by a factor of 2:   Since is a converging geometric series (since and so ), then we can say that must also converge.    We can see that . Then, when we think about reciprocals, we see that since a small denominator leads to a big fraction. Then, we can multiply both by : . Finally, since , we know that .  This means that: . So, we have that for   Since is a diverging -series (since ), then must also diverge.         We're going to change the series we're considering to two slightly different series:            How do these small changes impact the inequalities you built?       We moved from the denominator to the numerator. If the numerator is the thing getting bigger, how does that impact the size of this fraction in the same comparison as before?    We changed the signs: we're subtracting in the numerator and adding in the denominator. How does that impact the size of this fraction in the same comparison as before?          Since , we know that . This means that     We have , and so: This means that: Finally, since , we have:          How do these changes in the inequalities change the conclusions we can draw from the ?    In both cases, the Direct Comparison Test is inconclusive. This means that we cannot conclude that either of these series converges or diverges: we don't have enough information to justify any claim we might make.      What do you think is happening with these series: do you think that these small changes are enough to change the behavior of the series (i.e. whether it converges or diverges)?     There are some ways around this. When we find a comparison that we think is reasonable, but has the wrong inequality for us to make a conclusion, we can do one of two things:   Try a different comparison.    Try a different test.   We'll address the second strategy momentarily.   In fact, we might argue that we could start with a different test! It might be more useful to skip using the in favor of just using the , which we'll see soon, or the or , which we'll talk about in the next section.  I think that the only real reason to think about the Direct Comparison Test is that   Sometimes it can be pretty quick to use. Sometimes.    It is much easier to see why it works, since we can make a nice argument about monotonic and bounded sequences of partial sums. From there, the Limit Comparison Test (coming up next) isn't a big jump conceptually. But it might be harder to start with.      So let's think about one of the series from : We, intuitively, tried to compare this a related geometric series: Unfortunately, we weren't able to make this connection, since for   We could, instead, still think that this is a converging series but compare it to the converging -series, . We'll actually compare it to , but this will converge as well (since the coefficient will just scale the value that the series converges to).  Note, first, that for . At we have , but after this intersection point, the exponential will be larger than the power function. And there we go! We have for and converges, so then must also converge.  Of course, we can add two more real numbers (when and ), and the resulting series will still converge. So, converges, just like we originally thought.  Let's not get ahead of ourselves: this quick change from one comparison to another is rarely easy! Here are some questions we can ask:   Where did come from? How could we have anticipated that as being useful?    Didn't we think, originally, that this was almost a geometric series? Why are we switching to comparing to a -series?    Is there some systematic way for us to think about what to compare to? Something other than appealing to growth rates?   These questions will remain largely unanswered in this text, other than the following (unhelpful) solution: getting good at thinking about inequalities and comparisons means that inequalities and comparisons become easier.  This is not intended to be a self-indulged brag: I am not that good at thinking about inequalities and comparisons either! It's just meant to have you confront the fact that this test, while understandable, is not always useful in practice. There are better paths forward!  Let's follow those instead.    Limit Comparison  Let's revisit some of our intuition from earlier. When we talked about the series in , we made the claim that it probably acted like the -series . Why did we choose this series?  Similarly, how did we pick our comparisons in ?  We had thought about what parts of the functions defining the terms of the series would take over as . We were thinking about which parts of these terms ends up dominating, in behavior, over the other parts.  We're thinking about limits, really!  We're going to use this intuition that we have about limits and relative growth rates to come up with another way of thinking about whether two things act similarly. There are a few ways that we could approach this, but it will be useful to think about this comparison of relative growth rates as ratios.  What if we think about the ratio of the functions defining the terms of the series we're comparing, and see how this ratio acts in the limit as ?   Ratios for Comparison   Let's start with some functions: we'll consider and as two functions that are continuous when with and as .  All of this is so that we can think about and know that we have an indeterminate form. We could put the requirement of differentiability on these functions (so that we could think about ), but we don't need to do that.  We're going to now consider the limit: .     What would the limit look like if with a faster growth rate than does? In this case, we might say that: .    What does it normally look like when a fraction of numbers has a very small denominator compared to the numerator?      What would the limit look like if with a faster growth rate than does? In this case, we might say that: .    What does it normally look like when a fraction of numbers has a very large denominator compared to the numerator?      If the functions and eventually act equivalently, then what does the limit look like?    When we say that these two functions act equivalently, we might mean that while they both approach 0 in the limit, they do it in the same way, or with identical growth rates.    What does it normally look like when a fraction of numbers is something over an equivalent thing?      If the function eventually acts like some scaled version of , then what does the limit look like?    We can think that as for some real number .     So we have three outcomes of our comparisons using ratios of functions in the limit:   The numerator function could, eventually, be so much larger than the denominator function that the limit of the ratio is infinite.    The denominator could, eventually, be so much larger than the numerator function that the limit of the ratio is zero.    The numerator and denominator could, eventually, act so similarly to each other (or like scaled versions of each other) that the limit is some real number that isn't 0.   This is the motivation for the next comparison test! We'll just think about the functions defining the terms of a series instead, and we'll make conclusions about the series themselves instead of the functions defining the terms.   Limit Comparison Test   If and are infinite series with positive terms ( and for ), then we can consider .   If , then:   If diverges, then diverges as well.    If converges, then converges as well.       If , then:   If converges, then converges as well.    If diverges, then diverges as well.       If where is some non-zero real number, then and will either both converge or both diverge.         For each of the following infinite series, try to select an appropriate comparison series, and then apply a comparison test to make conclusions about whether the series converges or diverges.          What happens, in the limit as to ? How does act in the limit: does the term influence much, compared to ?    One of the comparisons we can try is to link the behavior of these two series: .    In order to link these series, we'll apply a limit comparison test: . So let's investigate the limit of the ratio of the terms. This limit is one that we can think about using : we can apply the limit in the denominator under the root, and notice that the whole thing is really dependent on the behavior of .  We'll apply a technique that is used in the proof of the theorem. Now, since as we end up with: . Conclusions: Since we're comparing our series to the diverging -series , and the limit comparison test says that these two infinite series must have the same behavior (since the limit of the ratio of the term functions was 1), then we can conclude that the infinite series also diverges.           This is a hard one to come up with a reasonable comparison. Try writing out some terms and getting a feel for what kinds of things are happening structurally:   Is there something you can describe, recursively, about how we get from one term in the series to the next?    Are there consistent operations that we're applying to terms?    Does this remind you of anything?       We can compare this to a converging geometric series, . So, we want to draw the following link: . The limit comparison test follows as such: We cannot use L'Hopital's Rule here, since is not a continuous function for real numbers (since it only takes in non-negative integer inputs) and so it is not differentiable.  We can, instead, appeal to growth rates: approaches infinity much faster than , and so this fraction has a much larger denominator. . Conclusions: By the Limit Comparison Test, this means that , and so, since is a converging geometric series, then the infinite series must also converge.     There isn't anything special about the series we're comparing to: We could have used any mix of the following comparisons to find the same conclusions:                 There's no magic series to compare to: one of the nice things about the limit comparison test is that we can compare a series to another one not based on similar structure, but based on intuited behavior: if you think a series converges, compare it to a converging -series if you'd like!  There certainly are some instances where it is reasonable to pick a specific series to compare to based on the structure.    Consider the following series: . Perform a test and state a conclusion about whether or not this series converges.    There are a lot of power functions here! Which ones do you think are most important in deciding how quickly the terms approach 0?    This isn't a -Series, but it might act like one. Compare it to a relevant -Series!    We can note that the numerator is really driven by the quadratic term, , while the denominator's behavior is determined by , the power function with the highest exponent. We can make the following comparison: Note that this is a diverging -series, and so, in performing this comparison, we think that our series also converges. Let's show this using a limit comparison. e Since this limit is a non-zero real number, we can conclude that our two series have the same behavior. So, since diverged, then we know that the series must also diverge.    This example is not unique! Note that out selection of the -series to use as comparison is based on what we know will happen in the limit that we eventually use in the test itself!   Rational Comparison Theorem   If is a rational function of , where both and are polynomial functions, then:   If , then converges.    If , then diverges.        We can extend this result pretty easily by loosening up the \"rational function\" requirement. If we have combinations of power functions (even with non-integer exponents), this works as well!     So we have a great tool for analyzing series that look similar to -series: as long as the most aggressive pieces of our terms are defined by power functions, then we can connect the series to the relevant -series and use the same convergence criteria through arguments about the degrees of these power functions.  What about infinite series that are seemingly not connected to a -series? We saw other series in this section that acted more like a geometric series:                 We can set up some comparisons, like we did in this section, for each of these series individually. But is there a result similar to for series that act like a geometric series?  It turns out that the answer is a resounding, \"Yes!\" We just need to think about what aspects of a geometric series we're looking for.   "
},
{
  "id": "act-Comparison",
  "level": "2",
  "url": "sec-ComparisonTests.html#act-Comparison",
  "type": "Activity",
  "number": "8.7.1",
  "title": "Comparisons to Bound Partial Sums.",
  "body": " Comparisons to Bound Partial Sums   This activity is mostly going to be thinking about proof mechanisms, and so it might be helpful to review . If you want to see more, then the proof of will provide some further details on why the inequalities we built were useful.     In the Integral Test, how did we guarantee that our sequence of partial sums was monotonic?      How did we know that, as long as the corresponding integral converged, then our sequence of partial sums was bounded?      How did we know that, as long as our integral diverged, then our sequence of partial sums had to diverge as well?      What happens if we swap out the integral we're connecting our series to with a different series?  For these inequalities to be useful, what do we need to be true?    For our sequence of partial sums to be bounded, we originally had that our partial sums were smaller than an expression involving an integral. Then, those integrals eventually converged to something, and so our sequence of partial sums was bounded by a value.  Can we swap out an integral for a different partial sum? What has to happen in the limit to guarantee that our series converges?    Similarly, when we showed that our partial sums were always greater than something involving an integral, then we were able to show that if that integral diverged, then our partial sums had no choice but to diverge to infinity as well.  What kind of partial sum do you need to change out the integral for?    "
},
{
  "id": "fig-ComparisonTest-Terms",
  "level": "2",
  "url": "sec-ComparisonTests.html#fig-ComparisonTest-Terms",
  "type": "Figure",
  "number": "8.7.1",
  "title": "",
  "body": " The \"smaller\" sequence of terms graphed alongside the \"bigger\" sequence of terms .   A sequence of green dots, labeled {b_k}, decreasing to the horizontal axis. There is a second sequence of red dots, labeled {a_k}, also decreasing to the horizontal axis. At some point, the green dots look like they're on top of the red ones.   "
},
{
  "id": "fig-ComparisonTest-Converge",
  "level": "2",
  "url": "sec-ComparisonTests.html#fig-ComparisonTest-Converge",
  "type": "Figure",
  "number": "8.7.2",
  "title": "",
  "body": " Comparison of partial sums when converges.   A sequence of green dots, labeled {partial sum of b_k}, increasing to a horizontal line. The line is labeled as the limit of the partial sums of b_k. There is a second sequence of red dots, labeled {partial sums of a_k}, also increasing but below the green dots.   "
},
{
  "id": "fig-ComparisonTest-Diverge",
  "level": "2",
  "url": "sec-ComparisonTests.html#fig-ComparisonTest-Diverge",
  "type": "Figure",
  "number": "8.7.3",
  "title": "",
  "body": " Comparison of partial sums when diverges.   A sequence of green dots, labeled {partial sum of b_k}, increasing to seemingly infinity. There is a second sequence of red dots, labeled {partial sums of a_k}, also increasing to seemingly infinity, but below the green dots.   "
},
{
  "id": "thm-DirectComparisonTest",
  "level": "2",
  "url": "sec-ComparisonTests.html#thm-DirectComparisonTest",
  "type": "Theorem",
  "number": "8.7.4",
  "title": "Direct Comparison Test.",
  "body": " Direct Comparison Test   If and are infinite series with positive terms ( and for ) with the ordering for , then:   If diverges, then also diverges.    If converges, then also converges.      "
},
{
  "id": "ex-FirstComparisonIntuition",
  "level": "2",
  "url": "sec-ComparisonTests.html#ex-FirstComparisonIntuition",
  "type": "Example",
  "number": "8.7.5",
  "title": "",
  "body": "  Does the series converge or diverge? How do you know?    If we're going to use our new , we need to identify two things:   Some intuition on whether we think our series converges or not.    An appropriate series to compare to. Likely, this will be either a or a , since we have clear convergence criteria for each of those.   We can do this in any order: sometimes we might use the structure of the series we're looking at to give us a good candidate to compare to, and that might tell us the behavior we think we're looking for. Other times we might have good intuition about convergence\/divergence of the series which will tell us whether we need to find a series that is smaller or larger to compare to.  What do you think? Do we have a suitable comparison?    Compare to the  . Here, . Based on this, do we need to show that is greater than or less than ?  Show this!  Does the change in the starting index matter?    Let's compare our series to the converging -series with : . We want to show that for .  Let's start with comparing the denominators, and move from there. Now we can think about reciprocals: . This means that, since converges, then must also converge.  We can just add the term where to get So then we know that our series, must converge.   "
},
{
  "id": "act-UnhelpfulComparisons",
  "level": "2",
  "url": "sec-ComparisonTests.html#act-UnhelpfulComparisons",
  "type": "Activity",
  "number": "8.7.2",
  "title": "(Un)Helpful Comparisons.",
  "body": " (Un)Helpful Comparisons   We're going to consider a handful of infinite series, here:                 Pick a series that is reasonable to use as a comparison for each of the series listed. Remember, we want:   A series that is recognizable (probably a or a ), so that we know the behavior of it: we need to know whether the series we're comparing to converges or diverges!    A series that is similar enough to the series we're working with that we can construct an inequality comparing the term structure. It can be hard to compare functions that are seemingly unrelated to each other!    A series that has terms that are either larger or smaller than our series, depending on whether we are trying to show that our series converges or diverges.       It can be useful to think about what the dominating pieces of each term structure are. What parts of the function will be most important, especially as the index, , gets larger?       In the denominator, think about contrasted with . Which of these will be more influential in determining the value of the term when gets large?    In the numerator, think about contrasted with under the square root. Which of these will be more influential? In the denominator, contrast and . Which of these will be more influential? What does this fraction look like when we just consider the numerator and denominator's most dominant pieces?          Let's link the following two series using a comparison: . We can notice that is a geometric series with and . It converges!  (Specifically, this series converges to 1.)    Let's link the following two series using a comparison: . Note that is a diverging -series, since .         Build the comparison from the series we start with to the one you picked. What kinds of conclusions can you make?       When we compare with , we can start with the denominator. What does multiplying by do to the value of ? It might help to write some of the values out for     When we compare with , we can think of the numerator and denominator separately. What does adding 1 under the square root do to the value of ? What does subtracting 2 in the denominator do to ? How do these impact the fraction?          Since , we can say that This means that since a big denominator leads to a small fraction. Then, we can scale both by a factor of 2:   Since is a converging geometric series (since and so ), then we can say that must also converge.    We can see that . Then, when we think about reciprocals, we see that since a small denominator leads to a big fraction. Then, we can multiply both by : . Finally, since , we know that .  This means that: . So, we have that for   Since is a diverging -series (since ), then must also diverge.         We're going to change the series we're considering to two slightly different series:            How do these small changes impact the inequalities you built?       We moved from the denominator to the numerator. If the numerator is the thing getting bigger, how does that impact the size of this fraction in the same comparison as before?    We changed the signs: we're subtracting in the numerator and adding in the denominator. How does that impact the size of this fraction in the same comparison as before?          Since , we know that . This means that     We have , and so: This means that: Finally, since , we have:          How do these changes in the inequalities change the conclusions we can draw from the ?    In both cases, the Direct Comparison Test is inconclusive. This means that we cannot conclude that either of these series converges or diverges: we don't have enough information to justify any claim we might make.      What do you think is happening with these series: do you think that these small changes are enough to change the behavior of the series (i.e. whether it converges or diverges)?    "
},
{
  "id": "subsec-UnhelpfulComparisons-4",
  "level": "2",
  "url": "sec-ComparisonTests.html#subsec-UnhelpfulComparisons-4",
  "type": "Note",
  "number": "8.7.6",
  "title": "",
  "body": " In fact, we might argue that we could start with a different test! It might be more useful to skip using the in favor of just using the , which we'll see soon, or the or , which we'll talk about in the next section.  I think that the only real reason to think about the Direct Comparison Test is that   Sometimes it can be pretty quick to use. Sometimes.    It is much easier to see why it works, since we can make a nice argument about monotonic and bounded sequences of partial sums. From there, the Limit Comparison Test (coming up next) isn't a big jump conceptually. But it might be harder to start with.     "
},
{
  "id": "act-RatiosForComparison",
  "level": "2",
  "url": "sec-ComparisonTests.html#act-RatiosForComparison",
  "type": "Activity",
  "number": "8.7.3",
  "title": "Ratios for Comparison.",
  "body": " Ratios for Comparison   Let's start with some functions: we'll consider and as two functions that are continuous when with and as .  All of this is so that we can think about and know that we have an indeterminate form. We could put the requirement of differentiability on these functions (so that we could think about ), but we don't need to do that.  We're going to now consider the limit: .     What would the limit look like if with a faster growth rate than does? In this case, we might say that: .    What does it normally look like when a fraction of numbers has a very small denominator compared to the numerator?      What would the limit look like if with a faster growth rate than does? In this case, we might say that: .    What does it normally look like when a fraction of numbers has a very large denominator compared to the numerator?      If the functions and eventually act equivalently, then what does the limit look like?    When we say that these two functions act equivalently, we might mean that while they both approach 0 in the limit, they do it in the same way, or with identical growth rates.    What does it normally look like when a fraction of numbers is something over an equivalent thing?      If the function eventually acts like some scaled version of , then what does the limit look like?    We can think that as for some real number .    "
},
{
  "id": "thm-LimitComparisonTest",
  "level": "2",
  "url": "sec-ComparisonTests.html#thm-LimitComparisonTest",
  "type": "Theorem",
  "number": "8.7.7",
  "title": "Limit Comparison Test.",
  "body": " Limit Comparison Test   If and are infinite series with positive terms ( and for ), then we can consider .   If , then:   If diverges, then diverges as well.    If converges, then converges as well.       If , then:   If converges, then converges as well.    If diverges, then diverges as well.       If where is some non-zero real number, then and will either both converge or both diverge.      "
},
{
  "id": "subsec-LimitComparison-11",
  "level": "2",
  "url": "sec-ComparisonTests.html#subsec-LimitComparison-11",
  "type": "Example",
  "number": "8.7.8",
  "title": "",
  "body": "  For each of the following infinite series, try to select an appropriate comparison series, and then apply a comparison test to make conclusions about whether the series converges or diverges.          What happens, in the limit as to ? How does act in the limit: does the term influence much, compared to ?    One of the comparisons we can try is to link the behavior of these two series: .    In order to link these series, we'll apply a limit comparison test: . So let's investigate the limit of the ratio of the terms. This limit is one that we can think about using : we can apply the limit in the denominator under the root, and notice that the whole thing is really dependent on the behavior of .  We'll apply a technique that is used in the proof of the theorem. Now, since as we end up with: . Conclusions: Since we're comparing our series to the diverging -series , and the limit comparison test says that these two infinite series must have the same behavior (since the limit of the ratio of the term functions was 1), then we can conclude that the infinite series also diverges.           This is a hard one to come up with a reasonable comparison. Try writing out some terms and getting a feel for what kinds of things are happening structurally:   Is there something you can describe, recursively, about how we get from one term in the series to the next?    Are there consistent operations that we're applying to terms?    Does this remind you of anything?       We can compare this to a converging geometric series, . So, we want to draw the following link: . The limit comparison test follows as such: We cannot use L'Hopital's Rule here, since is not a continuous function for real numbers (since it only takes in non-negative integer inputs) and so it is not differentiable.  We can, instead, appeal to growth rates: approaches infinity much faster than , and so this fraction has a much larger denominator. . Conclusions: By the Limit Comparison Test, this means that , and so, since is a converging geometric series, then the infinite series must also converge.    "
},
{
  "id": "subsec-LimitComparison-14",
  "level": "2",
  "url": "sec-ComparisonTests.html#subsec-LimitComparison-14",
  "type": "Example",
  "number": "8.7.9",
  "title": "",
  "body": "  Consider the following series: . Perform a test and state a conclusion about whether or not this series converges.    There are a lot of power functions here! Which ones do you think are most important in deciding how quickly the terms approach 0?    This isn't a -Series, but it might act like one. Compare it to a relevant -Series!    We can note that the numerator is really driven by the quadratic term, , while the denominator's behavior is determined by , the power function with the highest exponent. We can make the following comparison: Note that this is a diverging -series, and so, in performing this comparison, we think that our series also converges. Let's show this using a limit comparison. e Since this limit is a non-zero real number, we can conclude that our two series have the same behavior. So, since diverged, then we know that the series must also diverge.   "
},
{
  "id": "thm-RationalComparison",
  "level": "2",
  "url": "sec-ComparisonTests.html#thm-RationalComparison",
  "type": "Theorem",
  "number": "8.7.10",
  "title": "Rational Comparison Theorem.",
  "body": " Rational Comparison Theorem   If is a rational function of , where both and are polynomial functions, then:   If , then converges.    If , then diverges.      "
},
{
  "id": "subsec-LimitComparison-17",
  "level": "2",
  "url": "sec-ComparisonTests.html#subsec-LimitComparison-17",
  "type": "Note",
  "number": "8.7.11",
  "title": "",
  "body": " We can extend this result pretty easily by loosening up the \"rational function\" requirement. If we have combinations of power functions (even with non-integer exponents), this works as well!  "
},
{
  "id": "sec-RatioRootTests",
  "level": "1",
  "url": "sec-RatioRootTests.html",
  "type": "Section",
  "number": "8.8",
  "title": "The Ratio and Root Tests",
  "body": " The Ratio and Root Tests   Introduction, remind that the is super useful for rational functions and things that act like .    Eventually Geometric-ish  We'll look at series that act like geometric series, but first let's remind us what Geometric Series act like.   Reminder about Geometric Series   We are going to build some convergence tests that try to link some infinite series to the family of geometric series and show that even though a series is not geometric, it might act enough like one to be considered \"eventually geometric-ish.\"  But first, what does it mean for a series to be a geometric series?     Describe a defining characteristic of a geometric series. What makes it geometric?      Can you describe this characteristic in another way? For instance, if you described a geometric series using a characteristic about the , can you describe the same characteristic in the context of the instead? Or vice versa?    What kinds of functions do we see in the formula for the terms of a geometric series?    How do you describe how you might get from one term in a geometric series to the next one?      Write out a generalized and simplified form of the term of a geometric series explicitly and recursively. In each case, solve for , the ratio between terms.      Root Test   Let be an infinite series with for and consider .   If there is some real number with and , then the series converges.    If there is some real number with and or if does not exist, then the series diverges.    If then the Root Test fails and is inconclusive.        Ratio Test   Let be an infinite series with for and consider .   If there is some real number with and , then the series converges.    If there is some real number with and or if does not exist, then the series diverges.    If then the Root Test fails and is inconclusive.        "
},
{
  "id": "act-ReminderGeometric",
  "level": "2",
  "url": "sec-RatioRootTests.html#act-ReminderGeometric",
  "type": "Activity",
  "number": "8.8.1",
  "title": "Reminder about Geometric Series.",
  "body": " Reminder about Geometric Series   We are going to build some convergence tests that try to link some infinite series to the family of geometric series and show that even though a series is not geometric, it might act enough like one to be considered \"eventually geometric-ish.\"  But first, what does it mean for a series to be a geometric series?     Describe a defining characteristic of a geometric series. What makes it geometric?      Can you describe this characteristic in another way? For instance, if you described a geometric series using a characteristic about the , can you describe the same characteristic in the context of the instead? Or vice versa?    What kinds of functions do we see in the formula for the terms of a geometric series?    How do you describe how you might get from one term in a geometric series to the next one?      Write out a generalized and simplified form of the term of a geometric series explicitly and recursively. In each case, solve for , the ratio between terms.    "
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
  "body": " Polynomial Approximations of Functions   Before we start, it might be helpful to remind ourselves of the way we have used linear functions to approximate other functions in .    What Do We Want From a Polynomial Approximation?      How Do We Build a Polynomial Approximation?     Polynomial Approximation   If is a function that is -times differentiable at (that is, the functions , , , ..., all exist), then the th degree polynomial approximation of centered at is:      Build a Polynomial   We're going to use the formula in to construct two different polynomials that approximate two different approximations. Then, we'll use them to approximate things!     We're going to start with approximating the function centered at . Let's choose to look at a 5th degree polynomial.  This means we'll need to find the first five derivatives of . Then, we'll evaluate our function and the five derivatives at the center. After that, we can divide by the relevant factorial in order to create the coefficients of our polynomial.  Fill out the following chart to produce these coefficients.   Coefficients for Polynomial Approximation                                                   Now we can use these coefficients to construct the polynomial! These coefficients should all be on power functions in the form for . These (added together) will form your polynomial, .      Approximate using your polynomial.      Let's repeat this for another function. Let's build a 5th degree polynomial approximation of centered at . We can construct the coefficients in the same way.   Coefficients for Polynomial Approximation                                                   And now, again, we can use these coefficients to construct the polynomial! These coefficients should all be on power functions in the form for . These (added together) will form your polynomial, .      Approximate using your polynomial.     Now that we know how to build and use these, we should probably think about accuracy. Are the estimations coming from these polynomials even accurate? How do we talk about that?  We won't formally define this too much for now: instead, we'll just look at things visually and see if we can figure out what might go into how we talk about accuracy of our estimations.   How Good Are Our Approximations?   We're going to think more carefully about our approximations of and from . In order for us to do this, let's visualize the function and the 5th degree polynomial for it.      How good of a job did the polynomial approximation do when approximating ? How can you tell, visually?      How good of a job did the polynomial approximation do when approximating ? How can you tell, visually?      How does the relationship between the center and the -value that we're approximating at impact the accuracy of our approximation?      How do you think you could make these approximations better (without changing the center)?     So we have a couple of main ideas about the accuracy of our approximations. We don't need to formalize them, but we can use them as a guiding rule for how we talk about these polynomial approximations.   Accuracy in Polynomial Approximations     Approximations using -values closer to the center are likely to be more accurate than approximations using -values farther away from the center.    Polynomials with larger degrees give more accurate approximations than polynomials with smaller degrees at the same -values.        Are These Partial Sums?     Partial Sums of What?   Let's revisit our 5th degree polynomial approximations from . These approximations work well for -values that are close to 0, but we will not be more formal than that.     Make a conjecture about what the 7th degree polynomial approximations are for each of these functions.  What about the 15th degree?      Make a conjecture about what the general formula would be for these terms. If you were to write these out using summation notation, what would they look like?      Why does the polynomial approximation for the sine function only have odd-exponent terms?      Make a conjecture about what a polynomial approximation for centered at would be.      How Do These Polynomials Converge?   We're going to end here by thinking about these polynomials as some partial sum from an infinite series. If there is an infinite series, we should be prepared to think about convergence!  We're going to think about convergence in the same way that we have already: as an end behavior limit of the partial sums. So let's spend our time investigating this end behavior by visualizing polynomial approximations as the degree increases.      What happens to the polynomial approximation of centered at as the degree ?      Does this behavior change if we centered our approximation elsewhere?      What happens to the polynomial approximation of centered at as the degree ?      Does this behavior change if we centered our approximation elsewhere?      What happens to the polynomial approximation of centered at as the degree ?      Does this behavior change if we centered our approximation elsewhere?      What happens to the polynomial approximation of centered at as the degree ?      Describe the difference in what you're seeing with the log function compared to the other functions we've thought about. Describe how the polynomial approximations converge: do they converge to the log function? How? More importantly, where ?      Does this behavior change if we centered our approximation elsewhere?      "
},
{
  "id": "def-PolynomialApproximation",
  "level": "2",
  "url": "sec-PolynomialApproximation.html#def-PolynomialApproximation",
  "type": "Definition",
  "number": "9.1.1",
  "title": "Polynomial Approximation.",
  "body": " Polynomial Approximation   If is a function that is -times differentiable at (that is, the functions , , , ..., all exist), then the th degree polynomial approximation of centered at is:    "
},
{
  "id": "act-BuildPolynomial",
  "level": "2",
  "url": "sec-PolynomialApproximation.html#act-BuildPolynomial",
  "type": "Activity",
  "number": "9.1.1",
  "title": "Build a Polynomial.",
  "body": " Build a Polynomial   We're going to use the formula in to construct two different polynomials that approximate two different approximations. Then, we'll use them to approximate things!     We're going to start with approximating the function centered at . Let's choose to look at a 5th degree polynomial.  This means we'll need to find the first five derivatives of . Then, we'll evaluate our function and the five derivatives at the center. After that, we can divide by the relevant factorial in order to create the coefficients of our polynomial.  Fill out the following chart to produce these coefficients.   Coefficients for Polynomial Approximation                                                   Now we can use these coefficients to construct the polynomial! These coefficients should all be on power functions in the form for . These (added together) will form your polynomial, .      Approximate using your polynomial.      Let's repeat this for another function. Let's build a 5th degree polynomial approximation of centered at . We can construct the coefficients in the same way.   Coefficients for Polynomial Approximation                                                   And now, again, we can use these coefficients to construct the polynomial! These coefficients should all be on power functions in the form for . These (added together) will form your polynomial, .      Approximate using your polynomial.    "
},
{
  "id": "act-CompareApproximations",
  "level": "2",
  "url": "sec-PolynomialApproximation.html#act-CompareApproximations",
  "type": "Activity",
  "number": "9.1.2",
  "title": "How Good Are Our Approximations?",
  "body": " How Good Are Our Approximations?   We're going to think more carefully about our approximations of and from . In order for us to do this, let's visualize the function and the 5th degree polynomial for it.      How good of a job did the polynomial approximation do when approximating ? How can you tell, visually?      How good of a job did the polynomial approximation do when approximating ? How can you tell, visually?      How does the relationship between the center and the -value that we're approximating at impact the accuracy of our approximation?      How do you think you could make these approximations better (without changing the center)?    "
},
{
  "id": "act-PartialSumsOfWhat",
  "level": "2",
  "url": "sec-PolynomialApproximation.html#act-PartialSumsOfWhat",
  "type": "Activity",
  "number": "9.1.3",
  "title": "Partial Sums of What?",
  "body": " Partial Sums of What?   Let's revisit our 5th degree polynomial approximations from . These approximations work well for -values that are close to 0, but we will not be more formal than that.     Make a conjecture about what the 7th degree polynomial approximations are for each of these functions.  What about the 15th degree?      Make a conjecture about what the general formula would be for these terms. If you were to write these out using summation notation, what would they look like?      Why does the polynomial approximation for the sine function only have odd-exponent terms?      Make a conjecture about what a polynomial approximation for centered at would be.    "
},
{
  "id": "act-ConvergeToWhat",
  "level": "2",
  "url": "sec-PolynomialApproximation.html#act-ConvergeToWhat",
  "type": "Activity",
  "number": "9.1.4",
  "title": "How Do These Polynomials Converge?",
  "body": " How Do These Polynomials Converge?   We're going to end here by thinking about these polynomials as some partial sum from an infinite series. If there is an infinite series, we should be prepared to think about convergence!  We're going to think about convergence in the same way that we have already: as an end behavior limit of the partial sums. So let's spend our time investigating this end behavior by visualizing polynomial approximations as the degree increases.      What happens to the polynomial approximation of centered at as the degree ?      Does this behavior change if we centered our approximation elsewhere?      What happens to the polynomial approximation of centered at as the degree ?      Does this behavior change if we centered our approximation elsewhere?      What happens to the polynomial approximation of centered at as the degree ?      Does this behavior change if we centered our approximation elsewhere?      What happens to the polynomial approximation of centered at as the degree ?      Describe the difference in what you're seeing with the log function compared to the other functions we've thought about. Describe how the polynomial approximations converge: do they converge to the log function? How? More importantly, where ?      Does this behavior change if we centered our approximation elsewhere?    "
},
{
  "id": "sec-PowerSeriesConvergence",
  "level": "1",
  "url": "sec-PowerSeriesConvergence.html",
  "type": "Section",
  "number": "9.2",
  "title": "Power Series Convergence",
  "body": " Power Series Convergence   At the end of , we saw that these polynomial approximations can be thought of as partial sums of some larger infinite series. These infinite series are begging us to think about different notions of convergence, and at the end of the section, we saw that the polynomials, as the degree increases off to infinity, converge to match the function they are approximating, but this might be dependent on some interval of -values. A domain, in a sense.  In this section, we'll investigate what it means for a power series, these infinite series of power functions, to converge. Let's define a power series, and then we can think about convergence from there.   Power Series   A power series centered at is an infinite series in the form: where is a sequence of real numbered coefficients.    We have a good idea of how we can build these sequences of coefficients in order for the power series we construct to converge to specific functions that we are interested in.  Before we state this formally, let's write down what we mean when we talk about convergence of power series.  One last thing: we have a kind of closure, so far, in our series. If we add up an infinite amount of numbers, then the infinite series might converge. If it does, it converges to a number (since sums of numbers are numbers). In a power series, though, we are adding up an infinite number of functions of . If this series converges, it will converge to a function of (since sums of functions are functions). So every power series is really a function.    Interval of Convergence   Polynomial Division   We're going to do some fiddling with polynomials, and hopefully use this as a bridge to connect how we think of polynomials and power series with how we think about our traditional infinite series and the notions of convergence that we've already built.     We're going to factor some polynomials, but we might end up using some division. First, we'll confirm some factors that we already know. We'll confirm this by using division.                    Now let's factor . If the factors for this polynomial isn't as familiar, it might be helpful to know that is also a factor of .                      Let's try another one. Complete the following division.                        Can you generalize this? Find the formula for for some positive integer .                        Now that we have good evidence that , We can apply a limit as . For what values of will this limit exist?      Revisit . Is there any difference for what we've just done compared to this result that we already know?     In this activity, we see that we can re-think about our family of series as a power series! Then, instead of saying that we have some requirements on the ratio for the geometric series to converge, we can say that the power series converges for -values in the interval .   If we do this same thing with our other common series, the -series, then we'd not have a power series, but something slightly different: . This series definitely converges for real -values in the interval .  This function is called the Riemann zeta function , and is hugely important to many different fields of mathematics. We often care about this function when it has complex-number inputs (instead of just real-number inputs). It is also the focal point of one of the most famous unsolved mathematical questions, the Riemann hypothesis.   We noticed in that the polynomials built to approximate the natural log function does seem to converge to the function as , but only for specific -values. Hopefully we have some nice ideas as to why that happened: there is a vertical asymptote, and so maybe the distance from the center that this polynomial could approximate at is limited!  In general, we can notice that this isn't new: we have families of infinite series that have specific values of variables for which they converge.  A big thing to notice is that these power series, by definition, include exponentials in them (since is a power function of but is also an exponential function of ). This means that they're great candidates to use the . Since we have a variable (and we don't know if this variable is taking on positive or negative values), we'll need to test these series for absolute convergence.   Some Power Series and their Convergence   Let's consider a couple of power series and apply some convergence tests to them in order for us to find out how it might converge.     Consider the power series: . In order for us to apply the Ratio Test, we'll actually need to consider the positive-term version: . Apply the Ratio Test. What do you get in the limit of the ratio between terms?             Operations on Power Series   "
},
{
  "id": "def-PowerSeries",
  "level": "2",
  "url": "sec-PowerSeriesConvergence.html#def-PowerSeries",
  "type": "Definition",
  "number": "9.2.1",
  "title": "Power Series.",
  "body": " Power Series   A power series centered at is an infinite series in the form: where is a sequence of real numbered coefficients.   "
},
{
  "id": "act-PolynomialDivision",
  "level": "2",
  "url": "sec-PowerSeriesConvergence.html#act-PolynomialDivision",
  "type": "Activity",
  "number": "9.2.1",
  "title": "Polynomial Division.",
  "body": " Polynomial Division   We're going to do some fiddling with polynomials, and hopefully use this as a bridge to connect how we think of polynomials and power series with how we think about our traditional infinite series and the notions of convergence that we've already built.     We're going to factor some polynomials, but we might end up using some division. First, we'll confirm some factors that we already know. We'll confirm this by using division.                    Now let's factor . If the factors for this polynomial isn't as familiar, it might be helpful to know that is also a factor of .                      Let's try another one. Complete the following division.                        Can you generalize this? Find the formula for for some positive integer .                        Now that we have good evidence that , We can apply a limit as . For what values of will this limit exist?      Revisit . Is there any difference for what we've just done compared to this result that we already know?    "
},
{
  "id": "subsec-IntervalOfConvergence-4-2",
  "level": "2",
  "url": "sec-PowerSeriesConvergence.html#subsec-IntervalOfConvergence-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Riemann zeta function "
},
{
  "id": "act-PowerSeriesConvergence",
  "level": "2",
  "url": "sec-PowerSeriesConvergence.html#act-PowerSeriesConvergence",
  "type": "Activity",
  "number": "9.2.2",
  "title": "Some Power Series and their Convergence.",
  "body": " Some Power Series and their Convergence   Let's consider a couple of power series and apply some convergence tests to them in order for us to find out how it might converge.     Consider the power series: . In order for us to apply the Ratio Test, we'll actually need to consider the positive-term version: . Apply the Ratio Test. What do you get in the limit of the ratio between terms?          "
},
{
  "id": "sec-BuildingTaylorSeries",
  "level": "1",
  "url": "sec-BuildingTaylorSeries.html",
  "type": "Section",
  "number": "9.3",
  "title": "How to Build Taylor Series",
  "body": " How to Build Taylor Series  Text of section.  "
},
{
  "id": "sec-ApplyingTaylorSeries",
  "level": "1",
  "url": "sec-ApplyingTaylorSeries.html",
  "type": "Section",
  "number": "9.4",
  "title": "How to Use Taylor Series",
  "body": " How to Use Taylor Series  Text of section.  "
},
{
  "id": "app-CarnationLetter",
  "level": "1",
  "url": "app-CarnationLetter.html",
  "type": "Appendix",
  "number": "A",
  "title": "Carnation Letter",
  "body": " Carnation Letter    Response letter from Carnation.   Letter written on Carnation letterhead from Carnation. Full text below.      Full Text of the Carnation Letter  April 13, 1987  [REDACTED]  Professor of Mathematics  Dept. of Mathematics  [REDACTED]  Dear Professor [REDACTED],  We appreciate the interest you expressed in examining the height-to-diameter relationship of containers used in our food products. A 1:1 ratio of height versus diameter is the most efficient use of material, if only the surface area of material is considered. However, there are many other factors which must be considered when designing a can for a particular product. Listed below are some of these other factors:  1) Thermal Processing There is an inverse relationship between the most efficient design for cans relative to surface area and the amount of processing time required to sterilize the product contained within. In other words, a tall thin can or short wide can will require considerably less processing time and energy to achieve commercial sterility than a can which is nearly equal in height and diameter.  2) Strength Requirements During thermal processing, considerable internal pressure develops. This pressure can cause the ends of the can to become permanently distorted. Because of this, ends on most cans are made of metal which is substantially thicker than that used in the can cylinder. Therefore, there is not a simple cost-to-surface area relationship relative to metal. As this can becomes taller and the end becomes smaller, thinner metal can be used in both the cylinder and the ends.  3) Can Manufacturing Line Changeover Time Virtually all can lines run a variety of can sizes. The time required to change over from one can size to another is considerably less if only can height is changed, rather than height and diameter. In addition. since the same ends can be used if only the height is changed, the machinery used to manufacture ends does not have to be changed over to a different diameter. Reduced changeover time translates into reduced downtime and increased line efficiency.  4) Scrap Loss Generally, more metal scrap is generated as the diameter is increased.  5) Warehouse and Shipping Efficiency Smaller diameter cans make more efficient use of packaging and shipping space.  As you can see, cost and efficiency of a container are related to factors other than just the amount of material used. These are just a few of the factors which must be taken into consideration when designing a can. We hope that you now better understand that container design is not quite as simple as minimizing surface area.  Once again, thank you for your genuine interest.  Sincerely,  [REDACTED]  Vince [Illegible]  Assistant Product Manager  Friskies Buffet   "
},
{
  "id": "fig-Carnation",
  "level": "2",
  "url": "app-CarnationLetter.html#fig-Carnation",
  "type": "Figure",
  "number": "A.0.1",
  "title": "",
  "body": " Response letter from Carnation.   Letter written on Carnation letterhead from Carnation. Full text below.   "
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
