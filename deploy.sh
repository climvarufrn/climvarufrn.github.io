#!/bin/bash
##############################################################################
# Este script sobe automaticamente as alterações do site                   ###
# novo membro da equipe por exemplo.                                       ###
# O script não está pronto. Pois é preciso ter uma adição de informação    ###
# na mensagem (msg).                                                       ###
##############################################################################
set -e
echo "🚀 Iniciando deploy..."

if [[ -z $(git status --porcelain) ]]; then
    echo "ℹ️ Nenhuma alteração encontrada."
    echo "✅ Site já está atualizado."
    exit 0
fi

git add .

msg="${1:-update: $(date '+%Y-%m-%d %H:%M:%S')}"

git commit -m "$msg"

git push

echo "✅ Deploy concluído!"
