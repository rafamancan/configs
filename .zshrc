export ZSH="/home/rmancan/.oh-my-zsh"

ZSH_THEME="powerlevel9k/powerlevel9k"
plugins=(git)

source $ZSH/oh-my-zsh.sh
source '/home/rmancan/.zplugin/bin/zplugin.zsh'

autoload -Uz _zplugin

(( ${+_comps} )) && _comps[zplugin]=_zplugin

zplugin light zdharma/fast-syntax-highlighting
zplugin light zsh-users/zsh-autosuggestions
zplugin light zsh-users/zsh-history-substring-search
zplugin light zsh-users/zsh-completions
zplugin light buonomo/yarn-completion

zstyle :bracketed-paste-magic paste-init pasteinit
zstyle :bracketed-paste-magic paste-finish pastefinish

SPACESHIP_PROMPT_ORDER=(
  user          # Username section
  dir           # Current directory section
  host          # Hostname section
  git           # Git section (git_branch + git_status)
  hg            # Mercurial section (hg_branch  + hg_status)
  exec_time     # Execution time
  line_sep      # Line break
  vi_mode       # Vi-mode indicator
  jobs          # Background jobs indicator
  exit_code     # Exit code section
  char          # Prompt character
)
. $HOME/.asdf/asdf.sh
. $HOME/.asdf/completions/asdf.bash
fpath=($fpath "/home/rmancan/.zfunctions")
