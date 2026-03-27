#!/bin/bash
##############################################################################
# Este script sobre automaticamente as alterações do site                  ###
# novo membro da equipe por exemplo.                                       ###
# O script não está pronto. Pois é preciso ter uma adição de informação    ###
# na mensagem (msg).                                                       ###
##############################################################################

echo "🚀 Iniciando deploy..."

# Adiciona arquivos
git add .

nome=$1
# Verifica se o argumento foi passado
if [ -z "$nome" ]; then
    echo "Erro: Nenhum nome foi fornecido."
    echo "Uso: $0 <nome>"
    exit 1
fi

# Mensagem automática com data
msg="update: $nome $(date '+%Y-%m-%d %H:%M:%S')"

# Commit
git commit -m "$msg"

# Push
git push

echo "✅ Deploy concluído!"
