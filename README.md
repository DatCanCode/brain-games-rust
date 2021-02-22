# "Brain" games in rust

A simple tic tac toe bot.
The program will spit out the results incrementally over 3,000,000 games.
What you should observe is that the bots will begin to tie the further along they get until neither bot can gain an advantage.

After a round of training is complete the bots will dump their "brains" into local files and use them for continued rounds. You can also explore these files to see which moves a bot is most likely to take for a given board state.

Once the bots have been trained you can play against them. Enter moves by entering first the column and then the row separated by a space. For example the top left corner would be "0 0" and the center right would be "2 1".

```BASH
wasm-pack build --target web -d www/pkg
```

```BASH
# run training program
cargo run --release train
```

```BASH
cargo run --release play_x # play against X
cargo run --release play_o # play against O
```

## Explanation:

[![Alt text](https://img.youtube.com/vi/R9c-_neaxeU/0.jpg)](https://www.youtube.com/watch?v=R9c-_neaxeU)
