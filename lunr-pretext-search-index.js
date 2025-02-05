var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
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
  "body": " The Definition of the Limit   Defining a Limit   Close or Not?   We're going to try to think how we might define \"close\"-ness as a property, but, more importantly, we're going to try to realize the struggle of creating definitions in a mathematical context. We want our definition to be meaningful, precise, and useful, and those are hard goals to reach! Coming to some agreement on this is a particularly tricky task.    For each of the following pairs of things, decide on which pairs you would classify as \"close\" to each other.   You, right now, and the nearest city with a population of 1 million or higher    Your two nostrils    You and the door of the room you are in    You and the person nearest you    The floor of the room you are in and the ceiling of the room you are in       For your classification of \"close,\" what does \"close\" mean? Finish the sentence: A pair of objects are close to each other if...    Let's think about how close two things would have to be in order to satisfy everyone's definition of \"close.\" Pick two objects that you think everyone would agree are \"close,\" if by \"everyone\" we meant:   All of the people in the building you are in right now.    All of the people in the city that you are in right now.    All of the people in the country that you are in right now.    Everyone, everywhere, all at once.       Let's put ourselves into the context of functions and numbers. Consider the linear function . Our goal is to find some -values that, when we put them into our function, give us -value outputs that are \"close\" to the number 2. You get to define what close means.  First, evaluate and . Are these -values \"close\" to 2, in your definition of \"close?\"    Pick five more, different, numbers that are \"close\" to 2 in your definition of \"close.\" For each one, find the -values that give you those -values.    How far away from can you go and still have -value outputs that are \"close\" to 2?    To wrap this up, think about your points that you have: you have a list of -coordinates that are clustered around where, when you evaluate at those -values, you get -values that are \"close\" to 2. Great!  Do you think others will agree? Or do you think that other people might look at your list of -values and decide that some of them aren't close to 2?  Do you think you would agree with other peoples' lists? Or you do think that you might look at other peoples' lists of -values and decide that some of them aren't close to 2?     Limit of a Function   For the function defined at all -xalues around (except maybe at itself), we say that the limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but not equal to, . We write this as: or sometimes we write when .    When we say \"around \", we really just mean on either side of it. We can clarify if we want.   Left-Sided Limit   For the function defined at all -xalues around and less than , we say that the left-sided limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but less than, . We write this as: or sometimes we write when .     Right-Sided Limit   For the function defined at all -xalues around and greater than , we say that the right-sided limit of as approaches is if is arbitrarily close to the single, real number whenever is sufficiently close to, but greater than, . We write this as: or sometimes we write when .      Approximating Limits Using Our New Definition   Approximating Limits   For each of the following graphs of functions, approximate the limit in question. When you do so, approximate the values of the relevant one-sided limits as well.    Approximate using the graph of the function below.     A decreasing linear function with a single point removed from the line. At the x-value x=1, there is a hole on the line at y=1, and a point is located at (1,0).      Approximate using the graph of the function below.     A piecewise defined function, where the graph is split up into two sections around x=2. For x-values less than (and equal) to 2, the function is decreasing and curves downward towards a filled in point at (2,1). Then the graph drops to an open point at (2,0), where the graph is linear and increasing afterwards from that hole.      Approximate the following three limits using the graph of the function below.                      A piecewise-defined fucntion with three distinct pieces. For x-values less than -1, the graph is increasing and curves towards an open hole at (-1,0). Then, at x=-1, we have a point at (-1,1). The graph is constant at y=1 until a hole at (0,1). After this hole, it decreases from (0,1) towards and through (3,0) linearly.      Why do we say these are \"approximations\" or \"estimations\" of the limits we're interested in?    Are there any limit statements that you made that you are 100% confident in? Which ones?    Which limit statements are you least confident in? What about them makes them ones you aren't confident in?    What extra details would you like to see to increase the confidence in your estimations? Are there changes we could make to the way these functions are represented that would make these approximations better or easier to make?     Approximating Limits Numerically   For each of the following tables of function values, approximate the limit in question. When you do so, approximate the values of the relevant one-sided limits as well.    Approximate using the table of values of below.        0.5  0.9  0.99  1  1.01  1.1  1.5     8.672  9.2  9.0001  -7  8.9998  9.5  7.59       Approximate using the table of values of below.        -3.5  -3.1  -3.01  -3  -2.99  -2.9  -2.5     -4.41  -3.89  -4.003  -4  7.035  2.06  -4.65       Approximate using the table of values of below.        3.1  3.14  3.141     3.142  3.15  3.2     6  6  6  undefined  5.915  6.75  8.12       Are you 100% confident about the existence (or lack of existence) of any of these limits?    What extra details would you like to see to increase the confidence in your estimations? Are there changes we could make to the way these functions are represented that would make these approximations better or easier to make?     "
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
  "id": "subsec-ApproximatingLimits-2",
  "level": "2",
  "url": "sec-DefinitionOfLimits.html#subsec-ApproximatingLimits-2",
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
  "body": " Evaluating Limits   Adding Precision to Our Estimations   From Estimating to Evaluating Limits (Part 1)   Let's consider the following graphs of functions and .    The function decreases linearly towards (1,1), but has a hole there. After the holw the function increases away from this point. There is a point above the curve at (1,3).   Graph of the function .     The graph increases until (1,3) and then decreases down to the filled in point at (2,2). There is a jump down towards an open point at (2,1). The function continues decreasing from here until (3,0), where it starts increasing again.   Graph of the function .       Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                     Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                     Find the values of and .    For the limits and function values above, which of these are you most confident in? What about the limit, function value, or graph of the function makes you confident about your answer?  Similarly, which of these are you the least confident in? What about the limit, function value, or graph of the function makes you not have confidence in your answer?     From Estimating to Evaluating Limits (Part 2)   Let's consider the following graphs of functions and , now with the added labels of the equations defining each part of these functions.    The function decreases linearly towards (1,1), but has a hole there. After the holw the function increases away from this point. There is a point above the curve at (1,3). The graph also has the function labeled on it: y=2-x when x is less than 1, and y = x^2\/4 - x\/2 + 5\/4 when x is greater than 1.   Graph of the function .     The graph increases until (1,3) and then decreases down to the filled in point at (2,2). There is a jump down towards an open point at (2,1). The function continues decreasing from here until (3,0), where it starts increasing again. The graph also has the function labeled on it: y=3-(x-1)^2 when x is less than or equal to 2, and y=(x-3)^2 when x is greater than 2.   Graph of the function .       Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                     Estimate the values of the following limits. If you believe that the limit does not exist, say so and explain why.                     Does the addition of the function rules change the level of confidence you have in these answers? What limits are you more confident in with this added information?    Consider these functions without their graphs:  Find the limits and . Compare these values of and : are they related at all?     "
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
  "id": "sec-IndeterminateForms",
  "level": "1",
  "url": "sec-IndeterminateForms.html",
  "type": "Section",
  "number": "1.4",
  "title": "First Indeterminate Forms",
  "body": " First Indeterminate Forms  Text of section.  "
},
{
  "id": "sec-InfiniteLimits",
  "level": "1",
  "url": "sec-InfiniteLimits.html",
  "type": "Section",
  "number": "1.5",
  "title": "Infinite Limits",
  "body": " Infinite Limits  Text of section.  "
},
{
  "id": "sec-EndBehaviorLimits",
  "level": "1",
  "url": "sec-EndBehaviorLimits.html",
  "type": "Section",
  "number": "1.6",
  "title": "End Behavior Limits",
  "body": " End Behavior Limits  Text of section.   Limit at Infinity   If is defined for all large -values     Polynomial End Behavior Limits   For some polynomial function: with a positive integer (the degree) and all of the coefficients real numbers (with ), then   That is, the leading term (the term with the highest exponent) defines the end behavior for the whole polynomial function.    "
},
{
  "id": "def-LimitAtInfinity",
  "level": "2",
  "url": "sec-EndBehaviorLimits.html#def-LimitAtInfinity",
  "type": "Definition",
  "number": "1.6.1",
  "title": "Limit at Infinity.",
  "body": " Limit at Infinity   If is defined for all large -values   "
},
{
  "id": "thm-PolynomialEndBehavior",
  "level": "2",
  "url": "sec-EndBehaviorLimits.html#thm-PolynomialEndBehavior",
  "type": "Theorem",
  "number": "1.6.2",
  "title": "Polynomial End Behavior Limits.",
  "body": " Polynomial End Behavior Limits   For some polynomial function: with a positive integer (the degree) and all of the coefficients real numbers (with ), then   That is, the leading term (the term with the highest exponent) defines the end behavior for the whole polynomial function.   "
},
{
  "id": "sec-SqueezeTheorem",
  "level": "1",
  "url": "sec-SqueezeTheorem.html",
  "type": "Section",
  "number": "1.7",
  "title": "The Squeeze Theorem and Other Tricks",
  "body": " The Squeeze Theorem and Other Tricks   The Squeeze Theorem   For some functions , , and which are all defined and ordered for -values near (but not necessarily at itself), and for some real number , if we know that then we also know that .    "
},
{
  "id": "thm-SqueezeTheorem",
  "level": "2",
  "url": "sec-SqueezeTheorem.html#thm-SqueezeTheorem",
  "type": "Theorem",
  "number": "1.7.1",
  "title": "The Squeeze Theorem.",
  "body": " The Squeeze Theorem   For some functions , , and which are all defined and ordered for -values near (but not necessarily at itself), and for some real number , if we know that then we also know that .   "
},
{
  "id": "sec-Continuity",
  "level": "1",
  "url": "sec-Continuity.html",
  "type": "Section",
  "number": "1.8",
  "title": "Continuity and the Intermediate Value Theorem",
  "body": " Continuity and the Intermediate Value Theorem  Text of section.  "
},
{
  "id": "sec-IntroDerivatives",
  "level": "1",
  "url": "sec-IntroDerivatives.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Derivatives",
  "body": " Introduction to Derivatives       Thinking About Slopes     "
},
{
  "id": "sec-InterpretingDerivatives",
  "level": "1",
  "url": "sec-InterpretingDerivatives.html",
  "type": "Section",
  "number": "2.2",
  "title": "Interpreting Derivatives",
  "body": " Interpreting Derivatives  Text of section.  "
},
{
  "id": "sec-DerivativeRules",
  "level": "1",
  "url": "sec-DerivativeRules.html",
  "type": "Section",
  "number": "2.3",
  "title": "Some Early Derivative Rules",
  "body": " Some Early Derivative Rules  Text of section.  "
},
{
  "id": "sec-ProductQuotientRule",
  "level": "1",
  "url": "sec-ProductQuotientRule.html",
  "type": "Section",
  "number": "2.4",
  "title": "The Product and Quotient Rules",
  "body": " The Product and Quotient Rules  Text of section.   The Product Rule   If and are functions that are differentiable at and , then: . For convenience, this is often written as: .    "
},
{
  "id": "thm-ProductRule",
  "level": "2",
  "url": "sec-ProductQuotientRule.html#thm-ProductRule",
  "type": "Theorem",
  "number": "2.4.1",
  "title": "The Product Rule.",
  "body": " The Product Rule   If and are functions that are differentiable at and , then: . For convenience, this is often written as: .   "
},
{
  "id": "sec-ChainRule",
  "level": "1",
  "url": "sec-ChainRule.html",
  "type": "Section",
  "number": "2.5",
  "title": "The Chain Rule",
  "body": " The Chain Rule  Text of section.   The Chain Rule   For the composite function , if we define and , then, as long as both and are differentiable at and respectively: . Alternatively, this can be written as: .    "
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
  "id": "sec-ImplicitDifferentiation",
  "level": "1",
  "url": "sec-ImplicitDifferentiation.html",
  "type": "Section",
  "number": "3.1",
  "title": "Implicit Differentiation",
  "body": " Implicit Differentiation       Using a Derivative as an Operator     "
},
{
  "id": "sec-DerivativeInverse",
  "level": "1",
  "url": "sec-DerivativeInverse.html",
  "type": "Section",
  "number": "3.2",
  "title": "Derivatives of Inverse Functions",
  "body": " Derivatives of Inverse Functions  Text of section.  "
},
{
  "id": "sec-LogarithmicDifferentiation",
  "level": "1",
  "url": "sec-LogarithmicDifferentiation.html",
  "type": "Section",
  "number": "3.3",
  "title": "Logarithmic Differentiation",
  "body": " Logarithmic Differentiation  Text of section.  "
},
{
  "id": "sec-RelatedRates",
  "level": "1",
  "url": "sec-RelatedRates.html",
  "type": "Section",
  "number": "3.4",
  "title": "Related Rates",
  "body": " Related Rates  Text of section.  "
},
{
  "id": "sec-MeanValueTheorem",
  "level": "1",
  "url": "sec-MeanValueTheorem.html",
  "type": "Section",
  "number": "4.1",
  "title": "Mean Value Theorem",
  "body": " Mean Value Theorem   Text    Slopes  Text    The Mean Value Theorem   Mean Value Theorem   For a function that is continuous on the closed interval and differentiable on the open interval , then there is some value with where: .      More Results due to the Mean Value Theorem    For two functions and , both differentiable on , if for all -values on , then we know that for some real number constant . That is, the only differences in and are due to a difference in the constant term.     "
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
  "id": "thm-OffByConstant",
  "level": "2",
  "url": "sec-MeanValueTheorem.html#thm-OffByConstant",
  "type": "Theorem",
  "number": "4.1.2",
  "title": "",
  "body": "  For two functions and , both differentiable on , if for all -values on , then we know that for some real number constant . That is, the only differences in and are due to a difference in the constant term.   "
},
{
  "id": "sec-IncreasingDecreasing",
  "level": "1",
  "url": "sec-IncreasingDecreasing.html",
  "type": "Section",
  "number": "4.2",
  "title": "Increasing and Decreasing Functions",
  "body": " Increasing and Decreasing Functions  Text of section.  "
},
{
  "id": "sec-Concavity",
  "level": "1",
  "url": "sec-Concavity.html",
  "type": "Section",
  "number": "4.3",
  "title": "Concavity",
  "body": " Concavity  Text of section.  "
},
{
  "id": "sec-InterpretFirstSecondDerivative",
  "level": "1",
  "url": "sec-InterpretFirstSecondDerivative.html",
  "type": "Section",
  "number": "4.4",
  "title": "Interpreting the First and Second Derivatives",
  "body": " Interpreting the First and Second Derivatives  Text of section.  "
},
{
  "id": "sec-GlobalMaxMins",
  "level": "1",
  "url": "sec-GlobalMaxMins.html",
  "type": "Section",
  "number": "4.5",
  "title": "Global Maximums and Minimums",
  "body": " Global Maximums and Minimums  Text of section.  "
},
{
  "id": "sec-Optimization",
  "level": "1",
  "url": "sec-Optimization.html",
  "type": "Section",
  "number": "4.6",
  "title": "Optimization",
  "body": " Optimization  Text of section.  "
},
{
  "id": "sec-LinearApproximation",
  "level": "1",
  "url": "sec-LinearApproximation.html",
  "type": "Section",
  "number": "4.7",
  "title": "Linear Approximations",
  "body": " Linear Approximations  Text of section.  "
},
{
  "id": "sec-NewtonsMethod",
  "level": "1",
  "url": "sec-NewtonsMethod.html",
  "type": "Section",
  "number": "4.8",
  "title": "Newton’s Method for Approximating Zeros",
  "body": " Newton's Method for Approximating Zeros  Text of section.  "
},
{
  "id": "sec-LHopitalsRule",
  "level": "1",
  "url": "sec-LHopitalsRule.html",
  "type": "Section",
  "number": "4.9",
  "title": "L’Hopital’s Rule",
  "body": " L'Hopital's Rule  Text of section.   L'Hopital's Rule   If and are functions and is some real number with and both being differentiable at and and , then . Similarly, this holds if and .  If and are both differentiable as and either:    and      and    then .  This is also true as .    "
},
{
  "id": "thm-LHopitalsRule",
  "level": "2",
  "url": "sec-LHopitalsRule.html#thm-LHopitalsRule",
  "type": "Theorem",
  "number": "4.9.1",
  "title": "L’Hopital’s Rule.",
  "body": " L'Hopital's Rule   If and are functions and is some real number with and both being differentiable at and and , then . Similarly, this holds if and .  If and are both differentiable as and either:    and      and    then .  This is also true as .   "
},
{
  "id": "sec-IndefiniteIntegrals",
  "level": "1",
  "url": "sec-IndefiniteIntegrals.html",
  "type": "Section",
  "number": "5.1",
  "title": "Antiderivatives and Indefinite Integrals",
  "body": " Antiderivatives and Indefinite Integrals    "
},
{
  "id": "sec-RiemannSums",
  "level": "1",
  "url": "sec-RiemannSums.html",
  "type": "Section",
  "number": "5.2",
  "title": "Riemann Sums and Area Approximations",
  "body": " Riemann Sums and Area Approximations  Text of section.   Riemann Sum   For a closed interval with a partition with , consider some , any -value in the interval and , the length of the interval . If is a function that is defined on the interval , then we call the sum a Riemann Sum for on .    In practice, we typically choose a Regular Partition , where each subinterval is equally-wide, and so for every . We then normally write our Riemann sum as .  "
},
{
  "id": "def-RiemannSum",
  "level": "2",
  "url": "sec-RiemannSums.html#def-RiemannSum",
  "type": "Definition",
  "number": "5.2.1",
  "title": "Riemann Sum.",
  "body": " Riemann Sum   For a closed interval with a partition with , consider some , any -value in the interval and , the length of the interval . If is a function that is defined on the interval , then we call the sum a Riemann Sum for on .   "
},
{
  "id": "sec-DefiniteIntegral",
  "level": "1",
  "url": "sec-DefiniteIntegral.html",
  "type": "Section",
  "number": "5.3",
  "title": "Definite Integral",
  "body": " Definite Integral  The Definite Integral  "
},
{
  "id": "sec-FTOC",
  "level": "1",
  "url": "sec-FTOC.html",
  "type": "Section",
  "number": "5.4",
  "title": "The Fundamental Theorem of Calculus",
  "body": " The Fundamental Theorem of Calculus   Fundamental Theorem of Calculus (Part 1)   For a function that is continuous on an interval , and a function defined for -values in , then . That is: .     Fundamental Theorem of Calculus (Part 2)   For a function continuous on the closed interval and some , an antiderivative of ( on ), then .    "
},
{
  "id": "thm-FTOC1",
  "level": "2",
  "url": "sec-FTOC.html#thm-FTOC1",
  "type": "Theorem",
  "number": "5.4.1",
  "title": "Fundamental Theorem of Calculus (Part 1).",
  "body": " Fundamental Theorem of Calculus (Part 1)   For a function that is continuous on an interval , and a function defined for -values in , then . That is: .   "
},
{
  "id": "thm-FTOC2",
  "level": "2",
  "url": "sec-FTOC.html#thm-FTOC2",
  "type": "Theorem",
  "number": "5.4.2",
  "title": "Fundamental Theorem of Calculus (Part 2).",
  "body": " Fundamental Theorem of Calculus (Part 2)   For a function continuous on the closed interval and some , an antiderivative of ( on ), then .   "
},
{
  "id": "sec-MoreDefiniteIntegral",
  "level": "1",
  "url": "sec-MoreDefiniteIntegral.html",
  "type": "Section",
  "number": "5.5",
  "title": "More Definite Integrals",
  "body": " More Definite Integrals  Text of section.  "
},
{
  "id": "sec-ImproperIntegrals",
  "level": "1",
  "url": "sec-ImproperIntegrals.html",
  "type": "Section",
  "number": "6.1",
  "title": "Improper Integrals",
  "body": " Improper Integrals   Remembering a Theme so Far   Let's say that we want to find what the -values of some function are when the -values are \"infinitely close to\" some value, . Since there is no single -value that is \"infinitely close to\" that we can evaluate at, we need to do something else. How do we do this?    Let's say that we want to find the rate of change of some function instantaneously at a point with . We can't find a rate of change unless we have two points, since we need to find some differences in the outputs and inputs. How do we do this?    Suppose you want to find the total area, covered by an infinite number of infinitely thin rectangles. You have a formula for finding the dimensions and areas for some finite number of rectangles, but how do we get an infinite number of them?    Can you find the common calculus theme in each of these scenarios?     Remembering the Fundamental Theorem of Calculus   We want to think about generalizing our notion of integrals a bit. So in this activity, section, we're going to think about some of the requirements for the Fundamental Theorem of Calculus and try to loosen them up a bit to see what happens. We'll try to construct meaningful approaches to these situations that fit our overall goals of calculating area under a curve.  This practice, in general, is a really good and common mathematical process: taking some result and playing with the requirements or assumptions to see what else can happen. So it might feel like we're just fiddling with the \"What if?\" questions, but what we're actually doing is good mathematics!    What does the Fundamental Theorem of Calculus say about evaluating the definite integral ?    What do we need to be true about our setup, our function, etc. for us to be able to apply this technique to evaluate ?    We are going to introduce the idea of \"Improper Integrals\" as kind-of-but-not-quite definite integrals that we can evaluate. They are going to violate the requirements for the Fundamental Theorem of Calculus, but we'll work to salvage them in meaningful ways.     Improper Integral   An integral is an improper integral if it is an extension of a definite integral whose integrand or limits of integration violate a requirement in one of two ways:   The interval that we integrate the function over is unbounded in width, or infinitely wide.    The integrand is unbounded in height, or infinitely tall, somewhere on the interval that we integrate over.        Evaluating Improper Integrals (Infinite Width)  For a function that is continuous on , we can evaluate the improper integral : .  If is continuous on , we can evaluate the improper integral : .  Finally, if is continuous on and is some real number, then we can evaluate the improper integral : .    Evaluating Improper Integrals (Infinite Height)  For a function that has an unbounded discontinuity (a vertical asymptote) at     Convergence of an Improper Integral   We say that an improper integral converges if the limit of the appropriate definite integral exists. If the limit does not exist, then we say that the improper integral diverges .     Explain what it means for an integral to be improper. What kinds of issues are we looking at?  Give an example of an integral that is improper due to an unbounded or infinite interval of integration (infinite width).  Give an example of an integral that is improper due to an unbounded integrand (infinite height).  What does it mean for an improper integral to ``converge?'' How does this connect with limits?  What does it mean for an improper integral to ``diverge?'' How does this connect with limits?  Why do we need to use limits to evaluate improper integrals?   For each of the following improper integrals:   Explain why the integral is improper. Be specific, and point out the issues in detail.    Set up the integral using the correct limit notation.    Antidifferentiate and evaluate the limit.    Explain whether the integral converges or diverges.                              One of the big ideas in probability is that for a curve that defines a probability density function, the area under the curve needs to be 1. What value of makes the function a valid probability distribution on the interval ?   Let's consider the integral . This is a difficult integral to evaluate!   First, compare to using an inequality: which one is bigger?   Second, use this inequality to compare the function to for : which one is bigger? Again, use your inequality from above to help!   Now compare to . Which one is bigger?   Explain how we can use this result to make a conclusion about whether our integral, converges or diverges.    "
},
{
  "id": "act-RememberingTheme",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#act-RememberingTheme",
  "type": "Activity",
  "number": "6.1.1",
  "title": "Remembering a Theme so Far.",
  "body": " Remembering a Theme so Far   Let's say that we want to find what the -values of some function are when the -values are \"infinitely close to\" some value, . Since there is no single -value that is \"infinitely close to\" that we can evaluate at, we need to do something else. How do we do this?    Let's say that we want to find the rate of change of some function instantaneously at a point with . We can't find a rate of change unless we have two points, since we need to find some differences in the outputs and inputs. How do we do this?    Suppose you want to find the total area, covered by an infinite number of infinitely thin rectangles. You have a formula for finding the dimensions and areas for some finite number of rectangles, but how do we get an infinite number of them?    Can you find the common calculus theme in each of these scenarios?   "
},
{
  "id": "act-RememberingFTOC",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#act-RememberingFTOC",
  "type": "Activity",
  "number": "6.1.2",
  "title": "Remembering the Fundamental Theorem of Calculus.",
  "body": " Remembering the Fundamental Theorem of Calculus   We want to think about generalizing our notion of integrals a bit. So in this activity, section, we're going to think about some of the requirements for the Fundamental Theorem of Calculus and try to loosen them up a bit to see what happens. We'll try to construct meaningful approaches to these situations that fit our overall goals of calculating area under a curve.  This practice, in general, is a really good and common mathematical process: taking some result and playing with the requirements or assumptions to see what else can happen. So it might feel like we're just fiddling with the \"What if?\" questions, but what we're actually doing is good mathematics!    What does the Fundamental Theorem of Calculus say about evaluating the definite integral ?    What do we need to be true about our setup, our function, etc. for us to be able to apply this technique to evaluate ?    We are going to introduce the idea of \"Improper Integrals\" as kind-of-but-not-quite definite integrals that we can evaluate. They are going to violate the requirements for the Fundamental Theorem of Calculus, but we'll work to salvage them in meaningful ways.   "
},
{
  "id": "def-ImproperIntegral",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#def-ImproperIntegral",
  "type": "Definition",
  "number": "6.1.1",
  "title": "Improper Integral.",
  "body": " Improper Integral   An integral is an improper integral if it is an extension of a definite integral whose integrand or limits of integration violate a requirement in one of two ways:   The interval that we integrate the function over is unbounded in width, or infinitely wide.    The integrand is unbounded in height, or infinitely tall, somewhere on the interval that we integrate over.      "
},
{
  "id": "def-ConvergenceImproperIntegral",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#def-ConvergenceImproperIntegral",
  "type": "Definition",
  "number": "6.1.2",
  "title": "Convergence of an Improper Integral.",
  "body": " Convergence of an Improper Integral   We say that an improper integral converges if the limit of the appropriate definite integral exists. If the limit does not exist, then we say that the improper integral diverges .   "
},
{
  "id": "exercises-ImproperIntegrals-1",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#exercises-ImproperIntegrals-1",
  "type": "Exercise",
  "number": "6.1.1",
  "title": "",
  "body": "Explain what it means for an integral to be improper. What kinds of issues are we looking at? "
},
{
  "id": "exercises-ImproperIntegrals-2",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#exercises-ImproperIntegrals-2",
  "type": "Exercise",
  "number": "6.1.2",
  "title": "",
  "body": "Give an example of an integral that is improper due to an unbounded or infinite interval of integration (infinite width). "
},
{
  "id": "exercises-ImproperIntegrals-3",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#exercises-ImproperIntegrals-3",
  "type": "Exercise",
  "number": "6.1.3",
  "title": "",
  "body": "Give an example of an integral that is improper due to an unbounded integrand (infinite height). "
},
{
  "id": "exercises-ImproperIntegrals-4",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#exercises-ImproperIntegrals-4",
  "type": "Exercise",
  "number": "6.1.4",
  "title": "",
  "body": "What does it mean for an improper integral to ``converge?'' How does this connect with limits? "
},
{
  "id": "exercises-ImproperIntegrals-5",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#exercises-ImproperIntegrals-5",
  "type": "Exercise",
  "number": "6.1.5",
  "title": "",
  "body": "What does it mean for an improper integral to ``diverge?'' How does this connect with limits? "
},
{
  "id": "exercises-ImproperIntegrals-6",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#exercises-ImproperIntegrals-6",
  "type": "Exercise",
  "number": "6.1.6",
  "title": "",
  "body": "Why do we need to use limits to evaluate improper integrals? "
},
{
  "id": "exercises-ImproperIntegrals-7",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#exercises-ImproperIntegrals-7",
  "type": "Exercise",
  "number": "6.1.7",
  "title": "",
  "body": " For each of the following improper integrals:   Explain why the integral is improper. Be specific, and point out the issues in detail.    Set up the integral using the correct limit notation.    Antidifferentiate and evaluate the limit.    Explain whether the integral converges or diverges.                             "
},
{
  "id": "exercises-ImproperIntegrals-8",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#exercises-ImproperIntegrals-8",
  "type": "Exercise",
  "number": "6.1.8",
  "title": "",
  "body": "One of the big ideas in probability is that for a curve that defines a probability density function, the area under the curve needs to be 1. What value of makes the function a valid probability distribution on the interval ? "
},
{
  "id": "exercises-ImproperIntegrals-9",
  "level": "2",
  "url": "sec-ImproperIntegrals.html#exercises-ImproperIntegrals-9",
  "type": "Exercise",
  "number": "6.1.9",
  "title": "",
  "body": " Let's consider the integral . This is a difficult integral to evaluate!   First, compare to using an inequality: which one is bigger?   Second, use this inequality to compare the function to for : which one is bigger? Again, use your inequality from above to help!   Now compare to . Which one is bigger?   Explain how we can use this result to make a conclusion about whether our integral, converges or diverges.  "
},
{
  "id": "sec-uSubstitution",
  "level": "1",
  "url": "sec-uSubstitution.html",
  "type": "Section",
  "number": "6.2",
  "title": "<span class=\"process-math\">\\(u\\)<\/span>-Substitution",
  "body": " -Substitution   More to Translate    Integrate the following, making sure to translate the whole integrand function to be written in terms of .        We can write as , or if you really want to, we can write it as          "
},
{
  "id": "subsec-MoreToTranslate-2",
  "level": "2",
  "url": "sec-uSubstitution.html#subsec-MoreToTranslate-2",
  "type": "Example",
  "number": "6.2.1",
  "title": "",
  "body": "  Integrate the following, making sure to translate the whole integrand function to be written in terms of .        We can write as , or if you really want to, we can write it as        "
},
{
  "id": "sec-AlgebraicManipulations",
  "level": "1",
  "url": "sec-AlgebraicManipulations.html",
  "type": "Section",
  "number": "6.3",
  "title": "Manipulating Integrands to Reveal Substitution",
  "body": " Manipulating Integrands to Reveal Substitution   We've looked at how to use a variable substitution to antidifferentiate composite functions. We've already seen, though, that sometimes identifying and actually using a helpful substitution can be difficult to do. In this section, we want to introduce some different strategies for noticing and setting up useful substitutions in some specific instances.    Rewriting the Integrand   A Negative Exponent   Let's think about this integral: .    Is there any composition in this integral? Pick it out, and either explain or show that using this to guide your substitution will not be helpful.   Notice that is composed inside of the exponential function. Try a substitution with .    What does mean? What does mean?    Re-write the integral, specifically focusing on the negative exponent. You should find that the function looks worse! How can you clean that up?   Re-write as , giving you: .   Either add the fractions in the denominator or multiply the whole fraction by .   You should have an integral that looks like: .    Why is this new integral set up so much better for the purpose of -substitution? How could we tell this just by looking at the initial integral?          Try to re-write this integral as .          Antidifferentiating Rational Functions  Strategies for antidifferentiating rational functions are just that: strategies. There aren't really easy ways to antidifferentiate these, but we'll find some common tactics to apply and try to build our intuition for noticing the different kinds of structure we can have in these rational functions. All of these strategies are based around cleverly re-writing our rational functions (using some algebraic manipulations) to reveal some structure. We'll try to notice the structure, so that we know what we're trying to reveal.   Integrating Rational Functions      "
},
{
  "id": "act-NegativeExponent",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#act-NegativeExponent",
  "type": "Activity",
  "number": "6.3.1",
  "title": "A Negative Exponent.",
  "body": " A Negative Exponent   Let's think about this integral: .    Is there any composition in this integral? Pick it out, and either explain or show that using this to guide your substitution will not be helpful.   Notice that is composed inside of the exponential function. Try a substitution with .    What does mean? What does mean?    Re-write the integral, specifically focusing on the negative exponent. You should find that the function looks worse! How can you clean that up?   Re-write as , giving you: .   Either add the fractions in the denominator or multiply the whole fraction by .   You should have an integral that looks like: .    Why is this new integral set up so much better for the purpose of -substitution? How could we tell this just by looking at the initial integral?   "
},
{
  "id": "subsec-Rewriting-3",
  "level": "2",
  "url": "sec-AlgebraicManipulations.html#subsec-Rewriting-3",
  "type": "Example",
  "number": "6.3.1",
  "title": "",
  "body": "      Try to re-write this integral as .       "
},
{
  "id": "sec-IntegrationByParts",
  "level": "1",
  "url": "sec-IntegrationByParts.html",
  "type": "Section",
  "number": "6.4",
  "title": "Integration By Parts",
  "body": " Integration By Parts   We've seen now that is a useful technique for undo-ing . We set up the variable substitution with the specific goal of going backwards through the Chain Rule and antidifferentiating some composition of functions.  A reasonable next step is to ask: What other derivative rules can we \"undo?\" What other operations between functions should we think about? This brings us to Integration by Parts, the integration technique specifically for undo-ing .    Discovering the Integration by Parts Formula   Discovering the Integration by Parts Formula   The product rule for derivatives says that: . We know that we intend to \"undo\" the product rule, so let's try to re-frame the product rule from a rule about derivatives to a rule about antiderivatives.    Antidifferentiate the product rule by antidifferentiating each side of the equation.    Note that on the left side of this equation you're antidifferentiating a derivative. What will that give you? Then, on the right side, we're just splitting up the terms of the product rule into two different integrals.    On the right side, we have two integrals. Since each of them has a product of functions (one function and a derivative of another), we can isolate one of them in this equation and create a formula for how to antidifferentiate a product of functions! Solve for .    Look back at this formula for . Explain how this is really the product rule for derivatives (without just undo-ing all of the steps we have just done).    What made it so useful to pick instead of in this case? Since we know that we are going to get another integral, one that specifically has the new derivative and new antiderivative that we find from the parts we picked, we noticed that differentiating the function was much nicer than antidifferentiating it: we get a constant that we multiply by the trig function in this new integral, instead of a power function with an even bigger exponent. We can also notice that when it comes to the trig function, it doesn't really matter if we differentiate it or antidifferentiate it. In both cases, we get a in our new integral, with the only difference being whether it is positive or negative.    We typically use the substitutions and to re-write the integrals.   Integration by Parts  Suppose and are both differentiable functions. Then: .   When we select the parts for our integral, we are selecting a function to be labeled and a function to be labeled as . We begin with one of the pieces of the product rule, a function multiplied by some other function's derivative. It is important to recognize that we do different things to these functions: for one of them, , we need to find the derivative, . For the other, , we need to find an antiderivative, . Because of these differences, it is important to build some good intuition for how to select the parts.    Intuition for Selecting the Parts   Picking the Parts for Integration by Parts   Let's consider the integral: . We'll investigate how to set up the integration by parts formula with the different choices for the parts.    We'll start with selecting and . Fill in the following with the rest of the pieces:     Now set up the integration by parts formula using your labeled pieces. Notice that the integration by parts formula gives us another integral. Don't worry about antidifferentiating this yet, let's just set the pieces up.        Let's swap the pieces and try the setup with and . Fill in the following with the rest of the pieces:     Now set up the integration by parts formula using this setup.        Compare the two results we have. Which setup do you think will be easier to move forward with? Why?   When we say we need to keep moving forward with our setup, what we mean is that we have another integral to antidifferentiate. Which one will be easier to work with: or ?    Finalize your work with the setup you have chosen to find .    What made things so much better when we chose compared to ? We know that the new integral from our integration by parts formula will be built from the new pieces, the derivative we find from and the antiderivative we pick from . So when we differentiate , we get a constant, compared to antidifferentiating and getting another power function, but with a larger exponent. We know this will be combined with a function no matter what (since the derivative and antiderivatives of will only differ in their sign). So picking the version that gets that second integral to be built from a trig function and a constant is going to be much nicer than a trig function and a power function. It was nice to pick to be the piece that we found the derivative of!    Let's practice this comparison with another example in order to build our intuition for picking the parts in our integration by parts formula.   Picking the Parts for Integration by Parts   This time we'll look at a very similar integral: . Again, we'll set this up two different ways and compsare them.    We'll start with selecting and . Fill in the following with the rest of the pieces:    You're not forgetting how to antidifferentiate . This is just something we don't know yet!    Ok, so here we have to swap the pieces and try the setup with and , since we only know how to differentiate . Fill in the following with the rest of the pieces:     Now set up the integration by parts formula using this setup.        Why was it fine for us to antidifferentiate in this example, but not in ?    Finish this work to find .   Notice that .    So here, we didn't actually get much choice. We couldn't pick in order to differentiate it (and get a constant to multiply into our second integral) since we don't know how to antidifferentiate (yet: once we know how, it might be fun to come back to this problem and try it again with the parts flipped). But we can also notice that it ended up being fine to antidifferentiate : the increased power from our power rule didn't really matter much when we combined it with the derivative of the logarithm, since the derivative of the log is also a power function ! So we were able to combine those easily and actually integrate that second integral.     It is common for students to want to place functions into sort of hierarchy or classification guidelines for choosing the parts. Some students have found that the acronym LIPET (logs, inverse trig, power functions, exponentials, and trig functions) can be a useful tool for selecting the parts. When you have two different types of functions, it might help to select to be whichever function shows up first in that list.     Integrate the following:        It doesn't matter whether we differentiate or antidifferentiate , since we'll get the same thing. Let's pick so that we can differentiate it.     We need to do more integration by parts!          We don't know how to antidifferentiate , but we do know how to differentiate it!           Some Flexible Choices for Parts  We're going to look at a couple of examples where we can showcase some of the flexibility we have with our choices of parts. First, we'll revisit .In this example, when we got to that second integral, we noticed that for the fraction , we could either do some long division (since the degrees in the numerator and denominator are the same) or do some clever re-writing of the numerator. Either way, we know that this fraction is almost 1...It's really some bit (in this case, the extra bit was a fraction ).  What if we chose our parts differently? Not the and parts, though, since we still haven't figured out how to antidifferentiate . But we get one more choice!  Once we choose , we don't really get a separate choice for : it's simply the derivative of with regard to multiplied by the differential . But consider our choice of , and the subsequent process of finding . Yes, there's only one possible answer, but in a much more real sense, there isn't just one possible answer. There are an infinite number of them! We know, due to the and then later due to , that there are an infinite number of antiderivatives, all differing by at most a constant term. So let's pick a more appropriate antiderivative!    Integrate , this time making a more intentional choice for .    Note that if we pick , then the second integral will be just delightful.          So we get the same thing, but didn't have to think through the long division or the forced factoring. But the trade off here is that we almost have to see this coming to notice it. This flexibility doesn't always come into play for us. But we can look at a different kind of flexibility.  We've looked at integrals with both and . For these, and for other inverse functions specifically, we pick them to be the part in our integration by parts problems because we don't know how do antidifferentiate them.  So let's look at , and we'll solve this integral by, specifically, differentiating instead of antidifferentiating it.   Antidifferentiating the Log Function   Integrate .    Pick , since we can differentiate it. What does that leave for ?          We can use this same strategy to find antiderivatives of , , and eventually .   For , we'll need to use this same tactic of setting and , but then later on we'll need to use a technique called to finish the problem.   Now that we know the antiderivative family for , we can revisit the problem in , , and try to work through the integration by parts when and .    Integrate .      Note that this last integral is really recognizable: it's the one we started with! Let's \"solve\" this equation for that integral by adding it to both sides of our equation.       Solving for the Integral  In this last example, we ended up seeing the original integral repeated when we did integration by parts. This is a useful technique, especially when we deal with functions that have a kind of \"repeating\" structure to their derivatives or antiderivatives. We'll look at a couple of classic integrals where we see this kind of technique employed.    For each of the following integrals, use integration by parts to solve.        This one is pretty straight forward, since it doesn't really matter what we select as our parts. Notice, though, that this isn't the only way we can approach this! We can use -substitution, or even re-write this using a trigonometric identity.                     Notice that we can come up with a bunch of different examples that are similar to . If we put trigonometric functions inside our integral, we'll have some options with how we approach them! We can use -substitution, since the derivatives of trigonometric functions are other trigonometric functions. In , for instance, we could write and , or even chose and .  The real issues will come when our integrand is not just a product of two trigonometric functions, but when they are products of trigonometric functions raised to exponents. We'll have some combinations of these products (which maybe makes us think about integration by parts) and composition (which points towards -substitution). In the next section, we'll develop some strategies to deal with these kinds of integrals.   "
},
{
  "id": "act-IntegrationByParts",
  "level": "2",
  "url": "sec-IntegrationByParts.html#act-IntegrationByParts",
  "type": "Activity",
  "number": "6.4.1",
  "title": "Discovering the Integration by Parts Formula.",
  "body": " Discovering the Integration by Parts Formula   The product rule for derivatives says that: . We know that we intend to \"undo\" the product rule, so let's try to re-frame the product rule from a rule about derivatives to a rule about antiderivatives.    Antidifferentiate the product rule by antidifferentiating each side of the equation.    Note that on the left side of this equation you're antidifferentiating a derivative. What will that give you? Then, on the right side, we're just splitting up the terms of the product rule into two different integrals.    On the right side, we have two integrals. Since each of them has a product of functions (one function and a derivative of another), we can isolate one of them in this equation and create a formula for how to antidifferentiate a product of functions! Solve for .    Look back at this formula for . Explain how this is really the product rule for derivatives (without just undo-ing all of the steps we have just done).    What made it so useful to pick instead of in this case? Since we know that we are going to get another integral, one that specifically has the new derivative and new antiderivative that we find from the parts we picked, we noticed that differentiating the function was much nicer than antidifferentiating it: we get a constant that we multiply by the trig function in this new integral, instead of a power function with an even bigger exponent. We can also notice that when it comes to the trig function, it doesn't really matter if we differentiate it or antidifferentiate it. In both cases, we get a in our new integral, with the only difference being whether it is positive or negative.   "
},
{
  "id": "act-PickingParts-1",
  "level": "2",
  "url": "sec-IntegrationByParts.html#act-PickingParts-1",
  "type": "Activity",
  "number": "6.4.2",
  "title": "Picking the Parts for Integration by Parts.",
  "body": " Picking the Parts for Integration by Parts   Let's consider the integral: . We'll investigate how to set up the integration by parts formula with the different choices for the parts.    We'll start with selecting and . Fill in the following with the rest of the pieces:     Now set up the integration by parts formula using your labeled pieces. Notice that the integration by parts formula gives us another integral. Don't worry about antidifferentiating this yet, let's just set the pieces up.        Let's swap the pieces and try the setup with and . Fill in the following with the rest of the pieces:     Now set up the integration by parts formula using this setup.        Compare the two results we have. Which setup do you think will be easier to move forward with? Why?   When we say we need to keep moving forward with our setup, what we mean is that we have another integral to antidifferentiate. Which one will be easier to work with: or ?    Finalize your work with the setup you have chosen to find .    What made things so much better when we chose compared to ? We know that the new integral from our integration by parts formula will be built from the new pieces, the derivative we find from and the antiderivative we pick from . So when we differentiate , we get a constant, compared to antidifferentiating and getting another power function, but with a larger exponent. We know this will be combined with a function no matter what (since the derivative and antiderivatives of will only differ in their sign). So picking the version that gets that second integral to be built from a trig function and a constant is going to be much nicer than a trig function and a power function. It was nice to pick to be the piece that we found the derivative of!   "
},
{
  "id": "act-PickingParts-2",
  "level": "2",
  "url": "sec-IntegrationByParts.html#act-PickingParts-2",
  "type": "Activity",
  "number": "6.4.3",
  "title": "Picking the Parts for Integration by Parts.",
  "body": " Picking the Parts for Integration by Parts   This time we'll look at a very similar integral: . Again, we'll set this up two different ways and compsare them.    We'll start with selecting and . Fill in the following with the rest of the pieces:    You're not forgetting how to antidifferentiate . This is just something we don't know yet!    Ok, so here we have to swap the pieces and try the setup with and , since we only know how to differentiate . Fill in the following with the rest of the pieces:     Now set up the integration by parts formula using this setup.        Why was it fine for us to antidifferentiate in this example, but not in ?    Finish this work to find .   Notice that .    So here, we didn't actually get much choice. We couldn't pick in order to differentiate it (and get a constant to multiply into our second integral) since we don't know how to antidifferentiate (yet: once we know how, it might be fun to come back to this problem and try it again with the parts flipped). But we can also notice that it ended up being fine to antidifferentiate : the increased power from our power rule didn't really matter much when we combined it with the derivative of the logarithm, since the derivative of the log is also a power function ! So we were able to combine those easily and actually integrate that second integral.   "
},
{
  "id": "subsec-PickingParts-6",
  "level": "2",
  "url": "sec-IntegrationByParts.html#subsec-PickingParts-6",
  "type": "Example",
  "number": "6.4.1",
  "title": "",
  "body": "  Integrate the following:        It doesn't matter whether we differentiate or antidifferentiate , since we'll get the same thing. Let's pick so that we can differentiate it.     We need to do more integration by parts!          We don't know how to antidifferentiate , but we do know how to differentiate it!        "
},
{
  "id": "subsec-FlexibleChoices-5",
  "level": "2",
  "url": "sec-IntegrationByParts.html#subsec-FlexibleChoices-5",
  "type": "Example",
  "number": "6.4.2",
  "title": "",
  "body": "  Integrate , this time making a more intentional choice for .    Note that if we pick , then the second integral will be just delightful.         "
},
{
  "id": "subsec-FlexibleChoices-9",
  "level": "2",
  "url": "sec-IntegrationByParts.html#subsec-FlexibleChoices-9",
  "type": "Example",
  "number": "6.4.3",
  "title": "Antidifferentiating the Log Function.",
  "body": " Antidifferentiating the Log Function   Integrate .    Pick , since we can differentiate it. What does that leave for ?         "
},
{
  "id": "subsec-FlexibleChoices-13",
  "level": "2",
  "url": "sec-IntegrationByParts.html#subsec-FlexibleChoices-13",
  "type": "Example",
  "number": "6.4.4",
  "title": "",
  "body": "  Integrate .      Note that this last integral is really recognizable: it's the one we started with! Let's \"solve\" this equation for that integral by adding it to both sides of our equation.    "
},
{
  "id": "subsec-SolvingForIntegral-3",
  "level": "2",
  "url": "sec-IntegrationByParts.html#subsec-SolvingForIntegral-3",
  "type": "Example",
  "number": "6.4.5",
  "title": "",
  "body": "  For each of the following integrals, use integration by parts to solve.        This one is pretty straight forward, since it doesn't really matter what we select as our parts. Notice, though, that this isn't the only way we can approach this! We can use -substitution, or even re-write this using a trigonometric identity.                    "
},
{
  "id": "sec-PowersOfTrig",
  "level": "1",
  "url": "sec-PowersOfTrig.html",
  "type": "Section",
  "number": "6.5",
  "title": "Integrating Powers of Trigonometric Functions",
  "body": " Integrating Powers of Trigonometric Functions   Let's remind ourselves of two example problems that we've done in the past.  In , we performed a -substitution, but needed to work to re-write our whole integrand in terms of . Specifically, we found that in the numerator, there was an , but . We were substituting out a linear function of in the numerator, but the actual function was cubic. This wasn't a problem: we re-wrote , and noticed that the extra was able to be substituted, since we could re-write out subsitution rule: we noted that is equivalent to . This meant that even though we had an extra factor of \"in\" the part that we were using for substituting in the differential , we were still able to translate the whole function to be written in terms of .  Then, more recently, in , we noted that we could use a mix of methods to integrate this:  One on hand, we can look at the structure of the integrand and notice that we have a product of two functions! Integration by parts was a fine strategy to employ, and that's what we did in the example. On the other hand, we noticed that since we have this function-derivative pairing, a -substitution was also appropriate.  In this section, we'll explore more combinations of trigonometric functions and build a strategy for antidifferentiating them that includes some ideas from both of these previous examples.    Building a Strategy for Powers of Sines and Cosines   Compare and Contrast   Let's do a quick comparison of two integrals, keeping the above examples in mind. Consider these two integrals:     Consider the first integral, . Think about and set up a good technique for antidifferentiating. Without actually solving the integral, explain why this technique will work.   It might be helpful to notice that can be re-written as . Does this help reveal something important about the structure of this integrand?    Now consider the second integral, . Does the same integration strategy work here? What happens when you apply the same thing?   Let again, and . What happens with the cosine functions? How many are \"left\" after applying our substitution?    We know that and are related to each other through derivatives (each is the derivative of the other, up to a negative). Is there some other connection that we have between these functions? We might especially notice that we have a left over in our integral. Can we write this in terms of , so that we can write it in terms of ?   We have a trigonometric identity (the Pythagorean Identity): .    Why would this strategy not have worked if we were looking at the integrals or ? What, specifically, did we need in order to use this combination of substitution and trigonometric identity to solve the integral?     Integrating Powers of Sine and Cosine  For integrals in the form where and are real number exponents:   If , the exponent on is odd, we should use and . Then we can apply the Pythagorean Identity .    If , the exponent on is odd, we should use and . Then we can apply the Pythagorean Identity .    If both and are even, we can either use or use the following power-reducing trigonometric identities:       A strange note, here, is that we typically pick our -substitution based on looking to see a suitable candidate for : we look for functions that are composed \"inside\" of other functions or we look for a function whose derivative is in the integral (the \"function-derivative pair\" that we talk about in ). Here, though, we're selecting our substitution based on : we're looking to see which function we can set aside one copy of for the differential, and then have an even power left over so that we can apply the Pythagorean Identity to translate the rest.    Building a Strategy for Powers of Secants and Tangents   Compare and Contrast (Again)   We're going to do another Compare and Contrast, but this time we're only going to consider one integral: . We're going to employ another strategy, similar to the one for .    Before you start thinking about this integral, let's build the relevant version of the Pythagorean Identity that we'll use. Our standard version of this is: . Since we want a version that connects , which is also written as , with , or , let's divide everything in the Pythagorean Identity by :         Now start with the integral. We're going to use two different processes here, two different -substitutions. First, set . Complete the substitution and solve the integral.   Here, . We'll also use .        Now try the integral again, this time using as your substitution.   Now , and we'll use the same Pythagorean identity, just re-written as .        For each of these integrals, why were the exponents set up just right for -substitution each time? How does the structure of the derivatives of each function play into this?   Notice we had an even exponent on the function, but an odd exponent on the function.    Which substitution would be best for the integral . Why?    Which substitution would be best for the integral . Why?     Integrating Powers of Secant and Tangent  For integrals in the form where and are real number exponents:   If , the exponent on , is odd, we can use and . Then we can apply the Pythagorean Identity .    If , the exponent on , is even, we can use and . Then we can apply the Pythagorean Identity .    If is odd and is even, we can use .       "
},
{
  "id": "act-CompareContrast",
  "level": "2",
  "url": "sec-PowersOfTrig.html#act-CompareContrast",
  "type": "Activity",
  "number": "6.5.1",
  "title": "Compare and Contrast.",
  "body": " Compare and Contrast   Let's do a quick comparison of two integrals, keeping the above examples in mind. Consider these two integrals:     Consider the first integral, . Think about and set up a good technique for antidifferentiating. Without actually solving the integral, explain why this technique will work.   It might be helpful to notice that can be re-written as . Does this help reveal something important about the structure of this integrand?    Now consider the second integral, . Does the same integration strategy work here? What happens when you apply the same thing?   Let again, and . What happens with the cosine functions? How many are \"left\" after applying our substitution?    We know that and are related to each other through derivatives (each is the derivative of the other, up to a negative). Is there some other connection that we have between these functions? We might especially notice that we have a left over in our integral. Can we write this in terms of , so that we can write it in terms of ?   We have a trigonometric identity (the Pythagorean Identity): .    Why would this strategy not have worked if we were looking at the integrals or ? What, specifically, did we need in order to use this combination of substitution and trigonometric identity to solve the integral?   "
},
{
  "id": "act-SecTan",
  "level": "2",
  "url": "sec-PowersOfTrig.html#act-SecTan",
  "type": "Activity",
  "number": "6.5.2",
  "title": "Compare and Contrast (Again).",
  "body": " Compare and Contrast (Again)   We're going to do another Compare and Contrast, but this time we're only going to consider one integral: . We're going to employ another strategy, similar to the one for .    Before you start thinking about this integral, let's build the relevant version of the Pythagorean Identity that we'll use. Our standard version of this is: . Since we want a version that connects , which is also written as , with , or , let's divide everything in the Pythagorean Identity by :         Now start with the integral. We're going to use two different processes here, two different -substitutions. First, set . Complete the substitution and solve the integral.   Here, . We'll also use .        Now try the integral again, this time using as your substitution.   Now , and we'll use the same Pythagorean identity, just re-written as .        For each of these integrals, why were the exponents set up just right for -substitution each time? How does the structure of the derivatives of each function play into this?   Notice we had an even exponent on the function, but an odd exponent on the function.    Which substitution would be best for the integral . Why?    Which substitution would be best for the integral . Why?   "
},
{
  "id": "sec-TrigSub",
  "level": "1",
  "url": "sec-TrigSub.html",
  "type": "Section",
  "number": "6.6",
  "title": "Trigonometric Substitution",
  "body": " Trigonometric Substitution  Text of section.  "
},
{
  "id": "sec-PartialFractions",
  "level": "1",
  "url": "sec-PartialFractions.html",
  "type": "Section",
  "number": "6.7",
  "title": "Partial Fractions",
  "body": " Partial Fractions   Comparing Rational Integrands   Try to integrate the following: . Explain what about this integral makes things very difficult.   Annoyingly, you can write this as: . Now explain why the second integral is difficult.    Confirm that .    Try to integrate the following: .    Which integral of the two would you rather integrate? Why?    "
},
{
  "id": "act-PartialFractionCompare",
  "level": "2",
  "url": "sec-PartialFractions.html#act-PartialFractionCompare",
  "type": "Activity",
  "number": "6.7.1",
  "title": "Comparing Rational Integrands.",
  "body": " Comparing Rational Integrands   Try to integrate the following: . Explain what about this integral makes things very difficult.   Annoyingly, you can write this as: . Now explain why the second integral is difficult.    Confirm that .    Try to integrate the following: .    Which integral of the two would you rather integrate? Why?   "
},
{
  "id": "sec-NetChange",
  "level": "1",
  "url": "sec-NetChange.html",
  "type": "Section",
  "number": "7.1",
  "title": "Integrals as Net Change",
  "body": " Integrals as Net Change   We have some rudimentary ideas of what an integral is, but we want to challenge and expand those ideas by examining the object at the root of the definition of the definite integral: a Riemann sum.    Estimating Movement  Here is some text leading to our first activity.   Estimating Movement   We're observing an object traveling back and forth in a straight line. Throughout a 5 minute interval, we get the following information about the velocity (in feet\/second) of the object.   Velocity of an Object        0  0    30  2    60  4.25    90  5.75    120  3.5    150  0.75    180  -1.25    210  -3.5    240  -2.75    270  -0.5    300  -0.25       Describe the motion of the object in general.   How do we interpret the different values of velocity? How do we interpret the sign of velocity? What about how velocity changes from one of the 30-second time points to the next?    When was the acceleration of the object the greatest? When was it the least?   You can decide how to interpret the \"least\" acceleration: it is either where the acceleration is closes to 0, or it is the most negative value of the acceleration. These are interpreted differently, but it's a bit ambiguous what we might mean when we say \"least acceleration.\"    Estimate the total displacement of the object over the 5 minute interval. What is the overall change in position from the start to the end?   How do we use velocity and some time interval to estimate the distance traveled? How do we estimate\/assume the velocity on each 30-second time interval?    Is this different than the total distance that the object traveled over the 5 minute interval? Why or why not?   How do we think about (or ignore) the direction of the object? Why is this important here?    If we know the initial position of the object, how could we find the position of the object at some time, , where is a multiple of 30 between 0 and 300?   Can we limit the time intervals that we use to calculate the object's displacement? How do we use displacement and a starting point to find an ending point?    So what are the big ideas in this short activity? There are a lot, and many of them are already things we know, at least to some level. So we are really focusing on adding depth to our understanding of these big ideas. Let's list them in the order that they showed up in this activity:   We interpret the velocity as the derivative of the position of the object. So when we interpret the value of the velocity of the object (large vs small, positive vs negative, etc.) we are interpreting these through the lens of a rate of change.    Acceleration is the derivative of the velocity function. While we don't have the full picture of the velocity function at any value of , we still were interested in the rates at which velocity changes with regard to time.    We can estimate the total displacement of the object by predicting how far it traveled in eahc 30-second time interval. We might pick the starting velocity for each 30-second interval and multiply that by 30 seconds. We could alternatively pick the ending velocity of each 30-second interval. Then we can add all of these products of velocity and time together to approximate a total change in position! Doesn't this feel like a Riemann sum?    When we calculate displacement, the negative velocities get multiplied out to get negative changes in position for the object -- that's because a negative velocity means that the object is moving backwards. If we wanted to calculate the distance traveled, then we need to not account for negative velocities. We can just disregard the sign of the velocity on each time interval and repeat the process above. So, another Riemann sum then?    In order to forecast some position at time , we just need to start with the initial position, and then calculate (or approximate) the displacement from to whatever time we care about, and then add the displacement to the intitial position.   Ok, now let's formalize those results!    Position, Velocity, and Acceleration  We know that the velocity of an object is really a rate of change of the position of that object with regard to time. Similarly, the acceleration of an object is the rate of change of the velocity of the object with regard to time. So we're really thinking about derivatives!    For an object moving along a straight line, if represents the position of that object at time , then the velocity of theobject at time is and the acceleration of the object at time is .    Once we establish this relationship, we can answer questions about movement of an object using the same interpretations of derivatives that we practiced in Chapter 3 of this text.   A Friendly Jogger   Consider a jogger running along a straight-line path, where their velocity at hours is , and velocity is measured in miles per hour. We begin observing this jogger at and observe them over a course of 3 hours.    When is the jogger's acceleration equal to 0 mi\/hr ?   Solve .    Does this time represent a maximum or minimum velocity for the jogger?   You can use the First Derivative Test or the Second Derivative Test here!    When is the jogger's velocity equal to 0 mi\/hr?    Describe the motion of the jogger, including information about the direction that they travel and their top speeds.      Displacement, Distance, and Speed  Let's revisit . When we approximated the displacement of the object, we built a Riemann sum: We chose our as either the time at the beginning of each 30-second interval or the time atr the end of the 30-second interval, but that was only because of the limited information that we had about different values of . If we had information about the function at any values of ( ), then we could pick any time in each 30-second time interval for our Riemann sum! We might note, though, that if we did have this kind of information about the velocity at any time in the 5-minute interval, then we would also build a more precise approximation by subdividing the time interval into smaller\/shorter pieces. So maybe the Riemann sum (where we are dividing up the 5 minute interval into 100 3-second intervals) would do a better job! But why stop there? If we have the definition of the velocity function, and so we can truly obtain the velocity of the object at any time in the 5 minute interval, then we can use the definition of the definite integral as the limit of a Riemann sum: This should work out well with our first understanding of displacement: the displacement of an object is just the difference in position from the starting time to the ending time. So we could say that if is the position function, then we might expect to represent displacement from to as . But isn't this just the Fundamental Theorem of Calculus, since ?    If an object is moving along a straight line with velocity and position , then the displacement of the object from time to is     Let's keep revisiting the same activity. We also noticed that when we looked at the distance compared to the displacement, the only difference was that we were integrating the absolute value of the velocity function, since we didn't care about the sign of the velocity (the direction that the object was traveling) on each interval.    If an object is moving along a straight line with velocity , then the distance traveled by the object from time to is: Here, we call the speed of the object (instead of the velocity).    We should note that we don't have any quick and easy ways of dealing with the integral of the absolute value of a function. So, in order for us to integrate , we need to think about where the velocity passes through 0, so that we can see where it might change from positive to negative.   Tracking our Jogger   Let's revisit our jogger from .    Calculate the total displacement of the jogger from to .   Set up and evaluate a definite integral here, using the velocity function.    Think back to our descroption of the jogger's movement: when is this jogger moving backwards? Split up the time interval from (the start of their run) to (where is the time that the jogger changed direction) to . Calculate the displacements on each of these two intervals.    Calculate the total distance that the jogger traveled in their 3 hour run.   Remember that we're really calculating:       Finding the Future Value of a Function  We can again think back to and build our last result of this section. Remember when we were looking to predict the location of our object at different times: we said it was reasonable to start at our initial position, and then add the displacement of the object from that initial time up to the time that we were interested in. So, to estimate the object's position after 150 seconds, we would calculate: . But we said we could do this to estimate the object's position at any value for time, .   Future Position of an Object   For some object moving along a straight line with velocity and an intitial position of , the future position of the object at some time (with ) is: Note that we change the variable in the velocity function while we integrate: since we want our position function to be in terms of , the ending time point that we calculate the displacement up to, we need to choose a different variable to write velocity in terms of. Mechanically, there is no difference, since we're just swapping out the variables and naming them .    We can note that this relationship between velocity and position can exist in many other context: any pair of functions that are derivatives\/antiderivatives of each other can have this relationship!   Net Change and Future Value   Suppose the value changes over time at a known rate . Then the net change in between and is: . Similarly, given the initial value , the future value of at time is:      "
},
{
  "id": "act-EstimatingMovement",
  "level": "2",
  "url": "sec-NetChange.html#act-EstimatingMovement",
  "type": "Activity",
  "number": "7.1.1",
  "title": "Estimating Movement.",
  "body": " Estimating Movement   We're observing an object traveling back and forth in a straight line. Throughout a 5 minute interval, we get the following information about the velocity (in feet\/second) of the object.   Velocity of an Object        0  0    30  2    60  4.25    90  5.75    120  3.5    150  0.75    180  -1.25    210  -3.5    240  -2.75    270  -0.5    300  -0.25       Describe the motion of the object in general.   How do we interpret the different values of velocity? How do we interpret the sign of velocity? What about how velocity changes from one of the 30-second time points to the next?    When was the acceleration of the object the greatest? When was it the least?   You can decide how to interpret the \"least\" acceleration: it is either where the acceleration is closes to 0, or it is the most negative value of the acceleration. These are interpreted differently, but it's a bit ambiguous what we might mean when we say \"least acceleration.\"    Estimate the total displacement of the object over the 5 minute interval. What is the overall change in position from the start to the end?   How do we use velocity and some time interval to estimate the distance traveled? How do we estimate\/assume the velocity on each 30-second time interval?    Is this different than the total distance that the object traveled over the 5 minute interval? Why or why not?   How do we think about (or ignore) the direction of the object? Why is this important here?    If we know the initial position of the object, how could we find the position of the object at some time, , where is a multiple of 30 between 0 and 300?   Can we limit the time intervals that we use to calculate the object's displacement? How do we use displacement and a starting point to find an ending point?   "
},
{
  "id": "def-position-velocity-acceleration",
  "level": "2",
  "url": "sec-NetChange.html#def-position-velocity-acceleration",
  "type": "Definition",
  "number": "7.1.2",
  "title": "",
  "body": "  For an object moving along a straight line, if represents the position of that object at time , then the velocity of theobject at time is and the acceleration of the object at time is .   "
},
{
  "id": "act-Jogger",
  "level": "2",
  "url": "sec-NetChange.html#act-Jogger",
  "type": "Activity",
  "number": "7.1.2",
  "title": "A Friendly Jogger.",
  "body": " A Friendly Jogger   Consider a jogger running along a straight-line path, where their velocity at hours is , and velocity is measured in miles per hour. We begin observing this jogger at and observe them over a course of 3 hours.    When is the jogger's acceleration equal to 0 mi\/hr ?   Solve .    Does this time represent a maximum or minimum velocity for the jogger?   You can use the First Derivative Test or the Second Derivative Test here!    When is the jogger's velocity equal to 0 mi\/hr?    Describe the motion of the jogger, including information about the direction that they travel and their top speeds.   "
},
{
  "id": "def-displacement",
  "level": "2",
  "url": "sec-NetChange.html#def-displacement",
  "type": "Definition",
  "number": "7.1.3",
  "title": "",
  "body": "  If an object is moving along a straight line with velocity and position , then the displacement of the object from time to is    "
},
{
  "id": "def-distance",
  "level": "2",
  "url": "sec-NetChange.html#def-distance",
  "type": "Definition",
  "number": "7.1.4",
  "title": "",
  "body": "  If an object is moving along a straight line with velocity , then the distance traveled by the object from time to is: Here, we call the speed of the object (instead of the velocity).   "
},
{
  "id": "act-Jogger-2",
  "level": "2",
  "url": "sec-NetChange.html#act-Jogger-2",
  "type": "Activity",
  "number": "7.1.3",
  "title": "Tracking our Jogger.",
  "body": " Tracking our Jogger   Let's revisit our jogger from .    Calculate the total displacement of the jogger from to .   Set up and evaluate a definite integral here, using the velocity function.    Think back to our descroption of the jogger's movement: when is this jogger moving backwards? Split up the time interval from (the start of their run) to (where is the time that the jogger changed direction) to . Calculate the displacements on each of these two intervals.    Calculate the total distance that the jogger traveled in their 3 hour run.   Remember that we're really calculating:    "
},
{
  "id": "def-FuturePosition",
  "level": "2",
  "url": "sec-NetChange.html#def-FuturePosition",
  "type": "Definition",
  "number": "7.1.5",
  "title": "Future Position of an Object.",
  "body": " Future Position of an Object   For some object moving along a straight line with velocity and an intitial position of , the future position of the object at some time (with ) is: Note that we change the variable in the velocity function while we integrate: since we want our position function to be in terms of , the ending time point that we calculate the displacement up to, we need to choose a different variable to write velocity in terms of. Mechanically, there is no difference, since we're just swapping out the variables and naming them .   "
},
{
  "id": "def-FutureValue",
  "level": "2",
  "url": "sec-NetChange.html#def-FutureValue",
  "type": "Definition",
  "number": "7.1.6",
  "title": "Net Change and Future Value.",
  "body": " Net Change and Future Value   Suppose the value changes over time at a known rate . Then the net change in between and is: . Similarly, given the initial value , the future value of at time is:    "
},
{
  "id": "sec-AreaBetweenCurves",
  "level": "1",
  "url": "sec-AreaBetweenCurves.html",
  "type": "Section",
  "number": "7.2",
  "title": "Area Between Curves",
  "body": " Area Between Curves   Let's remember Riemann Sums.    Remembering Riemann Sums  Text here.   Remembering Riemann Sums   Let's start with the function on the interval with on the interval. We will construct a Riemman sum to approximate the area under the curve on this interval, and then build that into the integral formula.     A graph of a positive curve, labeled f(x), from x=a to x=b. The region between the curve and the x-axis is shaded.      Divide the interval into 4 equally-sized subintervals.    Pick an for , one for each subinterval. Then, plot the points , , , and .   These points are just general ones, and you don't have to come up with actual numbers for the -values or the corresponding -values. Instead, just draw them in on the curve, somewhere in each of the subintervals.    Use these 4 points to draw 4 rectangles. What are the dimensions of these rectangles (the height and width)?   You won't have any numbers to calculate here, really: instead, see if you can calculate the widths by thinking about the total width of your interval. Then calculate the heights by thinking about the points you created.    Find the area of each rectangle by multiplying the heights and widths for each rectangle.    Add up the areas to construct a Riemman sum. Is this sum very accurate? Why or why not?   Try to think about the accuracy of your area approximation by looking at it visually. Are there any places where your approximation looks far away from the actual area we're thinking about?    Now we will generalize a little more. Let's say we divide this up into equally-sized pieces (instead of 4). Instead of trying to pick an for the unknown number of subintervals (since we don't have a value for yet), let's just focus on one of these: the arbitrary th subinterval.     The same graph of a positive curve, labeled f(x), from x=a to x=b. Now, though, there is a single rectangle sitting on the x-axis and spanning up to f(x). It is delta-x wide, and the top of the rectangle touches the graph at the point (x_k, f(x_k)).    What are the dimensions of this th rectangle?    Find , the area of this th rectangle.    Add up the areas of for to approximate the total area,    You might want to use summation notation, starting with     Apply a limit as to this Riemann sum in order to construct the integral formula for the area under the curve from to .    This activity hopefully reminds of the definition of a Riemann Sum ( ) from earlier in this text ( ).    Building an Integral Formula for the Area Between Curves   Area Between Curves   Let's start with our same function on the same interval m but also add the function on the same interval, with on the interval. We will construct a Riemann sum to approximate the area between these two curves on this interval, and then build that into the integral formula.     A graph of a positive curve and a less positive curve, g(x), labeled f(x), from x=a to x=b. The space between these curves is shaded.      Divide the interval into 4 equally-sized subintervals.    Pick an for , one for each subinterval. Plot the points , , , and . Then plot the corresponding points on the function: , , , and .    Use these 8 points to draw 4 rectangles, with the points on the function defining the tops of the rectangles and the points on the function defining the bottoms of the rectangles. What are the dimensions of these rectangles (the height and width)?    Find the area of each rectangle by multiplying the heights and widths for each rectangle.    Add up the areas to construct a Riemman sum.    Now we will generalize a little more. Let's say we divide this up into equally-sized pieces (instead of 4). Instead of trying to pick an for the unknown number of subintervals (since we don't have a value for yet), let's just focus on one of these: the arbitrary th subinterval.     The same graph of the two curves f(x) and g(x) between x=a and x=b. Now, though, there is a single rectangle sitting on g(x) and spanning up to f(x). It is delta-x wide. The bottom of the rectangle touches the graph at the point (x_k, g(x_k)) and the top of the rectangle touches the graph at the point (x_k, f(x_k)).    What are the dimensions of this th rectangle?    Find , the area of this th rectangle.    Add up the areas of for to approximate the total area,    You might want to use summation notation, starting with     Apply a limit as to this Riemann sum in order to construct the integral formula for the area between the curves and from to .     Area Between Curves   If and are continuous functions with on the interval , then the area bounded between the curves  and between and is .    Example here.    Changing Perspective  Text here.   Trying for a Single Integral   Let's consider the same setup as earlier: the region bounded between two curves, and , as well as the -axis (the line ). We'll need to name these functions, so let's call them and . But this time, we'll approach the region a bit differently: we're going to try to find the area of the region using only a single integral.     A graph of the two curves y=x+6 and y=x^3 as well as the line y=0. The region trapped inside is shaded, and the intersection points (-6,0) and (2,8) are labelled.      The range of -values in this region span from to . Divide this interval evenly into 4 equally sized-subintervals. What is the height of each subinterval? We'll call this .        Pick a -value from each sub-interval. You can call these , , , and .    Find the corresponding -values on the function for each of the -values you selected. These will be , , , and .   You're really just putting your -values into the equation and solving for . Or you can solve for in general, by solving for while leaving as a variable.    Do the same thing for the function. Now you have 8 points that you can plot: , , , and as well as , , , and . Plot them.    Use these points to draw 4 rectangles with points on and determining the left and right ends of the rectangle. What are the dimensions of these rectangles (height and width)?    Find the area of each rectangle by multiplying the height and widths for each rectangle.    Add up the areas to construct a Riemann sum.    Again, we'll generalize this and think about the th rectangle, pictured below.     The same region, but this time with a horizontal rectangle spanning across it, with the height labeled delta y. The curves are re-labeled x=y-6 and x = cuberoot(y).    Which variable defines the location of the th rectangle, here? That is, if you were to describe where in this graph the th rectangle is laying, would you describe it with an or variable? This will act as our general input variable for the integral we're ending with.    What are the dimensions of the th rectangle?    Find , the area of this th rectangle.    Add up the areas of for to approximate the total area,    You might want to use summation notation, starting with     Apply a limit as to this Riemann sum in order to construct the integral formula for the area between the curves and from to .    Now that you have an integral, evaluate it! Find the area of this region to compare with the work we did previously, where we used multiple integrals to measure the size of this same region.    We can re-write our definition of the area between curves ( ) to account for this change in perspective, by thinking about these same functions in terms of .   Area Between Curves (in terms of )   If and are continuous functions with on the interval of -values , then the area bounded between the curves  and from to is .     "
},
{
  "id": "act-RememberingRiemann",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#act-RememberingRiemann",
  "type": "Activity",
  "number": "7.2.1",
  "title": "Remembering Riemann Sums.",
  "body": " Remembering Riemann Sums   Let's start with the function on the interval with on the interval. We will construct a Riemman sum to approximate the area under the curve on this interval, and then build that into the integral formula.     A graph of a positive curve, labeled f(x), from x=a to x=b. The region between the curve and the x-axis is shaded.      Divide the interval into 4 equally-sized subintervals.    Pick an for , one for each subinterval. Then, plot the points , , , and .   These points are just general ones, and you don't have to come up with actual numbers for the -values or the corresponding -values. Instead, just draw them in on the curve, somewhere in each of the subintervals.    Use these 4 points to draw 4 rectangles. What are the dimensions of these rectangles (the height and width)?   You won't have any numbers to calculate here, really: instead, see if you can calculate the widths by thinking about the total width of your interval. Then calculate the heights by thinking about the points you created.    Find the area of each rectangle by multiplying the heights and widths for each rectangle.    Add up the areas to construct a Riemman sum. Is this sum very accurate? Why or why not?   Try to think about the accuracy of your area approximation by looking at it visually. Are there any places where your approximation looks far away from the actual area we're thinking about?    Now we will generalize a little more. Let's say we divide this up into equally-sized pieces (instead of 4). Instead of trying to pick an for the unknown number of subintervals (since we don't have a value for yet), let's just focus on one of these: the arbitrary th subinterval.     The same graph of a positive curve, labeled f(x), from x=a to x=b. Now, though, there is a single rectangle sitting on the x-axis and spanning up to f(x). It is delta-x wide, and the top of the rectangle touches the graph at the point (x_k, f(x_k)).    What are the dimensions of this th rectangle?    Find , the area of this th rectangle.    Add up the areas of for to approximate the total area,    You might want to use summation notation, starting with     Apply a limit as to this Riemann sum in order to construct the integral formula for the area under the curve from to .   "
},
{
  "id": "act-AreaBetweenCurves",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#act-AreaBetweenCurves",
  "type": "Activity",
  "number": "7.2.2",
  "title": "Area Between Curves.",
  "body": " Area Between Curves   Let's start with our same function on the same interval m but also add the function on the same interval, with on the interval. We will construct a Riemann sum to approximate the area between these two curves on this interval, and then build that into the integral formula.     A graph of a positive curve and a less positive curve, g(x), labeled f(x), from x=a to x=b. The space between these curves is shaded.      Divide the interval into 4 equally-sized subintervals.    Pick an for , one for each subinterval. Plot the points , , , and . Then plot the corresponding points on the function: , , , and .    Use these 8 points to draw 4 rectangles, with the points on the function defining the tops of the rectangles and the points on the function defining the bottoms of the rectangles. What are the dimensions of these rectangles (the height and width)?    Find the area of each rectangle by multiplying the heights and widths for each rectangle.    Add up the areas to construct a Riemman sum.    Now we will generalize a little more. Let's say we divide this up into equally-sized pieces (instead of 4). Instead of trying to pick an for the unknown number of subintervals (since we don't have a value for yet), let's just focus on one of these: the arbitrary th subinterval.     The same graph of the two curves f(x) and g(x) between x=a and x=b. Now, though, there is a single rectangle sitting on g(x) and spanning up to f(x). It is delta-x wide. The bottom of the rectangle touches the graph at the point (x_k, g(x_k)) and the top of the rectangle touches the graph at the point (x_k, f(x_k)).    What are the dimensions of this th rectangle?    Find , the area of this th rectangle.    Add up the areas of for to approximate the total area,    You might want to use summation notation, starting with     Apply a limit as to this Riemann sum in order to construct the integral formula for the area between the curves and from to .   "
},
{
  "id": "def-AreaBetweenCurves",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#def-AreaBetweenCurves",
  "type": "Definition",
  "number": "7.2.5",
  "title": "Area Between Curves.",
  "body": " Area Between Curves   If and are continuous functions with on the interval , then the area bounded between the curves  and between and is .   "
},
{
  "id": "act-SingleIntegral",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#act-SingleIntegral",
  "type": "Activity",
  "number": "7.2.3",
  "title": "Trying for a Single Integral.",
  "body": " Trying for a Single Integral   Let's consider the same setup as earlier: the region bounded between two curves, and , as well as the -axis (the line ). We'll need to name these functions, so let's call them and . But this time, we'll approach the region a bit differently: we're going to try to find the area of the region using only a single integral.     A graph of the two curves y=x+6 and y=x^3 as well as the line y=0. The region trapped inside is shaded, and the intersection points (-6,0) and (2,8) are labelled.      The range of -values in this region span from to . Divide this interval evenly into 4 equally sized-subintervals. What is the height of each subinterval? We'll call this .        Pick a -value from each sub-interval. You can call these , , , and .    Find the corresponding -values on the function for each of the -values you selected. These will be , , , and .   You're really just putting your -values into the equation and solving for . Or you can solve for in general, by solving for while leaving as a variable.    Do the same thing for the function. Now you have 8 points that you can plot: , , , and as well as , , , and . Plot them.    Use these points to draw 4 rectangles with points on and determining the left and right ends of the rectangle. What are the dimensions of these rectangles (height and width)?    Find the area of each rectangle by multiplying the height and widths for each rectangle.    Add up the areas to construct a Riemann sum.    Again, we'll generalize this and think about the th rectangle, pictured below.     The same region, but this time with a horizontal rectangle spanning across it, with the height labeled delta y. The curves are re-labeled x=y-6 and x = cuberoot(y).    Which variable defines the location of the th rectangle, here? That is, if you were to describe where in this graph the th rectangle is laying, would you describe it with an or variable? This will act as our general input variable for the integral we're ending with.    What are the dimensions of the th rectangle?    Find , the area of this th rectangle.    Add up the areas of for to approximate the total area,    You might want to use summation notation, starting with     Apply a limit as to this Riemann sum in order to construct the integral formula for the area between the curves and from to .    Now that you have an integral, evaluate it! Find the area of this region to compare with the work we did previously, where we used multiple integrals to measure the size of this same region.   "
},
{
  "id": "def-AreaBetweenCurves-y",
  "level": "2",
  "url": "sec-AreaBetweenCurves.html#def-AreaBetweenCurves-y",
  "type": "Definition",
  "number": "7.2.8",
  "title": "Area Between Curves (in terms of <span class=\"process-math\">\\(y\\)<\/span>).",
  "body": " Area Between Curves (in terms of )   If and are continuous functions with on the interval of -values , then the area bounded between the curves  and from to is .   "
},
{
  "id": "sec-VolumesOfRevolution",
  "level": "1",
  "url": "sec-VolumesOfRevolution.html",
  "type": "Section",
  "number": "7.3",
  "title": "Volumes of Solids of Revolution",
  "body": " Volumes of Solids of Revolution       From Area To Volume  Text.   Volume by Disks\/Washers   If and are continuous functions with on the interval , then the volume of the solid formed by revolving the region bounded between the curves and from to around the -axis is: . This is called the Washer Method . Note that if , then the resulting volume is: . This is called the Disk Method .     Volumes by Disks\/Washers   Consider the region bounded between the curves and . Will will create a 3-dimensional solid by revolving this region around the -axis.    Visualize the solid you'll create when you revolve this region around the -axis.    Draw a single rectangle in your region, standing perpendicular to the -axis.    Let's use this rectangle to visualize the th slice of this 3-dimensional solid. What does the \"face\" of it look like?    Find the area of the face of the th slice.   Note that this is a 2-dimensional shape, and we're just finding the area of it.    Set up, and evaluate, the integral representing the volume of the solid.     Another Volume   Now lets consider another region: this time, the one bounded between the curves and . We will, again, create a 3-dimensional solid by revolving this region around the -axis.    Visualize the solid you'll create when you revolve this region around the -axis.    Draw a single rectangle in your region standing perpendicular to the -axis.    Let's use this rectangle to visualize the th slice of this 3-dimensional solid. What does the \"face\" of it look like?    Find the area of the face of the th slice.    Set up and evaluate the integral representing the volume of this solid.      Re-Orienting our Rectangles   Volume by Shells   If and are continuous functions with on the interval (with ), then the volume of the solid formed when the region bounded between the curves and from to is revolved around the -axis is .     Volume by Shells   Let's consider the region bounded by the curves and as well as the line . You might remember this region from . This time, we'll create a 3-dimensional solid by revolving the region around the -axis     A graph of the two curves y=x+6 and y=x^3 as well as the line y=0. The region trapped inside is shaded, and the intersection points (-6,0) and (2,8) are labelled.      Sketch one or two rectangles that are perpendicular to the -axis. Then set up an integral expression to find the volume of the solid using them.   Note that in this context, we're actually using disks and washers. Also note that the bottom of the rectangles are bounded by from to and then switches to being bounded by from to .    Now draw a single rectangle in the region that is parallel to the axis of revolution. Use this rectangle to visualize the th slice of this 3-dimensional solid. What does that single rectangle create when it is revolved around the -axis?   This won't create a disk or washer!    Set up and evaluate the integral expression representing the volume of the solid.     "
},
{
  "id": "def-VolumesDisksWashers",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#def-VolumesDisksWashers",
  "type": "Definition",
  "number": "7.3.1",
  "title": "Volume by Disks\/Washers.",
  "body": " Volume by Disks\/Washers   If and are continuous functions with on the interval , then the volume of the solid formed by revolving the region bounded between the curves and from to around the -axis is: . This is called the Washer Method . Note that if , then the resulting volume is: . This is called the Disk Method .   "
},
{
  "id": "act-VolumesDisksWashers",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#act-VolumesDisksWashers",
  "type": "Activity",
  "number": "7.3.1",
  "title": "Volumes by Disks\/Washers.",
  "body": " Volumes by Disks\/Washers   Consider the region bounded between the curves and . Will will create a 3-dimensional solid by revolving this region around the -axis.    Visualize the solid you'll create when you revolve this region around the -axis.    Draw a single rectangle in your region, standing perpendicular to the -axis.    Let's use this rectangle to visualize the th slice of this 3-dimensional solid. What does the \"face\" of it look like?    Find the area of the face of the th slice.   Note that this is a 2-dimensional shape, and we're just finding the area of it.    Set up, and evaluate, the integral representing the volume of the solid.   "
},
{
  "id": "act-VolumesDisksWashers-y",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#act-VolumesDisksWashers-y",
  "type": "Activity",
  "number": "7.3.2",
  "title": "Another Volume.",
  "body": " Another Volume   Now lets consider another region: this time, the one bounded between the curves and . We will, again, create a 3-dimensional solid by revolving this region around the -axis.    Visualize the solid you'll create when you revolve this region around the -axis.    Draw a single rectangle in your region standing perpendicular to the -axis.    Let's use this rectangle to visualize the th slice of this 3-dimensional solid. What does the \"face\" of it look like?    Find the area of the face of the th slice.    Set up and evaluate the integral representing the volume of this solid.   "
},
{
  "id": "def-VolumesShells",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#def-VolumesShells",
  "type": "Definition",
  "number": "7.3.2",
  "title": "Volume by Shells.",
  "body": " Volume by Shells   If and are continuous functions with on the interval (with ), then the volume of the solid formed when the region bounded between the curves and from to is revolved around the -axis is .   "
},
{
  "id": "act-VolumesShells",
  "level": "2",
  "url": "sec-VolumesOfRevolution.html#act-VolumesShells",
  "type": "Activity",
  "number": "7.3.3",
  "title": "Volume by Shells.",
  "body": " Volume by Shells   Let's consider the region bounded by the curves and as well as the line . You might remember this region from . This time, we'll create a 3-dimensional solid by revolving the region around the -axis     A graph of the two curves y=x+6 and y=x^3 as well as the line y=0. The region trapped inside is shaded, and the intersection points (-6,0) and (2,8) are labelled.      Sketch one or two rectangles that are perpendicular to the -axis. Then set up an integral expression to find the volume of the solid using them.   Note that in this context, we're actually using disks and washers. Also note that the bottom of the rectangles are bounded by from to and then switches to being bounded by from to .    Now draw a single rectangle in the region that is parallel to the axis of revolution. Use this rectangle to visualize the th slice of this 3-dimensional solid. What does that single rectangle create when it is revolved around the -axis?   This won't create a disk or washer!    Set up and evaluate the integral expression representing the volume of the solid.   "
},
{
  "id": "sec-MoreVolumes",
  "level": "1",
  "url": "sec-MoreVolumes.html",
  "type": "Section",
  "number": "7.4",
  "title": "More Volumes: Shifting the Axis of Revolution",
  "body": " More Volumes: Shifting the Axis of Revolution   We have introduced some methods for creating and calculating the volume of different 3 dimensional solids of revolution.    What Changes?  Let's first consider a volume created using disks or washers.   What Changes (in the Washer Method) with a New Axis?   Let's revisit , and ask some more follow-up questions. First, we'll tinker with the solid we created: instead of revolving around the -axis, let's revolve the same solid around the horizontal line .    What changes, if anything, do you have to make to the rectangle you drew in ?    What changes, if anything, do you have to make to the area of the \"face\" th washer?    What changes, if anything, do you have to make to the eventual volume integral for this solid?    Now let's consider a volume created using shells.   What Changes (in the Shell Method) with a New Axis?   Let's revisit , and ask some more follow-up questions about the shell method. Again, we'll tinker with the solid we created: instead of revolving around the -axis, let's revolve the same solid around the horizontal line .    What changes, if anything, do you have to make to the rectangle you drew in ?    What changes, if anything, do you have to make to the area of the rectangle formed by \"unrolling\" up th cylinder?    What changes, if anything, do you have to make to the eventual volume integral for this solid?    In both of these cases, we can notice that the only changes we make are to the radii : we just need to re-measure the distance from axis of revolution to either the ends of the rectangle (in the washer method) or the side of the rectangle (in the shell method).    Formalizing These Changes in the Washers and Shells   More Shifted Axes   We're going to spend some time constructing several different volume integrals in this activity. We'll consider the same region each time, but make changes to the axis of revolution. For each, we'll want to think about what kind of method we're using (disks\/washers or shells) and how the different axis of revolution gets implemented into our volume integral formulas.  Let's consider the region bounded by the curves and between and .    Let's start with revolving this around the -axis and thinking about the solid formed. While you set up your volume integral, think carefully about which method you'll be using (disks\/washers or shells) as well as which variable you are integrating with regard to ( or ).   Note that in this region, we definitely want to use rectangles that stand up vertically. That means that they'll have a very small width, , and sit perpendicular to the axis of revolution.    Now let's create a different solid by revolving this region around the -axis. Set up a volume integral, and continue to think carefully about which method you'll be using (disks\/washers or shells) as well as which variable you are integrating with regard to ( or ).   We still will use the same tall rectangle with a small side length, but this time it will be parallel to our axis of revolution.    We'll start shifting our axis of revolution now. We'll revolve the same region around the horizontal line to create a solid. Set up an integral expression to calculate the volume.   Note that we're still using the same rectangle (perpendicular to this horizontal axis), and so still integrating with regard to , and using the washer method.   Since in the washer method our function outputs represent the radii, we need to re-measure the distance from our curves to the axis of revolution to find each circle's radius in the washer formula. For a -value on each curve, how do we find the vertical distance down to the line ?    Now revolve the region around the line to create a solid of revolution, and write down the integral representing the volume.   Note, now, that the -value of the axis of revolution is larger than all of the -values on the curves, meaning that to measure the distance from the axis of revolution to the curves, we might measure them in the opposite direction. Also, which curve is further away from the axis of revolution, representing the larger\/outer radius?    Let's change things up. Revolve the region around the vertical line to create a new solid. Set up an integral representing the volume of that solid.   Note that the same rectangle that we used before is standing parallel to our axis of revolution. We're going to change methodology, and use the shell method!   Normally we use the input variable ( in this case) to measure the radius from the rectangles at different -value to the axis of revolution, the -axis. Now, though, we're not looking at the distance from -values to . We're looking to find the radius, the distance from -values in this region to .    We'll do one more solid. Let's revolve this region around the line . Set up an integral representing the volume.   Note that this time, the axis of revolution's -value is larger than all of the -values in our region. So when we subtract to measure the radius, we need to subtract from down to the varying -values in the region.     "
},
{
  "id": "act-VolumesWhatChanges-Washers",
  "level": "2",
  "url": "sec-MoreVolumes.html#act-VolumesWhatChanges-Washers",
  "type": "Activity",
  "number": "7.4.1",
  "title": "What Changes (in the Washer Method) with a New Axis?",
  "body": " What Changes (in the Washer Method) with a New Axis?   Let's revisit , and ask some more follow-up questions. First, we'll tinker with the solid we created: instead of revolving around the -axis, let's revolve the same solid around the horizontal line .    What changes, if anything, do you have to make to the rectangle you drew in ?    What changes, if anything, do you have to make to the area of the \"face\" th washer?    What changes, if anything, do you have to make to the eventual volume integral for this solid?   "
},
{
  "id": "act-VolumesWhatChanges-Shells",
  "level": "2",
  "url": "sec-MoreVolumes.html#act-VolumesWhatChanges-Shells",
  "type": "Activity",
  "number": "7.4.2",
  "title": "What Changes (in the Shell Method) with a New Axis?",
  "body": " What Changes (in the Shell Method) with a New Axis?   Let's revisit , and ask some more follow-up questions about the shell method. Again, we'll tinker with the solid we created: instead of revolving around the -axis, let's revolve the same solid around the horizontal line .    What changes, if anything, do you have to make to the rectangle you drew in ?    What changes, if anything, do you have to make to the area of the rectangle formed by \"unrolling\" up th cylinder?    What changes, if anything, do you have to make to the eventual volume integral for this solid?   "
},
{
  "id": "act-ShiftedAxes",
  "level": "2",
  "url": "sec-MoreVolumes.html#act-ShiftedAxes",
  "type": "Activity",
  "number": "7.4.3",
  "title": "More Shifted Axes.",
  "body": " More Shifted Axes   We're going to spend some time constructing several different volume integrals in this activity. We'll consider the same region each time, but make changes to the axis of revolution. For each, we'll want to think about what kind of method we're using (disks\/washers or shells) and how the different axis of revolution gets implemented into our volume integral formulas.  Let's consider the region bounded by the curves and between and .    Let's start with revolving this around the -axis and thinking about the solid formed. While you set up your volume integral, think carefully about which method you'll be using (disks\/washers or shells) as well as which variable you are integrating with regard to ( or ).   Note that in this region, we definitely want to use rectangles that stand up vertically. That means that they'll have a very small width, , and sit perpendicular to the axis of revolution.    Now let's create a different solid by revolving this region around the -axis. Set up a volume integral, and continue to think carefully about which method you'll be using (disks\/washers or shells) as well as which variable you are integrating with regard to ( or ).   We still will use the same tall rectangle with a small side length, but this time it will be parallel to our axis of revolution.    We'll start shifting our axis of revolution now. We'll revolve the same region around the horizontal line to create a solid. Set up an integral expression to calculate the volume.   Note that we're still using the same rectangle (perpendicular to this horizontal axis), and so still integrating with regard to , and using the washer method.   Since in the washer method our function outputs represent the radii, we need to re-measure the distance from our curves to the axis of revolution to find each circle's radius in the washer formula. For a -value on each curve, how do we find the vertical distance down to the line ?    Now revolve the region around the line to create a solid of revolution, and write down the integral representing the volume.   Note, now, that the -value of the axis of revolution is larger than all of the -values on the curves, meaning that to measure the distance from the axis of revolution to the curves, we might measure them in the opposite direction. Also, which curve is further away from the axis of revolution, representing the larger\/outer radius?    Let's change things up. Revolve the region around the vertical line to create a new solid. Set up an integral representing the volume of that solid.   Note that the same rectangle that we used before is standing parallel to our axis of revolution. We're going to change methodology, and use the shell method!   Normally we use the input variable ( in this case) to measure the radius from the rectangles at different -value to the axis of revolution, the -axis. Now, though, we're not looking at the distance from -values to . We're looking to find the radius, the distance from -values in this region to .    We'll do one more solid. Let's revolve this region around the line . Set up an integral representing the volume.   Note that this time, the axis of revolution's -value is larger than all of the -values in our region. So when we subtract to measure the radius, we need to subtract from down to the varying -values in the region.   "
},
{
  "id": "sec-ArcLength",
  "level": "1",
  "url": "sec-ArcLength.html",
  "type": "Section",
  "number": "7.5",
  "title": "Arc Length",
  "body": " Arc Length  Text of section.  "
},
{
  "id": "sec-SurfaceArea",
  "level": "1",
  "url": "sec-SurfaceArea.html",
  "type": "Section",
  "number": "7.6",
  "title": "Surface Area",
  "body": " Surface Area  Text of section.  "
},
{
  "id": "sec-OtherApplications",
  "level": "1",
  "url": "sec-OtherApplications.html",
  "type": "Section",
  "number": "7.7",
  "title": "Other Applications of Integrals",
  "body": " Other Applications of Integrals  Text of section.  "
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
