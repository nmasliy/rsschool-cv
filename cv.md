# CV

*Пример кода на C#:*
```
 public static string SpinWords(string sentence)
  {
    
    string[] words = sentence.Split(' ');
    
    for (int i = 0; i < words.Length; i++) {

      if (words[i].Length >= 5) {

        char[] letters = words[i].ToCharArray();
        Array.Reverse(letters);
        words[i] = string.Join("", letters);

      }

    }
     
    return string.Join(" ", words);
    
  }
```