import csv
import pyperclip

with open('udcIannelloReinserireEdited.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    line_count = 0
    queries = ''
    for row in csv_reader:
      queries += f'\nINSERT INTO `Pallet`\n(`id`, `barcode`, `classe_id`, `dimensione_pallet_id`, `pallettizzazione_id`, `lotto_id`, `created`, `modified`, `stato`, `peso`)\n VALUES (null,{row[2]},1,null,null,{row[3]},null,null,3,{row[4]});\nSET @palletId = (SELECT LAST_INSERT_ID());\nINSERT INTO `AllocazionePallet`(`id`, `articolo_id`, `collo_id`, `quantita`, `pallet_id`, `created`, `modified`)\n VALUES (null,{row[5]},null,{row[7]},(SELECT @palletId),null,null );\nINSERT INTO `ConfigPallet`(`id`, `codice_collo`, `codice_articolo`, `quantita`, `created`, `modified`, `pallettizzazione_id`, `pallet_id`, `collo_id`, `articolo_id`)\n VALUES (null,null,null,{row[7]},null,null,null,(SELECT @palletId),null,{row[5]});\n INSERT INTO `LocationTrace`(`id`, `pallet_id`, `location_id`, `created`, `modified`, `expired`, `waiting`, `task_id`) VALUES (null,(SELECT @palletId),6,null,null,null,null,null);\n\n'
      
      line_count += 1
      if line_count%10 == 0:
        queries = ''
    
    pyperclip.copy(queries)
    print(f'Processed {line_count} lines.')