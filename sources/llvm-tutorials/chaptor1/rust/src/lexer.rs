enum Token {
    Def,
    Extern,
    Identifier(String),
    Number(f64),
    Char(char),
    Unknown(char),
    Eof,
}



