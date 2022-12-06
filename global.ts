let board = emptyBoard();
let board_color = emptyBoard();
let connected_set = noSquaresYet();
let connected_adjacent_set = noSquaresYet();
let legal_set = noSquaresYet();
let thetan_path_set = noSquaresYet();
let knight_set = noSquaresYet();
let player_set : Set<Square>[] = [noSquaresYet(),noSquaresYet()];
let target_square : Square = "0,0";
let square_last_clicked_on : Square = "0,0";
let dest_square : Square = "0,0";
let piece_is_selected : boolean = false;
let current_player  = 0;
let other_player = 1;

