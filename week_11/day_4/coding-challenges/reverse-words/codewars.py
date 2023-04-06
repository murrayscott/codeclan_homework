def spin_words(sentence):
  # Split up sentence into an list of seperate words at the occurrence of each space
  split_sentence = sentence.split(' ')
  # set up the returned output_sentence to be empty initially
  output_sentence = ''
  # loop round each word in the list
  for i in split_sentence:
    # check if its length is greater than or equal to 5
    if len(i) >= 5:
        # add the word reversed to the output_sentence by slicing it in reverse
        output_sentence += (i[::-1])
    else:
        # add the word to output_sentence without reversing
        output_sentence += i
        # check to see if the for loop has reached the last word
    if split_sentence.index(i) + 1 < len(split_sentence):
        # more words to go add a space to the output_sentence 
        output_sentence += ' '
  # return back the output_sentence from the function
  return (output_sentence)

assert spin_words('Hello my name is Timothy') == 'olleH my name is yhtomiT'